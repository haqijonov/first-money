import { useTranslation } from "react-i18next";

export default function Location() {
  const { t } = useTranslation();
  return (
    <div className="base-container py-[50px]" id="location">
      <h2 className="mb-7 text-center text-2xl font-semibold text-orange sm:mb-10 sm:text-4xl">
        {t("location")}
      </h2>
      <iframe
        className="h-[206px] w-full rounded-2xl border border-location-iframe-border-cl md:h-[602px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189.78454321726818!2d70.6225811112354!3d40.440902688100444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ba919153d81f8b%3A0xf3a6a87217f1c9a5!2sSherwood%20Dizayn!5e0!3m2!1sru!2s!4v1712044093883!5m2!1sru!2s"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
