"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TitleText } from "~/Components/CustomTexts";
import ExploreCard from "~/Components/ExploreCard";
import { serviceArray } from "~/utils/serviceArray";

const Explore = () => {
  const [active, setActive] = useState<string>("");

  return (
    <section className=" h-full w-full">
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex w-full flex-col"
      >
        <p className="text-center" id="services">
          | What do we offer
        </p>
        <TitleText
          title={
            <>
              There is an option <br className="hidden md:block" /> for everyone
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex w-full flex-col flex-wrap gap-4 lg:flex lg:h-full  lg:shrink-0 lg:basis-96 lg:flex-row lg:gap-0 ">
          {serviceArray.map((item, index) => (
            <ExploreCard
              p={item.p}
              key={item.title}
              active={active}
              index={index}
              handleClick={setActive}
              title={item.title}
              id={item.id}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
