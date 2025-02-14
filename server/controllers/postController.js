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
      return next(new HttpError("Thumbnail is too big.", 422));
    }

    //give files a new name
    let fileName = thumbnail.name;
    let splittedFilename = fileName.split(".");
    let newFilename =
      splittedFilename[0] +
      uuid() +
      "." +
      splittedFilename[splittedFilename.length - 1];
    thumbnail.mv(
      path.join(__dirname, "..", "public/uploads", newFilename),
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
  try {
    const posts = await Post.find().sort({ updateAt: -1 }); // updateAt: -1 descending order
    res.status(200).json(posts);
  } catch (error) {
    return next(new HttpError(error));
  }
};

const getPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return next(new HttpError("Post not found.", 404));
    }
    res.status(200).json(post);
  } catch (error) {
    return next(new HttpError(error));
  }
};

//get posts by category
const getCatPosts = async (req, res, next) => {
  try {
    const { category } = req.params;
    const catPosts = await Post.find({ category }).sort({ updateAt: -1 });
    res.status(200).json(catPosts);
  } catch (error) {
    return next(new HttpError(error));
  }
};

const getUserPosts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await Post.find({ author: id }).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    return next(new HttpError(error));
  }
};

const editPost = async (req, res, next) => {
  try {
    let fileName;
    let newFilename;
    let updatedPost;
    const postId = req.params.id;
    let { title, category, description } = req.body;
    if (!title || !category || description.length < 12) {
      return next(new HttpError("Fill in all fields.", 422));
    }
    //get old post
    const oldPost = await Post.findById(postId);
    if (req.user.id == oldPost.author) {
      if (!req.files) {
        updatedPost = await Post.findByIdAndUpdate(
          postId,
          { title, category, description },
          { new: true }
        );
      } else {
        //delete old thumbnail
        fs.unlink(
          path.join(__dirname, "..", "public/uploads", oldPost.thumbnail),
          async (err) => {
            if (err) {
              return next(new HttpError(err));
            }
          }
        );

        //upload new thumbnail
        const { thumbnail } = req.files;
        //check file size
        if (thumbnail.size > 2000000) {
          return next(new HttpError("Thumbnail is too big.", 422));
        }
        //give files a new name
        fileName = thumbnail.name;
        let splittedFilename = fileName.split(".");
        newFilename =
          splittedFilename[0] +
          uuid() +
          "." +
          splittedFilename[splittedFilename.length - 1];
        thumbnail.mv(
          path.join(__dirname, "..", "public/uploads", newFilename),
          async (err) => {
            if (err) {
              return next(new HttpError("Failed to upload thumbnail.", 500));
            }
          }
        );

        updatedPost = await Post.findByIdAndUpdate(
          postId,
          { title, category, description, thumbnail: newFilename },
          { new: true }
        );
      }
    }
    if (!updatedPost) {
      return next(new HttpError("Couldn't update post.", 400));
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    return next(new HttpError(error));
  }
};

const deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    if (!postId) {
      return next(new HttpError("Post Unavailable.", 400));
    }
    const post = await Post.findById(postId);
    const fileName = post?.thumbnail;
    if (req.user.id == post.author) {
      fs.unlink(
        path.join(__dirname, "..", "public/uploads", fileName),
        async (err) => {
          if (err) {
            return next(new HttpError(err));
          } else {
            await Post.findByIdAndDelete(postId);
            //find user and reduce post count by 1
            const currentUser = await User.findById(req.user.id);
            const userPostCount = currentUser?.posts - 1;
            await User.findByIdAndUpdate(req.user.id, {
              posts: userPostCount,
            });
            res.json(`Post ${postId} deleted Successfully`);
          }
        }
      );
    } else {
      return next(new HttpError("Post couldn't be deleted", 403));
    }
  } catch (error) {
    return next(new HttpError(error));
  }
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
