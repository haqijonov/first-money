import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Links() {
  const { t } = useTranslation();
  return (
    <div className="hidden gap-24 lg:flex">
      <div className="flex flex-col gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("home")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("about")}
        </NavLink>
        <NavLink
          to="/service-brands"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("serviceBrands")}
        </NavLink>
      </div>
      <div className="flex flex-col items-end gap-6">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("products")}
        </NavLink>
        <NavLink
          to="/design-service"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("portfolio")}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("contact")}
        </NavLink>
      </div>
    </div>
  );
}
