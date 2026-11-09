import alessandra from "@/assets/team-alessandra.jpg";
import klu from "@/assets/team-klu.jpg";
import luizGustavo from "@/assets/team-luiz-gustavo.jpg";
import liuXavier from "@/assets/team-liu-xavier.jpg";

type OpeningHours = {
  days: string;
  hours: string;
  schema: string;
};

export const siteConfig = {
  name: "WM Fit Academia",
  // ATENÇÃO: contatos, endereços e links abaixo são FICTÍCIOS (projeto em
  // negociação). Substituir pelos dados reais quando o cliente fechar.
  instagram: "https://www.instagram.com/exemplo.wmfit/",
  instagramHandle: "@exemplo.wmfit",
  followers: "12,8 mil",
  cref: "CREF 000000-PJ",
  phone: "(87) 3000-0000",
  phoneHref: "tel:+558730000000",
  email: "contato@exemplo-wmfit.com.br",
  address: {
    street: "Rua das Palmeiras, 123",
    district: "Bairro Centro",
    city: "Petrolina",
    state: "PE",
    zip: "56300-000",
  },
  openingHours: [
    {
      days: "Seg a Sex",
      hours: "05h - 00h",
      schema: "Mo-Fr 05:00-24:00",
    },
    {
      days: "Sábado",
      hours: "07h - 19h",
      schema: "Sa 07:00-19:00",
    },
    {
      days: "Domingo",
      hours: "07h - 12h",
      schema: "Su 07:00-12:00",
    },
  ] satisfies OpeningHours[],
  // Mapa fictício: aponta para o centro da cidade, não para um endereço real.
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Petrolina,+PE",
  mapsEmbed: "https://www.google.com/maps?q=Petrolina,+PE&output=embed",
  branch: {
    address: "Av. Exemplo, 456 - Bairro Jardim - Petrolina/PE",
    instagram: "https://www.instagram.com/exemplo.wmfit.filial/",
    instagramHandle: "@exemplo.wmfit.filial",
  },
  whatsappNumber: "5587900000000",
};

export const navLinks = [
  { id: "modalidades", label: "Modalidades" },
  { id: "horarios", label: "Horários" },
  { id: "planos", label: "Planos" },
  { id: "estrutura", label: "Estrutura" },
  { id: "contato", label: "Contato" },
];

export const modalities = [
  {
    name: "Musculação",
    desc: "Equipamentos completos para ganhar força e definição no seu ritmo.",
    icon: "Dumbbell",
  },
  {
    name: "Step",
    desc: "Aula aeróbica coreografada que queima calorias e melhora o condicionamento.",
    icon: "Footprints",
  },
  {
    name: "Jump",
    desc: "Treino no mini trampolim, intenso, divertido e de baixo impacto.",
    icon: "Rocket",
  },
  {
    name: "FitDance",
    desc: "Dance os hits do momento e treine sem perceber o tempo passar.",
    icon: "Music",
  },
  {
    name: "Muay Thai",
    desc: "Arte marcial tailandesa para defesa pessoal, foco e muito suor.",
    icon: "Swords",
  },
  {
    name: "Funcional",
    desc: "Movimentos naturais para mais mobilidade, resistência e equilíbrio.",
    icon: "Activity",
  },
];

export const schedule = [
  {
    period: "Manhã",
    slots: [
      {
        modality: "Step",
        days: "Seg / Qua / Sex",
        teacher: "Prof. Alessandra",
        time: "08h - 09h",
      },
      {
        modality: "Jump",
        days: "Ter / Qui",
        teacher: "Prof. Alessandra",
        time: "08h",
      },
      {
        modality: "FitDance",
        days: "Ter / Qui",
        teacher: "Prof. Klu",
        time: "09h - 10h",
      },
    ],
  },
  {
    period: "Noite",
    slots: [
      {
        modality: "FitDance",
        days: "Seg / Qua / Sex",
        teacher: "Prof. Klu",
        time: "19h - 20h",
      },
      {
        modality: "Step",
        days: "Seg / Qua",
        teacher: "",
        time: "20h - 21h",
      },
      {
        modality: "Jump",
        days: "Seg / Ter / Qui",
        teacher: "Prof. Alessandra",
        time: "20h30",
      },
      {
        modality: "Muay Thai",
        days: "Ter / Qui",
        teacher: "Prof. Luiz Gustavo",
        time: "19h30 - 20h30",
      },
    ],
  },
  {
    period: "Sábado",
    slots: [
      {
        modality: "Muay Thai",
        days: "Sábado",
        teacher: "Prof. Luiz Gustavo",
        time: "16h - 18h",
      },
    ],
  },
];

export const offer = {
  enabled: true,
  endsAt: "2026-11-30T23:59:59-03:00",
  badge: "Vagas limitadas",
  tag: "Black Friday",
  title: "BLACK FRIDAY WM ACADEMIA",
  headline: "Antecipe 3 meses e pague apenas",
  price: "R$ 90,00",
  priceSuffix: "por cada mês",
  waMessage:
    "Olá! Vim pelo site e quero garantir a oferta Black Friday da WM Fit (3 meses por R$ 90,00/mês).",
  cta: "Garantir minha oferta",
};

export const faqs = [
  {
    q: "Preciso agendar para a aula experimental?",
    a: "Sim. Agende pelo WhatsApp para garantirmos o melhor horário para você.",
  },
  {
    q: "Quais os horários de funcionamento?",
    a: "Seg a Sex das 05h às 00h, sábado das 07h às 19h e domingo das 07h às 12h.",
  },
  {
    q: "Posso treinar em qualquer horário?",
    a: "Sim! A musculação é livre durante todo o horário de funcionamento.",
  },
  {
    q: "Quais modalidades estão inclusas no plano?",
    a: "Musculação e aulas coletivas. Confirme os detalhes do seu plano pelo WhatsApp.",
  },
  {
    q: "Como funciona o plano promocional?",
    a: "Você antecipa 3 meses e paga R$ 90,00 por cada mês. Vagas limitadas.",
  },
];

export const testimonials = [
  {
    text: "Os horários flexíveis mudaram minha rotina. Treino às 5h antes do trabalho!",
    name: "Aluna exemplo",
    since: "Aluna há 1 ano",
  },
  {
    text: "O Muay Thai com o Prof. Luiz é sensacional. Ambiente top e galera parceira.",
    name: "Aluno exemplo",
    since: "Aluno há 6 meses",
  },
  {
    text: "FitDance e Step são minhas aulas favoritas. Saio renovada toda vez.",
    name: "Aluna exemplo",
    since: "Aluna há 2 anos",
  },
];

// Fotos geradas por IA (pessoas fictícias) — substituir pelas fotos reais.
export const team: { name: string; role: string; photo?: string }[] = [
  { name: "Prof. Alessandra", role: "Step / Jump", photo: alessandra },
  { name: "Prof. Klu", role: "FitDance", photo: klu },
  { name: "Prof. Luiz Gustavo", role: "Muay Thai", photo: luizGustavo },
  { name: "Prof. Liu Xavier", role: "Jump", photo: liuXavier },
];

export function waLink(
  message = "Olá! Vim pelo site e quero agendar uma aula experimental na WM Fit.",
) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
