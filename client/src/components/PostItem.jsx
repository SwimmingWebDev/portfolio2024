import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({
  postID,
  thumbnail,
  category,
  title,
  description,
  authorID,
}) => {
  const shortDesc =
    description.length > 140 ? description.substr(0, 140) + "..." : description;
  const shortTitle = title.length > 35 ? title.substr(0, 35) + "..." : title;

  return (
    <article className="post-box">
      <div className="post-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="post-content">
        <Link to={`/posts/${postID}`}>
          <h3>{shortTitle}</h3>
        </Link>
        <p>{shortDesc}</p>
        <div className="post-footer">
          <div className="post-author-details">
            {/* <span>Author ID:</span>
            {authorID} */}

            <small>10 minutes ago</small>
          </div>

          <Link
            to={`/posts/categories/${category}`}
            className="btn-post-category "
          >
            <small>{category}</small>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
