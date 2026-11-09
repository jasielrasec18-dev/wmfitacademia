import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/siteConfig";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Modalities } from "@/components/site/Modalities";
import { Schedule } from "@/components/site/Schedule";
import { Offer } from "@/components/site/Offer";
import { Trial } from "@/components/site/Trial";
import { Team } from "@/components/site/Team";
import { Community } from "@/components/site/Community";
import { Testimonials } from "@/components/site/Testimonials";
import { Location } from "@/components/site/Location";
import { Faq } from "@/components/site/Faq";
import { FinalCta, Footer, WhatsAppFloat } from "@/components/site/Footer";

const title = "WM Fit Academia Petrolina | Musculação e Aulas Coletivas";
const description =
  "Academia em Petrolina aberta das 05h à 00h. Musculação, Step, Jump, FitDance e Muay Thai. Agende sua aula experimental grátis pelo WhatsApp.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: siteConfig.name,
  sameAs: [siteConfig.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "BR",
  },
  openingHours: siteConfig.openingHours.map((h) => h.schema),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Modalities />
        <Schedule />
        <Offer />
        <Trial />
        <Team />
        <Community />
        <Testimonials />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
