import { Router } from "express";
import { RecipeMongoRepository } from "../../context/Recipes/infrastructure/repositories/mongo/RecipeMongo.repositoy";
import { RecipeCreatorController } from "../controllers/recipes/RecipeCreator.controller";

export const recipeRouter: Router = Router();

const recipeRepository = new RecipeMongoRepository();
const recipeCreatorController = new RecipeCreatorController(recipeRepository);

recipeRouter.post("/", (req, resp) => {
  recipeCreatorController.run(req, resp);
});
