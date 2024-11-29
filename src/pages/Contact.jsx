import Connection from "../components/Connection";
import Location from "../components/Location";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="relative mb-[51px] h-[547px] w-full overflow-hidden  bg-contact-hero-image-phone bg-cover bg-no-repeat text-center sm:bg-contact-hero-image">
        <div className="base-container">
          <div className="mt-[125px] w-full max-w-[1321px] text-start md:mt-[200px]">
            <h2 className="mb-16  text-base font-medium text-white md:mb-7 md:w-[800px] md:text-2xl">
              {t("contactText")}
            </h2>
            <a href="tel:+998551234567">
              <button className="btn-orange w-full text-base font-medium sm:w-[250px] md:text-lg lg:w-[304px]">
                {t("connection")}
              </button>
            </a>
          </div>
        </div>
      </div>
      <Connection />
      <Location />
    </div>
  );
}
