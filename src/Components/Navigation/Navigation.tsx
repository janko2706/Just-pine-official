import React, { useState } from "react";
import FullLogoImage from "~/Assets/WithName.png";
import Image from "next/image";
import type { IParallax } from "@react-spring/parallax";
import Link from "next/link";
import { TiTimes } from "react-icons/ti";
import { FaBars } from "react-icons/fa";

type Props = {
  parallax: React.MutableRefObject<IParallax>;
};

const Navigation = ({ parallax }: Props) => {
  const navButtons = [
    { name: "About us", onClick: () => parallax.current.scrollTo(0) },
    { name: "Services", onClick: () => parallax.current.scrollTo(1) },
    { name: "Contact", onClick: () => parallax.current.scrollTo(2) },
  ];
  // return (
  //   <div className="fixed left-0 top-0 z-50 flex h-fit w-full items-center justify-center bg-white mix-blend-difference">
  //     <a
  //       className="cursor-pointer bg-white mix-blend-difference lg:mr-28 lg:px-10"
  //       onClick={() => parallax.current.scrollTo(0)}
  //     >
  //       <Image
  //         height={100}
  //         width={150}
  //         src={FullLogoImage}
  //         className="h-f w-full"
  //         alt="Just-Pine logo"
  //       />
  //     </a>
  //     <ul className="flex lg:ml-28 lg:gap-20">
  //       {navButtons.map((item, index) => {
  //         return (
  //           <li
  //             key={index}
  //             className="rounded-md p-1 text-sm transition-all duration-300 hover:bg-black hover:text-white lg:p-2 lg:text-lg"
  //           >
  //             <button onClick={item.onClick} type="button">
  //               {item.name}
  //             </button>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   </div>
  // );
  const [nav, setNav] = useState(false);

  return (
    <div className="nav fixed z-50 flex h-20 w-full items-center justify-between bg-black px-4 text-white">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="font-signature ml-2 text-5xl">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            Logo
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {navButtons.map((item, idx) => (
          <li
            key={idx}
            className="nav-links link-underline cursor-pointer px-4 text-base font-medium capitalize text-gray-500 duration-200 hover:scale-105 hover:text-white"
            onClick={item.onClick}
          >
            <p>{item.name}</p>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 cursor-pointer pr-4 text-gray-500 md:hidden"
      >
        {nav ? <TiTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer px-4 py-6 text-4xl capitalize"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navigation;
