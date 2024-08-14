import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import PostItem from "./PostItem";

import { FaArrowRight } from "react-icons/fa6";

//temp
import { DUMMY } from "../constants";

const Inspirations = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/posts`
        );
        setPosts(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

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
            .map(
              ({
                _id,
                thumbnail,
                category,
                title,
                description,
                author,
                createdAt,
              }) => (
                <PostItem
                  key={_id}
                  postID={_id}
                  thumbnail={thumbnail}
                  category={category}
                  title={title}
                  description={description}
                  authorID={author}
                  createdAt={createdAt}
                />
              )
            )}
        </div>
      ) : (
        <h2>No Inspirations Founds</h2>
      )}
    </section>
  );
};

export default Inspirations;
