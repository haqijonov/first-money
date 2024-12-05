import India from "/assets/png/india.png";
import Rossiya from "/assets/png/rassiya.png";
import Turkiya from "/assets/png/turkey.png";
import Ukraina from "/assets/png/ukraina.png";
import Afganistan from "/assets/png/afganistan.png";
import Pakistan from "/assets/png/pakistan.png";

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
            className="w-[156px] select-none "
            src={India}
            alt="Ombor logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[305px] pb-[5px] select-none"
            src={Rossiya}
            alt="chin invest logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px]   bg-[#F5FBFD] ">
          <img
            className=" w-[305px] h-[180px]"
            src={Turkiya}
            alt="sherwood kids logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[264px] select-none"
            src={Ukraina}
            alt="Etalon logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[285px] select-none "
            src={Afganistan}
            alt="Beshariq beton logo"
          />
        </SwiperSlide>

        <SwiperSlide className="mx-auto flex items-center justify-center rounded-[10px] bg-[#F5FBFD]">
          <img
            className="w-[196px] select-none "
            src={Pakistan}
            alt="pakistan"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
