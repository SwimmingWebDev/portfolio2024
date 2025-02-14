const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    category: {
      type: String,
      enum: ["Web Development", "Design", "Technology"],
      required: true,
    },
    description: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    thumbnail: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model("Post", postSchema);
