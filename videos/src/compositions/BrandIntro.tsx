import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
  Sequence,
} from "remotion";
import { loadFont as loadManrope } from "@remotion/google-fonts/Manrope";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: manrope } = loadManrope();
const { fontFamily: inter } = loadInter();

// ── ModulorIA Brand Colors ──
const COLORS = {
  bgDark: "#050810",
  bgGradientEnd: "#0B1121",
  primaryDark: "#1B3C53",
  primaryMedium: "#234C6A",
  primarySteel: "#456882",
  accentCopper: "#C67A52",
  accentGlow: "#FFB088",
  beige: "#D2C1B6",
  white: "#F9F9F9",
  mutedText: "rgba(255, 255, 255, 0.5)",
};

// ── Scene 1: Logo Reveal (0 - 3.5s = frames 0-105) ──
const SceneLogo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Copper line draws from center outward
  const lineWidth = interpolate(frame, [0, Math.round(0.8 * fps)], [0, 300], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Small copper dot appears first
  const dotScale = spring({
    frame,
    fps,
    delay: Math.round(0.1 * fps),
    config: { damping: 12, stiffness: 200 },
  });

  // "ModulorIA" springs in
  const logoSpring = spring({
    frame,
    fps,
    delay: Math.round(0.4 * fps),
    config: { damping: 200 },
  });
  const logoY = interpolate(logoSpring, [0, 1], [40, 0]);
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);

  // Tagline line 1
  const tagline1Spring = spring({
    frame,
    fps,
    delay: Math.round(1.2 * fps),
    config: { damping: 200 },
  });
  const tagline1Y = interpolate(tagline1Spring, [0, 1], [20, 0]);

  // Tagline line 2 (copper)
  const tagline2Spring = spring({
    frame,
    fps,
    delay: Math.round(1.6 * fps),
    config: { damping: 200 },
  });
  const tagline2Y = interpolate(tagline2Spring, [0, 1], [20, 0]);

  // Subtle glow pulse
  const glowPulse = interpolate(
    frame,
    [0, Math.round(2 * fps), Math.round(3.5 * fps)],
    [0, 0.2, 0.15],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgDark,
      }}
    >
      {/* Subtle radial glow behind logo */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accentCopper}${Math.round(glowPulse * 255).toString(16).padStart(2, "0")}, transparent 70%)`,
        }}
      />

      {/* Grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Copper dot */}
      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          backgroundColor: COLORS.accentCopper,
          transform: `scale(${dotScale})`,
          top: "calc(50% - 80px)",
        }}
      />

      {/* Copper line */}
      <div
        style={{
          position: "absolute",
          height: 2,
          width: lineWidth,
          background: `linear-gradient(90deg, transparent, ${COLORS.accentCopper}, transparent)`,
          top: "calc(50% - 60px)",
        }}
      />

      {/* Logo text */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          transform: `translateY(${logoY}px)`,
          opacity: logoOpacity,
        }}
      >
        <span
          style={{
            fontFamily: manrope,
            fontWeight: 800,
            fontSize: 110,
            color: COLORS.white,
            letterSpacing: "-2px",
          }}
        >
          Modulor
          <span style={{ color: COLORS.accentCopper }}>IA</span>
        </span>
      </div>

      {/* Tagline */}
      <div
        style={{
          position: "absolute",
          top: "calc(50% + 60px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontWeight: 400,
            fontSize: 32,
            color: COLORS.beige,
            opacity: tagline1Spring,
            transform: `translateY(${tagline1Y}px)`,
          }}
        >
          Construye mas rapido.
        </span>
        <span
          style={{
            fontFamily: inter,
            fontWeight: 600,
            fontSize: 32,
            color: COLORS.accentCopper,
            opacity: tagline2Spring,
            transform: `translateY(${tagline2Y}px)`,
          }}
        >
          Automatiza mas inteligente.
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 2: What We Do (3.5s - 7s = frames 105-210) ──
const SceneWhatWeDo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    delay: Math.round(0.3 * fps),
    config: { damping: 200 },
  });

  const items = [
    { icon: "\u2699", text: "Automatizacion IA", sub: "para construccion modular" },
    { icon: "\u23F1", text: "15h/semana ahorradas", sub: "en tareas repetitivas" },
    { icon: "\u2197", text: "ROI en 2-3 semanas", sub: "sin programar" },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgDark,
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Accent glow on left */}
      <div
        style={{
          position: "absolute",
          left: -100,
          top: "30%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.primaryMedium}40, transparent 70%)`,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 160,
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
        }}
      >
        <span
          style={{
            fontFamily: manrope,
            fontWeight: 700,
            fontSize: 52,
            color: COLORS.white,
          }}
        >
          Que hacemos
        </span>
        <div
          style={{
            width: interpolate(titleSpring, [0, 1], [0, 120]),
            height: 3,
            backgroundColor: COLORS.accentCopper,
            marginTop: 12,
          }}
        />
      </div>

      {/* Three value props */}
      <div
        style={{
          display: "flex",
          gap: 50,
          position: "absolute",
          top: 360,
        }}
      >
        {items.map((item, i) => {
          const itemSpring = spring({
            frame,
            fps,
            delay: Math.round((0.6 + i * 0.35) * fps),
            config: { damping: 15, stiffness: 180 },
          });
          const itemY = interpolate(itemSpring, [0, 1], [50, 0]);

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 380,
                opacity: itemSpring,
                transform: `translateY(${itemY}px)`,
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  backgroundColor: `${COLORS.primaryDark}`,
                  border: `2px solid ${COLORS.accentCopper}40`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 36,
                  marginBottom: 20,
                }}
              >
                {item.icon}
              </div>
              <span
                style={{
                  fontFamily: manrope,
                  fontWeight: 700,
                  fontSize: 28,
                  color: COLORS.white,
                  textAlign: "center",
                }}
              >
                {item.text}
              </span>
              <span
                style={{
                  fontFamily: inter,
                  fontWeight: 400,
                  fontSize: 20,
                  color: COLORS.mutedText,
                  textAlign: "center",
                  marginTop: 8,
                }}
              >
                {item.sub}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 3: Stats (7s - 10s = frames 210-300) ──
const SceneStats: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const stats = [
    { number: "800%", label: "ROI promedio" },
    { number: "40%", label: "menos errores" },
    { number: "95%", label: "precision IA" },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgDark,
      }}
    >
      {/* Background copper accent */}
      <div
        style={{
          position: "absolute",
          right: -100,
          bottom: -100,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accentCopper}15, transparent 70%)`,
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Section label */}
      <div
        style={{
          position: "absolute",
          top: 180,
          opacity: spring({ frame, fps, delay: Math.round(0.2 * fps), config: { damping: 200 } }),
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontWeight: 500,
            fontSize: 18,
            color: COLORS.accentCopper,
            textTransform: "uppercase",
            letterSpacing: 6,
          }}
        >
          Resultados reales
        </span>
      </div>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 100 }}>
        {stats.map((stat, i) => {
          const statSpring = spring({
            frame,
            fps,
            delay: Math.round((0.4 + i * 0.3) * fps),
            config: { damping: 12, stiffness: 180 },
          });
          const scale = interpolate(statSpring, [0, 1], [0.5, 1]);

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: statSpring,
                transform: `scale(${scale})`,
              }}
            >
              <span
                style={{
                  fontFamily: manrope,
                  fontWeight: 800,
                  fontSize: 96,
                  color: COLORS.accentCopper,
                  lineHeight: 1,
                }}
              >
                {stat.number}
              </span>
              <span
                style={{
                  fontFamily: inter,
                  fontWeight: 400,
                  fontSize: 22,
                  color: COLORS.beige,
                  marginTop: 12,
                }}
              >
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 4: CTA / Close (10s - 13s = frames 300-390) ──
const SceneCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const localDuration = 90; // 3 seconds
  const fadeOutStart = localDuration - Math.round(0.8 * fps);

  const logoSpring = spring({
    frame,
    fps,
    delay: Math.round(0.2 * fps),
    config: { damping: 200 },
  });

  const urlSpring = spring({
    frame,
    fps,
    delay: Math.round(0.6 * fps),
    config: { damping: 200 },
  });

  const tagSpring = spring({
    frame,
    fps,
    delay: Math.round(1.0 * fps),
    config: { damping: 200 },
  });

  // Final fade out
  const fadeOut = interpolate(
    frame,
    [fadeOutStart, localDuration],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.bgDark,
        opacity: fadeOut,
      }}
    >
      {/* Centered glow */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.accentCopper}12, transparent 60%)`,
        }}
      />

      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Logo */}
      <div
        style={{
          opacity: logoSpring,
          transform: `translateY(${interpolate(logoSpring, [0, 1], [20, 0])}px)`,
          marginBottom: 30,
        }}
      >
        <span
          style={{
            fontFamily: manrope,
            fontWeight: 800,
            fontSize: 80,
            color: COLORS.white,
          }}
        >
          Modulor
          <span style={{ color: COLORS.accentCopper }}>IA</span>
        </span>
      </div>

      {/* URL */}
      <div
        style={{
          opacity: urlSpring,
          transform: `translateY(${interpolate(urlSpring, [0, 1], [20, 0])}px)`,
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 24,
        }}
      >
        <div
          style={{
            width: 40,
            height: 2,
            backgroundColor: COLORS.accentCopper,
          }}
        />
        <span
          style={{
            fontFamily: inter,
            fontWeight: 500,
            fontSize: 30,
            color: COLORS.accentGlow,
            letterSpacing: 2,
          }}
        >
          moduloria.com
        </span>
        <div
          style={{
            width: 40,
            height: 2,
            backgroundColor: COLORS.accentCopper,
          }}
        />
      </div>

      {/* Final tagline */}
      <div
        style={{
          opacity: tagSpring,
          transform: `translateY(${interpolate(tagSpring, [0, 1], [15, 0])}px)`,
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontWeight: 400,
            fontSize: 22,
            color: COLORS.mutedText,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          IA practica para construccion real
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ── Main Composition: BrandIntro ──
export const BrandIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Scene transitions with crossfade
  const scene1End = Math.round(3.5 * fps); // 105
  const scene2Start = Math.round(3.2 * fps); // 96
  const scene2End = Math.round(7 * fps); // 210
  const scene3Start = Math.round(6.7 * fps); // 201
  const scene3End = Math.round(10 * fps); // 300
  const scene4Start = Math.round(9.7 * fps); // 291

  // Opacity for each scene with crossfade overlap
  const scene1Opacity = interpolate(
    frame,
    [scene1End - Math.round(0.3 * fps), scene1End],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const scene2Opacity =
    interpolate(
      frame,
      [scene2Start, scene2Start + Math.round(0.3 * fps)],
      [0, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    ) *
    interpolate(
      frame,
      [scene2End - Math.round(0.3 * fps), scene2End],
      [1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

  const scene3Opacity =
    interpolate(
      frame,
      [scene3Start, scene3Start + Math.round(0.3 * fps)],
      [0, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    ) *
    interpolate(
      frame,
      [scene3End - Math.round(0.3 * fps), scene3End],
      [1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

  const scene4Opacity = interpolate(
    frame,
    [scene4Start, scene4Start + Math.round(0.3 * fps)],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.bgDark }}>
      {/* Scene 1: Logo reveal */}
      {frame < scene1End + 5 && (
        <AbsoluteFill style={{ opacity: scene1Opacity }}>
          <SceneLogo />
        </AbsoluteFill>
      )}

      {/* Scene 2: What we do */}
      {frame >= scene2Start && frame < scene2End + 5 && (
        <AbsoluteFill style={{ opacity: scene2Opacity }}>
          <Sequence from={scene2Start} layout="none">
            <SceneWhatWeDo />
          </Sequence>
        </AbsoluteFill>
      )}

      {/* Scene 3: Stats */}
      {frame >= scene3Start && frame < scene3End + 5 && (
        <AbsoluteFill style={{ opacity: scene3Opacity }}>
          <Sequence from={scene3Start} layout="none">
            <SceneStats />
          </Sequence>
        </AbsoluteFill>
      )}

      {/* Scene 4: CTA */}
      {frame >= scene4Start && (
        <AbsoluteFill style={{ opacity: scene4Opacity }}>
          <Sequence from={scene4Start} layout="none">
            <SceneCTA />
          </Sequence>
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
