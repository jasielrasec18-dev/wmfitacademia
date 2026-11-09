import { Clock } from "lucide-react";
import { schedule, siteConfig } from "@/config/siteConfig";
import { Chevrons, Reveal, SectionTitle } from "./ui";

export function Schedule() {
  return (
    <section id="horarios" className="relative bg-surface py-20 md:py-28">
      <Chevrons />
      <div className="mx-auto max-w-7xl px-4">
        <Reveal><SectionTitle kicker="Cronograma" title={<>Aulas <span className="text-gold">coletivas</span></>} /></Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {schedule.map((p) => (
            <Reveal key={p.period}>
              <div className="h-full bg-background">
                <h3 className="bg-gold px-5 py-3 font-display text-2xl text-gold-foreground">{p.period}</h3>
                <ul className="divide-y divide-border">
                  {p.slots.map((s, i) => (
                    <li key={i} className="flex items-start justify-between gap-4 px-5 py-4">
                      <div>
                        <p className="font-display text-2xl">{s.modality}</p>
                        <p className="text-sm text-muted-foreground">{s.days}{s.teacher ? ` • ${s.teacher}` : ""}</p>
                      </div>
                      <span className="whitespace-nowrap font-bold text-gold">{s.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <div className="flex flex-col gap-4 border border-border bg-background p-6 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 font-display text-2xl"><Clock className="text-gold" aria-hidden /> Funcionamento</p>
            <ul className="flex flex-col gap-2 md:flex-row md:gap-8">
              {siteConfig.openingHours.map((h) => (
                <li key={h.days}><span className="text-muted-foreground">{h.days}</span> <strong className="text-gold">{h.hours}</strong></li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
