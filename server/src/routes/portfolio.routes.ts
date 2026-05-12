//-----------------------------------------------------
// Keeps route definitions thin — just method, path, middleware, and a pointer to the controller. 
// Wrapping controller methods in arrow functions ((req, res, next) => controller.method(req, res, next)) 
// preserves the correct this context when using classes, avoiding a common runtime bug.
//-----------------------------------------------------
import { Router, Request, Response, NextFunction } from "express";
import { PortfolioController } from "../controllers/portfolio.controller"

const router = Router();
const controller = new PortfolioController();

//------------------------------------------------------
// Portfolio End-Point Definitions
//------------------------------------------------------
router.get("/portfolio", (req: Request, res: Response, next: NextFunction) => 
  controller.getPortfolio(req, res, next));

export default router;