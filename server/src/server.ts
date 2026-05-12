//-----------------------------------------------------
// Author:  Jonathan Le
// Purpose: Entry point for all other components
//-----------------------------------------------------
import config from "./config"
import app from "./app";
import logger from "./utils/logger";

const server = app.listen(config.port, () => {
    logger.info(`Server running in ${config.env} mode on port ${config.port}`);
});

// Graceful shutdown - controlled process shutdown rather than an abrupt one
const shutdown = (signal: string): void => {
  logger.info(`${signal} received - shutting down gracefully`);
  server.close(() => {
    logger.info("Server closed");
    process.exit(0);
  });
};

// Allows graceful shutdown of process without cutting off requests mid-flight
// Unix signals - OS messages to this process
process.on("SIGTERM", () => shutdown("SIGTERM")); // Signal Terminate - used by Docket, Kubernetes, Railway, etc.
process.on("SIGINT", () => shutdown("SIGINT"));   // Signal Interrupt - sent when Ctrl + C is pressed in terminal during development

// Exceptions that slip through try/catch blocks
process.on("uncaughtException", (error) => {
  logger.error("Uncaught exception", error);
  shutdown("uncaughtException");
});
// Promise rejections for async/await code
process.on("unhandledRejection", (reason) => {
  logger.error("unhandledRejection", reason);
  shutdown("unhandledRejection");
});

export default server;