import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class RecipeVoteCount implements ValueObject {
  value: number;

  constructor(value = 0) {
    this.value = value;
    this.isPositive();
  }

  private isPositive() {
    if (this.value < 0) throw new Error("vote count should be bigger than 0");
  }

  public getValue() {
    return Math.round(this.value);
  }
}
