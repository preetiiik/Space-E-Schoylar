import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  driftSpeed: number;
  depth: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  life: number;
  maxLife: number;
}

interface Rocket {
  x: number;
  y: number;
  speed: number;
  angle: number;
  scale: number;
  life: number;
  maxLife: number;
}

const STAR_COLORS = [
  "218, 240, 255", // cool blue-white
  "255, 244, 214", // warm white
  "255, 255, 255", // pure white
  "200, 220, 255", // pale blue
];

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let rockets: Rocket[] = [];
    let animationId: number;

    // moon placement — fixed-ish corner, slight parallax only
    const moon = {
      x: 0,
      y: 0,
      radius: 0,
    };

    const createStars = () => {
      // denser field than before — real-sky feel wants lots of small dim stars
      // plus a handful of bright "feature" stars
      const count = Math.max(260, Math.floor((width * height) / 2600));
      stars = Array.from({ length: count }, () => {
        const isBright = Math.random() < 0.06;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: isBright
            ? Math.random() * 1.1 + 1.4
            : Math.random() ** 2 * 1.3 + 0.15,
          baseAlpha: isBright
            ? Math.random() * 0.25 + 0.65
            : Math.random() * 0.45 + 0.1,
          twinkleSpeed: Math.random() * 0.014 + 0.002,
          twinklePhase: Math.random() * Math.PI * 2,
          driftSpeed: Math.random() * 0.04 + 0.004,
          depth: Math.random() * 0.82 + 0.18,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      moon.x = width * 0.82;
      moon.y = height * 0.16;
      moon.radius = Math.min(width, height) * 0.055;
      createStars();
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / width - 0.5) * 2,
        y: (e.clientY / height - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", handleMouse);

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    let time = 0;
    let lastShot = 0;
    let lastRocket = 0;

    const maybeSpawnShootingStar = (now: number) => {
      if (now - lastShot < 1800) return;
      if (Math.random() < 0.035) {
        lastShot = now;
        shootingStars.push({
          x: Math.random() * width * 0.7,
          y: Math.random() * height * 0.35,
          length: Math.random() * 90 + 70,
          speed: Math.random() * 7 + 7,
          angle: Math.PI / 5.5 + (Math.random() - 0.5) * 0.3,
          life: 0,
          maxLife: 55,
        });
      }
    };

    const maybeSpawnRocket = (now: number) => {
      if (now - lastRocket < 6000) return;
      if (Math.random() < 0.01) {
        lastRocket = now;
        const fromLeft = Math.random() < 0.5;
        rockets.push({
          x: fromLeft ? -60 : width + 60,
          y: height * (0.15 + Math.random() * 0.5),
          speed: (fromLeft ? 1 : -1) * (Math.random() * 1.1 + 1.1),
          angle: fromLeft ? -0.35 : Math.PI + 0.35,
          scale: Math.random() * 0.35 + 0.8,
          life: 0,
          maxLife: 100000, // removed once off-screen instead
        });
      }
    };

    const drawMoon = () => {
      const px = mouseRef.current.x * 4;
      const py = mouseRef.current.y * 3 + scrollRef.current * 0.02;
      const mx = moon.x + px;
      const my = moon.y - py;

      // soft glow
      const glow = ctx.createRadialGradient(
        mx,
        my,
        moon.radius * 0.4,
        mx,
        my,
        moon.radius * 3.2,
      );
      glow.addColorStop(0, "rgba(232, 236, 245, 0.28)");
      glow.addColorStop(1, "rgba(232, 236, 245, 0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(mx, my, moon.radius * 3.2, 0, Math.PI * 2);
      ctx.fill();

      // body
      const body = ctx.createRadialGradient(
        mx - moon.radius * 0.3,
        my - moon.radius * 0.3,
        moon.radius * 0.1,
        mx,
        my,
        moon.radius,
      );
      body.addColorStop(0, "#f4f1e8");
      body.addColorStop(0.6, "#d9d4c4");
      body.addColorStop(1, "#a8a190");
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.arc(mx, my, moon.radius, 0, Math.PI * 2);
      ctx.fill();

      // craters
      ctx.save();
      ctx.clip();
      ctx.beginPath();
      ctx.arc(mx, my, moon.radius, 0, Math.PI * 2);
      ctx.clip();
      const craters = [
        [-0.35, -0.25, 0.16],
        [0.25, 0.05, 0.22],
        [-0.1, 0.35, 0.13],
        [0.35, -0.3, 0.1],
      ];
      ctx.fillStyle = "rgba(140, 132, 116, 0.35)";
      for (const [ox, oy, r] of craters) {
        ctx.beginPath();
        ctx.arc(
          mx + ox * moon.radius,
          my + oy * moon.radius,
          r * moon.radius,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
      ctx.restore();
    };

    const drawRocket = (r: Rocket) => {
      // long streaking trail, drawn in world space before the local transform,
      // so it reads like a shooting star with the rocket riding the head of it
      const trailLen = 130;
      const tailX = r.x - Math.cos(r.angle) * trailLen;
      const tailY = r.y - Math.sin(r.angle) * trailLen;
      const streak = ctx.createLinearGradient(r.x, r.y, tailX, tailY);
      streak.addColorStop(0, "rgba(255, 235, 200, 0.85)");
      streak.addColorStop(0.35, "rgba(255, 180, 120, 0.45)");
      streak.addColorStop(1, "rgba(255, 140, 90, 0)");
      ctx.strokeStyle = streak;
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(r.x, r.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      ctx.save();
      ctx.translate(r.x, r.y);
      ctx.rotate(r.angle);
      ctx.scale(r.scale, r.scale);

      // flame
      const flame = ctx.createLinearGradient(-30, 0, -55, 0);
      flame.addColorStop(0, "rgba(255, 200, 130, 0.9)");
      flame.addColorStop(1, "rgba(255, 120, 60, 0)");
      ctx.fillStyle = flame;
      ctx.beginPath();
      ctx.moveTo(-14, -4);
      ctx.lineTo(-40 - Math.random() * 10, 0);
      ctx.lineTo(-14, 4);
      ctx.closePath();
      ctx.fill();

      // body
      ctx.fillStyle = "#e7ecf3";
      ctx.beginPath();
      ctx.moveTo(18, 0);
      ctx.lineTo(2, -6);
      ctx.lineTo(-14, -5);
      ctx.lineTo(-14, 5);
      ctx.lineTo(2, 6);
      ctx.closePath();
      ctx.fill();

      // window
      ctx.fillStyle = "#3a5a80";
      ctx.beginPath();
      ctx.arc(6, 0, 2.6, 0, Math.PI * 2);
      ctx.fill();

      // fins
      ctx.fillStyle = "#c3cbd8";
      ctx.beginPath();
      ctx.moveTo(-10, -5);
      ctx.lineTo(-18, -12);
      ctx.lineTo(-8, -5);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(-10, 5);
      ctx.lineTo(-18, 12);
      ctx.lineTo(-8, 5);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      time += 1;

      const parallaxX = mouseRef.current.x * 12;
      const parallaxY = mouseRef.current.y * 8 + scrollRef.current * 0.012;

      drawMoon();

      for (const star of stars) {
        const alpha = prefersReducedMotion
          ? star.baseAlpha
          : star.baseAlpha *
            (0.6 +
              0.4 * Math.sin(time * star.twinkleSpeed + star.twinklePhase));

        if (!prefersReducedMotion) {
          star.x += star.driftSpeed * star.depth;
          if (star.x > width) star.x = 0;
        }

        const drawX = star.x + parallaxX * star.depth;
        const drawY = star.y - ((parallaxY * star.depth) % height);

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${alpha})`;
        ctx.fill();

        // subtle glow on brighter stars
        if (star.radius > 1.4) {
          ctx.beginPath();
          ctx.arc(drawX, drawY, star.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color}, ${alpha * 0.12})`;
          ctx.fill();
        }
      }

      if (!prefersReducedMotion) {
        maybeSpawnShootingStar(now);
        shootingStars = shootingStars.filter((s) => s.life < s.maxLife);
        for (const s of shootingStars) {
          s.life += 1;
          s.x += Math.cos(s.angle) * s.speed;
          s.y += Math.sin(s.angle) * s.speed;
          const opacity = 1 - s.life / s.maxLife;
          const tailX = s.x - Math.cos(s.angle) * s.length;
          const tailY = s.y - Math.sin(s.angle) * s.length;
          const gradient = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
          gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
          gradient.addColorStop(0.4, `rgba(186, 230, 253, ${opacity * 0.6})`);
          gradient.addColorStop(1, "rgba(186, 230, 253, 0)");
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
        }

        maybeSpawnRocket(now);
        rockets = rockets.filter((r) => r.x > -100 && r.x < width + 100);
        for (const r of rockets) {
          r.x += Math.cos(r.angle) * r.speed;
          r.y += Math.sin(r.angle) * 0.15;
          drawRocket(r);
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020713]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/space-nebula-background.png')" }}
      />
      <div className="absolute inset-0 bg-[#020713]/45" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020713]/15 via-transparent to-[#020713]/40" />
    </div>
  );
}