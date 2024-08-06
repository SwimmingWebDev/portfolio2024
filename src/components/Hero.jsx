import React, { useRef, useState } from "react";

// icons
import { FaArrowRight } from "react-icons/fa6";
import { TextPlugin } from "gsap/TextPlugin";

// assets
import { bannerVideo } from "../utils";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(bannerVideo);
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
        duration: 1,
        ease: "bounceIn",
      })
      .to(
        ".btn-txt-myportfolio",
        {
          color: "#000000",
          ease: "none",
        },
        "-=1"
      )
      .to(
        ".btn-arrow-myportfolio",
        {
          color: "#000000",
          ease: "none",
        },
        "-=1"
      );
    // text animation
    gsap.set("#hero-title", { opacity: 0 });
    gsap.to("#hero-title", { opacity: 1, stagger: 0.1, delay: 0.5 });

    gsap.set(".hero-title-hello", { opacity: 0, x: -115 });
    gsap.to(".hero-title-hello", {
      opacity: 1,
      x: 0,
      stagger: 0.05,
      delay: 0.1,
      duration: 0.3,
      ease: "elastic.inOut",
    });
  }, []);

  return (
    <section className="hero-container">
      <div className="video-container">
        <video autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div className="banner">
        <p>
          <span className="hero-title-hello">Hello</span>
          <span id="hero-title"> I'm</span> Yang - a passionate designer &
          developer based in Vancouver, Canada
        </p>
        <a href="#work">
          <button
            className="btn-work"
            ref={tl}
            onMouseEnter={() => tl.current.play()}
            onMouseLeave={() => tl.current.reverse()}
          >
            <span className="btn-txt-myportfolio">My Portfolio</span>
            <div className="btn-circle"></div>
            <FaArrowRight className="btn-arrow-myportfolio" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
