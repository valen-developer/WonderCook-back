import { Router } from "express";
import { LoginUserController } from "../controllers/users/LoginUser.controller";

export const authRouter: Router = Router();

const loginUser = new LoginUserController();

authRouter.post("/login", loginUser.run);
