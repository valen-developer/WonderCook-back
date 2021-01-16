import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

import { enviroment } from "../../config/enviroment";

export class ValidateTokenMiddleware {
  run(req: Request, resp: Response, next: NextFunction): void {
    const token = new String(req.headers.token).toString();

    jwt.verify(token, enviroment.token.seed, (error, payload) => {
      if (error)
        return resp.status(403).json({
          ok: false,
          error: "token is not valid",
        });

      next();
    });
  }
}
