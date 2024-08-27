"use client";

import { useState, useTransition } from "react";
import { Locale } from "@/config";
import { setUserLocale } from "@/service/locale";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcher({ defaultValue, items }: Props) {
  const [isPending, startTransition] = useTransition();
  const [selectedLocale, setSelectedLocale] = useState(defaultValue);
  console.log(selectedLocale);

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value as Locale;
    setSelectedLocale(locale);
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div>
      <select
        value={selectedLocale}
        onChange={onChange}
        disabled={isPending}
        className="p-2 border rounded"
      >
        {items.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
