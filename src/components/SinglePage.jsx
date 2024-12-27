import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import arrow from "/assets/svg/arrow-left.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import axios from "axios";

// import { cards } from "../utils/Api";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SinglePage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [location.pathname]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { t } = useTranslation();

  const slug = useParams();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    getDAte();
  }, []);

  const getDAte = async () => {
    try {
      const res = await axios.get(
        `https://kork-backend.onrender.com/products?slug=${slug.id}`,
      );
      const data = await res.data[0];
      console.log(data);
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="base-container mb-20">
      <div className="transitionhover:text-white mb-5 flex w-[90px] items-center gap-2 rounded-md bg-socials-icon-cl px-4 py-2 transition  duration-300 hover:bg-[#000] hover:bg-opacity-30  md:mb-8 md:w-28">
        <img className="back  w-[6px] md:w-[9px]" src={arrow} alt="" />
        <Link to={"/products"} className="text-base font-semibold  md:text-xl ">
          back
        </Link>
      </div>
      <div className="flex w-full flex-col items-center  md:flex-row md:gap-10">
        <div className="w-full max-w-[375px] md:max-w-[475px]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#EF7F1A",
              "--swiper-pagination-color": "#EF7F1A",
            }}
            loop={true}
            spaceBetween={0}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 "
          >
            {country?.info?.thumbnails?.map((imgSrc, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={imgSrc}
                    className="h-[300px] w-[410px] md:h-[450px] md:w-[510px]"
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={4}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-1"
          >
            {country?.info?.thumbnails?.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgSrc}
                  className="h-[80px] w-[100px] cursor-pointer md:h-[100px] md:w-[150px]"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-10">
          <h2 className="mb-5 text-2xl font-semibold text-orange md:mb-10 md:text-4xl">
            {t(country?.title)}
          </h2>
          <p className="mb-5 text-lg font-semibold text-black md:mb-10 md:text-2xl">
            {t(country?.info.data)}
          </p>
          <div className="mb-10 flex items-center gap-2">
            <p className="text-lg font-semibold text-black md:text-2xl">
              {t("minimumOrder")}
            </p>
            <button className="w-12  rounded-md bg-socials-icon-cl py-2 text-sm font-semibold transition duration-300 hover:bg-orange  hover:text-white md:w-20 md:text-base">
              20
            </button>
          </div>
          <div className="mb-10 flex items-center gap-3">
            <p className="text-xl font-semibold text-black md:text-2xl">
              {t("dimensions")}
            </p>
            <ul className="grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-5">
              {country?.info?.sizes.map((size, id) => {
                return (
                  <li key={id}>
                    <button className="w-12 rounded-md bg-socials-icon-cl py-2 text-sm  font-semibold transition duration-300 hover:bg-orange  hover:text-white md:w-20 md:text-base">
                      {size}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => {
              contactModal.classList.toggle("show");
            }}
            className="btn-orange  mb-[30px] w-[297px] sm:w-[400px]"
          >
            {t("placeOrder")}
          </button>
        </div>
      </div>
    </div>
  );
}
