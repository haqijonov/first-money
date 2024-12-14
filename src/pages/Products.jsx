import { useTranslation } from "react-i18next";
import Cooperation from "../components/Cooperation";
import FooterProducts from "../components/FooterProducts";
import ProductsList from "../components/ProductsList";

export default function Products() {
  const { t } = useTranslation();

  return (
    <div className="pt-12">
      <h2 className="mb-[30px] text-center text-2xl font-semibold text-orange md:mb-0  md:text-4xl">
        {t("products")}
      </h2>
      <ProductsList />
      <div className="base-container mb-5 md:mb-9">
        <h3 className="text-[20px] font-semibold text-[#EF7F1A] md:mb-[10px] md:text-[36px]">
          {t("designService")}
        </h3>
        <p className="text-sm font-normal text-black md:text-2xl md:font-medium">
          {t("aboutDesignText")}
        </p>
      </div>
      <FooterProducts />
      {/* <Cooperation /> */}
    </div>
  );
}
