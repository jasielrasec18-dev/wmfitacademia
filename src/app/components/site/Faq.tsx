import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/config/siteConfig";
import { SectionTitle } from "./ui";

export function Faq() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4">
        <SectionTitle center kicker="Dúvidas" title={<>Perguntas <span className="text-gold">frequentes</span></>} />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="border-border">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
