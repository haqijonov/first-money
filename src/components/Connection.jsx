import Email from "/assets/svg/email-min.svg";
import Phone from "/assets/svg/phone-min.svg";
import Location from "/assets/svg/location-min.svg";
import { useTranslation } from "react-i18next";
export default function Connection() {
  const { t } = useTranslation();
  const connect = [
    {
      img: Email,
      title: t("email"),
      text: "korksupport@gmail.com",
      path: "mailto:korksupport@gmail.com",
    },
    {
      img: Phone,
      title: t("telephone"),
      text: "+998 91 055 33 00",
      path: "tel:+998910553300",
    },
    {
      img: Location,
      title: t("address"),
      text: t("addressLocation"),
      path: "#location",
    },
  ];
  return (
    <div className="mx-auto w-full max-w-[1000px] pt-12 text-center sm:pb-16">
      <h2 className="mb-8 text-2xl font-semibold text-orange sm:text-4xl">
        {t("connection")}
      </h2>
      <ul className="grid auto-cols-auto items-center justify-center gap-[30px] lg:grid-cols-3">
        {connect.map(({ title, img, text, path }) => {
          return (
            <a href={path}>
              <li
                className="flex cursor-pointer flex-col items-center text-center"
                key={title}
              >
                <div className="mb-[18px] flex h-[58px] w-[58px] items-center justify-center rounded-[8px] bg-orange_20 lg:w-[70px] ">
                  <img
                    className="h-[20px] w-[23px] object-contain lg:w-8"
                    src={img}
                    alt={title}
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-black">{title}</h3>
                <p className="text-sm font-medium">{text}</p>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}
