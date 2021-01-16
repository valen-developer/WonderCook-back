import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class ImageUrl implements ValueObject {
  ingredient: string;

  constructor(value = "") {
    this.ingredient = value;

    if (!value) this.ingredient = "";
  }
}
