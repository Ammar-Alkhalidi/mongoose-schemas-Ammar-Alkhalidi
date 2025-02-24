import express from "express";
import Article from "../models/Article.js";

const router = express.Router();

// Get all articles
router.get("/", async (req, res) => {
  try {
    const articles = await Article.find().populate("author", "firstName lastName");
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new article
router.post("/", async (req, res) => {
  try {
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
