import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class UserPassword implements ValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;

    this.checkValue();
  }

  private checkValue(): void {
    if (!this.value) throw new NullValueException("password ");

    this.checkBiggerThanSixChars();
  }

  private checkBiggerThanSixChars(): void {
    if (this.value.length < 6)
      throw new Error("Password should be bigger than six characters");
  }
}
