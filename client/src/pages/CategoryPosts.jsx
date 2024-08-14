import React, { useState, useEffect } from "react";
import PostItem from "../components/PostItem";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getCategoryPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/posts/categories/${category}`
        );
        setPosts(response?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategoryPosts();
  }, [category]);

  return (
    <section className="category-posts post-detail-container">
      <h1>My Inspirations</h1>
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
        <h2>No Inspirations Founds</h2>
      )}
    </section>
  );
};

export default CategoryPosts;
