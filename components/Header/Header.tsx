import React from "react";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import Typography from "@/components//Typography";

import styles from "./Header.module.scss";
import navigationLinks from "@/config/navigationLinks";

const Header = () => {
  return (
    <Container component="header" className={styles.container}>
      <div className={styles.grid}>
        <Link href="/" aria-label="logo">
          <Image
            src="/images/seacraft-aesthetics-logo.png"
            alt="Seacraft Aesthetics logo"
            width={110}
            height={50}
          />
        </Link>
        <nav>
          <ul className={styles.links}>
            {navigationLinks.map((item) => (
              <li key={item.text}>
                <Link href={item.href} className={styles.link}>
                  <Typography variant="body2">{item.text}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href="#" className={styles.contactLink}>
          Kontakt
        </Link>
      </div>
    </Container>
  );
};

export default Header;
