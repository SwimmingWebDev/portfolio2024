import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page container">
      <div className="error-message">
        <h1>Page Not Found</h1>
        <p>Something Went Wrong.</p>
        <Link to="/" className="btn-primary">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
