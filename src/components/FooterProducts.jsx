import KidsShirt from "/assets/jpg/shirt-kids.jpg";
import Flag from "/assets/jpg/sherwood-flag.jpg";
import Vadalaska from "/assets/jpg/vadalaska.jpg";
import ChikakoCap from "/assets/jpg/chicaco-cap.jpg";
import { useTranslation } from "react-i18next";

//
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function FooterProducts() {
  const { t } = useTranslation();
  const cards = [
    {
      img: KidsShirt,
    },
    {
      img: Flag,
    },
    {
      img: Vadalaska,
    },
    {
      img: ChikakoCap,
    },
  ];
  return (
    <div className="base-container mb-[30px] md:mb-[113px]">
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="container m-auto grid gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {cards.map(({ title, img }, idx) => {
          return (
            <motion.li
              variants={item}
              className="m-auto rounded-lg border border-solid border-gray bg-light-gray p-4"
              key={idx}
            >
              <img src={img} alt={title} className="rounded-lg" />
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}