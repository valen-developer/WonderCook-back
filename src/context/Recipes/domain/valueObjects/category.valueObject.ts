import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class RecipeCategory implements ValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;

    this.isNull();
  }

  private isNull(): void {
    if (!this.value) throw new NullValueException("category");
  }
}
