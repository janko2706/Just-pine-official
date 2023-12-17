"use client";

import { motion } from "framer-motion";
import { MdTouchApp } from "react-icons/md";
import ParticlesComp from "~/Components/Particles/Particles";
import { fadeIn, staggerContainer, zoomIn } from "~/utils/motion";

const Feedback = () => {
  return (
    <section className="relative h-fit bg-black bg-opacity-40 p-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_250px] backdrop-blur-sm lg:h-[50vh]">
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex h-full max-w-7xl flex-col gap-6 lg:flex-row"
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="relative flex flex-[0.5] flex-col justify-center rounded-[32px] p-4 sm:p-8 lg:max-w-[370px]"
        >
          <div>
            <div className="text-6xl font-bold leading-tight text-white ">
              We believe that{" "}
              <span className="font-thin italic">technology</span> can
              <span className="hollow"> change</span> the world
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flexCenter relative  flex-1"
        >
          <ParticlesComp />

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="absolute left-0 top-[3%] hidden lg:block"
          >
            <MdTouchApp className="h-16 w-16 text-blue-200" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Feedback;
