import { SaveResponse } from "../../../shared/domain/interfaces/saveReponse.interface";
import { Recipe } from "../recipe.model";

export interface RecipeRepository {
  save(newRecipe: Recipe): Promise<SaveResponse>;
}
