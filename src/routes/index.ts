//-----------------------------------------------------
// Acts as a switchboard. It mounts feature routers under your 
// versioned API prefix (/api/v1) and owns the /health endpoint. 
// Versioning your API from day one costs nothing and saves you from 
// painful breaking changes later when a frontend or third party is 
// consuming your endpoints.
//-----------------------------------------------------
import { Router } from "express";
import { getProjects } from "../controllers/portfolio.controller";

const router = Router();

// To access: /api/users
router.get("/", getProjects);

export default router;


/*
import { Router, Request, Response } from 'express';
import portfolioRoutes from './portfolio.routes';
import config from '../config';

const router = Router();

// Health check
router.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', env: config.env });
});

// Feature routes
router.use('/', portfolioRoutes);

export default router;
*/