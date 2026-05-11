//-----------------------------------------------------
// Validation is extracted into middleware so it runs before the controller, keeping controllers clean. 
// The current implementation is a lightweight hand-rolled validator — the comment pointing toward zod 
// or joi is intentional, as those libraries handle complex schemas, nested objects, and type coercion 
// far more robustly as the API grows.
//-----------------------------------------------------
/*
import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../utils/ApiResponse';
import { ContactPayload } from '../types';

// Simple field-presence validator — swap for zod/joi for production use
export const validateContact = (req: Request, res: Response, next: NextFunction): void => {
  const { name, email, message } = req.body as Partial<ContactPayload>;
  const errors: string[] = [];

  if (!name?.trim()) errors.push('name is required');
  if (!email?.trim()) errors.push('email is required');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('email is invalid');
  if (!message?.trim()) errors.push('message is required');

  if (errors.length > 0) {
    ApiResponse.badRequest(res, 'Validation failed', errors);
    return;
  }

  next();
};
*/