import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { Controller } from "../controller";
import { enviroment } from "../../../config/enviroment";

import { User } from "../../../context/User/domain/user.model";
import { Bcrypt } from "../../../context/shared/infrastructure/bcrypt";
import { UserMongoRepository } from "../../../context/User/infrastucture/repositories/mongo/UserMongoRepository.repository";

export class LoginUserController implements Controller {
  async run(req: Request, resp: Response): Promise<void> {
    const body = req.body;
    const email = body.email;
    const password = body.password;

    try {
      const bcrypt = new Bcrypt();
      const userRepository = new UserMongoRepository();
      const userDB = await userRepository.findByEmail(email);

      const isValidUser = bcrypt.compare(password, userDB.password);

      if (isValidUser) {
        const user = new User(userDB, bcrypt);
        const token = jwt.sign(
          user.toObjectWithOutPassword(),
          enviroment.token.seed,
          { expiresIn: enviroment.token.expireIn }
        );

        resp.json({
          ok: true,
          user: user.toObjectWithOutPassword(),
          token,
        });
      } else {
        resp.status(403).json({
          ok: false,
          error: "Email or password invalid",
        });
      }
    } catch (error) {
      resp.status(403).json({
        ok: false,
        error: "Email or password invalid",
      });
    }
  }
}
