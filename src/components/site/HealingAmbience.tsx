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
        size: 6 + ((i * 13) % 14),
        delay: (i * 0.7) % 12,
        duration: 10 + ((i * 5) % 9),
        drift: ((i * 37) % 80) - 40,
        opacity: 0.35 + ((i * 3) % 10) / 20,
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
      {/* Sunrise wash — fades in on load */}
      <div
        className="absolute inset-0 animate-sunrise-in"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.9 0.14 75 / 0.25) 55%, oklch(0.82 0.18 60 / 0.45) 100%)",
        }}
      />
      {/* Healing sun rays — warm golden */}
      <div
        className="absolute -top-1/3 -left-1/4 h-[160%] w-[160%] animate-healing-rays animate-sunrise-in"
        style={{
          background:
            "radial-gradient(ellipse at 25% 18%, oklch(0.96 0.14 82 / 0.9), transparent 55%), radial-gradient(ellipse at 75% 25%, oklch(0.92 0.13 60 / 0.65), transparent 60%), radial-gradient(ellipse at 50% 100%, oklch(0.88 0.12 45 / 0.5), transparent 65%)",
          filter: "blur(28px)",
          mixBlendMode: "screen",
        }}
      />
      {/* God rays — angled beams */}
      <div
        className="absolute inset-0 animate-rays-drift"
        style={{
          background:
            "repeating-linear-gradient(115deg, transparent 0px, transparent 60px, oklch(1 0.05 85 / 0.10) 60px, oklch(1 0.05 85 / 0.10) 90px)",
          mixBlendMode: "screen",
          maskImage: "radial-gradient(ellipse at 30% 20%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at 30% 20%, black, transparent 70%)",
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
            background: "radial-gradient(circle, oklch(1 0.08 85 / 0.95), oklch(0.95 0.14 78 / 0.6) 50%, transparent 75%)",
            boxShadow: "0 0 12px oklch(0.95 0.14 78 / 0.8), 0 0 24px oklch(0.9 0.16 70 / 0.5)",
            filter: "blur(0.4px)",
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