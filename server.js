import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import userRoutes from "./routes/users.js";
import articleRoutes from "./routes/articles.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Database Connection Error:", err));

  
// Routes
app.use("/users", userRoutes);
app.use("/articles", articleRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
