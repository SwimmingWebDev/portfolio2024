import React, { useState } from "react";
import PostItem from "../components/PostItem";

//temp
import { DUMMY } from "../constants";

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY);

  return (
    <section className="dashboard post-detail-container">
      <h1>My Inspirations</h1>
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
        <h2>No Inspirations Founds</h2>
      )}
    </section>
  );
};

export default AuthorPosts;
