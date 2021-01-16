import { JsonWebTokenError } from "jsonwebtoken";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";
import { RecipeIngredient } from "./ingredient.valueObject";

export class IngredientsArray implements ValueObject {
  ingredient: RecipeIngredient[] = new Array<RecipeIngredient>();

  constructor(ingredients: RecipeIngredient[]) {
    this.ingredient = ingredients;
  }

  public static buildIngredients(ingredients: string): IngredientsArray {
    const builtIngredients = new Array<RecipeIngredient>();

    const ingredientsAsArray: [
      { ingredient: string; quantity: string }
    ] = JSON.parse(ingredients);

    console.log(ingredientsAsArray);

    ingredientsAsArray.forEach((ingredientObject) => {
      builtIngredients.push(
        new RecipeIngredient(
          ingredientObject.ingredient,
          ingredientObject.quantity
        )
      );
    });

    return new IngredientsArray(builtIngredients);
  }

  public ingredientsAsString(): string {
    const ingredientsAsString: string[] = [];

    this.ingredient.forEach((ingredient) => {
      ingredientsAsString.push(ingredient.toString());
    });

    return JSON.stringify(this.ingredient);
  }
}
