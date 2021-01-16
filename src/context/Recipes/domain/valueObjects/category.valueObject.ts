import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

const validCategories: string[] = ["postre", "comida", "cena"];

export class RecipeCategory implements ValueObject {
  ingredient: string;

  constructor(value: string) {
    this.ingredient = value;

    this.isNull();
    this.isValidCategory();
  }

  private isNull(): void {
    if (!this.ingredient) throw new NullValueException("category");
  }

  private isValidCategory(): void {
    let isValid = false;

    validCategories.forEach((validCategory) => {
      if (validCategory === this.ingredient) isValid = true;
    });

    if (!isValid) throw new Error(`${this.ingredient} is not a valid category`);
  }
}
