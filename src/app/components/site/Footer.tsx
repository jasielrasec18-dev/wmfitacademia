import { Instagram, MessageCircle } from "lucide-react";
import { siteConfig, waLink } from "@/config/siteConfig";
import { Logo } from "./ui";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 text-center md:py-28">
      <div className="stripes absolute inset-x-0 top-0 h-3" aria-hidden />
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="font-display text-5xl leading-[0.95] sm:text-7xl">
          Seu próximo treino <span className="text-gold">começa agora.</span>
        </h2>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold mt-8"
        >
          <MessageCircle className="h-5 w-5" aria-hidden /> Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const a = siteConfig.address;
  return (
    <footer className="border-t border-border bg-surface pb-24 pt-12 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4">
        <div>
          <Logo className="h-14 w-14" />
          <p className="mt-3 text-sm text-muted-foreground">
            {siteConfig.cref}
          </p>
        </div>
        <div>
          <p className="font-display text-xl text-gold">Endereço</p>
          <p className="mt-2 text-sm text-muted-foreground">
            {a.street} - {a.district}
            <br />
            {a.city}/{a.state} • {a.zip}
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-2 block text-sm text-muted-foreground hover:text-gold"
          >
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="block text-sm text-muted-foreground hover:text-gold"
          >
            {siteConfig.email}
          </a>
        </div>
        <div>
          <p className="font-display text-xl text-gold">Horários</p>
          <ul className="mt-2 text-sm text-muted-foreground">
            {siteConfig.openingHours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.hours}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-display text-xl text-gold">Redes</p>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm hover:text-gold"
          >
            <Instagram className="h-4 w-4" aria-hidden />{" "}
            {siteConfig.instagramHandle}
          </a>
          {siteConfig.branch && (
            <>
              <a
                href={siteConfig.branch.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center gap-2 text-sm hover:text-gold"
              >
                <Instagram className="h-4 w-4" aria-hidden />{" "}
                {siteConfig.branch.instagramHandle} (filial)
              </a>
              <p className="mt-3 text-sm text-muted-foreground">
                Filial: {siteConfig.branch.address}
              </p>
            </>
          )}
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground shadow-lg transition-transform hover:scale-110 animate-in zoom-in"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
