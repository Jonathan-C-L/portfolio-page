//-----------------------------------------------------
// Two middleware functions work together here. notFoundHandler catches any request that didn't match a route 
// and returns a structured 404. errorHandler is the global catch-all — it inspects whether the error is an 
// intentional AppError (with a known status code) or an unexpected one, and responds accordingly. Stack traces 
// are only logged in development so they don't leak implementation details in production.
//-----------------------------------------------------
/*
import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import { ApiResponse } from '../utils/ApiResponse';

export class AppError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode: number = 500,
  ) {
    super(message);
    this.name = 'AppError';
    Error.captureStackTrace(this, this.constructor);
  }
}

// 404 handler — attach after all routes
export const notFoundHandler = (req: Request, res: Response): void => {
  ApiResponse.notFound(res, `Route ${req.method} ${req.originalUrl} not found`);
};

// Global error handler — must have 4 params for Express to treat it as error middleware
export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): void => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const message = err instanceof AppError ? err.message : 'Internal Server Error';

  logger.error(`[${req.method}] ${req.path} — ${err.message}`);

  if (process.env.NODE_ENV === 'development') {
    logger.error(err.stack ?? '');
  }

  ApiResponse.error(res, message, statusCode);
};
*/