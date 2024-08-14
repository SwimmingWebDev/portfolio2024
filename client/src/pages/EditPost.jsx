import React, { useState, useContext, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { userContext } from "../context/userProvider.jsx";
import { useNavigate } from "react-router-dom";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Uncategorized");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const { currentUser } = useContext(userContext);
  const token = currentUser?.token;
  const navigate = useNavigate();

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  });

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { indent: "-1" }, { indent: "+1" }],
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

  const categories = ["Web development", "UX/UI Design", "Technology"];

  return (
    <section className="createPost-container">
      <h1>Update Post</h1>
      <p className="error-message">This is an error message</p>
      <form>
        <div className="input-box">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="field"
            autofocus
          />
        </div>
        <div className="create-category">
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

        {/* https://www.npmjs.com/package/react-quill */}

        <ReactQuill
          modules={modules}
          formats={formats}
          value={description}
          onChange={setDescription}
        />
        <input
          type="file"
          onChange={(e) => setThumbnail(e.target.files[0])}
          accept="png, jpg, jpeg"
        />
        <button type="submit" className="btn-primary">
          Edit
        </button>
      </form>
    </section>
  );
};

export default EditPost;
