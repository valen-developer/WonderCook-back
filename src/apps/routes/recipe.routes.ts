import { Router } from "express";
import { RecipeMongoRepository } from "../../context/Recipes/infrastructure/repositories/mongo/RecipeMongo.repositoy";
import { GetRecipeController } from "../controllers/recipes/GetRecipe.controller";
import { GetRecipesByUserIDController } from "../controllers/recipes/GetRecipesByUserID.controller";
import { RecipeCreatorController } from "../controllers/recipes/RecipeCreator.controller";
import { ValidateTokenMiddleware } from "../middlewares/validateToken.middleware";

export const recipeRouter: Router = Router();

const validateTokenMiddleware = new ValidateTokenMiddleware();

const recipeRepository = new RecipeMongoRepository();

const recipeCreatorController = new RecipeCreatorController(recipeRepository);
const getRecipeController = new GetRecipeController(recipeRepository);
const getRecipesByUserIDController = new GetRecipesByUserIDController(
  recipeRepository
);

recipeRouter.post("/", validateTokenMiddleware.run, (req, resp) => {
  recipeCreatorController.run(req, resp);
});

// /api/recipe/:id
recipeRouter.get("/", (req, resp) => {
  getRecipeController.run(req, resp);
});

// /api/recipe/user/:userID
recipeRouter.get("/user", (req, resp) => {
  getRecipesByUserIDController.run(req, resp);
});
