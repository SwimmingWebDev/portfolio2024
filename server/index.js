require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const fileUpload = require("express-fileupload");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
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
  .then(app.listen(5000, () => console.log("Server is running")))
  .catch((error) => {
    console.log(error);
  });
