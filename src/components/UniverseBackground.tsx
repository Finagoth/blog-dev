import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; tw: number; phase: number; hue: number };
type Shooting = { x: number; y: number; vx: number; vy: number; life: number };

export function UniverseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stars: Star[] = [];
    let shooting: Shooting[] = [];
    let nebulae: { x: number; y: number; r: number; h: number }[] = [];
    const mouse = { x: 0, y: 0 };

    const setup = () => {
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const count = Math.floor((window.innerWidth * window.innerHeight) / 4000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.3,
        tw: Math.random() * 0.03 + 0.005,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.15 ? 280 + Math.random() * 60 : 220 + Math.random() * 40,
      }));
      nebulae = Array.from({ length: 4 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 200 + Math.random() * 400,
        h: 250 + Math.random() * 100,
      }));
    };

    const onMouse = (e: MouseEvent) => {
      mouse.x = e.clientX * devicePixelRatio;
      mouse.y = e.clientY * devicePixelRatio;
    };

    const spawnShooting = () => {
      if (Math.random() < 0.005 && shooting.length < 3) {
        const fromLeft = Math.random() < 0.5;
        shooting.push({
          x: fromLeft ? 0 : canvas.width,
          y: Math.random() * canvas.height * 0.6,
          vx: (fromLeft ? 1 : -1) * (8 + Math.random() * 6),
          vy: 2 + Math.random() * 3,
          life: 1,
        });
      }
    };

    let t = 0;
    const draw = () => {
      t += 0.005;
      ctx.fillStyle = "rgba(10, 6, 25, 0.6)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebulae
      nebulae.forEach((n, i) => {
        const drift = Math.sin(t + i) * 30;
        const grd = ctx.createRadialGradient(n.x + drift, n.y, 0, n.x + drift, n.y, n.r);
        grd.addColorStop(0, `hsla(${n.h}, 80%, 60%, 0.18)`);
        grd.addColorStop(0.5, `hsla(${n.h + 30}, 70%, 50%, 0.06)`);
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Stars
      stars.forEach((s) => {
        s.phase += s.tw;
        const alpha = 0.4 + Math.sin(s.phase) * 0.5;
        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const push = dist < 150 * devicePixelRatio ? (150 * devicePixelRatio - dist) / 800 : 0;
        const px = s.x + (dx / (dist || 1)) * push * 20;
        const py = s.y + (dy / (dist || 1)) * push * 20;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 90%, 85%, ${alpha})`;
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Shooting stars
      spawnShooting();
      shooting = shooting.filter((sh) => {
        sh.x += sh.vx;
        sh.y += sh.vy;
        sh.life -= 0.01;
        const grd = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * 8, sh.y - sh.vy * 8);
        grd.addColorStop(0, `rgba(220, 200, 255, ${sh.life})`);
        grd.addColorStop(1, "transparent");
        ctx.strokeStyle = grd;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(sh.x - sh.vx * 8, sh.y - sh.vy * 8);
        ctx.stroke();
        return sh.life > 0 && sh.x > -100 && sh.x < canvas.width + 100;
      });

      raf = requestAnimationFrame(draw);
    };

    setup();
    draw();
    window.addEventListener("resize", setup);
    window.addEventListener("mousemove", onMouse);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setup);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
