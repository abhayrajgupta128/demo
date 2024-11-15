import { Router } from "express";
import { BaseController } from "../controllers";

const coreRouter: Router = Router();

coreRouter.get('/demo/first', BaseController.index);

export default coreRouter;