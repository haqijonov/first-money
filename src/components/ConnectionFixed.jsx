import { HiOutlinePhoneArrowUpRight } from "react-icons/hi2";
import { RiArrowUpSLine } from "react-icons/ri";
import "animate.css/animate.min.css";
export default function ConnectionFixed() {
  return (
    <div className="base-container">
      <div className="fixed bottom-[10px] right-[20px] z-50 md:bottom-[30px] md:right-[30px]">
        <div className="flex items-center gap-3 md:gap-4">
          <a href="tel:+998910553300">
            <button className="animate__animated animate__infinite animate__bounceIn animate__slower flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50%] bg-orange text-2xl text-white  hover:bg-location-iframe-border-cl hover:duration-700 md:h-16 md:w-16 md:text-3xl ">
              <HiOutlinePhoneArrowUpRight />
            </button>
          </a>
          <a
            className="animate__animated  animate__backInDown top-0 flex h-[45px] w-[40px] items-center justify-center rounded bg-orange text-2xl text-white hover:bg-location-iframe-border-cl hover:duration-1000 md:h-[55px] md:w-[50px]"
            href="#header"
          >
            <RiArrowUpSLine />
          </a>
        </div>
      </div>
    </div>
  );
}
