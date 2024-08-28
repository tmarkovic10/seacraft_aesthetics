import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import cx from "clsx";

import Container from "@/components/Container";
import Typography from "@/components/Typography";
import Phone from "@/components/SvgIcons/Phone";
import Mail from "@/components/SvgIcons/Mail";

import styles from "./Contact.module.scss";

interface ContactSectionProps {
  isHome?: boolean;
}

const ContactSection = ({ isHome }: ContactSectionProps) => {
  const t = useTranslations("HomePage");
  return (
    <Container
      component="section"
      id="contact"
      className={cx(styles.container, { [styles.isHome]: isHome })}
    >
      <div className={styles.wrapper}>
        <Typography variant="h2" className={styles.title}>
          {t("contactTitle")}
        </Typography>
        <Typography variant="body1" className={styles.text}>
          {t("contactSubtitle")}
        </Typography>
        <div className={styles.contactWrapper}>
          <Link href="tel:+385958710939" className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <Phone className={styles.icon} />
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
