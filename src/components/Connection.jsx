import Email from "/assets/png/mail.png";
import Phone from "/assets/png/telephone.png";
import Location from "/assets/png/location.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
export default function Connection() {
  const { t } = useTranslation();
  const [filial, setFilial] = useState("uz");
  const connect = [
    {
      img: Email,
      title: t("email"),
      text: " jamshidbekkomilovich@gmail.com",
      path: "mailto: jamshidbekkomilovich@gmail.com",
    },
    {
      img: Phone,
      title: t("telephone"),
      text: "+99891 663 91 11 ",
      path: "tel:+998916639111 ",
    },
    {
      img: Location,
      title: t("address"),
      text: t("addressLocation"),
      path: "#location",
    },
  ];
  return (
    <div
      className="mx-auto w-full max-w-[1000px] px-5 pt-12 text-center sm:pb-16"
      id="connection"
    >
      <h2 className="mb-5 text-2xl font-semibold text-orange sm:text-4xl">
        {t("contact")}
      </h2>
      <div className="mb-8 max-sm:text-sm">
        <button
          onClick={() => setFilial("uz")}
          className={`border-slate-200 ${filial == "uz" ? "bg-orange text-white" : "text-slate-500"} rounded-s-2xl  border px-3 py-2 max-[360px]:text-[12px] sm:px-5`}
        >
          Узбекский филиал
        </button>
        <button
          onClick={() => setFilial("finan")}
          className={`border-slate-200 ${filial == "finan" ? "bg-orange text-white" : "text-slate-500"} rounded-e-2xl border px-3 py-2 max-[360px]:text-[12px] sm:px-5`}
        >
          Финансовый директор
        </button>
      </div>
      <div className="grid gap-3 text-start sm:grid-cols-2">
        <div className="info-item rounded-2xl border border-orange border-slate-200 px-5 py-7 shadow transition-all hover:bg-orange hover:text-white sm:rounded-ee-[40px]">
          <p className="text-slate-500 max-md:text-sm">
            <i className="fa fa-user-tie me-1 text-orange"></i>
            {info[filial].directorType === "director"
              ? "Генеральный директор"
              : info[filial].directorType === "finansviy"
                ? "Финансовый директор"
                : "Филиал директори"}
          </p>
          <h3 className="text-lg font-semibold md:max-w-[250px] md:text-xl">
            {info[filial].director}
          </h3>
        </div>
        <div className="info-item rounded-2xl border  border-slate-200 px-5 py-7 shadow transition-all hover:bg-orange hover:text-white sm:rounded-es-[40px]">
          <p className="text-slate-500 max-md:text-sm">
            <i className="fa fa-location-dot me-1 text-orange"></i>
            Офис адреси
          </p>
          <h3 className="text-lg font-semibold md:text-xl">
            {info[filial].address}
          </h3>
        </div>
        <a
          href={`mailto: ${info[filial].email}`}
          className="info-item block rounded-2xl border border-slate-200 px-5 py-7 shadow transition-all hover:bg-orange hover:text-white sm:rounded-se-[40px]"
        >
          <p className="text-slate-500 max-md:text-sm">
            <i className="fa fa-envelope me-1 text-orange"></i>
            Наша электронная почта
          </p>
          <h3 className="text-lg font-semibold md:text-xl">
            {info[filial].email}
          </h3>
        </a>
        <div className="info-item flex justify-between gap-3 rounded-2xl border border-slate-200 px-5 py-7 shadow transition-all hover:bg-orange hover:text-white max-lg:flex-col sm:rounded-ss-[40px]">
          <a href={`tel: ${info[filial].phone}`}>
            <p className="text-slate-500 max-md:text-sm">
              <i className="fa fa-phone text-orange"></i> Наш номер телефона
            </p>
            <h3 className="text-lg font-semibold md:text-xl">
              {info[filial].phone}
            </h3>
          </a>
          <a
            href={`https://wa.me/${info[filial].whatsapp.split(" ").join("")}`}
            target="_blank"
          >
            <p className="text-slate-500 max-md:text-sm">
              <i className="fab fa-whatsapp text-orange"></i> Whatsapp
            </p>
            <h3 className="text-lg font-semibold md:text-xl">
              {info[filial].whatsapp}
            </h3>
          </a>
        </div>
      </div>
      {/* <ul className="grid auto-cols-auto items-center justify-center gap-[30px] lg:grid-cols-3">
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
      </ul> */}
    </div>
  );
}

const info = {
  uz: {
    email: "farkhod_gss@mail.ru",
    director: "Мавланов Фарходжон Хабибидинович",
    directorType: "manager",
    phone: "+99891 663 91 11",
    whatsapp: "+99890 844 21 11",
    address: "Узбекистон овози кучаси 6-уй, 51 хонадон",
  },
  finan: {
    email: "farkhod_gss@mail.ru",
    director: "Шералиев Муротжон",
    directorType: "finansviy",
    whatsapp: "+99890 844 31 11",
    phone: "+99891 125 41 81",
    address: "Улица голос Узбекистана дом 6, квартира 51",
  },
};
