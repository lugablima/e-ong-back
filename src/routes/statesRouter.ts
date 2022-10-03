import { Router } from "express";
import * as statesController from "../controllers/statesController";

const statesRouter: Router = Router();

statesRouter.get("/states", statesController.getAll);

export default statesRouter;
