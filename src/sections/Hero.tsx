"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import logo from "~/Assets/WithName.png";

const Hero = () => (
  <section className="mb-10 mt-10 py-4 pl-6 sm:pl-16 lg:mt-44">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className=" mx-auto flex flex-col"
    >
      <div className=" relative z-10 flex-col">
        <motion.h1 variants={textVariant(1.1)} className="flex justify-center ">
          <Image
            src={logo}
            alt={"JUST-PINE logo with name"}
            width={400}
            height={200}
          />
        </motion.h1>
      </div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative z-[0] -mt-[12px] h-[50vmin]  w-full overflow-auto rounded-tl-[140px]  bg-cover bg-fixed bg-center bg-no-repeat md:mt-[20px] lg:h-[40vmin]"
        style={{ backgroundImage: "url('/cover.jpg')" }}
      ></motion.div>
    </motion.div>
  </section>
);

export default Hero;
