import { SaveResponse } from "../../../../shared/domain/interfaces/saveReponse.interface";
import { RecipeRepository } from "../../../domain/interfaces/recipeRepository.interface";
import { Recipe } from "../../../domain/recipe.model";

import RecipeMongoModel from "./recipeMongoModel";

export class RecipeMongoRepository implements RecipeRepository {
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
