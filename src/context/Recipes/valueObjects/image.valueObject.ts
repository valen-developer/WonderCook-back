import { ValueObject } from "../../shared/domain/valueObjects/valueObject";

export class ImageUrl implements ValueObject {
  value: string;

  constructor(value = "") {
    this.value = value;
  }
}
