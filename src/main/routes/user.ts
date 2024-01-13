import { Router } from "express";
import { makeUserController } from "../factories/user-controller-factory";
import { adaptExpressRoute } from "../adapters/express-adapter-routes";

const router = Router();

router.get("/users", adaptExpressRoute(makeUserController()));

export default router;
