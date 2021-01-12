import { Router } from "express";
import { UserMongoRepository } from "../../context/User/infrastucture/repositories/mongo/UserMongoRepository.repository";
import { RegisterUserController } from "../controllers/users/RegisterUser.controller";

export const userRouter: Router = Router();

userRouter.post("/", (req, resp) => {
  const userRepository = new UserMongoRepository();
  const registerUserController = new RegisterUserController(userRepository);

  registerUserController.run(req, resp);
});
