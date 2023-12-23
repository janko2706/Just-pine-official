"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { TitleText } from "~/Components/CustomTexts";
import ExploreCard from "~/Components/ExploreCard";
import { serviceArray } from "~/utils/serviceArray";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

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
        <div className="mt-[50px] hidden w-full flex-col flex-wrap gap-4 lg:flex lg:h-full  lg:shrink-0 lg:basis-96 lg:flex-row lg:gap-0 ">
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
        <div className="block lg:hidden">
          <Swiper slidesPerView={1} pagination modules={[Pagination]}>
            {serviceArray.map((item, index) => (
              <SwiperSlide
                key={index}
                id={index + item.title}
                className="pb-10 backdrop-blur-2xl"
              >
                <div className={`relative h-[400px] cursor-pointer  `}>
                  <div
                    className={` h-full w-full rounded-[24px] bg-cover bg-center bg-no-repeat `}
                    style={{ backgroundImage: `url(${item.imgUrl})` }}
                  ></div>
                  <div
                    className={`absolute  bottom-0 flex h-fit w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.8)] p-2 opacity-100 transition-all duration-500 ease-in-out lg:h-fit lg:p-8`}
                  >
                    <h2 className="text-lg font-semibold text-white lg:mb-[16px] lg:text-[24px]">
                      {item.title}
                    </h2>
                    <p className="glassmorphism  rounded-[24px] p-2 text-white lg:p-4">
                      {item.p}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
