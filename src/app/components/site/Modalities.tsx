import { Activity, Dumbbell, Footprints, Music, Rocket, Swords, type LucideIcon } from "lucide-react";
import { modalities, waLink } from "@/config/siteConfig";
import { Chevrons, Reveal, SectionTitle } from "./ui";

const icons: Record<string, LucideIcon> = { Dumbbell, Footprints, Rocket, Music, Swords, Activity };

export function Modalities() {
  return (
    <section id="modalidades" className="texture relative py-20 md:py-28">
      <Chevrons side="right" />
      <div className="mx-auto max-w-7xl px-4">
        <Reveal><SectionTitle kicker="Modalidades" title={<>Escolha seu <span className="text-gold">treino</span></>} /></Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modalities.map((m) => {
            const Icon = icons[m.icon] ?? Activity;
            return (
              <Reveal key={m.name}>
                <article className="chamfer group flex h-full flex-col border-2 border-transparent bg-surface p-6 transition-colors hover:border-gold">
                  <div className="flex h-14 w-14 items-center justify-center bg-gold text-gold-foreground"><Icon className="h-7 w-7" aria-hidden /></div>
                  <h3 className="mt-5 font-display text-3xl">{m.name}</h3>
                  <p className="mt-2 flex-1 text-muted-foreground">{m.desc}</p>
                  <a href={waLink(`Olá! Vim pelo site e quero experimentar ${m.name} na WM Fit.`)} target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-extrabold uppercase tracking-wide text-gold group-hover:underline">
                    Quero experimentar »
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}