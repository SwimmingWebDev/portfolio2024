import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Inspirations = () => {
  return (
    <div className="inspirations-container">
      <h1>Recent Inspirations</h1>
      <div className="subheading">
        <p>
          Explore a collection of ideas and projects that spark my creativity
        </p>
        <a href="#inspirations" className="btn">
          View All
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Inspirations;
