import { useTranslation } from "react-i18next";

export default function AboutText() {
  const { t } = useTranslation();
  const cards = [
    {
      title: t("about"),
    },
    {
      title: t("korkCompanyText"),
    },
    {
      title: t("korkCompanyText2"),
    },
  ];
  return (
    <div className="base-container">
      <h2 className="mb-3 text-center text-2xl font-bold text-orange md:mb-[50px] md:text-[36px]">
        {t("about")}
      </h2>
      <div className="w-full max-w-[356px] px-4 sm:max-w-[1421px]">
        <p className="mb-7 text-sm font-normal md:mb-10 md:text-2xl md:italic">
          {t("korkCompanyText")}
        </p>
        <p className="mb-[30px] text-sm font-normal md:mb-[50px] md:text-2xl">
          {t("korkCompanyText2")}
        </p>
      </div>
    </div>
  );
}
