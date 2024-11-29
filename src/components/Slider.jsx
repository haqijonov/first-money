import Ombor from "/assets/png/Ombor.png";
import Chin from "/assets/png/chin-invest.png";
import Sherwood from "/assets/png/sherwood-kids.png";
import Etalon from "/assets/png/Etalon-logo.png";
import Beshariq from "/assets/png/beshariq-beton.png";
import Logo from "/assets/png/Sherwood-logo-deisgn.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";
export default function Slider() {
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
    <div className="base-container py-10">
      <h2 className="mb-9 text-center text-2xl font-semibold text-orange sm:text-4xl">
        {t("serviceBrands")}
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
        className="px-6 active:cursor-grab"
      >
        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[305px] select-none px-[18px] py-[45px]"
            src={Ombor}
            alt="Ombor logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[305px] select-none px-[18px] py-[50px]"
            src={Chin}
            alt="chin invest logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[160px] py-[10px]"
            src={Sherwood}
            alt="sherwood kids logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[305px] select-none px-[18px] py-[51px]"
            src={Etalon}
            alt="Etalon logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[305px] select-none px-[18px] py-[36px]"
            src={Beshariq}
            alt="Beshariq beton logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[305px] select-none px-[18px] py-[16px]"
            src={Logo}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
