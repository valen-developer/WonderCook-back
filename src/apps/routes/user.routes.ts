import { Router } from "express";
import { RegisterUserController } from "../controllers/users/RegisterUser.controller";

export const userRouter: Router = Router();

const registerUserController = new RegisterUserController();

userRouter.post("/", registerUserController.run);
