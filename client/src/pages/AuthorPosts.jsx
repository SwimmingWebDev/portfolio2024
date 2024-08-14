import React, { useState, useContext, useEffect } from "react";
import PostItem from "../components/PostItem";
import { userContext } from "../context/userProvider.jsx";
import axios from "axios";

//react-icons
import { IoMdAdd } from "react-icons/io";
import { HiLogin } from "react-icons/hi";
import { Link } from "react-router-dom";

const AuthorPosts = () => {
  const [posts, setPosts] = useState([]);

  const { currentUser } = useContext(userContext);

  useEffect(() => {
    const getUserPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/posts/users/${currentUser?.id}`
        );
        setPosts(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserPosts();
  }, []);

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
          <Link to={`/posts/categories/Web%20Development`}>
            <li>Web development</li>
          </Link>
          <Link to={`/posts/categories/Design`}>
            <li>Design</li>
          </Link>
          <Link to={`/posts/categories/Technology`}>
            <li>Technology</li>
          </Link>
        </ul>
      </div>

      {posts.length > 0 ? (
        <div className="posts-container">
          {posts.map(
            ({ _id, thumbnail, category, title, description, author }) => (
              <PostItem
                key={_id}
                postID={_id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={author}
              />
            )
          )}
        </div>
      ) : (
        <h2>You have no posts yet.</h2>
      )}
    </section>
  );
};

export default AuthorPosts;
