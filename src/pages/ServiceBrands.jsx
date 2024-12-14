import { useTranslation } from "react-i18next";
import OurCustomers from "../components/OurCustomers";
import FooterProducts from "../components/FooterProducts";
import Cooperation from "../components/Cooperation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ServiceBrands() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [location.pathname]);
  const { t } = useTranslation();
  return (
    <div className="pt-12">
      <div className="base-container">
        <h2 className="mb-10  text-center text-xl font-semibold text-orange md:text-[36px]">
          {t("serviceBrands")}
        </h2>
        <OurCustomers />
      </div>
      <div className="base-container mb-5 md:mb-9">
        <h3 className="text-[20px] font-semibold text-[#EF7F1A] md:mb-[10px] md:text-[36px]">
          {t("designService")}
        </h3>
        <p className="text-sm font-normal text-black md:text-2xl md:font-medium">
          {t("aboutDesignText")}
        </p>
      </div>
      <FooterProducts />
      <Cooperation />
    </div>
  );
}
