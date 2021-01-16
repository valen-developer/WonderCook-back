import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class RecipeVoteAverage implements ValueObject {
  ingredient: number;

  constructor(value = 0.0) {
    this.ingredient = value;
    this.isBetweenCeroAndTen();
  }

  private isBetweenCeroAndTen() {
    if (this.ingredient < 0 || this.ingredient > 10)
      throw new Error("vote_average should be positive and smaller than ten");
  }
}
