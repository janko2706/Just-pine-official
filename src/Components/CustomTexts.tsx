"use client";
import { motion } from "framer-motion";
import { textVariant2 } from "~/utils/motion";
import type { ReactNode } from "react";

type textProps = {
  title: string | ReactNode;
  textStyles?: string;
};

export const TitleText = ({ title, textStyles }: textProps) => (
  <div>
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-Orbitron text-[40px] font-bold text-white md:text-[64px] ${textStyles}`}
    >
      {title}
    </motion.h2>
  </div>
);
