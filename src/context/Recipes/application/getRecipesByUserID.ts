import { NullValueException } from "../../shared/domain/exceptions/NullValue.exception";
import { RecipeRepository } from "../domain/interfaces/recipeRepository.interface";
import { Recipe, RecipeObject } from "../domain/recipe.model";

export class GetRecipesByUserID {
  public static async get(
    userID: string,
    repository: RecipeRepository
  ): Promise<RecipeObject[]> {
    GetRecipesByUserID.checkArguments(userID, repository);

    const recipes = new Array<RecipeObject>();

    const recipesDB = await repository.getAllByUserID(userID);

    recipesDB.forEach((recipeDB: any) => {
      recipes.push(
        new Recipe({
          title: recipeDB.title,
          uuid: recipeDB.uuid,
          createdAt: new Date(recipeDB.createdAt),
          updatedAt: new Date(recipeDB.updatedAt),
          voteAverage: recipeDB.voteAverage,
          voteCount: recipeDB.voteCount,
          ingredients: recipeDB.ingredients,
          body: recipeDB.body,
          image: recipeDB.image,
          ownID: recipeDB.ownID,
          categories: recipeDB.categories,
        }).toObject()
      );
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
