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
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.639770330766!2d71.7331316767049!3d40.2170753714725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb917b3af56091%3A0x4dfec885deafa272!2sILG&#39;OR%20Q.F.Y!5e0!3m2!1sen!2s!4v1733402432432!5m2!1sen!2s"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

