const Post = require("../models/postModel");
const User = require("../models/userModel");
const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const HttpError = require("../models/errorModel");

const createPost = async (req, res, next) => {
  try {
    let { title, category, description } = req.body;
    if (!title || !category || !description || !req.files) {
      return next(
        new HttpError("Fill in all fields and choose a thumbnail.", 422)
      );
    }

    const { thumbnail } = req.files;
    if (thumbnail.size > 2000000) {
      return next(new HttpError("Thumbnail too big.", 422));
    }

    let fileName = thumbnail.name;
    let splittedFilename = fileName.split(".");
    let newFilename =
      splittedFilename[0] +
      uuid() +
      "." +
      splittedFilename[splittedFilename.length - 1];
    thumbnail.mv(
      path.join(__dirname, "..", "/uploads", newFilename),
      async (err) => {
        if (err) {
          return next(new HttpError("Failed to upload thumbnail.", 500));
        } else {
          const newPost = await Post.create({
            title,
            category,
            description,
            thumbnail: newFilename,
            author: req.user.id,
          });
          if (!newPost) {
            return next(new HttpError("Post couldn't be created", 422));
          }
          // find user and update user post count
          const currentUser = await User.findById(req.user.id);
          const userPostCount = currentUser.posts + 1;
          await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });

          res.status(201).json(newPost);
        }
      }
    );
  } catch (error) {
    return next(new HttpError(error));
  }
};

const getPosts = async (req, res, next) => {
  res.json("get all Post");
};

const getPost = async (req, res, next) => {
  res.json("get a Post");
};

//get posts by category
const getCatPosts = async (req, res, next) => {
  res.json("get posts by category");
};

const getUserPosts = async (req, res, next) => {
  res.json("get user Posts");
};

const editPost = async (req, res, next) => {
  res.json("edit Post");
};

const deletePost = async (req, res, next) => {
  res.json("delete Post");
};

module.exports = {
  getPosts,
  getPost,
  getCatPosts,
  getUserPosts,
  createPost,
  editPost,
  deletePost,
};
