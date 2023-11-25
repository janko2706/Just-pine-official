import React from "react";
import FullLogoImage from "~/Assets/WithName.png";
import Image from "next/image";
import type { IParallax } from "@react-spring/parallax";

type Props = {
  parallax: React.MutableRefObject<IParallax>;
};

const Navigation = ({ parallax }: Props) => {
  const navButtons = [
    { name: "About us", onClick: () => parallax.current.scrollTo(0) },
    { name: "Services", onClick: () => parallax.current.scrollTo(1) },
    { name: "Contact", onClick: () => parallax.current.scrollTo(2) },
  ];
  return (
    <div className="fixed top-0 z-50 flex h-fit w-full items-center justify-center bg-white mix-blend-difference">
      <a
        className="mr-28 cursor-pointer bg-white px-10 mix-blend-difference"
        onClick={() => parallax.current.scrollTo(0)}
      >
        <Image
          height={100}
          width={150}
          src={FullLogoImage}
          className="h-f w-full"
          alt="Just-Pine logo"
        />
      </a>
      <ul className="ml-28 flex gap-20">
        {navButtons.map((item, index) => {
          return (
            <li
              key={index}
              className="rounded-md p-2 text-lg transition-all duration-300 hover:bg-black hover:text-white"
            >
              <button onClick={item.onClick} type="button">
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
