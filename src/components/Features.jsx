import User from "/assets/svg/user-min.svg";
import Truck from "/assets/svg/truck-min.svg";
import Speed from "/assets/svg/speed-min.svg";
import Kafolat from "/assets/svg/kafolat-min.svg";
import { useTranslation } from "react-i18next";
export default function Features() {
  const { t } = useTranslation();
  const cards = [
    {
      img: User,
      title: t("individualDesign"),
      description: t("individualDesignText"),
    },
    {
      img: Truck,
      title: t("delivery"),
      description: t("deliveryText"),
    },
    {
      img: Speed,
      title: t("speed"),
      description: t("speedText"),
    },
    {
      img: Kafolat,
      title: t("warranty"),
      description: t("warrantyText"),
    },
  ];
  return (
    <div className="base-container pb-12 pt-16">
      <ul className="grid auto-cols-auto items-center justify-center gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards.map(({ title, img, description }) => {
          return (
            <li
              className="flex w-[272px] flex-col items-center text-center"
              key={title}
            >
              <div className="mb-[18px] flex h-[58px] w-[58px] items-center justify-center rounded-[8px] bg-orange_20 lg:h-16 lg:w-[70px]">
                <img
                  className=" w-8 object-contain lg:w-[32px] "
                  src={img}
                  alt={title}
                />
              </div>
              <h3 className="mb-2 line-clamp-1 text-xl font-bold text-black">
                {title}
              </h3>
              <p className="line-clamp-3 text-sm font-medium">{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
