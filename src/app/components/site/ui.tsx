import { useEffect, useRef, type ReactNode } from "react";

export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  // Placeholder do logo — substitua por <img src="/logo.png" /> quando tiver o arquivo.
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="WM Fit">
      <polygon points="50,3 93,27 93,73 50,97 7,73 7,27" className="fill-gold" />
      <text x="50" y="47" textAnchor="middle" className="fill-gold-foreground font-display" fontSize="24">WM</text>
      <text x="50" y="71" textAnchor="middle" className="fill-gold-foreground font-display" fontSize="18">FIT</text>
    </svg>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({ kicker, title, center = false }: { kicker: string; title: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold ${center ? "justify-center" : ""}`}>
        <span aria-hidden>»</span> {kicker}
      </p>
      <h2 className="mt-2 font-display text-4xl leading-none sm:text-5xl md:text-6xl">{title}</h2>
    </div>
  );
}

export function Chevrons({ side = "left" }: { side?: "left" | "right" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute top-10 hidden font-display text-8xl leading-none text-gold/15 lg:block ${side === "left" ? "left-4" : "right-4"}`}
    >
      {side === "left" ? "»»" : "««"}
    </div>
  );
}
