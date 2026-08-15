"use client";

import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  copper: boolean;
};

function OpeningLoader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setHidden(true);
      return;
    }

    let frame = 0;
    const started = performance.now();
    const duration = 1050;

    const update = (now: number) => {
      const elapsed = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 2.6);
      setProgress(Math.min(100, Math.round(eased * 100)));

      if (elapsed < 1) {
        frame = requestAnimationFrame(update);
      } else {
        window.setTimeout(() => setLeaving(true), 140);
        window.setTimeout(() => setHidden(true), 1260);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, []);

  if (hidden) return null;

  return (
    <div className={`opening-loader${leaving ? " is-leaving" : ""}`} role="status" aria-label={`Loading NASH Barber, ${progress}%`}>
      <div className="opening-loader-panels" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => <i key={index} />)}
      </div>
      <a className="opening-loader-brand" href="#top" aria-label="NASH Barber home">
        <span>NASH</span>
        <small>BARBER · LYMINGTON</small>
      </a>
      <p className="opening-loader-caption">Kurdish precision · Lymington character</p>
      <div className="opening-loader-progress">
        <div className="opening-loader-number"><span>{progress}</span><small>%</small></div>
        <div className="opening-loader-bar" aria-hidden="true"><i style={{ transform: `scaleX(${progress / 100})` }} /></div>
      </div>
    </div>
  );
}

function RevealController() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-title]"));
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-reveal='image'])"));
    const titleParents = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-title]"))
      .map((title) => title.parentElement)
      .filter((parent): parent is HTMLElement => Boolean(parent));
    const imageParents = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal='image']"))
      .map((item) => item.parentElement)
      .filter((parent): parent is HTMLElement => Boolean(parent));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        entry.target.querySelectorAll<HTMLElement>("[data-reveal-title], [data-reveal='image']")
          .forEach((item) => item.classList.add("is-visible"));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8%" });

    const aboveFold = new Set(document.querySelectorAll<HTMLElement>(".nav[data-reveal], .hero [data-reveal], .hero [data-reveal-title]"));
    aboveFold.forEach((item) => item.classList.add("is-visible"));
    new Set([...revealItems, ...titleParents, ...imageParents])
      .forEach((item) => {
        if (!aboveFold.has(item)) observer.observe(item);
      });
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}

export function ParticleField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let particles: Particle[] = [];

    const createParticles = () => {
      const count = width < 700 ? 20 : 42;
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.16,
        vy: -0.05 - Math.random() * 0.14,
        radius: index % 7 === 0 ? 1.8 : 0.7 + Math.random() * 0.9,
        alpha: 0.16 + Math.random() * 0.34,
        copper: index % 4 === 0,
      }));
    };

    const resize = () => {
      const bounds = parent.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createParticles();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.y < -8) particle.y = height + 8;
        if (particle.x < -8) particle.x = width + 8;
        if (particle.x > width + 8) particle.x = -8;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = particle.copper
          ? `rgba(207, 106, 61, ${particle.alpha})`
          : `rgba(241, 234, 220, ${particle.alpha})`;
        context.fill();

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex];
          const xDistance = particle.x - other.x;
          const yDistance = particle.y - other.y;
          const distance = Math.hypot(xDistance, yDistance);
          if (distance > 105) continue;

          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.strokeStyle = `rgba(227, 161, 130, ${(1 - distance / 105) * 0.055})`;
          context.lineWidth = 0.6;
          context.stroke();
        }
      }

      frame = requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    resize();
    frame = requestAnimationFrame(draw);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className={`particle-field ${className}`} aria-hidden="true" />;
}

export default function MotionSystem() {
  return (
    <>
      <OpeningLoader />
      <RevealController />
    </>
  );
}
