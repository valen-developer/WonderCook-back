import { UserAlias } from "./valueObjects/alias.valueObject";
import { CreateAt } from "../../shared/domain/valueObjects/createAt.valueObject";
import { UserEmail } from "./valueObjects/email.valueObject";
import { UserName } from "./valueObjects/name.valueObject";
import { UserPassword } from "./valueObjects/password.valueObject";
import { UpdateAt } from "../../shared/domain/valueObjects/updateAt.valueObject";

export class User {
  public readonly name: UserName;
  public readonly email: UserEmail;
  public readonly password: UserPassword;
  public readonly alias: UserAlias;
  public readonly createAt: CreateAt;
  public readonly updateAt: UpdateAt;

  constructor(newUser: UserCreatorInterface) {
    this.name = new UserName(newUser.name);
    this.password = new UserPassword(newUser.password);
    this.email = new UserEmail(newUser.email);
    this.alias = new UserAlias(newUser.alias);
    this.createAt = new CreateAt(newUser.createAt);
    this.updateAt = new UpdateAt(newUser.updateAt);
  }

  public toObject(): UserObject {
    const user: UserObject = {
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      alias: this.alias.value,
      createAt: this.createAt.value,
      updateAt: this.updateAt.value,
    };

    return user;
  }
}

interface UserCreatorInterface {
  name: string;
  email: string;
  password: string;
  alias: string;
  createAt: Date;
  updateAt: Date;
}

interface UserObject {
  name: string;
  email: string;
  password: string;
  alias: string;
  createAt: string;
  updateAt: string;
}
