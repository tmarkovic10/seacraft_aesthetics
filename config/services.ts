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
      src: "/images/service1/item1.jpg",
      alt: "boat",
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
        alt: "boat",
      },
      {
        src: "/images/service1/service1.webp",
        alt: "boat",
      },
      {
        src: "/images/service1/service3.webp",
        alt: "boat",
      },
      {
        src: "/images/service1/service4.webp",
        alt: "boat",
      },
      {
        src: "/images/service1/service5.webp",
        alt: "boat",
      },
      {
        src: "/images/service1/service6.webp",
        alt: "boat",
      },
    ],
  },
  {
    id: 2,
    title: "Održavanje vanjskih površina",
    description:
      "Za postizanje besprijekornog izgleda i dugotrajne zaštite vašeg plovila, nudimo kompletan spektar usluga poliranja i održavanja vanjskih površina, uključujući:",
    image: {
      src: "/images/service2/item1.jpg",
      alt: "boat",
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
        alt: "boat",
      },
      {
        src: "/images/service2/service3.webp",
        alt: "boat",
      },
      {
        src: "/images/service2/service4.webp",
        alt: "boat",
      },
      {
        src: "/images/service2/service1.webp",
        alt: "boat",
      },
      {
        src: "/images/service2/service5.webp",
        alt: "boat",
      },
    ],
  },
  {
    id: 3,
    title: "Održavanje unutarnjih površina",
    description: "",
    image: {
      src: "/images/service1/item1.jpg",
      alt: "boat",
    },
    features: ["Čišćenje plovila visokotlačnim uređajima"],
    carouselImages: [
      {
        src: "/images/service3/service2.webp",
        alt: "boat",
      },
      {
        src: "/images/service3/service1.webp",
        alt: "boat",
      },
      {
        src: "/images/service3/service3.webp",
        alt: "boat",
      },
      {
        src: "/images/service3/service4.webp",
        alt: "boat",
      },
      {
        src: "/images/service3/service5.webp",
        alt: "boat",
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
      alt: "boat",
    },
    features: [
      "Zaštita od vremenskih uvjeta",
      "Čvrsto prianjanje",
      "Jednostavna primjena",
      "Dugotrajna zaštita",
      "Održavanje čistoće",
    ],
    carouselImages: [
      {
        src: "/images/service4/service1.webp",
        alt: "boat",
      },
    ],
  },
  {
    id: 5,
    title: "Usluge skipera",
    description: "",
    image: {
      src: "/images/service5/service1.webp",
      alt: "boat",
    },
    features: [""],
    carouselImages: [
      {
        src: "/images/service5/service1.webp",
        alt: "boat",
      },
    ],
  },
];
export default services;
