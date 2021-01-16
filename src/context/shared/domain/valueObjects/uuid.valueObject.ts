import { NullValueException } from "../exceptions/NullValue.exception";
import { ValueObject } from "./valueObject";

export class UUID implements ValueObject {
  ingredient: string;

  constructor(value: string) {
    this.ingredient = value;

    this.checkValue();
  }

  private checkValue(): void {
    if (!this.ingredient) throw new NullValueException("User uuid");
  }
}
