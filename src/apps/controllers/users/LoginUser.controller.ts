import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { Controller } from "../controller";
import { enviroment } from "../../../config/enviroment";

import { User } from "../../../context/User/domain/user.model";
import { Bcrypt } from "../../../context/shared/infrastructure/bcrypt";
import { UserMongoRepository } from "../../../context/User/infrastucture/repositories/mongo/UserMongoRepository.repository";
import { UserRepository } from "../../../context/User/domain/interfaces/User.repository";
import { LoginUser } from "../../../context/User/application/loginUser";
import { HttpStatus4xx } from "../../exceptions/statusExceptions/4xxException";

export class LoginUserController implements Controller {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async run(req: Request, resp: Response): Promise<void> {
    const body = req.body;
    const email = body.email;
    const password = body.password;

    try {
      const bcrypt = new Bcrypt();

      const userDB = await LoginUser.login(
        this.userRepository,
        bcrypt,
        email,
        password
      );

      const token = jwt.sign(userDB, enviroment.token.seed, {
        expiresIn: enviroment.token.expireIn,
      });

      resp.json({
        ok: true,
        user: userDB,
        token,
      });
    } catch (error) {
      if (error instanceof HttpStatus4xx) {
        resp.status(error.statusCode).json({
          ok: false,
          error: "Email or password invalid",
        });
      } else {
        resp.status(500).json({
          ok: false,
          error: error.message,
        });
      }
    }
  }
}
