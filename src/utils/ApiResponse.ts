import { Response } from 'express';
import { ApiResponseBody } from '../types';

export class ApiResponse {
  static success<T>(
    res: Response,
    data: T,
    message = 'Success',
    statusCode = 200,
  ): Response<ApiResponseBody<T>> {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  static created<T>(res: Response, data: T, message = 'Created'): Response<ApiResponseBody<T>> {
    return ApiResponse.success(res, data, message, 201);
  }

  static error(
    res: Response,
    message = 'Internal Server Error',
    statusCode = 500,
    errors?: string[],  // Optional way to add multiple, more specific, errors - i.e. validation
  ): Response<ApiResponseBody> {
    return res.status(statusCode).json({
      success: false,
      message,
      // Spread operator ('...')         - inside object literal, merges property into current one
      // Short-circuit evaluation ('&&') - if nothing in errors[] (left is falsy), nothing will be displayed - undefined is silently ignored
      //                                 - if something in errors[] (left is truthy), return the right side, then errors spread within the { errors } object
      ...(errors && { errors }),  
    });
  }

  static notFound(res: Response, message = 'Resource not found'): Response<ApiResponseBody> {
    return ApiResponse.error(res, message, 404);
  }

  static badRequest(
    res: Response,
    message = 'Bad Request',
    errors?: string[],
  ): Response<ApiResponseBody> {
    return ApiResponse.error(res, message, 400, errors);
  }
}
