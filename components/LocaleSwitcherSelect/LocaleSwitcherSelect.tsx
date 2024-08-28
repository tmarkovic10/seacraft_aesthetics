"use client";

import { useEffect, useRef, useState, useTransition } from "react";

import { Locale } from "@/config";
import { setUserLocale } from "@/service/locale";
import Croatia from "@/components/SvgIcons/Croatia";
import English from "@/components/SvgIcons/English";

import styles from "./LocaleSwitcherSelect.module.scss";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcher({ defaultValue, items }: Props) {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onChange = (locale: Locale) => {
    setSelectedLocale(locale);
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (locale: Locale) => {
    onChange(locale);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.languageSwitcher} ref={dropdownRef}>
      <button onClick={toggleDropdown} className={styles.currentLanguage}>
        {selectedLocale === "hr" ? <Croatia /> : <English />}
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          {selectedLocale !== "hr" && (
            <button
              onClick={() => selectLanguage("hr")}
              className={styles.languageOption}
              disabled={isPending}
            >
              <Croatia />
            </button>
          )}
          {selectedLocale !== "en" && (
            <button
              onClick={() => selectLanguage("en")}
              className={styles.languageOption}
              disabled={isPending}
            >
              <English />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
