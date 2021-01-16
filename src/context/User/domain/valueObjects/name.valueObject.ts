import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class UserName implements ValueObject {
  ingredient: string;

  constructor(value: string) {
    this.ingredient = value;

    this.checkValue();
  }

  private checkValue(): void {
    if (!this.ingredient) throw new NullValueException("user name");
  }
}
