import React from "react";
import Link from "next/link";

import Container from "@/components/Container";
import Typography from "@/components/Typography";
import Phone from "@/components/SvgIcons/Phone";
import Mail from "@/components/SvgIcons/Mail";

import styles from "./Contact.module.scss";

const ContactSection = () => {
  return (
    <Container component="section" className={styles.container}>
      <div className={styles.wrapper}>
        <Typography variant="h1" component="h2" className={styles.title}>
          Kontaktirajte nas
        </Typography>
        <div className={styles.contactWrapper}>
          <Link href="tel:+385958710939" className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <Phone />
            </div>
            <Typography variant="body1">+385 95 8710 939</Typography>
          </Link>
          <Link
            href="mailto:seacraft.aesthetic@gmail.com"
            className={styles.contactItem}
          >
            <div className={styles.contactIcon}>
              <Mail />
            </div>
            <Typography variant="body1">
              seacraft.aesthetic@gmail.com
            </Typography>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
