import React from "react";
import { Link } from "react-router-dom";

import { FiEdit } from "react-icons/fi";
import { FiDelete } from "react-icons/fi";

//temp

import PostImg from "../../public/assets/images/post-img.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail-container">
      <h1>My Inspirations</h1>
      <div className="post-detail-contents">
        <div className="post-detail-header">
          <Link
            to={`/posts/categories/UX/UI Design`}
            className="btn-post-category "
          >
            <small>UX/UI Design</small>
          </Link>
          <h2>This is the title!</h2>
          <small>1 day ago</small>
        </div>
        <div className="post-detail-buttons">
          <Link to={`/posts/admin/edit`}>
            <FiEdit />
          </Link>
          <Link to={`/posts/admin/delete`}>
            <FiDelete />
          </Link>
        </div>
        <div className="post-detail-thumbnail">
          <img src={PostImg} alt="" />
        </div>
        <p>
          I needed to be able to toggle showing all rows in the grid with only
          showing the first row. It's possible to achieve this by using a
          combination of grid-template-rows and grid-auto-rows. Basically,
          define the first row using grid-template-rows (or however many rows
          you want to be visible) and set grid-auto-rows to be zero (this will
          give all subsequent rows a height of zero). Also, ensure you remove
          any padding, row gap, and set overflow to hidden.
        </p>
        <p>
          I needed to be able to toggle showing all rows in the grid with only
          showing the first row. It's possible to achieve this by using a
          combination of grid-template-rows and grid-auto-rows. Basically,
          define the first row using grid-template-rows (or however many rows
          you want to be visible) and set grid-auto-rows to be zero (this will
          give all subsequent rows a height of zero). Also, ensure you remove
          any padding, row gap, and set overflow to hidden.
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
