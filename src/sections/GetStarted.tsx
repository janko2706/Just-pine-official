"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";
import firmwareVector from "~/Assets/firmwareVector.svg";

import { TitleText } from "~/Components/CustomTexts";
import StartSteps from "~/Components/StartSteps";

const GetStarted = () => (
  <section className="relative z-10 mx-auto mt-36 flex justify-center p-10 shadow-2xl backdrop-blur-lg md:mt-60 lg:mt-0">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex max-w-7xl flex-col gap-4 md:flex-row  lg:flex-row"
    >
      <motion.div variants={planetVariants("left")} className=" flex-1">
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={firmwareVector}
          width={2000}
          height={2000}
          alt="get-started"
          priority={true}
          className="h-[90%] w-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex flex-[0.75] flex-col justify-center"
      >
        <TitleText title={<>Why us?</>} />
        <div className="mt-[31px] flex max-w-[370px] flex-col gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
