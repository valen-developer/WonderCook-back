import { NullValueException } from "../exceptions/NullValue.exception";
import { ValueObject } from "./valueObject";

export class CreateAt implements ValueObject {
  value: string;

  constructor(value = new Date()) {
    this.value = value.toUTCString();
    this.checkValue();
  }

  private checkValue(): void {
    if (!this.value) throw new NullValueException("create at ");
  }

  public toDate(): Date {
    return new Date(this.value);
  }
}
