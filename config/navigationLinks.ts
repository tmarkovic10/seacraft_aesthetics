export interface NavigationLink {
  text: string;
  href: string;
}

const navigationLinks: NavigationLink[] = [
  { text: "O nama", href: "/about-us" },
  { text: "Usluge", href: "/services" },
  { text: "Galerija", href: "/gallery" },
];

export default navigationLinks;
