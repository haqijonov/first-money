import { useTranslation } from "react-i18next";

export default function Location() {
  const { t } = useTranslation();
  return (
    <div className="base-container py-[50px]" id="location">
      <h2 className="mb-7 text-center text-2xl font-semibold text-orange sm:mb-10 sm:text-4xl">
        {t("location")}
      </h2>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <a
          href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "0px",
          }}
        >
          Ташкент
        </a>
        <a
          href="https://yandex.uz/maps/10335/tashkent/house/YkAYdQRhTEMHQFprfX5yeHRhZw==/?ll=69.332005%2C41.239593&utm_medium=mapframe&utm_source=maps&z=19.54"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Фергана Йули, 6 — Яндекс Карты
        </a>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=71.799965%2C40.384524&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTIyNDk2ODM0EjVPyrt6YmVraXN0b24sIEZhcmfKu29uYSwgT8q7emJla2lzdG9uIE92b3ppIGtvyrtjaGFzaSIKDVWZj0IV2YkhQg%2C%2C&z=20.04"
          height="400"
          frameBorder="1"
          allowFullScreen
          style={{ position: "relative", width: "100%" }}
        ></iframe>
      </div>
    </div>
  );
}
