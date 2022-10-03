import { Router } from "express";
import usersRouter from "./usersRouter";
import messagesRouter from "./messagesRouter";
import ongsRouter from "./ongsRouter";

const router: Router = Router();

router.use(usersRouter);
router.use(messagesRouter);
router.use(ongsRouter);

export default router;
