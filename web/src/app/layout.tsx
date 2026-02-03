// Root layout - minimal, the actual layout is in [locale]/layout.tsx
// This file is required by Next.js but most content is handled by the locale layout

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
