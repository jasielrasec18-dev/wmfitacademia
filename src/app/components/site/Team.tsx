import { User } from "lucide-react";
import { team } from "@/config/siteConfig";
import { Reveal, SectionTitle } from "./ui";

export function Team() {
  return (
    <section id="estrutura" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionTitle
            kicker="Equipe"
            title={
              <>
                Nossos <span className="text-gold">professores</span>
              </>
            }
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {team.map((member) => (
            <Reveal key={member.name}>
              <article className="chamfer bg-background">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    width={768}
                    height={960}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-top"
                  />
                ) : (
                  <div
                    className="flex aspect-[4/5] items-center justify-center bg-surface-2"
                    aria-label={`Foto de ${member.name} (em breve)`}
                  >
                    <User className="h-16 w-16 text-muted-foreground" aria-hidden />
                  </div>
                )}
                <div className="border-t-4 border-gold p-4">
                  <h3 className="font-display text-xl sm:text-2xl">{member.name}</h3>
                  <p className="text-sm font-semibold text-gold">{member.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
