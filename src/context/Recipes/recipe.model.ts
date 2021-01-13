import { CreateAt } from "../shared/domain/valueObjects/createAt.valueObject";
import { UpdateAt } from "../shared/domain/valueObjects/updateAt.valueObject";
import { UUID } from "../shared/domain/valueObjects/uuid.valueObject";
import { RecipeBody } from "./valueObjects/body.valueObject";
import { ImageUrl } from "./valueObjects/image.valueObject";
import { RecipeIngredient } from "./valueObjects/ingredient.valueObject";
import { RecipeTitle } from "./valueObjects/title.valueObject";
import { RecipeVoteAverage } from "./valueObjects/voteAverage.valueObject";
import { RecipeVoteCount } from "./valueObjects/voteCount.valueObject";

export class Recipe {
  private title: RecipeTitle;
  private uuid: UUID;
  private createdAt: CreateAt;
  private updatedAt: UpdateAt;
  private voteAverage: RecipeVoteAverage;
  private voteCount: RecipeVoteCount;
  private ingredients: RecipeIngredient[];
  private body: RecipeBody;
  private image: ImageUrl;
  private ownID: UUID;

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
  }: RecipeObject) {
    this.title = new RecipeTitle(title);
    this.uuid = new UUID(uuid);
    this.createdAt = new CreateAt(createdAt);
    this.updatedAt = new UpdateAt(updatedAt);
    this.voteAverage = new RecipeVoteAverage(voteAverage);
    this.voteCount = new RecipeVoteCount();
    this.ingredients = this.buildIngredients(ingredients);
    this.body = new RecipeBody(body);
    this.image = new ImageUrl(image);
    this.ownID = new UUID(ownID);
  }

  private buildIngredients(ingredients: string[]) {
    const builtIngredientes: RecipeIngredient[] = [];

    ingredients.forEach((ingredient) => {
      builtIngredientes.push(new RecipeIngredient(ingredient));
    });

    return builtIngredientes;
  }
}

export interface RecipeObject {
  title: string;
  uuid: string;
  createdAt: Date;
  updatedAt: Date;
  voteAverage: number;
  voteCount: number;
  ingredients: string[];
  body: string;
  image: string;
  ownID: string;
}
