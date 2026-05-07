//-----------------------------------------------------
// Two middleware functions work together here. notFoundHandler catches any request that didn't match a route 
// and returns a structured 404. errorHandler is the global catch-all — it inspects whether the error is an 
// intentional AppError (with a known status code) or an unexpected one, and responds accordingly. Stack traces 
// are only logged in development so they don't leak implementation details in production.
//-----------------------------------------------------
import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";
import { ApiResponse } from "../utils/api-response"; 

// Custom error class for this App - derived from JavaScript's built-in Error
// This class gives status codes for easier HTTP error debugging
export class AppError extends Error{
  // public readonly ensures arguments cannot be mutated mid-flight
  // statusCode - 500; default for internal server error
  constructor(public readonly message: string, public readonly statusCode: number = 500){
    super(message);
    this.name = "AppError";
    Error.captureStackTrace(this, this.constructor);  // Getting exact point error was thrown
  }
}

export const notFoundHandler = (req: Request, res: Response): void => {
  ApiResponse.notFound(res, `Route ${req.method} ${req.originalUrl} not found`);
};

export const errorHandler = (
  req: Request, 
  res: Response, 
  err: Error | AppError, 
  _next: NextFunction): void => {
    // Setting status code
    const statusCode = err instanceof AppError ? err.statusCode : 500;
    // Setting status message
    const message = err instanceof AppError ? err.message : "Internal Server Error";

    logger.error(`[${req.method}] ${req.path} - ${err.message}`);

    if (process.env.NODE_ENV === "development"){
      logger.error(err.stack ?? "");
    }

    ApiResponse.error(res, message, statusCode);
  };