import ArrowUp from "/assets/svg/arrow-up.svg";
import RussiaFlag from "/assets/png/russia.png";
import UzbekistanFlag from "/assets/png/uzbekistan.png";
import EnglishFlag from "/assets/png/english1.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageToggler() {
  const { i18n } = useTranslation();
  const languages = [
    {
      code: "uz",
      title: "O'zbekcha",
      flag: UzbekistanFlag,
    },
    {
      code: "ru",
      title: "Русский",
      flag: RussiaFlag,
    },
    {
      code: "eng",
      title: "English",
      flag: EnglishFlag,
    },
  ];

  const [currentLanguage, setCurrentLanguage] = useState(
    JSON.parse(localStorage.getItem("language")) || {
      code: "uz",
      title: "O'zbekcha",
      flag: UzbekistanFlag,
    },
  );

  function handleLanguageToggler(code) {
    const currentLanguage = languages.filter(
      (language) => language.code === code,
    );

    i18n.changeLanguage(code);
    localStorage.setItem("language", JSON.stringify(...currentLanguage));

    setCurrentLanguage(...currentLanguage);
  }

  return (
    <div className="group relative w-[135px] select-none">
      <button>
        <span className="flex items-center gap-[10px]">
          <img
            className="w-6 object-contain"
            src={currentLanguage.flag}
            aria-hidden="true"
            alt=""
          />
          <span className="flex gap-1 font-medium">
            {currentLanguage.title}
            <img src={ArrowUp} alt="" aria-hidden="true" />
          </span>
        </span>
      </button>
      <div className="pointer-events-none opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
        <ul className="absolute top-[26px] z-30 flex w-full flex-col gap-1 rounded-md bg-white p-2 shadow-lg">
          {languages.map(({ title, code }) => {
            return (
              currentLanguage.code !== code && (
                <li
                  onClick={() => handleLanguageToggler(code)}
                  className="cursor-pointer rounded-md bg-white pl-2 transition-colors hover:bg-orange hover:text-white"
                  key={code}
                >
                  {title}
                </li>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
}
