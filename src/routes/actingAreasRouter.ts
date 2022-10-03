import { Router } from "express";
import * as actingAreasController from "../controllers/actingAreasController";

const actingAreasRouter: Router = Router();

actingAreasRouter.get("/actingAreas", actingAreasController.getAll);

export default actingAreasRouter;
