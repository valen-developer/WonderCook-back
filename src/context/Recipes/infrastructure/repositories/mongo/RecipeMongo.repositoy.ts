import { SaveResponse } from "../../../../shared/domain/interfaces/saveReponse.interface";
import { RecipeRepository } from "../../../domain/interfaces/recipeRepository.interface";
import { Recipe } from "../../../domain/recipe.model";

import RecipeMongoModel from "./recipeMongoModel";

//TODO: Implement Specification pattern
export class RecipeMongoRepository implements RecipeRepository {
  async getAllByUserID(userID: string): Promise<any> {
    return await RecipeMongoModel.find({ ownID: userID });
  }
  getRecipeByID(recipeID: string): Promise<Recipe> {
    throw new Error("Method not implemented.");
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
