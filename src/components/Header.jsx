import { Link, NavLink } from "react-router-dom";

// Images
import PhoneMinIcon from "/assets/svg/phone-min.svg";
import Location from "/assets/svg/location.svg";
import ArrowLeft from "/assets/svg/arrow-left.svg";
import Burger from "/assets/svg/burger.svg";
import Logo from "/assets/png/header-logo.png";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import LanguageToggler from "./LanguageToggler";
import LocationIcon from "/assets/svg/mobile-location-icon.svg";

export default function Header() {
  const { t } = useTranslation();
  const navbar = useRef(null);
  const links = [
    {
      title: t("home"),
      path: "/",
    },
    {
      title: t("about"),
      path: "/about",
    },
    {
      title: t("serviceBrands"),
      path: "/service-brands",
    },
    {
      title: t("products"),
      path: "/products",
    },
    {
      title: t("portfolio"),
      path: "/design-service",
    },
    { title: t("contact"), path: "/contact" },
  ];

  function handleNavbar() {
    navbar.current.classList.toggle("translate-x-full");
  }

  return (
    <header id="header" className="bg-white pb-3 pt-16 md:pt-[26px]">
      <div className="base-container flex items-center">
        <Link className="mr-auto " to="/">
          <img
            className="h-8 w-[104px] object-contain lg:h-[45px] lg:w-[177px]"
            src={Logo}
            alt="Kork logo"
          />
        </Link>
        <a className="btn-orange-phone mr-3 md:hidden" href="tel:+998910553300">
          {t("connection")}
        </a>
        <a
          className="mr-6 hidden items-center gap-1 text-base font-medium md:flex"
          href="tel:+998910553300"
        >
          <img
            className="h-5 w-5"
            src={PhoneMinIcon}
            alt=""
            aria-hidden="true"
          />
          +998 91 055 33 00
        </a>
        <div className="hidden md:block">
          <LanguageToggler />
        </div>
        <a
          className="relative ml-5 mr-5 hidden h-[43px] w-[43px] rounded-md transition active:scale-90 active:opacity-90 md:block"
          href="#location"
        >
          <img src={Location} alt="Location" aria-hidden="true" />
        </a>
        <a
          className="btn-orange hidden w-[200px] md:block"
          href="tel:+998910553300"
        >
          {t("connection")}
        </a>
        <button
          onClick={handleNavbar}
          className="relative h-[38px] w-[38px] rounded-md bg-orange transition active:scale-90 active:opacity-90 md:hidden"
        >
          <img
            className="absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4"
            src={Burger}
            aria-hidden="true"
            alt=""
          />
        </button>
      </div>
      <div className="base-container hidden py-5 md:block">
        <ul className="flex flex-wrap justify-between gap-3">
          {links &&
            links.map(({ title, path }, idx) => {
              return (
                <li key={idx}>
                  <NavLink className="font-medium" to={path}>
                    {title}
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="base-container py-5 md:hidden">
        <LanguageToggler />
      </div>

      {/* Navbar  */}
      <div
        ref={navbar}
        className="fixed inset-0 z-50 h-screen w-screen translate-x-full bg-white duration-300 md:hidden"
      >
        <div className="relative bg-mobile-header-cl py-5">
          <div className="base-container flex items-center justify-between">
            <button onClick={handleNavbar}>
              <img src={ArrowLeft} alt="" aria-hidden="true" />
            </button>
            <Link to="/">
              <img
                className="mar h-8 w-[104px] object-contain"
                src={Logo}
                alt="Kork logo"
              />
            </Link>
            <a href="#location">
              <img
                className="cursor-pointer"
                src={LocationIcon}
                alt="location icon"
              />
            </a>
          </div>
        </div>
        <div className="flex h-full flex-col">
          <ul className="px-5">
            {links &&
              links.map((link, idx, own) => {
                const { title, path } = link;
                return (
                  <li
                    key={idx}
                    className={`relative py-5 ${idx !== own.length - 1 && "border-b border-navbar-rectangle-cl"}`}
                  >
                    <Link
                      onClick={() => handleNavbar()}
                      className="a text-lg font-medium transition-opacity after:absolute after:inset-0 active:opacity-80"
                      to={path}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
          </ul>
          <div className="mt-auto">
            <div className="flex flex-col gap-5 px-5">
              <div className="flex items-center gap-3">
                <img
                  width={17}
                  height={14}
                  src="./assets/svg/email-min.svg"
                  alt="email-icon"
                />
                <a
                  className="text-sm font-normal"
                  href="mailto:korksupport@gmail.com"
                >
                  korksupport@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <img
                  width={15}
                  height={15}
                  src="./assets/svg/phone-min.svg"
                  alt="tel-icon"
                />
                <a className="text-sm font-normal" href="tel:+998910553300">
                  +998 91 055 33 00
                </a>
              </div>
              <div className="mb-8 flex items-center gap-3">
                <img
                  width={14}
                  height={18}
                  src="./assets/svg/location-min.svg"
                  alt="location"
                />
                <p>{t("addressLocation")}uy@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <span className="px-5">
          <small className="font-medium">&copy;</small>{" "}
          {new Date().getFullYear()} {t("privacy")}
        </span>
      </div>
    </header>
  );
}