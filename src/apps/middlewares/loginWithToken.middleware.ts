import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { enviroment } from "../../config/enviroment";

export class LoginWithTokenMiddleware {
  run(req: Request, resp: Response, next: NextFunction): void {
    const token = new String(req.headers.token).toString();

    jwt.verify(token, enviroment.token.seed, (error, payload) => {
      if (!error)
        return resp.status(200).json({
          ok: true,
          user: jwt.decode(token),
        });

      next();
    });
  }
}
