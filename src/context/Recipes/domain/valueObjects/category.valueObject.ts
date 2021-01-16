import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

const validCategories: string[] = ["postre", "comida", "cena"];

export class RecipeCategory implements ValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;

    this.isNull();
    this.isValidCategory();
  }

  private isNull(): void {
    if (!this.value) throw new NullValueException("category");
  }

  private isValidCategory(): void {
    let isValid = false;

    validCategories.forEach((validCategory) => {
      if (validCategory === this.value) isValid = true;
    });

    if (!isValid) throw new Error(`${this.value} is not a valid category`);
  }
}
