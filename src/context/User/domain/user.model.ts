import { UserAlias } from "./valueObjects/alias.valueObject";
import { CreateAt } from "../../shared/domain/valueObjects/createAt.valueObject";
import { UserEmail } from "./valueObjects/email.valueObject";
import { UserName } from "./valueObjects/name.valueObject";
import { UserPassword } from "./valueObjects/password.valueObject";
import { UpdateAt } from "../../shared/domain/valueObjects/updateAt.valueObject";
import { ICrypt } from "../../shared/domain/interfaces/crypt.interface";
import { UserUUID } from "./valueObjects/uuid.valueObject";
import { UserBio } from "./valueObjects/bio.valueObject";

export class User {
  public readonly uuid: UserUUID;
  public readonly name: UserName;
  public readonly email: UserEmail;
  public readonly password: UserPassword;
  public readonly alias: UserAlias;
  public readonly createAt: CreateAt;
  public readonly updateAt: UpdateAt;
  public readonly bio: UserBio;

  constructor(newUser: UserCreatorInterface, crypt: ICrypt) {
    this.uuid = new UserUUID(newUser.uuid);
    this.name = new UserName(newUser.name);
    this.password = new UserPassword(newUser.password, crypt);
    this.email = new UserEmail(newUser.email);
    this.alias = new UserAlias(newUser.alias);
    this.createAt = new CreateAt(newUser.createAt);
    this.updateAt = new UpdateAt(newUser.updateAt);
    this.bio = new UserBio(newUser.bio);
  }

  public toObject(): UserObject {
    const user: UserObject = {
      uuid: this.uuid.value,
      name: this.name.value,
      email: this.email.value,
      password: this.password.value,
      alias: this.alias.value,
      createAt: this.createAt.value,
      updateAt: this.updateAt.value,
      bio: this.bio.value,
    };

    return user;
  }

  public toObjectWithOutPassword(): UserObjectWithOutPassword {
    const user: UserObjectWithOutPassword = {
      uuid: this.uuid.value,
      name: this.name.value,
      email: this.email.value,
      alias: this.alias.value,
      createAt: this.createAt.value,
      updateAt: this.updateAt.value,
      bio: this.bio.value,
    };
    return user;
  }
}

export interface UserCreatorInterface {
  uuid: string;
  name: string;
  email: string;
  password: string;
  alias: string;
  createAt: Date;
  updateAt: Date;
  bio: string | null;
}

export interface UserObject {
  uuid: string;
  name: string;
  email: string;
  password: string;
  alias: string;
  createAt: string;
  updateAt: string;
  bio: string | null;
}
export interface UserObjectWithOutPassword {
  uuid: string;
  name: string;
  email: string;
  alias: string;
  createAt: string;
  updateAt: string;
  bio: string | null;
}
