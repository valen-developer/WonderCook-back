import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class UserBio implements ValueObject {
  value: string | null;

  constructor(value: string | null) {
    this.value = value;
  }
}
