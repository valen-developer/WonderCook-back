import { hashSync } from "bcrypt";
import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { ICrypt } from "../../../shared/domain/interfaces/crypt.interface";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class UserPassword implements ValueObject {
  value: string;
  private crypt: ICrypt;

  constructor(value: string, crypt: ICrypt) {
    this.crypt = crypt;
    this.value = this.crypt.hasSync(value);

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
