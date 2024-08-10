import React from "react";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa6";

const Inspirations = () => {
  return (
    <div className="inspirations-container">
      <h1>Recent Inspirations</h1>
      <div className="subheading">
        <p>
          Explore a collection of ideas and projects that spark my creativity
        </p>
        <Link to="/dashboard">
          <div className="btn-primary">
            View All
            <FaArrowRight />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Inspirations;
