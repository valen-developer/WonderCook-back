import { json, Request, Response } from "express";
import { Controller } from "../controller";
import jwt from "jsonwebtoken";

import {
  User,
  UserCreatorInterface,
} from "../../../context/User/domain/user.model";

import { RegisterUser } from "../../../context/User/application/RegisterUser";

import { Bcrypt } from "../../../context/shared/infrastructure/bcrypt";
import { UserMongoRepository } from "../../../context/User/infrastucture/repositories/mongo/UserMongoRepository.repository";
import { UserRepository } from "../../../context/User/domain/interfaces/User.repository";
import { enviroment } from "../../../config/enviroment";
import { HttpStatus4xx } from "../../exceptions/statusExceptions/4xxException";

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

      const token = jwt.sign(
        user.toObjectWithOutPassword(),
        enviroment.token.seed
      );

      resp.status(201).json({
        ok: true,
        user: user.toObjectWithOutPassword(),
        token,
      });
    } catch (error) {
      if (error instanceof HttpStatus4xx)
        resp.status(error.statusCode).json({
          ok: false,
          error: error.message,
        });

      resp.status(400).json({
        ok: false,
        error: error.message,
      });
    }
  }
}
