import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { InvalidEmailException } from "../exceptions/invalidEmail.exception";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class UserEmail implements ValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;

    this.checkValue();
    this.checkEmail();
  }

  private checkValue(): void {
    if (!this.value) throw new NullValueException("email");
  }

  private checkEmail(): void {
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regExp.test(this.value)) throw new InvalidEmailException();
  }
}
