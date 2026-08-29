/**
 * SpaceHeroScene
 * ----------------
 * A self-contained, looping animated space scene: a cute astronaut floating in
 * low gravity above a large cratered moon, with parallax asteroids and drifting
 * crystal/particle debris. Designed to sit as a full-bleed background behind
 * hero text — the upper-center area is kept deliberately empty so copy reads
 * cleanly over it.
 *
 * Pure CSS-keyframe animation (no JS animation loop), so it's cheap to render
 * and safe to leave running indefinitely. Respects prefers-reduced-motion.
 */
export default function SpaceHeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <style>{`
        @keyframes shs-bob {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes shs-arm {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-6deg); }
        }
        @keyframes shs-drift-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(6px, -10px); }
        }
        @keyframes shs-drift-mid {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, 12px); }
        }
        @keyframes shs-drift-fast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(12px, -16px); }
        }
        @keyframes shs-crystal-1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -18px) rotate(30deg); }
          66% { transform: translate(-8px, -6px) rotate(-15deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes shs-crystal-2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          40% { transform: translate(-14px, 10px) rotate(-25deg); }
          70% { transform: translate(6px, 20px) rotate(10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes shs-crystal-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-16px, -12px) rotate(20deg); }
        }
        @keyframes shs-particle-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0.55; }
          50% { transform: translate(14px, -22px); opacity: 1; }
        }
        @keyframes shs-particle-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.4; }
          50% { transform: translate(-18px, 14px); opacity: 0.9; }
        }
        @keyframes shs-particle-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.5; }
          50% { transform: translate(10px, 18px); opacity: 1; }
        }
        @keyframes shs-twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.9; }
        }
        @keyframes shs-surface-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-400px); }
        }

        .shs-astro { animation: shs-bob 6s ease-in-out infinite; transform-origin: center; }
        .shs-arm { animation: shs-arm 3.4s ease-in-out infinite; transform-origin: 100px 210px; }
        .shs-ast-a { animation: shs-drift-slow 22s ease-in-out infinite; }
        .shs-ast-b { animation: shs-drift-mid 16s ease-in-out infinite; }
        .shs-ast-c { animation: shs-drift-fast 11s ease-in-out infinite; }
        .shs-crystal.c1 { animation: shs-crystal-1 9s ease-in-out infinite; }
        .shs-crystal.c2 { animation: shs-crystal-2 11s ease-in-out infinite; }
        .shs-crystal.c3 { animation: shs-crystal-3 8s ease-in-out infinite; }
        .shs-particle.p1 { animation: shs-particle-1 7s ease-in-out infinite; }
        .shs-particle.p2 { animation: shs-particle-2 8.5s ease-in-out infinite; }
        .shs-particle.p3 { animation: shs-particle-3 6.2s ease-in-out infinite; }
        .shs-star { animation: shs-twinkle 3s ease-in-out infinite; }
        .shs-star.s2 { animation-delay: 1s; }
        .shs-star.s3 { animation-delay: 2s; }
        .shs-surface { animation: shs-surface-scroll 26s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .shs-astro, .shs-arm, .shs-ast-a, .shs-ast-b, .shs-ast-c,
          .shs-crystal, .shs-particle, .shs-star, .shs-surface {
            animation: none !important;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 400 700"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="shs-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#150a2b" />
            <stop offset="55%" stopColor="#1c0f3a" />
            <stop offset="100%" stopColor="#100822" />
          </linearGradient>
          <linearGradient id="shs-moon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a4655" />
            <stop offset="45%" stopColor="#312d3d" />
            <stop offset="100%" stopColor="#18151f" />
          </linearGradient>
          <radialGradient id="shs-glow-blue" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7fd8ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7fd8ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="shs-glow-orange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff9f1c" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#ff9f1c" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="shs-glow-astro" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c7d9ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c7d9ff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="shs-crater" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#4a4555" />
            <stop offset="55%" stopColor="#221f2b" />
            <stop offset="100%" stopColor="#151319" />
          </radialGradient>
          <clipPath id="shs-moon-clip">
            <ellipse cx="200" cy="800" rx="380" ry="230" />
          </clipPath>
          <filter id="shs-blur-sm"><feGaussianBlur stdDeviation="3" /></filter>
          <filter id="shs-blur-md"><feGaussianBlur stdDeviation="6" /></filter>
          <filter id="shs-blur-lg"><feGaussianBlur stdDeviation="16" /></filter>
        </defs>

        {/* deep space backdrop */}
        <rect x="0" y="0" width="400" height="700" fill="url(#shs-bg)" />

        {/* twinkling stars */}
        <circle className="shs-star" cx="46" cy="70" r="1.6" fill="#ffffff" />
        <circle className="shs-star s2" cx="330" cy="110" r="1.3" fill="#ffffff" />
        <circle className="shs-star s3" cx="120" cy="40" r="1.4" fill="#ffffff" />
        <circle className="shs-star s2" cx="270" cy="200" r="1.2" fill="#ffffff" />
        <circle className="shs-star" cx="360" cy="260" r="1.5" fill="#ffffff" />
        <circle className="shs-star s3" cx="30" cy="220" r="1.2" fill="#ffffff" />
        <circle className="shs-star" cx="200" cy="30" r="1.3" fill="#ffffff" />

        {/* background asteroids, layered parallax, out of focus */}
        <g className="shs-ast-a" filter="url(#shs-blur-md)" opacity="0.22">
          <circle cx="55" cy="130" r="20" fill="#9b8fc9" />
          <circle cx="345" cy="90" r="16" fill="#7c88c4" />
        </g>
        <g className="shs-ast-b" filter="url(#shs-blur-sm)" opacity="0.3">
          <circle cx="40" cy="270" r="24" fill="#8f7fbf" />
          <circle cx="365" cy="230" r="18" fill="#6f7fc0" />
          <circle cx="210" cy="70" r="14" fill="#9d8fd0" />
        </g>
        <g className="shs-ast-c" filter="url(#shs-blur-sm)" opacity="0.35">
          <circle cx="310" cy="340" r="30" fill="#7c6fb0" />
          <circle cx="60" cy="390" r="24" fill="#8b7ec2" />
        </g>

        {/* moon rim lighting */}
        <ellipse cx="70" cy="560" rx="150" ry="100" fill="url(#shs-glow-blue)" filter="url(#shs-blur-lg)" />
        <ellipse cx="345" cy="560" rx="130" ry="90" fill="url(#shs-glow-orange)" filter="url(#shs-blur-lg)" />

        {/* astronaut atmospheric glow, sits behind the astronaut */}
        <ellipse cx="185" cy="430" rx="130" ry="120" fill="url(#shs-glow-astro)" filter="url(#shs-blur-lg)" />

        {/* particles/crystals BEHIND the astronaut */}
        <g className="shs-crystal c3 shs-crystal" opacity="0.9">
          <path d="M120 300 l8 -14 8 14 -8 14 z" fill="#c77dff" stroke="#0b1220" strokeWidth="1.5" />
        </g>
        <g className="shs-particle p2 shs-particle">
          <rect x="255" y="360" width="7" height="10" rx="2" fill="#d9f99d" filter="url(#shs-blur-sm)" opacity="0.8" />
          <rect x="255" y="360" width="7" height="10" rx="2" fill="#d9f99d" />
        </g>

        {/* ===== astronaut ===== */}
        <g className="shs-astro" transform="translate(90, 330)">
          {/* backpack */}
          <rect x="40" y="55" width="34" height="66" rx="12" fill="#c3cfe0" stroke="#0b1220" strokeWidth="3.5" />
          {/* far leg (behind torso), bent as if walking/floating */}
          <rect x="52" y="150" width="22" height="46" rx="11" fill="#e7edf7" stroke="#0b1220" strokeWidth="3.5" transform="rotate(8 63 150)" />
          <rect x="46" y="188" width="32" height="16" rx="7" fill="#e2554f" stroke="#0b1220" strokeWidth="3" transform="rotate(8 63 150)" />
          {/* torso */}
          <rect x="34" y="72" width="76" height="82" rx="26" fill="#f4f8ff" stroke="#0b1220" strokeWidth="4" />
          {/* chest panel accents */}
          <rect x="50" y="104" width="44" height="12" rx="6" fill="#3b82f6" stroke="#0b1220" strokeWidth="2.5" />
          <circle cx="72" cy="130" r="6" fill="#e2554f" stroke="#0b1220" strokeWidth="2" />
          {/* near leg */}
          <rect x="66" y="150" width="24" height="50" rx="12" fill="#f4f8ff" stroke="#0b1220" strokeWidth="4" transform="rotate(-6 78 150)" />
          <rect x="60" y="192" width="34" height="18" rx="8" fill="#3b82f6" stroke="#0b1220" strokeWidth="3" transform="rotate(-6 78 150)" />
          {/* far arm, resting */}
          <rect x="14" y="86" width="22" height="52" rx="11" fill="#e7edf7" stroke="#0b1220" strokeWidth="3.5" transform="rotate(18 25 90)" />
          {/* helmet */}
          <circle cx="86" cy="52" r="46" fill="#f4f8ff" stroke="#0b1220" strokeWidth="4.5" />
          <ellipse cx="94" cy="48" rx="30" ry="27" fill="#0b1220" />
          <ellipse cx="94" cy="48" rx="30" ry="27" fill="#5fb8ff" opacity="0.35" />
          <circle cx="84" cy="36" r="7" fill="#ffffff" opacity="0.85" />
          {/* antenna */}
          <line x1="118" y1="16" x2="128" y2="0" stroke="#0b1220" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="129" cy="-3" r="5" fill="#ff9f1c" stroke="#0b1220" strokeWidth="2.5" />
          {/* near arm, extended forward holding device */}
          <g className="shs-arm">
            <rect x="96" y="96" width="20" height="50" rx="10" fill="#f4f8ff" stroke="#0b1220" strokeWidth="3.5" transform="rotate(58 100 100)" />
            <g transform="translate(132, 128) rotate(58)">
              <rect x="-6" y="-6" width="26" height="12" rx="4" fill="#3b3742" stroke="#0b1220" strokeWidth="2.5" />
              <circle cx="22" cy="0" r="4.5" fill="#7fd8ff" />
            </g>
          </g>
        </g>

        {/* particles/crystals IN FRONT of the astronaut */}
        <g className="shs-crystal c1 shs-crystal" opacity="0.95">
          <path d="M300 250 l9 -16 9 16 -9 16 z" fill="#e879f9" stroke="#0b1220" strokeWidth="1.5" />
        </g>
        <g className="shs-crystal c2 shs-crystal" opacity="0.9">
          <path d="M60 230 l6 -11 6 11 -6 11 z" fill="#c77dff" stroke="#0b1220" strokeWidth="1.3" />
        </g>
        <g className="shs-particle p1 shs-particle">
          <rect x="305" y="150" width="6" height="9" rx="2" fill="#fef08a" filter="url(#shs-blur-sm)" opacity="0.85" />
          <rect x="305" y="150" width="6" height="9" rx="2" fill="#fef08a" />
        </g>
        <g className="shs-particle p3 shs-particle">
          <rect x="30" y="180" width="5" height="8" rx="2" fill="#bef264" filter="url(#shs-blur-sm)" opacity="0.85" />
          <rect x="30" y="180" width="5" height="8" rx="2" fill="#bef264" />
        </g>

        {/* ===== moon surface, bottom third ===== */}
        <g clipPath="url(#shs-moon-clip)">
          <ellipse cx="200" cy="800" rx="380" ry="230" fill="url(#shs-moon)" />

          {/* scrolling crater field, two tiles wide for a seamless loop */}
          <g className="shs-surface">
            {[0, 400].map((offset) => (
              <g key={offset} transform={`translate(${offset}, 0)`}>
                <circle cx="40" cy="590" r="16" fill="url(#shs-crater)" />
                <circle cx="120" cy="640" r="24" fill="url(#shs-crater)" />
                <circle cx="200" cy="580" r="12" fill="url(#shs-crater)" />
                <circle cx="260" cy="630" r="30" fill="url(#shs-crater)" />
                <circle cx="330" cy="600" r="14" fill="url(#shs-crater)" />
                <circle cx="10" cy="660" r="20" fill="url(#shs-crater)" />
                <circle cx="370" cy="670" r="18" fill="url(#shs-crater)" />
                <circle cx="160" cy="675" r="10" fill="url(#shs-crater)" />
              </g>
            ))}
          </g>

          {/* glossy highlight band along the horizon */}
          <ellipse cx="200" cy="575" rx="360" ry="40" fill="#ffffff" opacity="0.06" filter="url(#shs-blur-lg)" />
        </g>
      </svg>
    </div>
  );
}