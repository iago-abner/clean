import express, { Request, Response } from "express";
import { Controller } from "../../presentation/controller/user-controller";

export const adaptExpressRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const { statusCode, body } = await controller.handle(req.body);
    return res.status(statusCode).json(body);
  };
};
