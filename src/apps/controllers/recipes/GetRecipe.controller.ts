import { Request, Response } from "express";
import { GetRecipe } from "../../../context/Recipes/application/getRecipe";
import { RecipeRepository } from "../../../context/Recipes/domain/interfaces/recipeRepository.interface";
import { HttpStatus4xx } from "../../exceptions/statusExceptions/4xxException";
import { Controller } from "../controller";

export class GetRecipeController implements Controller {
  private repository: RecipeRepository;

  constructor(repository: RecipeRepository) {
    this.repository = repository;
  }

  async run(req: Request, resp: Response): Promise<void> {
    const id = new String(req.query.id).toString();

    try {
      const recipeDB = await GetRecipe.get(id, this.repository);

      resp.json({
        ok: true,
        recipeDB,
      });
    } catch (error) {
      if (error instanceof HttpStatus4xx)
        resp.status(error.statusCode).json({
          ok: false,
          error: error.message,
        });
      else
        resp.status(400).json({
          ok: false,
          error: error.message,
        });
    }
  }
}
