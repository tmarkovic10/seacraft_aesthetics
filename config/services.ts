import { Image } from "@/types/image";

export interface Services {
  title: string;
  image: Image;
}

const services: Services[] = [
  {
    title: "Uređenje podvodnog dijela plovila",
    image: {
      src: "/images/service1/item1.jpg",
      alt: "boat",
    },
  },
  {
    title: "Održavanje vanjskih površina",
    image: {
      src: "/images/service2/item1.jpg",
      alt: "boat",
    },
  },
  {
    title: "Održavanje unutarnjih površina",
    image: {
      src: "/images/service1/item1.jpg",
      alt: "boat",
    },
  },
  {
    title: "Termoskupljajuće folije",
    image: {
      src: "/images/service4/item1.jpg",
      alt: "boat",
    },
  },
  {
    title: "Usluge skipera",
    image: {
      src: "/images/service1/item1.jpg",
      alt: "boat",
    },
  },
];
export default services;
