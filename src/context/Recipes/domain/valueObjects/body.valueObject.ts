import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class RecipeBody implements ValueObject {
  value: string;

  constructor(value: string) {
    if (!value) throw new NullValueException("body");
    this.value = value;

    this.validLength();
  }

  private validLength() {
    if (this.value.length < 20)
      throw new Error("recipe body must to have at least 20 characters");
  }
}
