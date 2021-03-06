import { Router } from "express";

import { recipeRouter } from "./recipe.routes";
import { userRouter } from "./user.routes";

export const router: Router = Router();

router.use("/api/user", userRouter);
router.use("/api/recipe", recipeRouter);
