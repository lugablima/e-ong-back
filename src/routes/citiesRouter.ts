import { Router } from "express";
import * as citiesController from "../controllers/citiesController";

const citiesRouter: Router = Router();

citiesRouter.get("/cities", citiesController.getAll);

export default citiesRouter;
