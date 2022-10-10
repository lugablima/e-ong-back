import { Router } from "express";
import * as donationNeedsController from "../controllers/donationNeedsController";

const donationNeedsRouter: Router = Router();

donationNeedsRouter.get("/donationNeeds", donationNeedsController.getAll);

export default donationNeedsRouter;
