import { RecipeCreator } from "../../../../context/Recipes/application/recipeCreator";
import { Recipe } from "../../../../context/Recipes/domain/recipe.model";
import { MockRecipeRepository } from "../infrastructure/mockRecipe.repository";

const mockRecipeRepository = new MockRecipeRepository();
const validRecipe = new Recipe({
  title: "title",
  uuid: "uuid",
  createdAt: new Date(),
  updatedAt: new Date(),
  voteAverage: 0,
  voteCount: 0,
  ingredients: '[{"ingredient": "un ingrediente"}]',
  body: "body must be bigger than 20 characteres",
  image: "image",
  ownID: "ownID",
  categories: '["postre"]',
});

describe("when createa new recipe and data is correct", () => {
  test("shouldn´t throw an exception ", () => {
    expect(async () => {
      await RecipeCreator.create(validRecipe, mockRecipeRepository);
    }).rejects.not.toThrowError();
  });
});
