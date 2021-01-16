import { HttpStatus4xx } from "../../../apps/exceptions/statusExceptions/4xxException";
import { RecipeRepository } from "../domain/interfaces/recipeRepository.interface";
import { RecipeObject } from "../domain/recipe.model";

export class GetRecipe {
  public static async get(
    id: string,
    repository: RecipeRepository
  ): Promise<RecipeObject> {
    const recipeDB = await repository.getRecipeByID(id);

    if (!recipeDB)
      throw new HttpStatus4xx("not found", "not found recipe", 404);

    return recipeDB.toObject();
  }
}
