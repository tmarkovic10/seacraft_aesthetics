import React from "react";
import Link from "next/link";

import Container from "@/components/Container";

import styles from "./Footer.module.scss";
import navigationLinks from "@/config/navigationLinks";
import Typography from "@/components/Typography";
import Logo from "@/components/SvgIcons/Logo";

const Footer = () => {
  return (
    <Container component="footer" className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" aria-label="logo">
          <Logo height={35} width={100} fillColor1="#fff" fillColor2="#fff" />
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
        <Typography variant="body2" className={styles.copyright}>
          Copyright @2024 Seacraft Aesthetic
        </Typography>
      </div>
    </Container>
  );
};

export default Footer;
