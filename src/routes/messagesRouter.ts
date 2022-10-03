import { Router } from "express";
import validateSchema from "../middlewares/schemaValidatorMiddleware";
import messageSchema from "../schemas/messagesSchema";
import * as messagesController from "../controllers/messagesController";
import validateToken from "../middlewares/tokenValidatorMiddleware";

const messagesRouter: Router = Router();

messagesRouter.use(validateToken);
messagesRouter.post("/messages", validateSchema(messageSchema), messagesController.create);
messagesRouter.get("/messages/:userId", messagesController.get);

export default messagesRouter;
