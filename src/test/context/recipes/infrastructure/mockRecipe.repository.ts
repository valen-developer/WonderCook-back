import { RecipeRepository } from "../../../../context/Recipes/domain/interfaces/recipeRepository.interface";
import { Recipe } from "../../../../context/Recipes/domain/recipe.model";
import { SaveResponse } from "../../../../context/shared/domain/interfaces/saveReponse.interface";

export class MockRecipeRepository implements RecipeRepository {
  recipes: Recipe[] = new Array();

  constructor() {}

  async save(newRecipe: Recipe): Promise<SaveResponse> {
    this.recipes.push(newRecipe);

    return {
      ok: true,
      message: "user saved",
    };
  }

  async getAllByUserID(userID: string): Promise<any> {
    const userRecipes = new Array<Recipe>();

    this.recipes.forEach((recipe) => {
      if (recipe.ownID.value === userID) userRecipes.push(recipe);
    });

    return userRecipes;
  }

  async getRecipeByID(id: string): Promise<any> {
    let recipe = null;

    this.recipes.forEach((recip) => {
      if (recip.uuid.value === id) recipe = recip;
    });

    return recipe;
  }
}
