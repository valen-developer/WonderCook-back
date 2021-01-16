import { HttpStatus4xx } from "../../../../../apps/exceptions/statusExceptions/4xxException";
import { SaveResponse } from "../../../../shared/domain/interfaces/saveReponse.interface";
import { RecipeRepository } from "../../../domain/interfaces/recipeRepository.interface";
import { Recipe } from "../../../domain/recipe.model";

import RecipeMongoModel from "./recipeMongoModel";

//TODO: Implement Specification pattern
export class RecipeMongoRepository implements RecipeRepository {
  async getAllByUserID(userID: string): Promise<Recipe[]> {
    const recipeDB: any[] = await RecipeMongoModel.find({ ownID: userID });

    const recipes = new Array<Recipe>();

    recipeDB.forEach((recipe) => {
      recipes.push(
        new Recipe({
          title: recipe.title,
          uuid: recipe.uuid,
          createdAt: new Date(recipe.createdAt),
          updatedAt: new Date(recipe.updatedAt),
          voteAverage: recipe.voteAverage,
          voteCount: recipe.voteCount,
          ingredients: recipe.ingredients,
          body: recipe.body,
          image: recipe.image,
          ownID: recipe.ownID,
          categories: recipe.categories,
        })
      );
    });

    return recipes;
  }

  async getRecipeByID(id: string): Promise<Recipe> {
    const recipeDB = await RecipeMongoModel.findOne({ uuid: id });

    if (!recipeDB)
      throw new HttpStatus4xx("not found", "recipe not found", 404);

    return new Recipe({
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
    });
  }

  async save(newRecipe: Recipe): Promise<SaveResponse> {
    const recipeMongoModel = new RecipeMongoModel(newRecipe.toObject());
    const saveReponse = recipeMongoModel
      .save()
      .then((recipeDB) => {
        return { ok: true, message: "saved" };
      })
      .catch((err) => {
        return { ok: false, message: err.message };
      });

    return saveReponse;
  }
}
