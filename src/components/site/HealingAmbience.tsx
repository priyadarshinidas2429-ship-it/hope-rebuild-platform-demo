import { useMemo } from "react";
import { Leaf } from "lucide-react";

/**
 * Premium therapeutic ambient layer:
 * - Soft healing sun rays (radial gradients, slow drift)
 * - Floating hope particles (warm dots rising)
 * - Subtle drifting leaves
 * Pure CSS animations — GPU friendly, SSR safe, honors prefers-reduced-motion.
 */
export function HealingAmbience({ leaves = 6, particles = 18 }: { leaves?: number; particles?: number }) {
  const parts = useMemo(
    () =>
      Array.from({ length: particles }).map((_, i) => ({
        left: (i * 97) % 100,
        size: 4 + ((i * 13) % 10),
        delay: (i * 0.7) % 12,
        duration: 9 + ((i * 5) % 7),
        drift: ((i * 37) % 80) - 40,
        opacity: 0.06 + ((i * 3) % 10) / 100,
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
        size: 14 + ((i * 5) % 12),
      })),
    [leaves],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Healing sun rays */}
      <div
        className="absolute -top-1/3 -left-1/4 h-[140%] w-[140%] animate-healing-rays"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, oklch(0.95 0.08 90 / 0.35), transparent 55%), radial-gradient(ellipse at 70% 30%, oklch(0.9 0.1 200 / 0.25), transparent 60%)",
          filter: "blur(20px)",
        }}
      />
      {/* Floating hope particles */}
      {parts.map((p, i) => (
        <span
          key={`p-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.left}%`,
            bottom: "-10%",
            width: p.size,
            height: p.size,
            filter: "blur(1px)",
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
          className="absolute text-white/40"
          style={{
            left: `${l.left}%`,
            top: "-5%",
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