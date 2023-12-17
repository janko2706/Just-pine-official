"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const About = () => (
  <section className=" relative z-50 ">
    <motion.div
      initial="hidden"
      viewport={{ once: false, amount: 0.25 }}
      animate="show"
      className="mx-10 flex-col"
    >
      <motion.p
        variants={fadeIn("down", "tween", 0.2, 1)}
        className="text-center text-base font-thin text-white"
      >
        | Who are we?
      </motion.p>

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] text-center text-4xl font-thin text-white sm:text-[32px]"
      >
        <span className="text-4xl font-bold text-white">JUST-PINE.</span> We are
        commited to delivering innovative{" "}
        <span className="font-bold text-slate-100"> IT solutions </span>
        to businesses of all sizes. We will help you achieve your goals and
        thrive in a rapidly evolving digital landscape.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
