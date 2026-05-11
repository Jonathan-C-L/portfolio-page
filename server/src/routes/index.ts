//-----------------------------------------------------
// Acts as a switchboard. It mounts feature routers under your 
// versioned API prefix (/api/v1) and owns the /health endpoint. 
// Versioning your API from day one costs nothing and saves you from 
// painful breaking changes later when a frontend or third party is 
// consuming your endpoints.
//-----------------------------------------------------
import portfolioRoutes from "../routes/portfolio.routes";
import { Router, Request, Response } from "express";
import config from "../config";

const router = Router();

//------------------------------------------------------
// Health Check
//------------------------------------------------------
// To access: /api/v1/health
router.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok", env: config.env });;
});

//------------------------------------------------------
// Mounting Routes
//------------------------------------------------------
// To access: /api/v1/projects
router.use("/", portfolioRoutes);

export default router;