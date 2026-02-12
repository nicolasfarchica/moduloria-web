import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
  Sequence,
  Audio,
  staticFile,
} from "remotion";
import { loadFont as loadManrope } from "@remotion/google-fonts/Manrope";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";

const { fontFamily: manrope } = loadManrope();
const { fontFamily: inter } = loadInter();

// ── Brand Colors ──
const C = {
  bg: "#050810",
  bg2: "#0B1121",
  copper: "#C67A52",
  copperGlow: "#FFB088",
  beige: "#D2C1B6",
  white: "#F9F9F9",
  muted: "rgba(255, 255, 255, 0.45)",
  steel: "#456882",
  darkBlue: "#1B3C53",
  red: "#E05252",
  green: "#52C67A",
};

// ── Shared: Grid Background ──
const GridBg: React.FC = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)`,
      backgroundSize: "32px 32px",
    }}
  />
);

// ── Shared: Copper Line ──
const CopperLine: React.FC<{ width: number; top?: number; bottom?: number }> = ({
  width,
  top,
  bottom,
}) => (
  <div
    style={{
      position: "absolute",
      height: 3,
      width,
      background: `linear-gradient(90deg, transparent, ${C.copper}, transparent)`,
      top,
      bottom,
      left: "50%",
      transform: "translateX(-50%)",
    }}
  />
);

// ══════════════════════════════════════════
// SCENE 1: HOOK - "70% del software NO SE USA" (0-7s)
// ══════════════════════════════════════════
const SceneHook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Counter animation (slower for 60s version)
  const counterProgress = interpolate(frame, [0, Math.round(2.0 * fps)], [0, 70], {
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // Glow pulse behind number
  const glowScale = interpolate(
    frame,
    [0, Math.round(2.0 * fps), Math.round(3.5 * fps)],
    [0.3, 1.2, 1],
    { extrapolateRight: "clamp" }
  );
  const glowOpacity = interpolate(
    frame,
    [0, Math.round(1.0 * fps), Math.round(3.5 * fps)],
    [0, 0.4, 0.2],
    { extrapolateRight: "clamp" }
  );

  // "del software que compras" slide up
  const line1Spring = spring({
    frame,
    fps,
    delay: Math.round(1.8 * fps),
    config: { damping: 200 },
  });

  // "NO SE USA" slam in
  const slamSpring = spring({
    frame,
    fps,
    delay: Math.round(2.8 * fps),
    config: { damping: 12, stiffness: 300, mass: 0.8 },
  });
  const slamScale = interpolate(slamSpring, [0, 1], [2.5, 1]);
  const slamOpacity = interpolate(slamSpring, [0, 0.3, 1], [0, 1, 1]);

  // "despues del primer mes" fade in
  const subSpring = spring({
    frame,
    fps,
    delay: Math.round(4.0 * fps),
    config: { damping: 200 },
  });

  // Copper accent lines
  const lineWidth = interpolate(frame, [Math.round(3.5 * fps), Math.round(4.5 * fps)], [0, 400], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(ellipse at 50% 40%, ${C.bg2}, ${C.bg})`,
      }}
    >
      <GridBg />

      {/* Glow behind number */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.copper}, transparent 60%)`,
          opacity: glowOpacity,
          transform: `scale(${glowScale})`,
          top: 400,
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          marginTop: -100,
        }}
      >
        {/* 70% counter */}
        <span
          style={{
            fontFamily: manrope,
            fontWeight: 900,
            fontSize: 260,
            color: C.copper,
            lineHeight: 1,
            letterSpacing: "-8px",
          }}
        >
          {Math.round(counterProgress)}%
        </span>

        {/* "del software que compras" */}
        <div
          style={{
            opacity: line1Spring,
            transform: `translateY(${interpolate(line1Spring, [0, 1], [30, 0])}px)`,
            marginTop: -10,
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontWeight: 400,
              fontSize: 42,
              color: C.beige,
            }}
          >
            del software que compras
          </span>
        </div>

        {/* Copper line */}
        <CopperLine width={lineWidth} />

        {/* "NO SE USA" */}
        <div
          style={{
            opacity: slamOpacity,
            transform: `scale(${slamScale})`,
            marginTop: 40,
          }}
        >
          <span
            style={{
              fontFamily: manrope,
              fontWeight: 900,
              fontSize: 110,
              color: C.white,
              letterSpacing: "-2px",
            }}
          >
            NO SE USA
          </span>
        </div>

        {/* "despues del primer mes" */}
        <div
          style={{
            opacity: subSpring,
            transform: `translateY(${interpolate(subSpring, [0, 1], [20, 0])}px)`,
            marginTop: 30,
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontWeight: 400,
              fontSize: 36,
              color: C.muted,
            }}
          >
            despues del primer mes
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════
// SCENE 2: CONTEXT - The pattern (7-14s)
// ══════════════════════════════════════════
const SceneContext: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    delay: Math.round(0.3 * fps),
    config: { damping: 200 },
  });

  const items = [
    { num: "1", text: "Solo usan 2 de 20 funciones", sub: "El resto queda sin tocar" },
    { num: "2", text: "Modulos sin abrir", sub: "Inversion sin retorno visible" },
    { num: "3", text: "Formaciones sin hacer", sub: "Equipo sin capacitacion real" },
  ];

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(ellipse at 50% 60%, ${C.bg2}, ${C.bg})`,
      }}
    >
      <GridBg />

      {/* Left accent glow */}
      <div
        style={{
          position: "absolute",
          left: -200,
          top: "30%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.darkBlue}50, transparent 70%)`,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 280,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontWeight: 500,
            fontSize: 24,
            color: C.copper,
            textTransform: "uppercase",
            letterSpacing: 8,
          }}
        >
          El patron que se repite
        </span>
        <div
          style={{
            width: interpolate(titleSpring, [0, 1], [0, 180]),
            height: 2,
            backgroundColor: C.copper,
            marginTop: 16,
          }}
        />
      </div>

      {/* Three items */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 55,
          position: "absolute",
          top: 500,
          paddingLeft: 80,
          paddingRight: 80,
          width: "100%",
        }}
      >
        {items.map((item, i) => {
          const itemSpring = spring({
            frame,
            fps,
            delay: Math.round((0.8 + i * 0.5) * fps),
            config: { damping: 15, stiffness: 160 },
          });
          const slideX = interpolate(itemSpring, [0, 1], [80, 0]);

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 28,
                opacity: itemSpring,
                transform: `translateX(${slideX}px)`,
              }}
            >
              <div
                style={{
                  minWidth: 60,
                  height: 60,
                  borderRadius: 16,
                  backgroundColor: `${C.copper}20`,
                  border: `2px solid ${C.copper}60`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: manrope,
                    fontWeight: 800,
                    fontSize: 28,
                    color: C.copper,
                  }}
                >
                  {item.num}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontFamily: manrope,
                    fontWeight: 700,
                    fontSize: 36,
                    color: C.white,
                    lineHeight: 1.2,
                  }}
                >
                  {item.text}
                </span>
                <span
                  style={{
                    fontFamily: inter,
                    fontWeight: 400,
                    fontSize: 24,
                    color: C.muted,
                  }}
                >
                  {item.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════
// SCENE 3: INSIGHT - "El problema no es el software" (14-22s)
// ══════════════════════════════════════════
const SceneInsight: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1Spring = spring({
    frame,
    fps,
    delay: Math.round(0.4 * fps),
    config: { damping: 200 },
  });

  const line2Spring = spring({
    frame,
    fps,
    delay: Math.round(1.2 * fps),
    config: { damping: 200 },
  });

  // Strikethrough on "software"
  const strikeWidth = interpolate(
    frame,
    [Math.round(2.0 * fps), Math.round(2.8 * fps)],
    [0, 100],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  // "Es COMO se implementa" slam
  const revealSpring = spring({
    frame,
    fps,
    delay: Math.round(3.2 * fps),
    config: { damping: 12, stiffness: 250 },
  });
  const revealScale = interpolate(revealSpring, [0, 1], [0.8, 1]);

  // Copper divider
  const dividerWidth = interpolate(
    frame,
    [Math.round(2.5 * fps), Math.round(3.2 * fps)],
    [0, 600],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  // Big glow for reveal
  const revealGlow = interpolate(
    frame,
    [Math.round(3.0 * fps), Math.round(3.5 * fps), Math.round(5.0 * fps)],
    [0, 0.35, 0.15],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(ellipse at 50% 50%, ${C.bg2}, ${C.bg})`,
      }}
    >
      <GridBg />

      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.copper}, transparent 60%)`,
          opacity: revealGlow,
          top: "35%",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          paddingLeft: 60,
          paddingRight: 60,
        }}
      >
        {/* "El problema" */}
        <div
          style={{
            opacity: line1Spring,
            transform: `translateY(${interpolate(line1Spring, [0, 1], [30, 0])}px)`,
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontWeight: 400,
              fontSize: 44,
              color: C.beige,
            }}
          >
            El problema
          </span>
        </div>

        {/* "no es el software" */}
        <div
          style={{
            opacity: line2Spring,
            transform: `translateY(${interpolate(line2Spring, [0, 1], [20, 0])}px)`,
            position: "relative",
          }}
        >
          <span
            style={{
              fontFamily: manrope,
              fontWeight: 800,
              fontSize: 64,
              color: C.white,
            }}
          >
            no es el software
          </span>
          <div
            style={{
              position: "absolute",
              top: "55%",
              left: "50%",
              transform: "translateX(-50%)",
              height: 4,
              width: `${strikeWidth}%`,
              backgroundColor: C.copper,
              borderRadius: 2,
            }}
          />
        </div>

        {/* Copper divider */}
        <div
          style={{
            width: dividerWidth,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${C.copper}, transparent)`,
            marginTop: 30,
            marginBottom: 30,
          }}
        />

        {/* "Es COMO se implementa" */}
        <div
          style={{
            opacity: revealSpring,
            transform: `scale(${revealScale})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{ fontFamily: inter, fontWeight: 400, fontSize: 44, color: C.beige }}
          >
            Es
          </span>
          <span
            style={{
              fontFamily: manrope,
              fontWeight: 900,
              fontSize: 86,
              color: C.copper,
              letterSpacing: "-1px",
            }}
          >
            COMO
          </span>
          <span
            style={{ fontFamily: inter, fontWeight: 400, fontSize: 44, color: C.beige }}
          >
            se implementa
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════
// SCENE 4: REAL COST - "$120K al ano desperdiciados" (22-30s) - NEW
// ══════════════════════════════════════════
const SceneRealCost: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    delay: Math.round(0.3 * fps),
    config: { damping: 200 },
  });

  // Dollar counter animation
  const dollarProgress = interpolate(frame, [Math.round(0.8 * fps), Math.round(2.5 * fps)], [0, 120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  // "al ano" text
  const yearSpring = spring({
    frame,
    fps,
    delay: Math.round(2.2 * fps),
    config: { damping: 200 },
  });

  // "en herramientas que nadie abre" text
  const subSpring = spring({
    frame,
    fps,
    delay: Math.round(3.0 * fps),
    config: { damping: 200 },
  });

  // Warning bar pulse
  const barPulse = interpolate(
    frame,
    [Math.round(3.5 * fps), Math.round(4.0 * fps), Math.round(5.0 * fps), Math.round(5.5 * fps)],
    [0.3, 1, 0.3, 0.8],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Red glow
  const redGlow = interpolate(
    frame,
    [Math.round(1.5 * fps), Math.round(2.5 * fps), Math.round(5.0 * fps)],
    [0, 0.2, 0.1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(ellipse at 50% 40%, ${C.bg2}, ${C.bg})`,
      }}
    >
      <GridBg />

      {/* Red warning glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.red}, transparent 60%)`,
          opacity: redGlow,
          top: "30%",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 300,
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontWeight: 500,
            fontSize: 24,
            color: C.red,
            textTransform: "uppercase",
            letterSpacing: 8,
          }}
        >
          El costo real
        </span>
        <div
          style={{
            width: interpolate(titleSpring, [0, 1], [0, 140]),
            height: 2,
            backgroundColor: C.red,
            marginTop: 16,
          }}
        />
      </div>

      {/* Dollar counter */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: manrope,
            fontWeight: 900,
            fontSize: 180,
            color: C.white,
            lineHeight: 1,
            letterSpacing: "-6px",
          }}
        >
          ${Math.round(dollarProgress)}K
        </span>

        <div
          style={{
            opacity: yearSpring,
            transform: `translateY(${interpolate(yearSpring, [0, 1], [20, 0])}px)`,
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontWeight: 600,
              fontSize: 48,
              color: C.copper,
            }}
          >
            al ano
          </span>
        </div>

        <div
          style={{
            opacity: subSpring,
            transform: `translateY(${interpolate(subSpring, [0, 1], [20, 0])}px)`,
            marginTop: 40,
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontWeight: 400,
              fontSize: 34,
              color: C.muted,
              textAlign: "center",
              display: "block",
              lineHeight: 1.5,
            }}
          >
            en herramientas{"\n"}que nadie abre
          </span>
        </div>
      </div>

      {/* Warning bar at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 280,
          left: 80,
          right: 80,
          height: 4,
          borderRadius: 2,
          background: `linear-gradient(90deg, transparent, ${C.red}, transparent)`,
          opacity: barPulse,
        }}
      />
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════
// SCENE 5: THE SHIFT - Mindset change (30-38s) - NEW
// ══════════════════════════════════════════
const SceneShift: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    delay: Math.round(0.3 * fps),
    config: { damping: 200 },
  });

  // "Comprar mas software" appears
  const oldWaySpring = spring({
    frame,
    fps,
    delay: Math.round(0.8 * fps),
    config: { damping: 200 },
  });

  // Strikethrough on old way
  const strikeWidth = interpolate(
    frame,
    [Math.round(2.0 * fps), Math.round(2.8 * fps)],
    [0, 100],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) }
  );

  // Arrow animation
  const arrowSpring = spring({
    frame,
    fps,
    delay: Math.round(3.0 * fps),
    config: { damping: 14, stiffness: 200 },
  });

  // "Usar MEJOR lo que ya tienes" reveal
  const newWaySpring = spring({
    frame,
    fps,
    delay: Math.round(3.5 * fps),
    config: { damping: 12, stiffness: 200 },
  });
  const newWayScale = interpolate(newWaySpring, [0, 1], [0.85, 1]);

  // Bottom insight
  const insightSpring = spring({
    frame,
    fps,
    delay: Math.round(4.5 * fps),
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(ellipse at 50% 50%, ${C.bg2}, ${C.bg})`,
      }}
    >
      <GridBg />

      {/* Copper glow */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.copper}, transparent 60%)`,
          opacity: interpolate(newWaySpring, [0, 1], [0, 0.15]),
          bottom: "25%",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 300,
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontWeight: 500,
            fontSize: 24,
            color: C.copper,
            textTransform: "uppercase",
            letterSpacing: 8,
          }}
        >
          El cambio de mentalidad
        </span>
        <div
          style={{
            width: interpolate(titleSpring, [0, 1], [0, 220]),
            height: 2,
            backgroundColor: C.copper,
            marginTop: 16,
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
          paddingLeft: 60,
          paddingRight: 60,
          marginTop: 60,
        }}
      >
        {/* Old way - crossed out */}
        <div
          style={{
            opacity: oldWaySpring,
            transform: `translateY(${interpolate(oldWaySpring, [0, 1], [20, 0])}px)`,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontWeight: 400,
              fontSize: 28,
              color: C.muted,
            }}
          >
            La solucion tipica:
          </span>
          <span
            style={{
              fontFamily: manrope,
              fontWeight: 700,
              fontSize: 52,
              color: `rgba(255,255,255,${interpolate(strikeWidth, [0, 100], [1, 0.35])})`,
            }}
          >
            Comprar MAS software
          </span>
          {/* Strikethrough */}
          <div
            style={{
              position: "absolute",
              bottom: 22,
              left: "5%",
              height: 4,
              width: `${strikeWidth * 0.9}%`,
              backgroundColor: C.red,
              borderRadius: 2,
            }}
          />
        </div>

        {/* Arrow */}
        <div
          style={{
            opacity: arrowSpring,
            transform: `translateY(${interpolate(arrowSpring, [0, 1], [20, 0])}px) scale(${interpolate(arrowSpring, [0, 1], [0.5, 1])})`,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <span
            style={{
              fontFamily: manrope,
              fontWeight: 900,
              fontSize: 60,
              color: C.copper,
            }}
          >
            ↓
          </span>
        </div>

        {/* New way */}
        <div
          style={{
            opacity: newWaySpring,
            transform: `scale(${newWayScale})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontWeight: 400,
              fontSize: 28,
              color: C.copper,
            }}
          >
            La solucion inteligente:
          </span>
          <span
            style={{
              fontFamily: manrope,
              fontWeight: 900,
              fontSize: 52,
              color: C.white,
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Usar{" "}
            <span style={{ color: C.copper }}>MEJOR</span>
            {"\n"}lo que ya tienes
          </span>
        </div>

        {/* Bottom insight */}
        <div
          style={{
            opacity: insightSpring,
            transform: `translateY(${interpolate(insightSpring, [0, 1], [15, 0])}px)`,
            marginTop: 40,
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontWeight: 400,
              fontSize: 26,
              color: C.muted,
              textAlign: "center",
              display: "block",
            }}
          >
            Menos herramientas, mas resultado
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════
// SCENE 6: SOLUTION - 3 steps (38-46s)
// ══════════════════════════════════════════
const SceneSolution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    delay: Math.round(0.3 * fps),
    config: { damping: 200 },
  });

  const steps = [
    { num: "1", text: "Identifica UN proceso manual doloroso" },
    { num: "2", text: "Automatizalo con herramientas simples" },
    { num: "3", text: "Mide ROI en 3 semanas" },
  ];

  const ruleSpring = spring({
    frame,
    fps,
    delay: Math.round(3.5 * fps),
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(ellipse at 50% 30%, ${C.bg2}, ${C.bg})`,
      }}
    >
      <GridBg />

      <div
        style={{
          position: "absolute",
          right: -150,
          bottom: "20%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.copper}18, transparent 70%)`,
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 280,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontWeight: 500,
            fontSize: 24,
            color: C.copper,
            textTransform: "uppercase",
            letterSpacing: 8,
          }}
        >
          La regla que funciona
        </span>
        <div
          style={{
            width: interpolate(titleSpring, [0, 1], [0, 200]),
            height: 2,
            backgroundColor: C.copper,
            marginTop: 16,
          }}
        />
      </div>

      {/* Steps */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 65,
          position: "absolute",
          top: 500,
          paddingLeft: 70,
          paddingRight: 70,
          width: "100%",
        }}
      >
        {steps.map((step, i) => {
          const stepSpring = spring({
            frame,
            fps,
            delay: Math.round((0.8 + i * 0.55) * fps),
            config: { damping: 14, stiffness: 170 },
          });
          const slideY = interpolate(stepSpring, [0, 1], [60, 0]);

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                opacity: stepSpring,
                transform: `translateY(${slideY}px)`,
              }}
            >
              <div
                style={{
                  minWidth: 70,
                  height: 70,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${C.copper}, ${C.copperGlow})`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: manrope,
                    fontWeight: 900,
                    fontSize: 36,
                    color: C.bg,
                  }}
                >
                  {step.num}
                </span>
              </div>

              <span
                style={{
                  fontFamily: manrope,
                  fontWeight: 600,
                  fontSize: 34,
                  color: C.white,
                  lineHeight: 1.3,
                  flex: 1,
                }}
              >
                {step.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom quote */}
      <div
        style={{
          position: "absolute",
          bottom: 250,
          opacity: ruleSpring,
          transform: `translateY(${interpolate(ruleSpring, [0, 1], [20, 0])}px)`,
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontWeight: 400,
            fontSize: 28,
            color: C.muted,
            textAlign: "center",
            display: "block",
            lineHeight: 1.5,
          }}
        >
          Si no funciona, ajusta.{"\n"}Si funciona, escala.
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════
// SCENE 7: PROOF - Results (46-53s) - NEW
// ══════════════════════════════════════════
const SceneProof: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleSpring = spring({
    frame,
    fps,
    delay: Math.round(0.3 * fps),
    config: { damping: 200 },
  });

  const stats = [
    { value: "-60%", label: "herramientas", color: C.copper },
    { value: "+40%", label: "productividad", color: C.green },
    { value: "3 sem", label: "para ver ROI", color: C.copperGlow },
  ];

  const bottomSpring = spring({
    frame,
    fps,
    delay: Math.round(3.5 * fps),
    config: { damping: 200 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(ellipse at 50% 50%, ${C.bg2}, ${C.bg})`,
      }}
    >
      <GridBg />

      {/* Green glow */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.green}, transparent 60%)`,
          opacity: 0.08,
          top: "30%",
        }}
      />

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 300,
          opacity: titleSpring,
          transform: `translateY(${interpolate(titleSpring, [0, 1], [30, 0])}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontWeight: 500,
            fontSize: 24,
            color: C.copper,
            textTransform: "uppercase",
            letterSpacing: 8,
          }}
        >
          Cuando aplicas esto
        </span>
        <div
          style={{
            width: interpolate(titleSpring, [0, 1], [0, 200]),
            height: 2,
            backgroundColor: C.copper,
            marginTop: 16,
          }}
        />
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 70,
          position: "absolute",
          top: 520,
          width: "100%",
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        {stats.map((stat, i) => {
          const statSpring = spring({
            frame,
            fps,
            delay: Math.round((0.8 + i * 0.6) * fps),
            config: { damping: 14, stiffness: 180 },
          });
          const scaleIn = interpolate(statSpring, [0, 1], [0.6, 1]);

          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 30,
                opacity: statSpring,
                transform: `scale(${scaleIn})`,
              }}
            >
              <span
                style={{
                  fontFamily: manrope,
                  fontWeight: 900,
                  fontSize: 80,
                  color: stat.color,
                  minWidth: 320,
                  textAlign: "right",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: inter,
                  fontWeight: 400,
                  fontSize: 32,
                  color: C.beige,
                }}
              >
                {stat.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Bottom text */}
      <div
        style={{
          position: "absolute",
          bottom: 260,
          opacity: bottomSpring,
          transform: `translateY(${interpolate(bottomSpring, [0, 1], [15, 0])}px)`,
        }}
      >
        <span
          style={{
            fontFamily: inter,
            fontWeight: 500,
            fontSize: 30,
            color: C.muted,
          }}
        >
          Sin cambiar de software.
        </span>
      </div>
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════
// SCENE 8: CTA / BRANDING (53-60s)
// ══════════════════════════════════════════
const SceneCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoSpring = spring({
    frame,
    fps,
    delay: Math.round(0.3 * fps),
    config: { damping: 200 },
  });

  const nameSpring = spring({
    frame,
    fps,
    delay: Math.round(0.8 * fps),
    config: { damping: 200 },
  });

  const urlSpring = spring({
    frame,
    fps,
    delay: Math.round(1.2 * fps),
    config: { damping: 200 },
  });

  const tagSpring = spring({
    frame,
    fps,
    delay: Math.round(1.6 * fps),
    config: { damping: 200 },
  });

  const followSpring = spring({
    frame,
    fps,
    delay: Math.round(2.2 * fps),
    config: { damping: 200 },
  });

  // Slow pulse glow
  const glowPulse = interpolate(
    frame,
    [0, Math.round(2 * fps), Math.round(4 * fps), Math.round(6 * fps)],
    [0.1, 0.25, 0.15, 0.2],
    { extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        background: `radial-gradient(ellipse at 50% 45%, ${C.bg2}, ${C.bg})`,
      }}
    >
      <GridBg />

      {/* Central glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.copper}, transparent 60%)`,
          opacity: glowPulse,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        {/* Logo */}
        <div
          style={{
            opacity: logoSpring,
            transform: `translateY(${interpolate(logoSpring, [0, 1], [30, 0])}px) scale(${interpolate(logoSpring, [0, 1], [0.8, 1])})`,
          }}
        >
          <span
            style={{
              fontFamily: manrope,
              fontWeight: 900,
              fontSize: 110,
              color: C.white,
              letterSpacing: "-3px",
            }}
          >
            Modulor
            <span style={{ color: C.copper }}>IA</span>
          </span>
        </div>

        {/* Copper line */}
        <div
          style={{
            width: interpolate(nameSpring, [0, 1], [0, 300]),
            height: 2,
            background: `linear-gradient(90deg, transparent, ${C.copper}, transparent)`,
          }}
        />

        {/* Nicolas Farchica */}
        <div
          style={{
            opacity: nameSpring,
            transform: `translateY(${interpolate(nameSpring, [0, 1], [20, 0])}px)`,
            marginTop: 10,
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontWeight: 500,
              fontSize: 32,
              color: C.beige,
              letterSpacing: 2,
            }}
          >
            Nicolas Farchica
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            opacity: urlSpring,
            transform: `translateY(${interpolate(urlSpring, [0, 1], [15, 0])}px)`,
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginTop: 20,
          }}
        >
          <div style={{ width: 30, height: 2, backgroundColor: C.copper }} />
          <span
            style={{
              fontFamily: inter,
              fontWeight: 600,
              fontSize: 28,
              color: C.copperGlow,
              letterSpacing: 1,
            }}
          >
            moduloria.com
          </span>
          <div style={{ width: 30, height: 2, backgroundColor: C.copper }} />
        </div>

        {/* Tagline */}
        <div
          style={{
            opacity: tagSpring,
            transform: `translateY(${interpolate(tagSpring, [0, 1], [15, 0])}px)`,
            marginTop: 16,
          }}
        >
          <span
            style={{
              fontFamily: inter,
              fontWeight: 400,
              fontSize: 22,
              color: C.muted,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            IA practica para industrias reales
          </span>
        </div>

        {/* Follow CTA */}
        <div
          style={{
            opacity: followSpring,
            transform: `translateY(${interpolate(followSpring, [0, 1], [15, 0])}px) scale(${interpolate(followSpring, [0, 1], [0.9, 1])})`,
            marginTop: 40,
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 16,
            paddingBottom: 16,
            borderRadius: 50,
            border: `2px solid ${C.copper}`,
            backgroundColor: `${C.copper}15`,
          }}
        >
          <span
            style={{
              fontFamily: manrope,
              fontWeight: 700,
              fontSize: 26,
              color: C.copper,
              letterSpacing: 2,
            }}
          >
            SIGUEME
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ══════════════════════════════════════════
// MAIN: DataReel Composition - 60 seconds
// ══════════════════════════════════════════
export const DataReel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ── Scene timings (seconds → frames) ──
  // 8 scenes across 60 seconds with 0.4s crossfades
  const sec = (s: number) => Math.round(s * fps);

  const scenes = [
    { start: 0,        end: sec(7) },     // Scene 1: Hook
    { start: sec(6.6), end: sec(14) },     // Scene 2: Context
    { start: sec(13.6), end: sec(22) },    // Scene 3: Insight
    { start: sec(21.6), end: sec(30) },    // Scene 4: Real Cost
    { start: sec(29.6), end: sec(38) },    // Scene 5: Shift
    { start: sec(37.6), end: sec(46) },    // Scene 6: Solution
    { start: sec(45.6), end: sec(53) },    // Scene 7: Proof
    { start: sec(52.6), end: sec(60) },    // Scene 8: CTA
  ];

  const fade = (idx: number) => {
    const s = scenes[idx];
    const isFirst = idx === 0;
    const isLast = idx === scenes.length - 1;
    const fadeDuration = sec(0.4);

    const fadeIn = isFirst
      ? 1
      : interpolate(frame, [s.start, s.start + fadeDuration], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

    const fadeOut = isLast
      ? 1
      : interpolate(frame, [s.end - fadeDuration, s.end], [1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

    return fadeIn * fadeOut;
  };

  // Audio volume: fade in 0-2s, sustain, fade out 58-60s
  const audioVolume = interpolate(
    frame,
    [0, sec(2), sec(58), sec(60)],
    [0, 0.22, 0.22, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const sceneComponents = [
    SceneHook,
    SceneContext,
    SceneInsight,
    SceneRealCost,
    SceneShift,
    SceneSolution,
    SceneProof,
    SceneCTA,
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: C.bg }}>
      {/* Background music */}
      <Audio src={staticFile("music/cyberpunk-city.mp3")} volume={audioVolume} />

      {sceneComponents.map((SceneComp, idx) => {
        const s = scenes[idx];
        const buffer = 5;
        const visible = frame >= s.start && frame < s.end + buffer;
        if (!visible) return null;

        return (
          <AbsoluteFill key={idx} style={{ opacity: fade(idx) }}>
            <Sequence from={s.start} layout="none">
              <SceneComp />
            </Sequence>
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};
