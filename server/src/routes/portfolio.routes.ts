//-----------------------------------------------------
// Definition for portfolio end points
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