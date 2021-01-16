import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { ICrypt } from "../../../shared/domain/interfaces/crypt.interface";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class UserPassword implements ValueObject {
  value: string;
  private crypt: ICrypt;

  constructor(value: string, crypt: ICrypt) {
    this.value = value;
    this.crypt = crypt;

    this.checkValue();
    this.checkBiggerThanSixChars();
    this.encrypt();
  }

  private checkValue(): void {
    if (!this.value) throw new NullValueException("password ");
  }

  private checkBiggerThanSixChars(): void {
    if (this.value.length < 6)
      throw new Error("Password should be bigger than six characters");
  }

  private encrypt(): void {
    this.value = this.crypt.hasSync(this.value);
  }
}
