import React, { useState, useContext, useEffect } from "react";

import { userContext } from "../context/userProvider.jsx";
import { Link, useNavigate } from "react-router-dom";

import { FiDelete } from "react-icons/fi";

const DeletePost = () => {
  const { currentUser } = useContext(userContext);
  const token = currentUser?.token;
  const navigate = useNavigate();

  // redirect to main page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <Link>
      <FiDelete />
    </Link>
  );
};

export default DeletePost;
