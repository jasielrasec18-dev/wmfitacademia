import { useEffect, useState } from "react";
import { offer, waLink } from "@/config/siteConfig";
import { Reveal } from "./ui";

function useCountdown(target: string) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const t = new Date(target).getTime();
    const tick = () => setLeft(Math.max(0, t - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  const v = left ?? 0;
  return [
    { label: "Dias", value: Math.floor(v / 86400000) },
    { label: "Horas", value: Math.floor((v / 3600000) % 24) },
    { label: "Min", value: Math.floor((v / 60000) % 60) },
    { label: "Seg", value: Math.floor((v / 1000) % 60) },
  ];
}

export function Offer() {
  const units = useCountdown(offer.endsAt);
  if (!offer.enabled) return null;
  return (
    <section id="planos" className="texture py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="relative overflow-hidden border-2 border-gold bg-surface">
            <div className="stripes h-3" aria-hidden />
            <div className="mx-auto mt-6 w-fit -rotate-2 bg-destructive sm:absolute sm:right-4 sm:top-7 sm:mt-0 sm:rotate-6 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-destructive-foreground">{offer.badge}</div>
            <div className="p-6 text-center sm:p-12">
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-gold">{offer.tag}</p>
              <h2 className="mt-3 font-display text-4xl leading-none sm:text-6xl">{offer.title}</h2>
              <p className="mt-6 text-lg text-foreground/85">{offer.headline}</p>
              <p className="mt-1 font-display text-7xl leading-none text-gold sm:text-8xl">{offer.price}</p>
              <p className="mt-1 text-lg font-semibold">{offer.priceSuffix}</p>
              <div className="mx-auto mt-8 grid max-w-md grid-cols-4 gap-2" aria-label="Tempo restante da oferta">
                {units.map((u) => (
                  <div key={u.label} className="bg-background py-3">
                    <p className="font-display text-3xl tabular-nums sm:text-4xl">{String(u.value).padStart(2, "0")}</p>
                    <p className="text-xs uppercase text-muted-foreground">{u.label}</p>
                  </div>
                ))}
              </div>
              <a href={waLink(offer.waMessage)} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8 w-full sm:w-auto">{offer.cta}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}