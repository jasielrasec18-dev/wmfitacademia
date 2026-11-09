import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/config/siteConfig";
import { SectionTitle } from "./ui";

export function Testimonials() {
  const [i, setI] = useState(0);
  const n = testimonials.length;
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % n), 6000);
    return () => clearInterval(id);
  }, [n]);
  const t = testimonials[i] ?? testimonials[0]!;
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <SectionTitle center kicker="Depoimentos" title={<>Quem treina <span className="text-gold">recomenda</span></>} />
        <div className="relative mt-10 bg-background p-8 sm:p-12" aria-live="polite">
          <Quote className="mx-auto h-10 w-10 text-gold" aria-hidden />
          <p className="mt-4 text-xl leading-relaxed sm:text-2xl">“{t.text}”</p>
          <p className="mt-6 font-display text-xl text-gold">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.since}</p>
          <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground/70">Depoimento de exemplo - editável</p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button onClick={() => setI((i - 1 + n) % n)} className="border border-border p-2 hover:border-gold" aria-label="Depoimento anterior"><ChevronLeft /></button>
          {testimonials.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Depoimento ${k + 1}`} className={`h-2 w-8 ${k === i ? "bg-gold" : "bg-surface-2"}`} />
          ))}
          <button onClick={() => setI((i + 1) % n)} className="border border-border p-2 hover:border-gold" aria-label="Próximo depoimento"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}