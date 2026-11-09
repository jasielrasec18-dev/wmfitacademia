import { Instagram, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Reveal, SectionTitle } from "./ui";

export function Location() {
  const a = siteConfig.address;
  return (
    <section id="contato" className="texture py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <SectionTitle
            kicker="Unidades"
            title={
              <>
                Venha nos <span className="text-gold">visitar</span>
              </>
            }
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="chamfer bg-surface p-6">
              <p className="flex items-center gap-2 font-display text-2xl">
                <MapPin className="text-gold" aria-hidden /> Matriz
              </p>
              <p className="mt-3 text-foreground/85">
                {a.street} - {a.district}
                <br />
                {a.city}/{a.state} • CEP {a.zip}
              </p>
              <p className="mt-3 space-y-1 text-sm text-foreground/85">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" aria-hidden />{" "}
                  {siteConfig.phone}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 hover:text-gold"
                >
                  <Mail className="h-4 w-4 text-gold" aria-hidden />{" "}
                  {siteConfig.email}
                </a>
              </p>
              <a
                href={siteConfig.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-5"
              >
                <Navigation className="h-4 w-4" aria-hidden /> Como chegar
              </a>
            </div>
            {siteConfig.branch && (
              <div className="border-2 border-dashed border-border p-6">
                <p className="font-display text-2xl">
                  Conheça também nossa <span className="text-gold">filial</span>
                </p>
                <p className="mt-2 text-muted-foreground">
                  {siteConfig.branch.address}
                </p>
                <a
                  href={siteConfig.branch.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
                >
                  <Instagram className="h-4 w-4" aria-hidden />{" "}
                  {siteConfig.branch.instagramHandle}
                </a>
              </div>
            )}
          </div>
          <div className="min-h-[320px] overflow-hidden border-2 border-gold lg:col-span-3">
            <iframe
              title="Mapa da WM Fit Academia"
              src={siteConfig.mapsEmbed}
              loading="lazy"
              className="h-full min-h-[320px] w-full grayscale"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
