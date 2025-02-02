import { Rocket, Globe, LineChart } from 'lucide-react';

export const services = [
  {
    id: "digital-strategy",
    icon: Rocket,
    title: "Digitale Strategie",
    description: "Shape a future-proof digital strategy",
    subtext: "We help businesses develop a clear roadmap for their digital products and services. From defining the vision to implementing a structured plan, we ensure your strategy is actionable, user-centered and results-driven.",
    features: [
      "Define your digital product vision & strategy",
      "Create structured roadmaps for growth & market positioning",
      "Align product development with customer needs and business goals",
      "Bring your users to life using user personas"
    ],
    cta: "Let's think!",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    path: "/digital-strategy"
  },
  {
    id: "business-audit",
    icon: LineChart,
    title: "Consulting & advies",
    description: "Optimaliseer je business met onze inzichten en strategische ondersteuning.",
    subtext: "We analyze your operations, workflows, and market positioning to uncover opportunities for growth and efficiency. Whether you need a full audit, consulting, or tailored business advice, we deliver actionable solutions.",
    features: [
      "In-depth business performance audits",
      "Process optimization for increased efficiency",
      "Strategic consulting for growth & digital transformation",
      "Independent expert advice to improve decision-making"
    ],
    cta: "Let's talk!",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    path: "/business-audit"
  },
   {
    id: "websites",
    icon: Globe,
    title: "Websites",
    description: "Jouw onepager website, zonder gedoe",
    subtext: "Voor kleine bedrijven en starters is het belangrijk dat een website doet wat het moet doen en verder geen zorgen oplevert. Soms heb je nu eenmaal geen nood aan de gekste tierlantijntjes. Wij maken unieke, professionele onepager websites die er geweldig uitzien en resultaten opleveren, voor een onverslaanbare prijs.",
    features: [
      "Prachtig, uniek en ook geschikt voor mobiel",
      "No-nonsense en op maat, zonder gedoe met templates",
      "Geen gedoe met restrictieve templates of online platformen",
      "Geoptimaliseerd zoals het hoort voor online vindbaarheid (SEO)",
      "Gewoon wat je nodig hebt, zéér betaalbaar en zonder verborgen kosten"
    ],
    cta: "Let's build!",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200",
    path: "/websites"
  }
] as const;