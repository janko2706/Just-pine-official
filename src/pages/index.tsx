import React, { useRef } from "react";
import Image from "next/image";
import {
  Parallax,
  ParallaxLayer,
  type IParallax,
} from "@react-spring/parallax";
import Navigation from "~/Components/Navigation/Navigation";
import CodeWindow from "~/Components/CodeWindow/CodeWindow";

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function Home() {
  const parallax = useRef<IParallax>(null!);
  return (
    <>
      <Navigation parallax={parallax} />
      <Parallax
        ref={parallax}
        pages={3}
        style={{ width: "100%", height: "100%", background: "#253237" }}
        onClick={() => void 0}
      >
        <ParallaxLayer
          onClick={() => void 0}
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <Image
            width={100}
            height={100}
            alt=""
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <Image
            width={100}
            height={100}
            alt=""
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Image
            width={100}
            height={100}
            alt=""
            src={url("earth")}
            style={{ width: "60%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="w-full">
            <div className="demo" data-text="Welcome">
              <div className="demo__text">Welcome</div>
            </div>
            <h1 className="py-8 text-center text-3xl text-white">
              TO THE FUTURE OF
            </h1>
            <div className="demo mb-20" data-text="Software">
              <div className="demo__text">Software</div>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Image
            width={100}
            height={100}
            alt=""
            src={url("bash")}
            style={{ width: "40%" }}
          /> */}
          <CodeWindow />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <Image
            width={100}
            height={100}
            alt=""
            src={url("clients-main")}
            style={{ width: "40%" }}
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}
