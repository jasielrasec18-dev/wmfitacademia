import { useState, type FormEvent } from "react";
import { modalities, waLink } from "@/config/siteConfig";

export function Trial() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mod, setMod] = useState<string>(modalities[0].name);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Vim pelo site e quero agendar uma aula experimental na WM Fit.\nNome: ${name}\nWhatsApp: ${phone}\nModalidade: ${mod}`;
    window.open(waLink(msg), "_blank", "noopener");
  };

  const field = "w-full border-2 border-gold-foreground bg-gold px-4 py-3 font-semibold text-gold-foreground placeholder:text-gold-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold-foreground";

  return (
    <section id="aula-experimental" className="bg-gold py-20 text-gold-foreground md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="font-display text-2xl">»» Você é nosso convidado!</p>
          <h2 className="mt-2 font-display text-5xl leading-[0.95] md:text-6xl">Venha fazer uma aula experimental.</h2>
          <p className="mt-4 text-lg font-medium">Preencha e fale direto com a nossa equipe no WhatsApp. É grátis.</p>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <label className="block"><span className="sr-only">Nome</span>
            <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome" className={field} autoComplete="name" />
          </label>
          <label className="block"><span className="sr-only">WhatsApp</span>
            <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Seu WhatsApp" className={field} autoComplete="tel" />
          </label>
          <label className="block"><span className="sr-only">Modalidade de interesse</span>
            <select value={mod} onChange={(e) => setMod(e.target.value)} className={field}>
              {modalities.map((m) => <option key={m.name}>{m.name}</option>)}
            </select>
          </label>
          <button type="submit" className="btn-dark w-full">Agendar pelo WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
