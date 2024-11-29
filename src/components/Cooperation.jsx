import { useTranslation } from "react-i18next";

export default function Cooperation() {
  const { t } = useTranslation();
  return (
    <div className="base-container">
      <div className="w-full md:max-w-[880px] m-auto">
        <h2 className="mb-[17px] text-center text-base font-normal md:mb-7 md:text-2xl md:font-medium">
          {t("aboutFooterText")}
        </h2>
        <button
          onClick={() => {
            contactModal.classList.toggle("show");
          }}
          className="btn-orange m-auto mb-[30px] w-full py-[13px] text-sm font-semibold sm:max-w-[297px] md:mb-[40px]"
        >
          {t("placeOrder")}
        </button>
      </div>
    </div>
  );
}
