import { Request, Response } from "express";
import { GetRecipesByUserID } from "../../../context/Recipes/application/getRecipesByUserID";
import { RecipeCreator } from "../../../context/Recipes/application/recipeCreator";
import { RecipeRepository } from "../../../context/Recipes/domain/interfaces/recipeRepository.interface";
import { Controller } from "../controller";

export class GetRecipesByUserIDController implements Controller {
  private repository: RecipeRepository;

  constructor(repository: RecipeRepository) {
    this.repository = repository;
  }

  async run(req: Request, resp: Response) {
    const userID = new String(req.query.userID).toString();

    try {
      const recipes = await GetRecipesByUserID.get(userID, this.repository);

      resp.json({
        userID,
        recipes,
      });
    } catch (error) {
      resp.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }
}
