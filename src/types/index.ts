//-----------------------------------------------------
// A single source of truth for your data shapes. When Project is 
// defined here, your service, controller, and routes all import from 
// the same place — so a type change propagates everywhere and TypeScript 
// catches mismatches at compile time rather than at runtime.
//-----------------------------------------------------

//------------------------------------------------------
// API Responses
//------------------------------------------------------
export interface ApiResponseBody<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: string[];
}

//------------------------------------------------------
// Portfolio
//------------------------------------------------------
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  createdAt: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}
