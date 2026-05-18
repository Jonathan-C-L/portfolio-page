//------------------------------------------------------
// Server side TypeScript types
//------------------------------------------------------
export interface ApiResponseBody<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}