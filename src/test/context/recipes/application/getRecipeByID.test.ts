//TODO:

import { HttpStatus4xx } from "../../../../apps/exceptions/statusExceptions/4xxException";
import { GetRecipe } from "../../../../context/Recipes/application/getRecipe";
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

describe("when create a recipe and then find it", () => {
  test("shouldn´t throw any exception", async () => {
    await RecipeCreator.create(validRecipe, mockRecipeRepository);
    expect(async () => {
      await GetRecipe.get(validRecipe.uuid.value, mockRecipeRepository);
    }).rejects.not.toThrowError();
  });
});

describe("when find a recipe which dont´t exist", () => {
  test("should throw a 404 exception", async () => {
    try {
      await GetRecipe.get("invalid uuid", mockRecipeRepository);
    } catch (error) {
      const statusException = error.statusCode;

      expect(statusException).toEqual(404);
    }
  });
});
