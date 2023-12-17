import type { IParallax } from "@react-spring/parallax";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavBarItems from "./NavBarItems";

type Props = {
  parallax: React.MutableRefObject<IParallax>;
};

const Navigation = ({ parallax }: Props) => {
  const navButtons = [
    {
      name: "About us",
      onClick: () => clickNavItem(1),
      afterBg: "after:bg-white",
      navigateTo: "#aboutUs",
    },
    {
      name: "Services",
      onClick: () => clickNavItem(2),
      afterBg: "after:bg-black",
      navigateTo: "#services",
    },
    {
      name: "Contact",
      onClick: () => clickNavItem(4),
      afterBg: "after:bg-green-800",
      navigateTo: "#contact",
    },
  ];
  const [isToggled, setToggle] = useState(false);

  const clickNavItem = (scrollToNumber: number) => {
    setToggle(false);
    // parallax.current.scrollTo(scrollToNumber);
  };

  const navContainer = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 200,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <header className="fixed right-0 top-0 z-40 flex justify-end">
      <button
        onClick={() => setToggle(!isToggled)}
        className={`fixed right-10 top-3 z-50 w-fit transition-all duration-300 ease-in-out ${
          !isToggled ? "rotate-0" : "rotate-90"
        }`}
      >
        <FaBars className="h-16 w-16 rounded-xl bg-black bg-opacity-20 p-3 text-white backdrop-blur-2xl" />
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="fixed h-full w-full  bg-white bg-opacity-20 backdrop-blur-lg"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <NavBarItems items={navButtons} isToggled={isToggled} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
