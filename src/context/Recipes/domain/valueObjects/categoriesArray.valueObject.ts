import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";
import { RecipeCategory } from "./category.valueObject";

export class RecipeCategoryArray implements ValueObject {
  ingredient: RecipeCategory[];

  private constructor(value: RecipeCategory[]) {
    this.ingredient = value;
  }

  public static buildCategories(categories: string): RecipeCategoryArray {
    let builtCatergories = new Array<RecipeCategory>();

    const categoriesAsArray: [string] = JSON.parse(categories);
    categoriesAsArray.forEach((category) => {
      builtCatergories.push(new RecipeCategory(category));
    });

    return new RecipeCategoryArray(builtCatergories);
  }

  public categoriesToString(): string {
    let categories = new Array<string>();

    this.ingredient.forEach((category) => {
      categories.push(category.ingredient);
    });

    return JSON.stringify(categories);
  }
}
