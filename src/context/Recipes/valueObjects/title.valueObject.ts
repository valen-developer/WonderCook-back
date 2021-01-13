import { NullValueException } from "../../shared/domain/exceptions/NullValue.exception";
import { ValueObject } from "../../shared/domain/valueObjects/valueObject";

export class RecipeTitle implements ValueObject {
  value: string;

  constructor(value: string) {
    if (!value) throw new NullValueException("recipe title");
    this.value = value;
  }
}
