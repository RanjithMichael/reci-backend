// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import recipeRoutes from "./routes/recipeRoutes.js";

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/recipes";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("Recipe API is running 🚀");
});

// ✅ Recipe Routes
app.use("/api/recipes", recipeRoutes);

// ✅ Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
