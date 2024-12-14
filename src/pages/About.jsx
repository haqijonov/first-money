import { useTranslation } from "react-i18next";
import AboutText from "../components/AboutText";
import AboutVideo from "../components/AboutVideo";
import Cooperation from "../components/Cooperation";
import FooterProducts from "../components/FooterProducts";
import OurCustomers from "../components/OurCustomers";
import ProductsList from "../components/ProductsList";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  const { t } = useTranslation();
  return (
    <div>
      <AboutVideo />
      <AboutText />
      <div className="base-container mb-[20px] md:mb-[30px]">
        <h2 className="mb-[6px] text-xl font-semibold text-orange md:mb-[9px] md:text-[36px]">
          {t("ourProducts")}
        </h2>
        <p className="text-sm font-normal md:text-2xl md:font-medium">
          {t("ourProductsText")}
        </p>
      </div>
      <ProductsList />
      <div className="base-container">
        <h2 className="mb-[6px] text-xl font-semibold text-orange md:mb-4 md:text-4xl">
          {t("ourCustomers")}
        </h2>
        <p className="mb-[14px] text-sm font-normal md:mb-9 md:text-2xl md:font-medium">
          {t("ourCustomersText")}
        </p>
      </div>
      <OurCustomers />
      <div className="base-container mb-5 md:mb-9"></div>
      <FooterProducts />
      <Cooperation />
    </div>
  );
}
