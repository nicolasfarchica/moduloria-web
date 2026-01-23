import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';
import readingTime from 'reading-time';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  image?: string;
  tags: string[];
  content: string;
  readingTime: string;
  faqs: BlogFAQ[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  image?: string;
  tags: string[];
  readingTime: string;
}

/**
 * Get all blog post slugs
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx?$/, ''));
}

/**
 * Extract FAQ questions and answers from markdown content
 */
function extractFAQs(markdownContent: string): BlogFAQ[] {
  const faqs: BlogFAQ[] = [];
  const lines = markdownContent.split('\n');

  let inFAQSection = false;
  let currentQuestion = '';
  let currentAnswer: string[] = [];

  for (const line of lines) {
    // Detect FAQ section start
    if (line.match(/^##\s+Preguntas Frecuentes/i)) {
      inFAQSection = true;
      continue;
    }

    // Detect end of FAQ section (next H2)
    if (inFAQSection && line.match(/^##\s+/) && !line.match(/^###/)) {
      // Save last FAQ if exists
      if (currentQuestion && currentAnswer.length > 0) {
        faqs.push({
          question: currentQuestion,
          answer: currentAnswer.join(' ').trim(),
        });
      }
      break;
    }

    if (inFAQSection) {
      // New H3 question
      if (line.match(/^###\s+/)) {
        // Save previous FAQ
        if (currentQuestion && currentAnswer.length > 0) {
          faqs.push({
            question: currentQuestion,
            answer: currentAnswer.join(' ').trim(),
          });
        }
        currentQuestion = line.replace(/^###\s+/, '').replace(/[¿?]/g, '').trim();
        // Re-add the ? for proper formatting
        currentQuestion = '¿' + currentQuestion + '?';
        currentAnswer = [];
      } else if (currentQuestion && line.trim()) {
        // Collect answer lines (skip empty lines, markdown formatting)
        const cleanLine = line
          .replace(/^\s*[-*]\s+/, '') // Remove list markers
          .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove bold
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
          .replace(/^\|.*\|$/g, '') // Remove table rows
          .trim();
        if (cleanLine && !cleanLine.match(/^[-|]+$/)) {
          currentAnswer.push(cleanLine);
        }
      }
    }
  }

  // Save last FAQ if we reached end of file
  if (inFAQSection && currentQuestion && currentAnswer.length > 0) {
    faqs.push({
      question: currentQuestion,
      answer: currentAnswer.join(' ').trim(),
    });
  }

  return faqs;
}

/**
 * Get a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);

    let fileContents: string;
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else if (fs.existsSync(mdxPath)) {
      fileContents = fs.readFileSync(mdxPath, 'utf8');
    } else {
      return null;
    }

    const { data, content } = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(content);
    const contentHtml = processedContent.toString();

    // Calculate reading time
    const stats = readingTime(content);

    // Extract FAQs from raw markdown
    const faqs = extractFAQs(content);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      author: data.author || 'ModulorIA',
      category: data.category || 'General',
      image: data.image,
      tags: data.tags || [],
      content: contentHtml,
      readingTime: stats.text,
      faqs,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts metadata (for listing pages)
 */
export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const slugs = getAllPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      if (!post) return null;

      // Return only metadata (without content and faqs)
      const { content, faqs, ...meta } = post;
      return meta;
    })
  );

  // Filter out null posts and sort by date
  return posts
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

/**
 * Get posts by category
 */
export async function getPostsByCategory(category: string): Promise<BlogPostMeta[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tag: string): Promise<BlogPostMeta[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const categories = allPosts.map((post) => post.category);
  return Array.from(new Set(categories));
}

/**
 * Get all unique tags
 */
export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const tags = allPosts.flatMap((post) => post.tags);
  return Array.from(new Set(tags));
}
