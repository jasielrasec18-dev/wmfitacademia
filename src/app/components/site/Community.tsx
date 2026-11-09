import { Instagram } from "lucide-react";
import dance from "@/assets/gallery-dance.jpg";
import muay from "@/assets/gallery-muaythai.jpg";
import step from "@/assets/gallery-step.jpg";
import hero from "@/assets/hero-gym.jpg";
import { siteConfig } from "@/config/siteConfig";
import { Chevrons, Reveal, SectionTitle } from "./ui";

const photos = [
  {
    src: step,
    alt: "Aula de Step no evento Outubro Rosa",
    cls: "col-span-2 row-span-2",
  },
  { src: dance, alt: "Aula de FitDance", cls: "" },
  { src: muay, alt: "Treino de Muay Thai", cls: "" },
  { src: hero, alt: "Treino de musculação", cls: "col-span-2", pos: "object-[65%_15%]" },
];

export function Community() {
  return (
    <section className="texture relative py-20 md:py-28">
      <Chevrons side="right" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionTitle
              kicker={
                siteConfig.followers ? `+${siteConfig.followers} seguidores` : "Comunidade WM Fit"
              }
              title={
                <>
                  Mais que uma academia, <span className="text-gold">uma comunidade</span>
                </>
              }
            />
          </Reveal>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold shrink-0"
          >
            <Instagram className="h-5 w-5" aria-hidden /> Siga {siteConfig.instagramHandle}
          </a>
        </div>
        <div className="mt-10 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {photos.map((p) => (
            <div key={p.alt} className={`overflow-hidden ${p.cls}`}>
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${p.pos ?? ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
