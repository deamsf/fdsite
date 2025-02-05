import { Rocket, Globe, LineChart } from 'lucide-react';

export const services = [
  {
    id: "digitale-strategie",
    icon: Rocket,
    title: "Digitale strategie",
    description: "Ontwikkel een future-proof digitale strategie",
    subtext: "We helpen bedrijven een duidelijke visie ontwikkelen, een gefocuste strategie uit te bouwen en een doeltreffende roadmap op te stellen voor succes. We analyseren behoeften van je gebruikers en klanten, ondersteunen prioritiseringsoefeningen, staan je bij tijdens het realisatietraject en helpen je de juiste conclusies trekken om je product of dienst verder door te ontwikkelen.",
    features: [
      "Definieer je visie en strategie voor je digitale product",
      "Creëer een gestructureerde, slim geprioritiseerde roadmap voor groei en impact",
      "Match je productontwikkeling met klantbehoeften en business doelstellingen",
      "Breng je doelpubliek tot leven met personas"
    ],
    cta: "Let's think!",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    path: "/digitale-strategie"
  },
  {
    id: "consulting",
    icon: LineChart,
    title: "Consulting & advies",
    description: "Optimaliseer je business met onze inzichten en strategische ondersteuning.",
    subtext: "Eerst en vooral maken we grondig kennis met je onderneming. We analyseren je digitale aanpak en helpen je opportuniteiten ontdekken voor groei en efficiëntie. Het digitale landschap kan overweldigend zijn en vol uitdagingen zitten, maar biedt ook volop opportuniteiten. Ga aan de slag met ons actiegericht advies!",
    features: [
      "Diepgaande analyse van je digitale middelen",
      "Optimalisatievoorstellen voor je processen en aanpak",
      "Strategische consulting voor groei en digitale transformatie",
      "Onafhankelijk advies op maat van jouw onderneming"
    ],
    cta: "Let's talk!",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    path: "/consulting-advies"
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