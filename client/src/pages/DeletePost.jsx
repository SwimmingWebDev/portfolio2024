import React, { useState, useContext, useEffect } from "react";

import { userContext } from "../context/userProvider.jsx";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { FiDelete } from "react-icons/fi";
import axios from "axios";

const DeletePost = ({ postId }) => {
  const { currentUser } = useContext(userContext);
  const token = currentUser?.token;
  const navigate = useNavigate();
  const location = useLocation();

  // redirect to main page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const deletePost = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/posts/${postId}`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status == 200) {
        if (location.pathname == `/posts/${currentUser.id}`) {
          navigate(0);
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log("Couldn't delete post");
    }
  };

  return (
    <Link onClick={() => deletePost(postId)}>
      <FiDelete />
    </Link>
  );
};

export default DeletePost;
