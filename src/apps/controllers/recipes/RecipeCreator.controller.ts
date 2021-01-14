import { Request, Response } from "express";

import { Controller } from "../controller";

import { Recipe } from "../../../context/Recipes/domain/recipe.model";
import { RecipeRepository } from "../../../context/Recipes/domain/interfaces/recipeRepository.interface";

import { RecipeCreator } from "../../../context/Recipes/application/recipeCreator";

export class RecipeCreatorController implements Controller {
  private repository: RecipeRepository;

  constructor(repository: RecipeRepository) {
    this.repository = repository;
  }

  async run(req: Request, resp: Response): Promise<void> {
    const body = req.body;

    try {
      const newRecipe = new Recipe({
        title: body.title,
        uuid: body.uuid,
        createdAt: new Date(),
        updatedAt: new Date(),
        voteAverage: body.voteAverage,
        voteCount: body.voteCount,
        ingredients: body.ingredients,
        body: body.body,
        image: body.image,
        ownID: body.ownID,
      });

      await RecipeCreator.create(newRecipe, this.repository);

      resp.status(201).send();
    } catch (error) {
      console.log(error);
      resp.status(400).json({ ok: false, error: error.message });
    }
  }
}
