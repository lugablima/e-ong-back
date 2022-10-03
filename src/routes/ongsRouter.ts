import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import ongSchema from "../schemas/ongsSchema";
import * as ongsController from "../controllers/ongsController";
import validateToken from "../middlewares/tokenValidatorMiddleware";

const ongsRouter: Router = Router();

ongsRouter.post("/ongs", validateSchema(ongSchema), ongsController.create);
ongsRouter.use(validateToken);
ongsRouter.get("/ongs/:cityId", ongsController.get);

export default ongsRouter;
