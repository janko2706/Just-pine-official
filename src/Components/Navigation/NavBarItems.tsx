import React from "react";
import { motion } from "framer-motion";

type Props = {
  isToggled: boolean;
  items: {
    name: string;
    onClick: () => void;
    afterBg: string;
    navigateTo: string;
  }[];
};

const NavBarItems = ({ isToggled, items }: Props) => {
  const navList = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,

      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,

      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <motion.div
        className=" bar-item-cont flex h-full flex-col items-center justify-center "
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        {items.map((item, idx) => (
          <motion.a
            className={`nav-bar-item flex h-full w-full cursor-pointer items-center justify-center text-center text-5xl font-bold text-white ${item.afterBg}`}
            variants={navItem}
            key={idx}
            href={item.navigateTo}
            onClick={item.onClick}
          >
            <p>{item.name}</p>
          </motion.a>
        ))}
      </motion.div>
    </>
  );
};

export default NavBarItems;
