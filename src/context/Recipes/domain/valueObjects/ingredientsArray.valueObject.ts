import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";
import { RecipeIngredient } from "./ingredient.valueObject";

export class IngredientsArray implements ValueObject {
  value: RecipeIngredient[] = new Array<RecipeIngredient>();

  constructor(ingredients: RecipeIngredient[]) {
    this.value = ingredients;
  }

  public static buildIngredients(ingredients: string): IngredientsArray {
    const builtIngredients = new Array<RecipeIngredient>();

    const ingredientsAsArray: [
      { ingredient: string; quantity: string }
    ] = JSON.parse(ingredients);

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

  public ingredientsAsString(): string[] {
    const ingredientsAsString: string[] = [];

    this.value.forEach((ingredient) => {
      ingredientsAsString.push(ingredient.value);
    });

    return ingredientsAsString;
  }
}
