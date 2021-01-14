import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class RecipeVoteAverage implements ValueObject {
  value: number;

  constructor(value = 0.0) {
    this.value = value;
    this.isBetweenCeroAndTen();
  }

  private isBetweenCeroAndTen() {
    if (this.value < 0 || this.value > 10)
      throw new Error("vote_average should be positive and smaller than ten");
  }
}
