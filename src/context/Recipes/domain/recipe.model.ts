import { UpdateAt } from "../../shared/domain/valueObjects/updateAt.valueObject";
import { CreateAt } from "../../shared/domain/valueObjects/createAt.valueObject";
import { UUID } from "../../shared/domain/valueObjects/uuid.valueObject";
import { Model } from "../../shared/domain/interfaces/model.interface";

import { RecipeCategoryArray } from "./valueObjects/categoriesArray.valueObject";
import { IngredientsArray } from "./valueObjects/ingredientsArray.valueObject";
import { RecipeVoteAverage } from "./valueObjects/voteAverage.valueObject";
import { RecipeVoteCount } from "./valueObjects/voteCount.valueObject";
import { RecipeTitle } from "./valueObjects/title.valueObject";
import { RecipeBody } from "./valueObjects/body.valueObject";
import { ImageUrl } from "./valueObjects/image.valueObject";

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
  public readonly categories: RecipeCategoryArray;

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
    categories,
  }: RecipeObjectContructor) {
    this.title = new RecipeTitle(title);
    this.uuid = new UUID(uuid);
    this.createdAt = new CreateAt(createdAt);
    this.updatedAt = new UpdateAt(updatedAt);
    this.voteAverage = new RecipeVoteAverage(voteAverage);
    this.voteCount = new RecipeVoteCount(voteCount);
    this.body = new RecipeBody(body);
    this.image = new ImageUrl(image);
    this.ownID = new UUID(ownID);
    this.ingredients = IngredientsArray.buildIngredients(ingredients);
    this.categories = RecipeCategoryArray.buildCategories(categories);
  }
  toObject(): RecipeObject {
    return {
      title: this.title.value,
      uuid: this.uuid.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
      voteAverage: this.voteAverage.value,
      voteCount: this.voteCount.value,
      body: this.body.value,
      image: this.image.value,
      ownID: this.ownID.value,
      ingredients: this.ingredients.ingredientsAsString(),
      categories: this.categories.categoriesToString(),
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
  categories: string;
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
  categories: string[];
}
