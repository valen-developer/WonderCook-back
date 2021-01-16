import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class UserBio implements ValueObject {
  ingredient: string | null;

  constructor(value: string | null) {
    this.ingredient = value;
  }
}
