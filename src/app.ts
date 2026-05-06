import express from "express"

const app = express();

export default app;
//-----------------------------------------------------
// This is where Express is configured: middleware is registered, routes are 
// mounted, and error handlers are attached. The order here matters — body parsers must 
// come before routes, and error handlers must come last. Helmet and CORS 
// are applied at the top level so every request is protected regardless of 
// which route it hits.
//-----------------------------------------------------
/*
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from './config';
import router from './routes';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware';
import logger from './utils/logger';

const app: Application = express();

// ─── Security ─────────────────────────────────────────────────────────────────
app.use(helmet());
app.use(
  cors({
    origin: config.cors.allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

// ─── Body Parsing ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── Request Logging ──────────────────────────────────────────────────────────
app.use((req, _res, next) => {
  logger.debug(`→ ${req.method} ${req.originalUrl}`);
  next();
});

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use(`/api/${config.apiVersion}`, router);

// ─── Error Handling ───────────────────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
*/