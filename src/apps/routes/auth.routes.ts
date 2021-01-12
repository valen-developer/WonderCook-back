import { Router } from "express";
import { UserMongoRepository } from "../../context/User/infrastucture/repositories/mongo/UserMongoRepository.repository";
import { LoginUserController } from "../controllers/users/LoginUser.controller";

export const authRouter: Router = Router();

authRouter.post("/login", (req, resp) => {
  const userRepository = new UserMongoRepository();
  const loginUser = new LoginUserController(userRepository);

  loginUser.run(req, resp);
});
