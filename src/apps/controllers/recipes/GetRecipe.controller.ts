import { Request, Response } from "express";
import { RecipeRepository } from "../../../context/Recipes/domain/interfaces/recipeRepository.interface";
import { Controller } from "../controller";

export class GetRecipeController implements Controller {
  private repository: RecipeRepository;

  constructor(repository: RecipeRepository) {
    this.repository = repository;
  }

  async run(req: Request, resp: Response): Promise<void> {
    const id = req.query.id;
  }
}
