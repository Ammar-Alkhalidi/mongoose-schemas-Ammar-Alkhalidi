import mongoose from "mongoose";

const AlbumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true }
});

const Album = mongoose.model("Album", AlbumSchema);
export default Album;
