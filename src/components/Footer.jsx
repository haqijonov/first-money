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
        <div className="mb-5 flex justify-between">
          <div className="flex flex-col items-start gap-2">
            <Link
              className="font-pacifico text-[22px] text-white md:text-[32px]"
              to="/"
            >
              Kazim Ogli Agro
            </Link>
          </div>

          <div className="flex flex-col items-end gap-2">
            <a className="btn-orange mb-3" href="tel:+79221334466">
              {t("connection")}
            </a>
            <a
              className="flex items-center gap-1 text-[12px] no-underline"
              href="tel:+79221334466"
            >
              <span className="font-medium">+79221334466</span>
            </a>
          </div>
        </div>
        {/* SOCIALS */}
        <div className="flex items-start justify-between pb-5">
          <Socials />
          <Links />
        </div>
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
