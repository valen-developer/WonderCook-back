import { RecipeRepository } from "../domain/interfaces/recipeRepository.interface";
import { Recipe } from "../domain/recipe.model";

export class RecipeCreator {
  static async create(
    recipe: Recipe,
    repository: RecipeRepository
  ): Promise<void> {
    const saveReponse = await repository.save(recipe);

    if (!saveReponse.ok) throw new Error(saveReponse.message);
  }
}
