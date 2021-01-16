import { Router } from "express";
import { UserMongoRepository } from "../../context/User/infrastucture/repositories/mongo/UserMongoRepository.repository";
import { LoginUserController } from "../controllers/users/LoginUser.controller";
import { RegisterUserController } from "../controllers/users/RegisterUser.controller";
import { LoginWithTokenMiddleware } from "../middlewares/loginWithToken.middleware";
import { ValidateTokenMiddleware } from "../middlewares/validateToken.middleware";

export const userRouter: Router = Router();

const userRepository = new UserMongoRepository();

const loginUser = new LoginUserController(userRepository);
const loginWithTokenMiddleware = new LoginWithTokenMiddleware();
const registerUserController = new RegisterUserController(userRepository);

userRouter.post("/login", loginWithTokenMiddleware.run, (req, resp) => {
  loginUser.run(req, resp);
});

userRouter.post("/", (req, resp) => {
  registerUserController.run(req, resp);
});
