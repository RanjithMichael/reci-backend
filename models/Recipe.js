import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  ingredients: [String],
  instructions: String,
  thumbnail: String,
  video: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

// ✅ Default export
export default mongoose.model("Recipe", RecipeSchema);
