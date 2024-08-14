import React, { useState, useContext } from "react";
import PostItem from "../components/PostItem";
import { RiKey2Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { HiLogin } from "react-icons/hi";
import { Link } from "react-router-dom";

import { userContext } from "../context/userProvider.jsx";

//temp
import { DUMMY } from "../constants";

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY);
  const { currentUser } = useContext(userContext);

  return (
    <section className="dashboard post-detail-container">
      <div className="dashboard-header">
        <h1>My Inspirations</h1>
        {currentUser?.id ? (
          <div className="post-icons">
            <Link to="/create">
              <IoMdAdd />
            </Link>

            {/* <Link to="/register">
              <RiKey2Line />
            </Link> */}
          </div>
        ) : (
          <div className="post-icons">
            <Link to="/login">
              <HiLogin />
            </Link>
          </div>
        )}
      </div>
      <div className="inspirations-category">
        <ul className="inspirations-category-items">
          <li>Web development</li>
          <li>UX/UI Design</li>
          <li>Technology</li>
        </ul>
      </div>

      {posts.length > 0 ? (
        <div className="posts-container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
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
        <h2>You have no posts yet.</h2>
      )}
    </section>
  );
};

export default AuthorPosts;
