import { Router } from "express";

import { adaptExpressRoute } from "../adapters/express-adapter-routes";
import { factoryCreateUserController } from "../factories/user/create-user-factory";
import { factoryFindUserByEmailController } from "../factories/user/find-user-by-email-factory";
import { factoryListUsersController } from "../factories/user/list-users-factory";

const router = Router();

router.post("/create-user", adaptExpressRoute(factoryCreateUserController()));
router.get(
  "/find-by-email",
  adaptExpressRoute(factoryFindUserByEmailController())
);
router.get("/users", adaptExpressRoute(factoryListUsersController()));

export default router;
