import { Router } from "express";
import { factoryUserController } from "../factories/user-controller-factory";
import { adaptExpressRoute } from "../adapters/express-adapter-routes";

const router = Router();

router.get("/users", adaptExpressRoute(factoryUserController()));

export default router;
