import mongoose from "mongoose";
import Album from "../models/album.js";


albums: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }]

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  bands: { type: [String], default: [] },
  instrument: { type: String, default: "" },
  albums: [
    {
      title: String,
      year: Number
    }
  ],
  birthday: { type: Date, required: true },
  createdOn: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);
export default User;
