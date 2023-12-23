"use client";

import { motion } from "framer-motion";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { footerVariants } from "~/utils/motion";

const Footer = () => (
  <>
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      id="contact"
      className="flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm selection:bg-green-700"
    >
      {" "}
      <h1 className="mb-20 text-center font-Orbitron text-6xl text-white">
        Contact us, let's talk!
      </h1>
      <div className="flex text-white">
        <div>
          <div>
            <ul className="flex flex-col items-center gap-10">
              <li className="w-full text-center text-2xl font-thin">
                <span className=" font-semibold">JUST PINE</span>, Obrt za
                racunalno programiranje
              </li>
              <li>
                <a
                  href="tel:1-212-555-5555"
                  title="Give me a call"
                  className="flex items-center gap-4"
                >
                  <FaPhone className="h-5 w-5" />
                  (+385) 99-216-6806
                </a>
              </li>{" "}
              <li>
                <a
                  href="mailto:info@just-pine.hr"
                  title="Send me an email"
                  className="flex items-center gap-4"
                >
                  <FaMailBulk className="h-5 w-5" />
                  info@just-pine.hr
                </a>
              </li>
              <li>
                <a
                  href="mailto:bogovicjan@gmail.com"
                  title="Send me an email"
                  className="flex items-center gap-4"
                >
                  <FaMailBulk className="h-5 w-5" />
                  bogovicjan@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  </>
);

export default Footer;
