import React, { useRef, useState, useTransition } from "react";
import TerishJarayoni from "../../public/assets/png/terish.png";
import Qadoqlash from "../../public/assets/png/qaddoqlash.png";
import Export from "../../public/assets/png/export-jarayoni.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { useTranslation } from "react-i18next";

export default function IndexHero() {
  const { t } = useTranslation();
  const sliderCard = [
    {
      bg: TerishJarayoni,
      title: t("mainText"),
      button: t("connection"),
    },
    {
      bg: Qadoqlash,
      title: t("mainText2"),
      button: t("connection"),
    },
    {
      bg: Export,
      title: t("mainText3"),
      button: t("connection"),
    },
  ];
  return (
    <div className="base-container">
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        spaceBetween={30}
        loop={true}
        speed={1500}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <ul>
          {sliderCard.map(({ bg, title, button }) => {
            return (
              <li key={title}>
                <SwiperSlide>
                  <img
                    className="relative h-[508px] select-none rounded-lg bg-black blur-sm  active:cursor-grab  sm:w-[1400px] sm:blur-none"
                    src={bg}
                    alt={title}
                  />
                  <div className="absolute left-7 top-0 flex flex-col items-center gap-2 pb-[0px] pl-[10px] pr-[50px] pt-[27px] sm:flex-row-reverse lg:gap-[20px] lg:pl-[120px] lg:pr-[100px] lg:pt-[40px]">
                    <div>
                      <h2 className=" mb-6 mt-[140px]  text-[20px] font-bold text-white md:w-[867px] lg:text-[40px]">
                        {t(title)}
                      </h2>
                      <button
                        onClick={() => {
                          contactModal.classList.toggle("show");
                        }}
                        className="btn-orange w-[250px] text-sm font-medium sm:text-lg lg:w-[304px]"
                      >
                        {button}
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
            );
          })}
        </ul>
      </Swiper>
    </div>
  );
}
