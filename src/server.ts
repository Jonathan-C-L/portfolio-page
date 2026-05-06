//-----------------------------------------------------
// Author:  Jonathan Le
// Purpose: Entry point for all other components
//-----------------------------------------------------
import app from "./app";
import router from "./routes/index";
import logger from "./utils/logger";

const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


//-----------------------------------------------------
// The sole job of this file is to bind the Express app to a port and handle graceful shutdown. 
// Keeping this separate from app.ts means you can import the app in tests without actually starting a server, 
// and SIGTERM/SIGINT handlers ensure in-flight requests finish before the process exits — important for 
// containerized deployments (Docker, Kubernetes).
//-----------------------------------------------------
/*
import app from './app';
import config from './config';
import logger from './utils/logger';

const server = app.listen(config.port, () => {
  logger.info(`Server running in ${config.env} mode on port ${config.port}`);
  logger.info(`API available at http://localhost:${config.port}/api/${config.apiVersion}`);
});

// Graceful shutdown
const shutdown = (signal: string): void => {
  logger.info(`${signal} received — shutting down gracefully`);
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

export default server;
*/