import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class UserName implements ValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;

    this.checkValue();
  }

  private checkValue(): void {
    if (!this.value) throw new NullValueException("user name");
  }
}
