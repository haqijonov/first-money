import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

export default function Links() {
  const { t } = useTranslation();
  return (
    <div className="hidden gap-24 lg:flex">
      <div className="flex flex-col items-start gap-4">
        <h3 className="mb-2 text-2xl font-semibold capitalize">страницы</h3>
        <Link
          to="/about"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("about")}
        </Link>
        <Link
          to="/service-brands"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("serviceBrands")}
        </Link>
        {/* </div> */}
        {/* <div className="flex flex-col items-end gap-6"> */}
        <Link
          to="/products"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("products")}
        </Link>
        <Link
          to="/design-service"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("portfolio")}
        </Link>
        <Link
          to="/contact"
          className={({ isActive }) =>
            isActive ? "border-b-2 border-white text-white" : "text-gray-500"
          }
        >
          {t("contact")}
        </Link>
      </div>
    </div>
  );
}
