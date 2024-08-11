import React, { useState } from "react";
import { Link } from "react-router-dom";

import PostItem from "./PostItem";

import { FaArrowRight } from "react-icons/fa6";

//temp
import { DUMMY } from "../constants";

const Inspirations = () => {
  const [posts, setPosts] = useState(DUMMY);

  return (
    <section id="inspirations" className="inspirations-container">
      <h1>Recent Inspirations</h1>
      <div className="inspirations-subheading">
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
      {posts.length > 0 ? (
        <div className="posts-container">
          {posts
            .slice(-3)
            .reverse()
            .map(({ id, thumbnail, category, title, desc, authorID }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={desc}
                authorID={authorID}
              />
            ))}
        </div>
      ) : (
        <h2>No Inspirations Founds</h2>
      )}
    </section>
  );
};

export default Inspirations;
