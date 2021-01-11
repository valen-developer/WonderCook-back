import { Request, Response } from "express";
import { Controller } from "../controller";

import {
  User,
  UserCreatorInterface,
} from "../../../context/User/domain/user.model";

import { RegisterUser } from "../../../context/User/application/RegisterUser";

import { Bcrypt } from "../../../context/shared/infrastructure/bcrypt";
import { UserMongoRepository } from "../../../context/User/infrastucture/repositories/mongo/UserMongoRepository.repository";

export class RegisterUserController implements Controller {
  async run(req: Request, resp: Response): Promise<void> {
    const body = req.body;

    const userCreator: UserCreatorInterface = {
      uuid: body.uuid,
      name: body.name,
      email: body.email,
      password: body.password,
      alias: body.alias,
      createAt: new Date(),
      updateAt: new Date(),
      bio: body.bio,
    };

    try {
      const bcrypt = new Bcrypt();
      const user = new User(userCreator, bcrypt);
      const userMongoRepository = new UserMongoRepository();

      const registerUser = new RegisterUser(user, userMongoRepository);
      await registerUser.register();

      resp.status(201).send();
    } catch (error) {
      resp.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }
}
