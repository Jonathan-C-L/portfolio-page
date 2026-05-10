//-----------------------------------------------------
// This is where Express is configured: middleware is registered, routes are 
// mounted, and error handlers are attached. The order here matters — body parsers must 
// come before routes, and error handlers must come last. Helmet and CORS 
// are applied at the top level so every request is protected regardless of 
// which route it hits.
//-----------------------------------------------------
import express, { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";                      // Security middleware - prevents common web vulnerabilities
import cors from "cors";                          // Cross-Origin Resource Sharing
import config from "./config"
import logger from "./utils/logger";
import router from "./routes";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware"

// API support configs
const CORS_METHODS: string[] = ["GET", "OPTIONS"];  // Only GET and OPTIONS at this moment
const CORS_HEADERS: string[] = [];                  // GET doesn't have a body, so no headers need to be specified at this time         

// Express Application instance for middleware, routes, and error handlers
const app: Application = express();

// At the top of every request - sets a collection of HTTP headers
app.use(helmet());

// Confirming and determining if other origin is permitted
app.use(cors({
  origin: config.cors.allowedOrigins,
  methods: CORS_METHODS,              
  allowedHeaders: CORS_HEADERS 
}));

// No body parsers at this time***
// GET requests don't have a request body (*as a general rule)

// Request Logging
app.use((req: Request, _res: Response, next: NextFunction) => {
  logger.debug(`${req.method} ${req.originalUrl}`); // Log every incoming request
  next(); // CRITICAL - request will hang indefinitely without this call
}); 

// Mounting router to current API version
// Entry point to all routes (for version 1 of api): .../api/v1/...
app.use(`/api/${config.apiVersion}`, router);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
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