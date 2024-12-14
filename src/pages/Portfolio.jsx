import KidsShirt from "/assets/jpg/shirt-kids.jpg";
import Flag from "/assets/jpg/sherwood-flag.jpg";
import FlagSiyoq from "/assets/jpg/sherwood-flagSiyoq.jpg";
import Vadalaska from "/assets/jpg/vadalaska.jpg";
import ChikakoCap from "/assets/jpg/chicaco-cap.jpg";
import KidsShirtPushti from "/assets/jpg/sherwoodPushti.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  const { t } = useTranslation();
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (e.target.innerWidth > 393) {
        setMobile(true);
      } else setMobile(false);
    });
    () => window.removeEventListener("resize");
  }, []);
  return (
    <div className="base-container py-[30px] md:py-10">
      <h2 className="mb-[40px] text-center text-2xl font-semibold text-orange sm:text-4xl">
        {t("portfolio")}
      </h2>
      <Swiper
        style={{
          "--swiper-navigation-color": "#EF7F1A",
        }}
        rewind={true}
        loop={true}
        spaceBetween={25}
        slidesPerView={3}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          393: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        navigation={mobile}
        modules={[Autoplay, Navigation]}
        className="mb-10 px-6 active:cursor-grab"
      >
        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[305px] select-none "
            src={KidsShirt}
            alt="Ombor logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[405px] select-none "
            src={Flag}
            alt="chin invest logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img className="w-[405px]" src={Vadalaska} alt="sherwood kids logo" />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[405px] select-none"
            src={ChikakoCap}
            alt="Etalon logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="h-[293px] w-[405px] select-none rounded-[10px]"
            src={FlagSiyoq}
            alt="Beshariq beton logo"
          />
        </SwiperSlide>
        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="h-[293px] w-[405px] select-none rounded-[10px]"
            src={KidsShirtPushti}
            alt="Beshariq beton logo"
          />
        </SwiperSlide>
      </Swiper>
      {/* ===== */}
      <div className="base-container">
        <div className="w-full md:max-w-[880px]">
          <h2 className="mb-[17px] text-base font-normal md:mb-7 md:text-2xl md:font-medium">
            {t("aboutFooterText")}
          </h2>
          <button className="btn-orange  w-full py-[13px] text-sm font-semibold sm:max-w-[297px]  ">
            {t("placeOrder")}
          </button>
        </div>
      </div>
    </div>
  );
}
