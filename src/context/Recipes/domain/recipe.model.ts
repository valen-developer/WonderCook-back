import { Model } from "../../shared/domain/interfaces/model.interface";
import { CreateAt } from "../../shared/domain/valueObjects/createAt.valueObject";
import { UpdateAt } from "../../shared/domain/valueObjects/updateAt.valueObject";
import { UUID } from "../../shared/domain/valueObjects/uuid.valueObject";
import { RecipeBody } from "./valueObjects/body.valueObject";
import { ImageUrl } from "./valueObjects/image.valueObject";
import { RecipeIngredient } from "./valueObjects/ingredient.valueObject";
import { IngredientsArray } from "./valueObjects/ingredientsArray.valueObject";
import { RecipeTitle } from "./valueObjects/title.valueObject";
import { RecipeVoteAverage } from "./valueObjects/voteAverage.valueObject";
import { RecipeVoteCount } from "./valueObjects/voteCount.valueObject";

export class Recipe implements Model {
  public readonly title: RecipeTitle;
  public readonly uuid: UUID;
  public readonly createdAt: CreateAt;
  public readonly updatedAt: UpdateAt;
  public readonly voteAverage: RecipeVoteAverage;
  public readonly voteCount: RecipeVoteCount;
  public readonly ingredients: IngredientsArray;
  public readonly body: RecipeBody;
  public readonly image: ImageUrl;
  public readonly ownID: UUID;

  constructor({
    title,
    uuid,
    createdAt,
    updatedAt,
    voteAverage,
    voteCount,
    ingredients,
    body,
    image,
    ownID,
  }: RecipeObjectContructor) {
    this.title = new RecipeTitle(title);
    this.uuid = new UUID(uuid);
    this.createdAt = new CreateAt(createdAt);
    this.updatedAt = new UpdateAt(updatedAt);
    this.voteAverage = new RecipeVoteAverage(voteAverage);
    this.voteCount = new RecipeVoteCount(voteCount);
    this.ingredients = new IngredientsArray(ingredients);
    this.body = new RecipeBody(body);
    this.image = new ImageUrl(image);
    this.ownID = new UUID(ownID);
  }
  toObject(): RecipeObject {
    return {
      title: this.title.value,
      uuid: this.uuid.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
      voteAverage: this.voteAverage.value,
      voteCount: this.voteCount.value,
      ingredients: this.ingredients.ingredientsAsString(),
      body: this.body.value,
      image: this.image.value,
      ownID: this.ownID.value,
    };
  }
}

export interface RecipeObjectContructor {
  title: string;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  voteAverage: number;
  voteCount: number;
  ingredients: string;
  body: string;
  image: string;
  ownID: string;
}

export interface RecipeObject {
  title: string;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  voteAverage: number;
  voteCount: number;
  ingredients: string[];
  body: string;
  image: string;
  ownID: string;
}
