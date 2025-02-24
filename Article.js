import mongoose from "mongoose";
import Comment from "./Comment.js";

comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]


const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  keywords: { type: [String], default: [] },
  category: { type: String, default: "Uncategorized" },
  comments: [
    {
      text: String,
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    }
  ]
});

const Article = mongoose.model("Article", ArticleSchema);
export default Article;
