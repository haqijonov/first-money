import Ombor from "/assets/png/Ombor.png";
import Chin from "/assets/png/chin-invest.png";
import Sherwood from "/assets/png/sherwood-kids.png";
import Etalon from "/assets/png/Etalon-logo.png";
import Beshariq from "/assets/png/beshariq-beton.png";
import Logo from "/assets/png/Sherwood-logo-deisgn.png";

export default function OurCustomers() {
  return (
    <div className="base-container mb-[30px] md:mb-[69px]">
      <div className="grid  auto-cols-auto  grid-cols-2 items-center gap-3  sm:grid-cols-3 lg:grid-cols-4 ">
        <div className="mb-2 rounded-md bg-ultra-light-gray px-2 py-5 lg:px-5 lg:py-[40px]">
          <img className="w-[305px] select-none" src={Ombor} alt="Logo" />
        </div>
        <div className="mb-2 rounded-md bg-ultra-light-gray px-2 py-5 lg:px-5 lg:py-[43px]">
          <img className="w-[288px] select-none" src={Chin} alt="Logo" />
        </div>
        <div className="mx-auto mb-2 flex items-center rounded-md  bg-ultra-light-gray px-11 py-[8px] lg:px-[82px] lg:py-[5px]">
          <img className="w-[176px] select-none" src={Sherwood} alt="Logo" />
        </div>
        <div className="mb-2 rounded-md bg-ultra-light-gray px-3 py-6 lg:px-[20px] lg:py-[40px]">
          <img className="w-[288px] select-none" src={Etalon} alt="Logo" />
        </div>
        <div className="mb-2 rounded-md bg-ultra-light-gray px-2 py-5 lg:px-[20px] lg:py-[30px]">
          <img className="w-[305px] select-none" src={Beshariq} alt="Logo" />
        </div>
        <div className="mb-2 rounded-md bg-ultra-light-gray px-2 py-2 lg:px-[20px] lg:py-[8px]">
          <img className="w-[324px] select-none" src={Logo} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
