import { workslides } from "../constants";
import { useEffect, useRef, useState } from "react";

const WorkCarousel = () => {
  return (
    <>
      <div className="work-carousel">
        {workslides.map((contents, index) => (
          <div key={contents.id} id="slider">
            <div className="work-carousel-container">
              <div className="work-carousel-box">
                <img
                  src={contents.thumbnail}
                  alt={contents.title}
                  id="work-thumbnail"
                />
              </div>
              <div className="demo-text">
                {contents.tech.map((text) => (
                  <p key={text} className="text">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkCarousel;
