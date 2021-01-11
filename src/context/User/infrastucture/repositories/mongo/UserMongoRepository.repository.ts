import mongoose from "mongoose";

import { User, UserCreatorInterface } from "../../../domain/user.model";

import {
  SaveResponse,
  UserRepository,
} from "../../../domain/interfaces/User.repository";

import UserMongo from "./userMongoModel";
import { Bcrypt } from "../../../../shared/infrastructure/bcrypt";

export class UserMongoRepository implements UserRepository {
  async save(user: User): Promise<SaveResponse> {
    const userMongo: mongoose.Document = new UserMongo(user.toObject());
    const saveReponse = await userMongo
      .save()
      .then((userDB) => {
        return { ok: true, message: "saved" };
      })
      .catch((err) => {
        return { ok: false, message: err.message };
      });

    return saveReponse;
  }

  async findByEmail(email: string): Promise<UserCreatorInterface> {
    const user = await UserMongo.findOne({ email: email }, (userDB: any) => {});

    if (!user) {
      throw new Error("user not found");
    }

    return {
      name: user.name,
      alias: user.alias,
      createAt: new Date(user.createAt),
      email: user.email,
      password: user.password,
      updateAt: new Date(user.updateAt),
      uuid: user.uuid,
      bio: user.bio,
    };
  }
}
