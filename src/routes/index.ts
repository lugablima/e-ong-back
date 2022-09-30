import { Router } from "express";
import usersRouter from "./usersRouter";
// import validateToken from "../middlewares/tokenValidatorMiddleware";
// import testsRouter from "./testsRouter";

const router: Router = Router();

router.use(usersRouter);
// router.use(validateToken);
// router.use(testsRouter);

export default router;
