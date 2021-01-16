import { SaveResponse } from "../../../shared/domain/interfaces/saveReponse.interface";
import { Recipe } from "../recipe.model";

export interface RecipeRepository {
  save(newRecipe: Recipe): Promise<SaveResponse>;

  getAllByUserID(userID: string): Promise<Recipe[]>;
  getRecipeByID(id: string): Promise<Recipe>;
}
