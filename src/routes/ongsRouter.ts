import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import ongSchema from "../schemas/ongsSchema";
import * as ongsController from "../controllers/ongsController";

const ongsRouter: Router = Router();

ongsRouter.post("/ongs", validateSchema(ongSchema), ongsController.create);
// ongsRouter.get("/ongs/:ongId/:userId", ongsController.get);

export default ongsRouter;
