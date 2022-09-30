import { Router } from "express";
import usersRouter from "./usersRouter";
// import validateToken from "../middlewares/tokenValidatorMiddleware";
import messagesRouter from "./messagesRouter";

const router: Router = Router();

router.use(usersRouter);
router.use(messagesRouter);
// router.use(testsRouter);

export default router;
