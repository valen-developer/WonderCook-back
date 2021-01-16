import { HttpStatus4xx } from "../../../apps/exceptions/statusExceptions/4xxException";
import { RecipeRepository } from "../domain/interfaces/recipeRepository.interface";
import { RecipeObject } from "../domain/recipe.model";

export class GetRecipe {
  public static async get(
    id: string,
    repository: RecipeRepository
  ): Promise<RecipeObject> {
    const recipeDB = await repository.getRecipeByID(id);

    //TODO: create status code exceptions
    if (!recipeDB)
      throw new HttpStatus4xx("not found", "recipe not found", 404);

    return {
      title: recipeDB.title,
      uuid: recipeDB.uuid,
      createdAt: recipeDB.createdAt,
      updatedAt: recipeDB.updatedAt,
      voteAverage: recipeDB.voteAverage,
      voteCount: recipeDB.voteCount,
      ingredients: recipeDB.ingredients,
      body: recipeDB.body,
      image: recipeDB.image,
      ownID: recipeDB.ownID,
      categories: recipeDB.categories,
    };
  }
}
