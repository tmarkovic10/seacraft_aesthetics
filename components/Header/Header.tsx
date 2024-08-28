"use client";

import React, { useCallback, useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { useLenis } from "lenis/react";
import cx from "clsx";

import Container from "@/components/Container";
import Typography from "@/components//Typography";
import Logo from "@/components/SvgIcons/Logo";
import navigationLinks, { NavigationLink } from "@/config/navigationLinks";
import useIsMobile from "@/utils/hooks/useIsMobile";
import MobileNav from "@/components/MobileNav";
import HamburgerMenu from "@/components/SvgIcons/HamburgerMenu";

import styles from "./Header.module.scss";

const Header = ({ children }: { children: ReactNode }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();
  const isMobile = useIsMobile();
  const t = useTranslations("HomePage");
  const isHome = pathname == "/";

  const sectionId = "contact";

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > 10 && !hasScrolled) {
      setHasScrolled(true);
    } else if (currentScrollPos <= 10 && hasScrolled) {
      setHasScrolled(false);
    }
  }, [hasScrolled]);

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const { hash } = e.currentTarget;

    if (hash) {
      const id = hash.substring(1);
      const section = document.getElementById(id);

      if (section && lenis) {
        lenis.scrollTo(section);
      }
    }
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const isActiveLink = (linkPath: string) => pathname === linkPath;

  return (
    <Container
      component="header"
      className={cx(styles.container, {
        [styles.scrolled]: hasScrolled,
        [styles.homeBg]: isHome,
      })}
    >
      <div
        className={cx(styles.grid, {
          [styles.scrolled]: hasScrolled,
          [styles.isHome]: isHome,
        })}
      >
        <Link href="/" aria-label="logo">
          <Logo
            height={35}
            width={100}
            fillColor1={isHome ? (hasScrolled ? "#023449" : "#fff") : "#023449"}
            fillColor2={isHome ? (hasScrolled ? "#023449" : "#fff") : "#023449"}
          />
        </Link>
        {isMobile ? (
          <div className={styles.gridMobile}>
            {children}
            <button onClick={toggleMobileNav} className={styles.menuButton}>
              <HamburgerMenu
                strokeColor={
                  isHome ? (hasScrolled ? "#023449" : "#fff") : "#023449"
                }
              />
            </button>
          </div>
        ) : (
          <nav className={styles.linksWrapper}>
            {children}
            <ul className={styles.links}>
              {t.raw("navigationLinks").map((item: NavigationLink) => (
                <li key={item.text}>
                  <Link
                    href={item.href}
                    className={cx(styles.link, {
                      [styles.active]: isActiveLink(item.href),
                    })}
                  >
                    <Typography variant="body2">{item.text}</Typography>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={`/#${sectionId}`}
              onClick={scrollToSection}
              className={cx(styles.contactLink, {
                [styles.scrolled]: hasScrolled,
                [styles.isHome]: isHome,
              })}
            >
              <Typography variant="body2">{t("contactBtn")}</Typography>
            </Link>
          </nav>
        )}

        {isMobile && (
          <MobileNav
            isOpen={isMobileNavOpen}
            toggleMobileNav={toggleMobileNav}
          />
        )}
      </div>
    </Container>
  );
};

export default Header;
