import { Clock, Instagram, Users } from "lucide-react";
import hero from "@/assets/hero-gym.jpg";
import { siteConfig, waLink } from "@/config/siteConfig";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <img
        src={hero}
        alt="Aluno treinando levantamento terra na WM Fit"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/30" />
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-background/90 to-transparent md:w-2/3" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-28 md:pb-16">
        <p className="mb-4 inline-block bg-gold px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-gold-foreground">
          Petrolina • PE
        </p>
        <h1 className="max-w-3xl font-display text-6xl leading-[0.9] sm:text-7xl md:text-8xl">
          Treine no seu horário <span className="text-gold">Sinta-se bem de verdade</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-foreground/85">
          Horários flexíveis para treinar e se sentir bem. Musculação e aulas coletivas em
          Petrolina.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold">
            Agendar aula experimental
          </a>
          <a href="#horarios" className="btn-outline-gold">
            Ver horários
          </a>
        </div>
        <ul className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {[
            { icon: Clock, text: "Aberta das 05h à 00h" },
            {
              icon: Instagram,
              text: siteConfig.followers
                ? `+${siteConfig.followers} seguidores`
                : "Acompanhe nosso Instagram",
            },
            { icon: Users, text: "Aulas coletivas para todos" },
          ].map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-center gap-3 bg-background/90 px-5 py-4 font-semibold"
            >
              <Icon className="h-5 w-5 text-gold" aria-hidden /> {text}
            </li>
          ))}
        </ul>
      </div>
      <div className="stripes relative h-3 w-full" aria-hidden />
    </section>
  );
}
