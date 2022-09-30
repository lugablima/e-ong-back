import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import { signUpSchema } from "../schemas/usersSchema";
import * as usersController from "../controllers/usersController";

const usersRouter: Router = Router();

usersRouter.post("/sign-up", validateSchema(signUpSchema), usersController.signUp);
// usersRouter.post("/sign-in", validateSchema(signInSchema), usersController.signIn);

export default usersRouter;
