import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Olma from "../../public/assets/png/apple.png";
import Anor from "../../public/assets/png/anor.png";
import qurutilganorik from "../../public/assets/png/quritilganorik.png";
import Orik from "../../public/assets/png/orik.png";
import holmeva from "../../public/assets/png/holmeva.png";
import quruqmeva from "../../public/assets/png/quruqmeva.png";
import QizilShaftoli from "../../public/assets/png/qizil-shaftoli.png";
import Uzum from "../../public/assets/png/uzum.png";
import qurutilganOrik from "../../public/assets/png/qurutilganOrik.png";
import bodom from "../../public/assets/png/bodom.png";
import newOlma from "../../public/assets/png/newOlma.png";
import yashilolma from "../../public/assets/png/yashilolma.png";
import sariqolma from "../../public/assets/png/sariqolma.png";
import yeryongoq from "../../public/assets/png/yeryongoq.png";
import yongoq from "../../public/assets/png/yongoq.png";
import pista from "../../public/assets/png/pista.png";

const mevalar = [
  {
    id: 1,
    mainImg: Olma,
    title: "Olma",
    slug: "Olma",
    info: {
      data: "Olmaning FUJION navi",
      thumbnails: [Olma],
    },
  },
  {
    id: 2,
    mainImg: Anor,
    title: "Anor",
  },
  {
    id: 3,
    mainImg: qurutilganorik,
    title: "O'rik",
  },
  {
    id: 4,
    mainImg: Orik,
    title: "O'rik",
  },
  {
    id: 5,
    mainImg: holmeva,
    title: "O'rik",
  },
  {
    id: 6,
    mainImg: QizilShaftoli,
    title: "Qizil shaftoli",
  },
  {
    id: 7,
    mainImg: Uzum,
    title: "Uzum",
  },
  {
    id: 8,
    mainImg: quruqmeva,
    title: "O'rik",
  },
  {
    id: 9,
    mainImg: qurutilganOrik,
    title: "O'rik",
  },
  {
    id: 10,
    mainImg: bodom,
    title: "bodom",
  },
  {
    id: 11,
    mainImg: newOlma,
    title: "Qizil Olma",
  },
  {
    id: 12,
    mainImg: yashilolma,
    title: "Yashil Olma",
  },
  {
    id: 13,
    mainImg: sariqolma,
    title: "Sariq Olma",
  },
  {
    id: 14,
    mainImg: yeryongoq,
    title: "Yer Yong'oq",
  },
  {
    id: 15,
    mainImg: yongoq,
    title: "Yong'oq",
  },
  {
    id: 16,
    mainImg: pista,
    title: "Pista",
  },
];

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

export default function ProductsList() {
  const { t } = useTranslation();

  const [country, setCountry] = useState(null);

  useEffect(() => {
    getDAte();
  }, []);

  const getDAte = async () => {
    try {
      const res = await axios.get(`https://kork-backend.onrender.com/products`);
      const data = await res.data;
      console.log(data);
      setCountry(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="base-container  md:py-12">
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {mevalar?.map((item) => {
            console.log(item);
            return (
              <Link to={`/batafsil/${item.slug}`}>
                <motion.li
                  variants={item}
                  className="group w-full rounded-lg border border-solid border-gray bg-light-gray p-4"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.mainImg}
                      alt={t(item.title)}
                      className="mb-4 h-[222px]  w-full rounded-lg object-cover"
                    />
                    <h3 className="mb-10 line-clamp-1 text-[20px] font-semibold">
                      {t(item.title)}
                    </h3>
                    <div className="absolute -bottom-10 flex h-full w-full items-end justify-center opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
                      <button className="btn-orange w-full text-sm font-semibold">
                        {t("thorough")}
                      </button>
                    </div>
                  </div>
                </motion.li>
              </Link>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
}
