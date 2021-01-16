import { NullValueException } from "../exceptions/NullValue.exception";
import { ValueObject } from "./valueObject";

export class UUID implements ValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;

    this.checkValue();
  }

  private checkValue(): void {
    if (!this.value) throw new NullValueException("User uuid");
  }
}
