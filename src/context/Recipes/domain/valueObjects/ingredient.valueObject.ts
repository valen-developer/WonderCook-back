import { NullValueException } from "../../../shared/domain/exceptions/NullValue.exception";
import { ValueObject } from "../../../shared/domain/valueObjects/valueObject";

export class RecipeIngredient implements ValueObject {
  ingredient: string;

  quantity: string;

  constructor(value: string, quantity = "0") {
    if (!value) throw new NullValueException("recipe ingredient");
    this.ingredient = value;
    this.quantity = quantity;
  }
}
