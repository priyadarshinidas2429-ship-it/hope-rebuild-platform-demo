import { useMemo } from "react";
import { Leaf } from "lucide-react";

/**
 * Premium therapeutic ambient layer:
 * - Soft healing sun rays (radial gradients, slow drift)
 * - Floating hope particles (warm dots rising)
 * - Subtle drifting leaves
 * Pure CSS animations — GPU friendly, SSR safe, honors prefers-reduced-motion.
 */
export function HealingAmbience({ leaves = 0, particles = 20 }: { leaves?: number; particles?: number }) {
  const parts = useMemo(
    () =>
      Array.from({ length: particles }).map((_, i) => ({
        left: (i * 97) % 100,
        size: 3 + ((i * 13) % 6),
        delay: (i * 0.7) % 12,
        duration: 12 + ((i * 5) % 10),
        drift: ((i * 37) % 80) - 40,
        opacity: 0.5 + ((i * 3) % 5) / 20,
      })),
    [particles],
  );
  const lvs = useMemo(
    () =>
      Array.from({ length: leaves }).map((_, i) => ({
        left: (i * 137) % 100,
        delay: (i * 3) % 14,
        duration: 18 + ((i * 7) % 10),
        drift: ((i * 53) % 120) - 60,
        size: 18 + ((i * 5) % 18),
      })),
    [leaves],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Welcome glow — warm radial pulse from where the person stands.
          Positioned on the right side of the hero (where the figure sits in
          hero-hope.jpg) and kept behind content via mix-blend so it never
          reduces text contrast. */}
      <div
        className="absolute animate-welcome-glow"
        style={{
          right: "-8%",
          top: "18%",
          width: "70%",
          height: "80%",
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.95 0.12 78 / 0.32), oklch(0.85 0.14 60 / 0.14) 40%, transparent 70%)",
          mixBlendMode: "screen",
          filter: "blur(6px)",
        }}
      />
      {/* Warm horizon sunrise — subtle, bottom only */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 animate-sunrise-in"
        style={{
          background:
            "radial-gradient(ellipse at 50% 110%, oklch(0.88 0.15 65 / 0.35), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />
      {/* Soft moving sunlight rays from upper corner */}
      <div
        className="absolute inset-0 animate-rays-drift opacity-40"
        style={{
          background:
            "repeating-linear-gradient(115deg, transparent 0px, transparent 90px, oklch(1 0.08 82 / 0.07) 90px, oklch(1 0.08 82 / 0.07) 120px)",
          mixBlendMode: "screen",
          maskImage: "radial-gradient(ellipse at 20% 10%, black, transparent 55%)",
          WebkitMaskImage: "radial-gradient(ellipse at 20% 10%, black, transparent 55%)",
        }}
      />
      {/* Recovery path — glowing arc rising from bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 animate-sunrise-in"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.95 0.12 85 / 0.5), oklch(0.9 0.14 75 / 0.15) 40%, transparent 70%)",
          mixBlendMode: "screen",
          filter: "blur(2px)",
        }}
      />
      {/* Floating hope particles — golden glow */}
      {parts.map((p, i) => (
        <span
          key={`p-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: "-10%",
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, oklch(1 0.06 85 / 0.9), transparent 70%)",
            boxShadow: "0 0 8px oklch(0.95 0.12 78 / 0.6)",
            ["--drift-x" as string]: `${p.drift}px`,
            ["--particle-opacity" as string]: p.opacity,
            animation: `drift-up ${p.duration}s linear ${p.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
      {/* Drifting leaves */}
      {lvs.map((l, i) => (
        <span
          key={`l-${i}`}
          className="absolute text-white/80"
          style={{
            left: `${l.left}%`,
            top: "-5%",
            filter: "drop-shadow(0 2px 6px oklch(0.6 0.15 145 / 0.5))",
            ["--leaf-x" as string]: `${l.drift}px`,
            animation: `leaf-drift ${l.duration}s linear ${l.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        >
          <Leaf style={{ width: l.size, height: l.size }} />
        </span>
      ))}
    </div>
  );
}