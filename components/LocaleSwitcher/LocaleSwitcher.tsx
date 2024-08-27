import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";

const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "hr",
          label: t("hr"),
        },
        {
          value: "en",
          label: t("en"),
        },
      ]}
      label={t("label")}
    />
  );
};

export default LocaleSwitcher;
