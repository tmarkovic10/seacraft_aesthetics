import { Image } from "@/types/image";

export interface Services {
  id: number;
  title: string;
  image: Image;
  carouselImages: Image[];
}

const services: Services[] = [
  {
    id: 1,
    title: "Uređenje podvodnog dijela plovila",
    image: {
      src: "/images/service1/item1.jpg",
      alt: "boat",
    },
    carouselImages: [
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
    ],
  },
  {
    id: 2,
    title: "Održavanje vanjskih površina",
    image: {
      src: "/images/service2/item1.jpg",
      alt: "boat",
    },
    carouselImages: [
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
    ],
  },
  {
    id: 3,
    title: "Održavanje unutarnjih površina",
    image: {
      src: "/images/service1/item1.jpg",
      alt: "boat",
    },
    carouselImages: [
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
    ],
  },
  {
    id: 4,
    title: "Termoskupljajuće folije",
    image: {
      src: "/images/service4/item1.jpg",
      alt: "boat",
    },
    carouselImages: [
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
    ],
  },
  {
    id: 5,
    title: "Usluge skipera",
    image: {
      src: "/images/service1/item1.jpg",
      alt: "boat",
    },
    carouselImages: [
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
      {
        src: "/images/service1/item1.jpg",
        alt: "boat",
      },
    ],
  },
];
export default services;
