import {
  Parallax,
  ParallaxLayer,
  type IParallax,
} from "@react-spring/parallax";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import Footer from "~/Components/Footer";
import Navigation from "~/Components/Navigation/Navigation";

import { About, Explore, Feedback, GetStarted, Hero } from "~/sections";
import { fadeIn } from "~/utils/motion";

export default function Home() {
  const parallax = useRef<IParallax>(null!);
  return (
    <>
      <Navigation parallax={parallax} />
      <Parallax
        config={{ mass: 5, friction: 120, tension: 120 }}
        ref={parallax}
        pages={5}
        className="backgroundPattern"
        style={{ width: "100%", height: "100%" }}
        onClick={() => void 0}
      >
        <ParallaxLayer offset={0} speed={0.5} style={{ pointerEvents: "none" }}>
          <section className="relative" id="aboutUs">
            <Hero />
            <About />
          </section>
          <motion.div
            variants={fadeIn("up", "tween", 0, 0.7)}
            className=" absolute -bottom-4 left-0 right-0 mx-auto flex animate-bounce cursor-pointer justify-center text-white"
          >
            <IoIosArrowRoundDown className="h-32 w-20 font-thin" />
          </motion.div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1} style={{ opacity: 1 }}>
          <section className="relative h-fit" >
            <Explore />
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.1} factor={0} style={{ opacity: 1 }}>
          <section className="relative">
            <GetStarted />
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0}>
          <section className="relative hidden md:block lg:block">
            <Feedback />
          </section>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
