"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import cx from "clsx";

import Container from "@/components/Container";
import Typography from "@/components//Typography";
import navigationLinks from "@/config/navigationLinks";

import styles from "./Header.module.scss";

const Header = () => {
  const [hideOnScroll, setHideOnScroll] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = currentScrollPos > prevScrollPos;

    setHideOnScroll(isScrolledDown && currentScrollPos > 50);
    setPrevScrollPos(currentScrollPos);

    setHasScrolled(currentScrollPos > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Container
      component="header"
      className={cx(styles.container, {
        [styles.hidden]: hideOnScroll,
        [styles.scrolled]: hasScrolled,
      })}
    >
      <div className={cx(styles.grid, { [styles.scrolled]: hasScrolled })}>
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
