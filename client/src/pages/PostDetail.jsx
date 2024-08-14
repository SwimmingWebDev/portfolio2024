import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { FiEdit } from "react-icons/fi";

import { userContext } from "../context/userProvider";
import DeletePost from "./DeletePost";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  const { currentUser } = useContext(userContext);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/posts/${id}`
        );
        setPost(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPost();
  }, [id]);

  return (
    <section className="post-detail-container">
      <h1>My Inspirations</h1>
      {post && (
        <div className="post-detail-contents">
          <div className="post-detail-header">
            <Link
              to={`/posts/categories/${post.category}`}
              className="btn-post-category "
            >
              <small>{post.category}</small>
            </Link>
            <h2>{post.title}</h2>
            <small>{post.createdAt}</small>
          </div>
          {currentUser?.id == post?.author && (
            <div className="post-detail-buttons">
              <Link to={`/posts/${post?._id}/edit`}>
                <FiEdit />
              </Link>
              <DeletePost postId={id} />
            </div>
          )}

          <div className="post-detail-thumbnail">
            <img
              src={`${import.meta.env.VITE_ASSETS_URL}/uploads/${
                post.thumbnail
              }`}
              alt={post.title}
            />
          </div>
          {/* dangerouslySetInnerHTML : to render HTML directly */}
          <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
        </div>
      )}
    </section>
  );
};

export default PostDetail;
