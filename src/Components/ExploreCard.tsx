"use client";

import { motion } from "framer-motion";

type ExploreCardProps = {
  title: string;
  id: string;
  imgUrl: string;
  index: number;
  active: string;
  p: string;
  handleClick: (id: string) => void;
};

const ExploreCard = ({
  title,
  id,
  imgUrl,
  index,
  active,
  handleClick,
  p,
}: ExploreCardProps) => {
  const fadeIn = (delay?: number, duration?: number) => ({
    hidden: {
      x: -500,
    },
    show: {
      x: 0,
      transition: {
        type: "tween",
        delay,
        duration,
      },
    },
  });
  return (
    <motion.div
      variants={fadeIn(index * 0.1, 0.3)}
      className={`relative h-[250px] flex-grow cursor-pointer border border-transparent  transition-all duration-500 ease-in-out hover:flex-grow-[4.3] lg:h-[600px]`}
      onMouseEnter={() => handleClick(id)}
      onMouseLeave={() => handleClick("")}
    >
      <div
        className={`${
          active !== id ? "lg:opacity-20" : "lg:opacity-100"
        } h-full w-full rounded-[24px] bg-cover bg-bottom bg-no-repeat opacity-80 lg:bg-center `}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>

      <h3
        className={`absolute left-10 z-0 text-2xl font-semibold text-white opacity-0  transition-all duration-500 ease-in-out lg:bottom-20 ${
          active === id ? "lg:opacity-0" : "lg:opacity-100"
        }`}
      >
        {title}
      </h3>
      <div
        className={`absolute  bottom-0 flex h-32 w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.8)] p-2 opacity-100 transition-all duration-500 ease-in-out lg:h-fit lg:p-8 ${
          active !== id ? "lg:opacity-0" : "lg:opacity-100"
        }`}
      >
        <h2 className="text-base font-semibold text-white lg:mb-[16px] lg:text-[24px]">
          {title}
        </h2>
        <p className="glassmorphism mb-[16px] rounded-[24px] p-2 text-white lg:p-4">
          {p}
        </p>
      </div>
    </motion.div>
  );
};

export default ExploreCard;
