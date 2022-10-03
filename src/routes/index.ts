import { Router } from "express";
import usersRouter from "./usersRouter";
import messagesRouter from "./messagesRouter";
import ongsRouter from "./ongsRouter";
import citiesRouter from "./citiesRouter";

const router: Router = Router();

router.use(usersRouter);
router.use(messagesRouter);
router.use(ongsRouter);
router.use(citiesRouter);

export default router;
