import { Router } from "express";
import usersRouter from "./usersRouter";
import messagesRouter from "./messagesRouter";
import ongsRouter from "./ongsRouter";
import citiesRouter from "./citiesRouter";
import statesRouter from "./statesRouter";
import actingAreasRouter from "./actingAreasRouter";
import donationNeedsRouter from "./donationNeedsRouter";

const router: Router = Router();

router.use(usersRouter);
router.use(messagesRouter);
router.use(ongsRouter);
router.use(citiesRouter);
router.use(statesRouter);
router.use(actingAreasRouter);
router.use(donationNeedsRouter);

export default router;
