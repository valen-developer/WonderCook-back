import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";
import { RecipeIngredient } from "./ingredient.valueObject";

export class IngredientsArray implements ValueObject {
  value: RecipeIngredient[] = new Array<RecipeIngredient>();

  constructor(ingredients: string) {
    this.buildIngredients(ingredients);
  }

  private buildIngredients(ingredients: string): void {
    console.log(ingredients);

    const ingredientsAsArray: [
      { ingredient: string; quantity: string }
    ] = JSON.parse(ingredients);

    ingredientsAsArray.forEach((ingredientObject) => {
      this.value.push(
        new RecipeIngredient(
          ingredientObject.ingredient,
          ingredientObject.quantity
        )
      );
    });
  }

  public ingredientsAsString(): string[] {
    const ingredientsAsString: string[] = [];

    this.value.forEach((ingredient) => {
      ingredientsAsString.push(ingredient.value);
    });

    return ingredientsAsString;
  }
}
