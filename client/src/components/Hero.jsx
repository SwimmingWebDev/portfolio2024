import { useRef, useState } from "react";

// icons
import { FaArrowDown } from "react-icons/fa6";
import { TextPlugin } from "gsap/TextPlugin";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Spline from "@splinetool/react-spline";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const tl = useRef();

  useGSAP(() => {
    // button animation
    tl.current = gsap.timeline({
      paused: true,
    });

    tl.current
      .to(".btn-circle", {
        width: "150%",
        height: "150%",
        duration: 0.5,
        ease: "bounceIn",
      })
      .to(
        ".btn-txt-myportfolio",
        {
          color: "#000000",
          ease: "none",
        },
        "-=0.5"
      )
      .to(
        ".btn-arrow-myportfolio",
        {
          color: "#000000",
          ease: "none",
        },
        "-=0.5"
      );
    // text animation
  }, []);

  return (
    <section className="hero-container">
      <div className="spline-embed">
        <Spline scene="https://prod.spline.design/CLDVARrcuCPRQaED/scene.splinecode" />
      </div>
      <div className="banner">
        <div className="banner-contents">
          <h1>
            <span className="hero-title-hello">Hello, I'm Yang.</span>
          </h1>
          <p>
            Focus on creating digital experiences - Web Development &
            Interactive Design
          </p>
        </div>
        {/* <div className="hero-tech-icons">
          <FaPython />
          <FaJs />
          <FaReact />
          <FaNodeJs />
          <FaFigma />
        </div> */}
        <a href="#work">
          <button
            className="btn-work"
            ref={tl}
            onMouseEnter={() => tl.current.play()}
            onMouseLeave={() => tl.current.reverse()}
          >
            <span className="btn-txt-myportfolio">My Portfolio</span>
            <div className="btn-circle"></div>
            <FaArrowDown className="btn-arrow-myportfolio" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
