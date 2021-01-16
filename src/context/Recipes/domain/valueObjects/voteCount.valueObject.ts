import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class RecipeVoteCount implements ValueObject {
  ingredient: number;

  constructor(value = 0) {
    this.ingredient = value;
    this.isPositive();
  }

  private isPositive() {
    if (this.ingredient < 0)
      throw new Error("vote count should be bigger than 0");
  }

  public getValue() {
    return Math.round(this.ingredient);
  }
}
