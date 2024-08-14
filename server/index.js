require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const fileUpload = require("express-fileupload");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
const allowedOrigins = ["http://localhost:5173"];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
  })
);
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.use(notFound);
app.use(errorHandler);

connect(process.env.MONGO_URI)
  .then(
    app.listen(process.env.PORT || 5000, () => console.log("Server is running"))
  )
  .catch((error) => {
    console.log(error);
  });
