/*
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
    errors?: string[],
  ): Response<ApiResponseBody> {
    return res.status(statusCode).json({
      success: false,
      message,
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
*/