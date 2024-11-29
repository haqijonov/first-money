import { useTranslation } from "react-i18next";
import Connection from "../components/Connection";
import Features from "../components/Features";
import FooterProducts from "../components/FooterProducts";
import IndexHero from "../components/IndexHero";
import Location from "../components/Location";
import MainAbout from "../components/MainAbout";
import ProductsList from "../components/ProductsList";
import Slider from "../components/Slider";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <IndexHero />
      <Features />
      <h2 className="mb-[30px] text-center text-2xl font-semibold text-orange md:mb-10 md:text-4xl">
        {t("products")}
      </h2>
      <ProductsList />
      <MainAbout />
      <Slider />
      <h2 className="mb-8 text-center  text-2xl font-semibold text-orange md:text-[36px]">
        {t("designService")}
      </h2>
      <FooterProducts />
      <Connection />
      <Location />
    </>
  );
}
