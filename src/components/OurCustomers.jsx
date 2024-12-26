import Turkiya from "/assets/png/turkiya.png";
import Kazakhstan from "/assets/png/kazakhstanFlag.png";
import Russia from "/assets/png/russianFlag.png";
import Etalon from "/assets/png/Etalon-logo.png";

export default function OurCustomers() {
  return (
    <div className="base-container mb-[30px] md:mb-[69px]">
      <div className="grid  auto-cols-auto  grid-cols-2 items-center gap-3  sm:grid-cols-3 lg:grid-cols-4 ">
        <div className="mb-2 rounded-md bg-ultra-light-gray px-2 py-5 ">
          <img
            className=" h-[150px] w-[305px] select-none"
            src={Turkiya}
            alt="Logo"
          />
        </div>
        <div className="mb-2 rounded-md bg-ultra-light-gray px-2 py-5 ">
          <img
            className=" h-[150px] w-[305px] select-none"
            src={Kazakhstan}
            alt="Logo"
          />
        </div>
        <div className="mx-auto mb-2 flex items-center rounded-md  bg-ultra-light-gray ">
          <img
            className=" h-[150px] w-[305px]  select-none"
            src={Russia}
            alt="Logo"
          />
        </div>
        <div className="mb-2 rounded-md bg-ultra-light-gray px-3 py-6 lg:px-[20px] lg:py-[40px]">
          <img className="w-[288px] select-none" src={Etalon} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
