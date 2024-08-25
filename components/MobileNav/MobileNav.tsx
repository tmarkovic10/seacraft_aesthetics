"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";

import cx from "clsx";

import Typography from "@/components/Typography";
import CloseButton from "@/components/SvgIcons/CloseButton";

import styles from "./MobileNav.module.scss";

interface MobileNavProps {
  isOpen: boolean;
  toggleMobileNav: () => void;
  navigationLinks: { text: string; href: string }[];
}

const MobileNav = ({
  isOpen,
  toggleMobileNav,
  navigationLinks,
}: MobileNavProps) => {
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isOpen, lenis]);

  return (
    <div className={cx(styles.container, { [styles.open]: isOpen })}>
      <button onClick={toggleMobileNav} className={styles.closeButton}>
        <CloseButton />
      </button>
      <div className={styles.links}>
        {navigationLinks.map((item, index) => (
          <Link href={item.href} key={index} onClick={toggleMobileNav}>
            <Typography variant="h1" className={styles.text}>
              {item.text}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
