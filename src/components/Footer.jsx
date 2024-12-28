import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import Socials from "./Socials";
// import Logo from "/assets/png/whiteLogo.png";
import Links from "./Links";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-footer-mobile-cl py-5 text-white lg:bg-footer-desktop-cl">
      <div className="base-container">
        <div className="mb-5 flex justify-between pt-3">
          <div className="flex flex-col items-start gap-2">
            <Link
              className="mb-3 font-pacifico text-[22px] text-white md:text-[32px]"
              to="/"
            >
              Kazim Ogli Agro
            </Link>
            <Socials />
          </div>

          {/* <div className="flex flex-col items-end gap-2">
            <a className="btn-orange mb-3" href="tel:+79221334466">
              {t("connection")}
            </a>
            <a
              className="flex items-center gap-1 text-[12px] no-underline"
              href="tel:+79221334466"
            >
              <span className="font-medium">+79221334466</span>
            </a>
          </div> */}
          {/* <div className="flex items-start justify-between pb-5"> */}
          <Links />
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-2xl font-semibold">Контакты</h3>
            <div>
              <span className="text-gray-500 text-sm">
                Генеральный директор
              </span>
              <p className="text-lg font-semibold">Казымов Закир Казым оглы</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Номер телефона директора</p>
              <a
                className="block text-lg font-semibold"
                href="tel: +79221334466"
              >
                +79221334466
              </a>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Наш электронный адрес</p>
              <a
                className="block text-lg font-semibold"
                href="mailto: arkhod_gss@mail.ru"
              >
                arkhod_gss@mail.ru
              </a>
            </div>

            {/* </div> */}
          </div>
        </div>
        {/* SOCIALS */}
        <div className="flex items-center justify-between border-t-[1.15px] border-footer-border-cl py-5 text-[12px]">
          <span className="flex flex-col gap-5 lg:flex-row">
            <span>An Apple</span>
            <span>
              <small className="font-medium">&copy;</small>{" "}
              {new Date().getFullYear()} {t("privacy")}
            </span>
          </span>
          <NavLink to="/policy">{t("policy")}</NavLink>
        </div>
      </div>
    </footer>
  );
}
