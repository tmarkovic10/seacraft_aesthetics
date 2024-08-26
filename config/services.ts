import { Image } from "@/types/image";

export interface Services {
  id: number;
  title: string;
  description: string;
  image: Image;
  features: string[];
  carouselImages: Image[];
}

const services: Services[] = [
  {
    id: 1,
    title: "Uređenje podvodnog dijela plovila",
    description:
      "Za očuvanje optimalne funkcionalnosti i dugotrajne zaštite podvodnog dijela vašeg plovila, nudimo sveobuhvatan set usluga održavanja, uključujući:",
    image: {
      src: "/images/service1/item1.webp",
      alt: "service",
    },
    features: [
      "Ispiranje slatkom vodom pod visokim tlakom",
      "Brušenje dna za uklanjanje neravnina",
      "Kemijsko pranje površina",
      "Brušenje metalnih dijelova za uklanjanje starog zaštitnog premaza",
      "Zamjena cink protektora",
      "Priprema i primjena antivegetativnog premaza",
    ],
    carouselImages: [
      {
        src: "/images/service1/service2.webp",
        alt: "service",
      },
      {
        src: "/images/service1/service1.webp",
        alt: "service",
      },
      {
        src: "/images/service1/service3.webp",
        alt: "service",
      },
      {
        src: "/images/service1/service4.webp",
        alt: "service",
      },
      {
        src: "/images/service1/service5.webp",
        alt: "service",
      },
      {
        src: "/images/service1/service6.webp",
        alt: "service",
      },
    ],
  },
  {
    id: 2,
    title: "Održavanje vanjskih površina",
    description:
      "Za postizanje besprijekornog izgleda i dugotrajne zaštite vašeg plovila, nudimo kompletan spektar usluga poliranja i održavanja vanjskih površina, uključujući:",
    image: {
      src: "/images/service2/item1.webp",
      alt: "service",
    },
    features: [
      "Čišćenje plovila visokotlačnim uređajima",
      "Uklanjanje oksidacije brušenjem kod težih oštećenja gelcoata",
      "Pranje s vrhunskim detergentima",
      "Dekontaminacija površina",
      "Eliminacija vodenih mrlja i kamenca",
      "Uklanjanje korozije",
      "Uklanjanje starih naljepnica",
      "Obnavljanje protukliznih površina",
      "Održavanje tikovine (čišćenje, brušenje, zaštita)",
      "Dubinsko čišćenje tendi i jastuka kemijskim sredstvima",
      "Poliranje i zaštita vanjskih površina",
      "Poliranje i zaštita inox dijelova",
    ],
    carouselImages: [
      {
        src: "/images/service2/service2.webp",
        alt: "service",
      },
      {
        src: "/images/service2/service3.webp",
        alt: "service",
      },
      {
        src: "/images/service2/service4.webp",
        alt: "service",
      },
      {
        src: "/images/service2/service1.webp",
        alt: "service",
      },
      {
        src: "/images/service2/service5.webp",
        alt: "service",
      },
    ],
  },
  {
    id: 3,
    title: "Održavanje unutarnjih površina",
    description:
      "Za postizanje besprijekornog izgleda i dugotrajne zaštite unutarnjih prostora vašeg broda, nudimo sveobuhvatan spektar usluga čišćenja i održavanja unutarnjih površina bez obzira na materijal:",
    image: {
      src: "/images/service3/service2.webp",
      alt: "service",
    },
    features: [
      "Plastika",
      "Drvo",
      "Metal",
      "Staklo",
      "Pleksiglas",
      "Tkanina",
      "Prava koža",
      "Umjetna koža",
    ],
    carouselImages: [
      {
        src: "/images/service3/service1.webp",
        alt: "service",
      },
      {
        src: "/images/service3/service2.webp",
        alt: "service",
      },
      {
        src: "/images/service3/service3.webp",
        alt: "service",
      },
      {
        src: "/images/service3/service4.webp",
        alt: "service",
      },
      {
        src: "/images/service3/service5.webp",
        alt: "service",
      },
      {
        src: "/images/service3/service6.webp",
        alt: "service",
      },
    ],
  },
  {
    id: 4,
    title: "Termoskupljajuće folije",
    description:
      "Za maksimalnu zaštitu i očuvanje vašeg plovila tijekom skladištenja i transporta, nudimo cjelovitu uslugu primjene termoskupljajućih folija.",
    image: {
      src: "/images/service4/service1.webp",
      alt: "service",
    },
    features: [
      "Dokazano najbolja zaštita od vremenskih nepogoda (kiselih kiša) i onečišćenja.",
      "Otporna na udare jakih jetrova i preko 150 km/sat",
      "Patentirana matrična konstrukcija onemogućuje paranje shrink wrap folije",
      "Zaštita od UV sunčanih zraka koje štete gelcoat-u",
      "Zaštita od agresivnog utjecaja morske vode",
      "Antikorozivna zaštita",
      "Zaštita od manjih oštećenja",
    ],
    carouselImages: [
      {
        src: "/images/service4/service1.webp",
        alt: "service",
      },
    ],
  },
  {
    id: 5,
    title: "Usluge skipera",
    description:
      "Za osiguranje sigurnog i ugodnog iskustva plovidbe vašeg plovila, nudimo kompletan spektar usluga skippera, uključujući:",
    image: {
      src: "/images/service5/service1.webp",
      alt: "service",
    },
    features: [
      "Navigacija i upravljanje plovilom",
      "Planiranje rute i savjetovanje o destinacijama",
      "Organizacija dnevnih aktivnosti na moru",
      "Pomoć pri ukrcaju i iskrcaju",
      "Vođenje brige o sigurnosti posade i putnika",
    ],
    carouselImages: [
      {
        src: "/images/service5/service2.webp",
        alt: "service",
      },
      {
        src: "/images/service5/service3.webp",
        alt: "service",
      },
      {
        src: "/images/service5/service4.webp",
        alt: "service",
      },
      {
        src: "/images/service5/service5.webp",
        alt: "service",
      },
      {
        src: "/images/service5/service6.webp",
        alt: "service",
      },
      {
        src: "/images/service5/service7.webp",
        alt: "service",
      },
      {
        src: "/images/service5/service8.webp",
        alt: "service",
      },
    ],
  },
];
export default services;
