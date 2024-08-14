import React, { useState, useContext, useEffect } from "react";

//Texteditor
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { userContext } from "../context/userProvider.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const { currentUser } = useContext(userContext);
  const token = currentUser?.token;

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const createPost = async (e) => {
    e.preventDefault();
    setError("");

    const postData = new FormData();
    postData.set("title", title);
    postData.set("category", category);
    postData.set("description", description);
    postData.set("thumbnail", thumbnail);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/posts`,
        postData,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status == 201) {
        return navigate("/");
      }
    } catch (err) {
      if (err.response) {
        // Server responded with a status other than 2xx
        setError(
          err.response?.data?.message ||
            "Unable to post at the moment. Please try again later"
        );
      } else {
        // Something else caused the error
        setError("An error occurred. Please try again later.");
      }
    }
  };

  const categories = [
    "Choose a Category",
    "Web Development",
    "Design",
    "Technology",
  ];

  return (
    <section className="createPost-container">
      <h1>Create Post</h1>
      <form onSubmit={createPost}>
        {error && <small className="error-message">{error}</small>}
        <div className="input-box">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="field"
            autoFocus
          />
        </div>
        <div className="create-category custom-select">
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <SimpleMDE
          modules={modules}
          formats={formats}
          value={description}
          onChange={setDescription}
        />
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          accept="image/png, image/jpeg"
        />
        <button type="submit" className="btn-primary">
          Create Post
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
