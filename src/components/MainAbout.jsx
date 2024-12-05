import { useTranslation } from "react-i18next";

export default function MainAbout() {
  const { t } = useTranslation();
  const cards = [
    {
      title: t("about"),
    },
    {
      title: t("korkCompany"),
    },
    {
      title: t("korkCompanyText"),
    },
    {
      title: t("korkCompanyText2"),
    },
    {
      title: t("korkCompanyMedia"),
    },
  ];
  return (
    <div className="base-container">
      <h1 className="mb-12 text-center text-[24px] sm:text-[36px] font-bold text-orange">
        {t("about")}
      </h1>
      <div className="mb-10 md:hidden">
        <div>
          <h2 className="m-auto mb-8 text-center text-[20px]">
            {t("korkCompany")}
          </h2>
        </div>
        <div>
          <iframe
            className="m-auto mb-8 rounded-[17px] sm:h-[300px] sm:w-[565px]"
            width="335"
            height="195"
            src="https://www.youtube.com/embed/Zu00I_pfFYI?si=MaEZSVTwreJxYWvw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <p className="text-[16px]">{t("korkCompanyMedia")}</p>
      </div>
      {/* ============== */}
      <div className="flex-b  hidden md:block">
        <div className="mb-10 flex">
          <div>
            <h2 className="relative top-8 mb-12 text-[28px] font-bold">
              {t("korkCompany")}
            </h2>
            <p className="text-[20px]">{t("korkCompanyText")}</p>
          </div>
          <div>
            <iframe
              className="rounded-[17px] lg:h-[264px] lg:w-[492px]"
              width="390"
              height="234"
              src="https://www.youtube.com/embed/Zu00I_pfFYI?si=MaEZSVTwreJxYWvw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <p className="text-[20px]">{t("korkCompanyText2")}</p>
      </div>
    </div>
  );
}
