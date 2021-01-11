import { NullValueException } from "../exceptions/NullValue.exception";
import { ValueObject } from "./valueObject";

export class UpdateAt implements ValueObject {
  value: string;

  constructor(value: Date) {
    this.value = value.toUTCString();

    this.checkValue();
  }

  private checkValue(): void {
    if (!this.value) throw new NullValueException("update at ");
  }

  public toDate(): Date {
    return new Date(this.value);
  }
}
