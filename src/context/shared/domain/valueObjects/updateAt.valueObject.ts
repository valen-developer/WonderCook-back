import { NullValueException } from "../exceptions/NullValue.exception";
import { ValueObject } from "./valueObject";

export class UpdateAt implements ValueObject {
  ingredient: string;

  constructor(value = new Date()) {
    this.ingredient = value.toUTCString();

    this.checkValue();
  }

  private checkValue(): void {
    if (!this.ingredient) throw new NullValueException("update at ");
  }

  public toDate(): Date {
    return new Date(this.ingredient);
  }
}
