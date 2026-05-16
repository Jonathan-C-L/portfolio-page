//-----------------------------------------------------
// A single source of truth for your data shapes. When Project is 
// defined here, your service, controller, and routes all import from 
// the same place — so a type change propagates everywhere and TypeScript 
// catches mismatches at compile time rather than at runtime.
//-----------------------------------------------------
//------------------------------------------------------
// Server Only Types
//------------------------------------------------------
export interface ApiResponseBody<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}