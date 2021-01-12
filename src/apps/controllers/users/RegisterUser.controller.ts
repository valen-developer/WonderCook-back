import { Request, Response } from "express";
import { Controller } from "../controller";

import {
  User,
  UserCreatorInterface,
} from "../../../context/User/domain/user.model";

import { RegisterUser } from "../../../context/User/application/RegisterUser";

import { Bcrypt } from "../../../context/shared/infrastructure/bcrypt";
import { UserMongoRepository } from "../../../context/User/infrastucture/repositories/mongo/UserMongoRepository.repository";
import { UserRepository } from "../../../context/User/domain/interfaces/User.repository";

export class RegisterUserController implements Controller {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

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

      const registerUser = new RegisterUser(user, this.userRepository);
      await registerUser.register();

      resp.status(201).send();
    } catch (error) {
      //TODO: Check type of exception
      resp.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }
}
