import { useEffect, useRef } from "react";

export default function GoldenBeamAnimation({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return undefined;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking for subtle interactive reaction
    let mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        mouse.targetX = (e.clientX - rect.left) / rect.width;
        mouse.targetY = (e.clientY - rect.top) / rect.height;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle high DPI and resizing
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(canvas);
    resize();

    // Floating golden dust particles
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * 180, // spread around the beam
      y: Math.random() * 500,
      radius: Math.random() * 1.4 + 0.6,
      speedY: Math.random() * 0.35 + 0.15,
      speedX: (Math.random() - 0.5) * 0.12,
      opacity: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    let startTime = performance.now();

    const render = (now) => {
      const elapsed = (now - startTime) / 1000;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      // Central beam origin
      const centerX = width * 0.5 + (mouse.x - 0.5) * 35;
      const startY = height * 0.12;
      const beamLength = height * 0.38 + Math.sin(elapsed * 0.8) * 15;
      const endY = startY + beamLength;

      // ── 1. Ambient Volumetric Glow (Radial) ──
      const glowPulse = 0.85 + Math.sin(elapsed * 1.2) * 0.15;
      const glowGradient = ctx.createRadialGradient(
        centerX,
        startY + beamLength * 0.45,
        10,
        centerX,
        startY + beamLength * 0.45,
        beamLength * 0.9,
      );
      glowGradient.addColorStop(0, `rgba(212, 188, 126, ${0.18 * glowPulse})`);
      glowGradient.addColorStop(0.35, `rgba(184, 148, 74, ${0.08 * glowPulse})`);
      glowGradient.addColorStop(0.7, `rgba(184, 148, 74, ${0.02 * glowPulse})`);
      glowGradient.addColorStop(1, "rgba(10, 10, 10, 0)");

      ctx.save();
      ctx.fillStyle = glowGradient;
      ctx.fillRect(centerX - 300, startY - 100, 600, beamLength + 300);
      ctx.restore();

      // ── 2. Subtle Secondary Background Beams ──
      const flankBeams = [
        { offset: -width * 0.28, lengthFactor: 0.28, alpha: 0.18, phase: 0.5 },
        { offset: width * 0.32, lengthFactor: 0.24, alpha: 0.15, phase: 1.8 },
      ];

      flankBeams.forEach((flank) => {
        const fx = centerX + flank.offset;
        const fy1 = height * 0.18;
        const flen = height * flank.lengthFactor + Math.sin(elapsed * 0.6 + flank.phase) * 10;
        const fy2 = fy1 + flen;

        const fGrad = ctx.createLinearGradient(fx, fy1, fx, fy2);
        const fPulse = 0.7 + Math.sin(elapsed * 1.5 + flank.phase) * 0.3;
        fGrad.addColorStop(0, "rgba(184, 148, 74, 0)");
        fGrad.addColorStop(0.3, `rgba(184, 148, 74, ${flank.alpha * fPulse})`);
        fGrad.addColorStop(0.7, `rgba(212, 188, 126, ${flank.alpha * 0.8 * fPulse})`);
        fGrad.addColorStop(1, "rgba(184, 148, 74, 0)");

        ctx.strokeStyle = fGrad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(fx, fy1);
        ctx.lineTo(fx, fy2);
        ctx.stroke();
      });

      // ── 3. Main Central Golden Beam (Outer Soft Aura) ──
      const auraGradient = ctx.createLinearGradient(centerX, startY, centerX, endY);
      const auraPulse = 0.8 + Math.sin(elapsed * 1.4) * 0.2;
      auraGradient.addColorStop(0, "rgba(212, 188, 126, 0)");
      auraGradient.addColorStop(0.15, `rgba(184, 148, 74, ${0.45 * auraPulse})`);
      auraGradient.addColorStop(0.5, `rgba(212, 188, 126, ${0.75 * auraPulse})`);
      auraGradient.addColorStop(0.85, `rgba(184, 148, 74, ${0.45 * auraPulse})`);
      auraGradient.addColorStop(1, "rgba(184, 148, 74, 0)");

      ctx.save();
      ctx.shadowColor = "rgba(212, 188, 126, 0.9)";
      ctx.shadowBlur = 18;
      ctx.strokeStyle = auraGradient;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(centerX, startY);
      ctx.lineTo(centerX, endY);
      ctx.stroke();
      ctx.restore();

      // ── 4. Main Central Golden Beam (Sharp Core Line) ──
      const coreGradient = ctx.createLinearGradient(centerX, startY, centerX, endY);
      coreGradient.addColorStop(0, "rgba(255, 250, 235, 0)");
      coreGradient.addColorStop(0.2, "rgba(255, 248, 220, 0.85)");
      coreGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.98)");
      coreGradient.addColorStop(0.8, "rgba(255, 248, 220, 0.85)");
      coreGradient.addColorStop(1, "rgba(255, 250, 235, 0)");

      ctx.save();
      ctx.shadowColor = "rgba(255, 255, 255, 0.95)";
      ctx.shadowBlur = 8;
      ctx.strokeStyle = coreGradient;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(centerX, startY);
      ctx.lineTo(centerX, endY);
      ctx.stroke();
      ctx.restore();

      // ── 5. Traveling Energy Pulse / Shimmer ──
      // An energetic pulse that continuously travels along the vertical beam
      const pulseProgress = (elapsed * 0.45) % 1; // 0 to 1 loop
      const pulseY = startY + pulseProgress * beamLength;
      const pulseLength = 48;

      const shimmerGradient = ctx.createLinearGradient(
        centerX,
        pulseY - pulseLength * 0.5,
        centerX,
        pulseY + pulseLength * 0.5,
      );
      shimmerGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
      shimmerGradient.addColorStop(0.5, "rgba(255, 255, 255, 1)");
      shimmerGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.save();
      ctx.shadowColor = "rgba(255, 240, 200, 1)";
      ctx.shadowBlur = 14;
      ctx.strokeStyle = shimmerGradient;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.moveTo(centerX, pulseY - pulseLength * 0.5);
      ctx.lineTo(centerX, pulseY + pulseLength * 0.5);
      ctx.stroke();
      ctx.restore();

      // ── 6. Floating Golden Micro-Embers / Dust Motes ──
      ctx.save();
      particles.forEach((p) => {
        // Move particle upwards
        p.y -= p.speedY;
        p.x += p.speedX;
        p.phase += p.pulseSpeed;

        // Reset if moved past top of beam area
        if (p.y < 0) {
          p.y = beamLength + 80;
          p.x = (Math.random() - 0.5) * 160;
        }

        const px = centerX + p.x;
        const py = startY + p.y;
        const currentOpacity =
          p.opacity * (0.6 + Math.sin(p.phase) * 0.4) * (1 - Math.abs(p.x) / 160);

        if (currentOpacity > 0.05) {
          ctx.beginPath();
          ctx.arc(px, py, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(235, 215, 160, ${currentOpacity})`;
          ctx.shadowColor = "rgba(212, 188, 126, 0.8)";
          ctx.shadowBlur = 4;
          ctx.fill();
        }
      });
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}

