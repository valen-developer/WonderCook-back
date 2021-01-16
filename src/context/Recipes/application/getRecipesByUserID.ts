import { HttpStatus4xx } from "../../../apps/exceptions/statusExceptions/4xxException";
import { NullValueException } from "../../shared/domain/exceptions/NullValue.exception";
import { RecipeRepository } from "../domain/interfaces/recipeRepository.interface";
import { Recipe, RecipeObject } from "../domain/recipe.model";

export class GetAllRecipesByUserID {
  public static async get(
    userID: string,
    repository: RecipeRepository
  ): Promise<RecipeObject[]> {
    GetAllRecipesByUserID.checkArguments(userID, repository);

    const recipes = new Array<RecipeObject>();

    const recipesDB = await repository.getAllByUserID(userID);

    if (!recipesDB) throw new HttpStatus4xx("not found", "not found", 404);

    recipesDB.forEach((recipeDB: Recipe) => {
      recipes.push(recipeDB.toObject());
    });

    return recipes;
  }

  private static checkArguments(
    userID: string,
    repository: RecipeRepository
  ): void {
    if (!userID || !repository) throw new NullValueException("userID");
  }
}
