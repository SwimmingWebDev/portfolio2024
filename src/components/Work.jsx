import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowCircleRight } from "react-icons/fa";
import WorkCarousel from "./WorkCarousel";

const Work = () => {
  useGSAP(() => {
    gsap.set(".work-title", { opacity: 0, y: 10 });
    gsap.to(".work-title", { opacity: 1, y: 0, duration: 0.3 });

    gsap.set(".work-subtitle", { opacity: 0 });
    gsap.to(".work-subtitle", {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.25,
    });

    gsap.set(".work-link-github", { opacity: 0 });
    gsap.to(".work-link-github", {
      opacity: 1,
      y: 0,
      duration: 1.5,
    });
  }, []);

  return (
    <section id="work" className="work-container">
      <div>
        <div className="work-header">
          <h1 className="work-title">My Work</h1>
          <div className="work-link-github">
            <p>Visit my GitHub</p> <FaArrowCircleRight />
          </div>
        </div>

        <p>
          <span className="work-subtitle">
            I'm really passionate about creating web development from scratch,{" "}
          </span>
          <span className="work-subtitle">
            including UI design and related resources. Look at my passion!
          </span>
        </p>
      </div>
      <WorkCarousel />
    </section>
  );
};

export default Work;
