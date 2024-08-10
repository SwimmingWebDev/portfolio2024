import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <nav className="post-nav">
      <ul className="post-items">
        <li>
          <Link to="/profile">Admin</Link>
        </li>
        <li>
          <Link to="/create">Create Post</Link>
        </li>
        <li>
          <Link to="/authors">Authors</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
