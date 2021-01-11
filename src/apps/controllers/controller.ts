import { Request, Response } from "express";

export interface Controller {
  run(req: Request, resp: Response): void;
}
