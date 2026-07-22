import express from "express";
import { getRecipes, getRecipeById, addRecipe, deleteRecipe } from "../controllers/recipeController.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipeById);
router.post("/", addRecipe);
router.delete("/:id", deleteRecipe);

export default router;