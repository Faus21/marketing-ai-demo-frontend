"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  phase: number;
};

type FloatingShape = {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  driftX: number;
  driftY: number;
  opacity: number;
  type: "ring" | "cross" | "dot-cluster";
};

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shapesRef = useRef<FloatingShape[]>([]);
  const frameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      canvas!.style.width = `${window.innerWidth}px`;
      canvas!.style.height = `${window.innerHeight}px`;
      ctx!.scale(dpr, dpr);
    }

    function initStars() {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 8000);
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        speed: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function initShapes() {
      const types: FloatingShape["type"][] = ["ring", "cross", "dot-cluster"];
      shapesRef.current = Array.from({ length: 6 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 30 + 15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.003,
        driftX: (Math.random() - 0.5) * 0.15,
        driftY: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.06 + 0.03,
        type: types[Math.floor(Math.random() * types.length)],
      }));
    }

    function drawStar(star: Star, time: number) {
      if (!ctx) return;
      const twinkle = Math.sin(time * star.speed + star.phase) * 0.5 + 0.5;
      const alpha = star.opacity * (0.4 + twinkle * 0.6);

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 200, 220, ${alpha})`;
      ctx.fill();

      // Subtle glow on brighter stars
      if (star.size > 0.8 && twinkle > 0.7) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(140, 140, 200, ${alpha * 0.1})`;
        ctx.fill();
      }
    }

    function drawShape(shape: FloatingShape) {
      if (!ctx) return;

      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = shape.opacity;

      const accent = "rgba(140, 130, 220,";

      if (shape.type === "ring") {
        ctx.beginPath();
        ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
        ctx.strokeStyle = `${accent} 1)`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if (shape.type === "cross") {
        ctx.beginPath();
        ctx.moveTo(-shape.size * 0.5, 0);
        ctx.lineTo(shape.size * 0.5, 0);
        ctx.moveTo(0, -shape.size * 0.5);
        ctx.lineTo(0, shape.size * 0.5);
        ctx.strokeStyle = `${accent} 1)`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      } else if (shape.type === "dot-cluster") {
        const positions = [
          [0, 0],
          [shape.size * 0.3, shape.size * 0.2],
          [-shape.size * 0.2, shape.size * 0.35],
          [shape.size * 0.15, -shape.size * 0.3],
        ];
        for (const [dx, dy] of positions) {
          ctx.beginPath();
          ctx.arc(dx, dy, 1, 0, Math.PI * 2);
          ctx.fillStyle = `${accent} 1)`;
          ctx.fill();
        }
      }

      ctx.restore();
    }

    function updateShapes() {
      const w = window.innerWidth;
      const h = window.innerHeight;

      for (const shape of shapesRef.current) {
        shape.x += shape.driftX;
        shape.y += shape.driftY;
        shape.rotation += shape.rotationSpeed;

        // Wrap around edges with padding
        if (shape.x < -60) shape.x = w + 50;
        if (shape.x > w + 60) shape.x = -50;
        if (shape.y < -60) shape.y = h + 50;
        if (shape.y > h + 60) shape.y = -50;
      }
    }

    function animate(timestamp: number) {
      if (!ctx || !canvas) return;

      const time = timestamp * 0.001;
      timeRef.current = time;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw stars
      for (const star of starsRef.current) {
        drawStar(star, time);
      }

      // Draw & update shapes
      updateShapes();
      for (const shape of shapesRef.current) {
        drawShape(shape);
      }

      frameRef.current = requestAnimationFrame(animate);
    }

    resize();
    initStars();
    initShapes();
    frameRef.current = requestAnimationFrame(animate);

    function handleResize() {
      resize();
      initStars();
      initShapes();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
