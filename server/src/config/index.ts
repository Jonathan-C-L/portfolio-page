//-----------------------------------------------------
// Access point for server configuration
//-----------------------------------------------------
import dotenv from "dotenv";
import { API_VERSION } from '../../../shared/constants';
import path from "node:path";

// Load environment variables from .env
dotenv.config({
  path: path.resolve(__dirname, "../../.env")
}); 

// Defaults for my development environment
const DEFAULT_PORT: number = 3000;
const DEFAULT_ENV: string = "development";

// Create config object from info parsed in .env file
const config = {
  env: process.env.NODE_ENV ?? DEFAULT_ENV,             // If null, coalesce to "development"
  port: Number(process.env.PORT) || DEFAULT_PORT,       // Cast PORT as number, default to 3000 if none
  apiVersion: API_VERSION,                              // API version taken from shared folder in root dir
  cors: {                                               // Defining Cross-Orgin Resources, default localhost:3000
    allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') ?? [`http://localhost:${DEFAULT_PORT}`]
  }
};

export default config;