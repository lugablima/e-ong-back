import { Router } from "express";
import usersRouter from "./usersRouter";
import messagesRouter from "./messagesRouter";
import ongsRouter from "./ongsRouter";
import citiesRouter from "./citiesRouter";
import statesRouter from "./statesRouter";
import actingAreasRouter from "./actingAreasRouter";

const router: Router = Router();

router.use(usersRouter);
router.use(messagesRouter);
router.use(ongsRouter);
router.use(citiesRouter);
router.use(statesRouter);
router.use(actingAreasRouter);

export default router;
