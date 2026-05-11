//-----------------------------------------------------
// console.log is replaced with Winston for two reasons: log levels (debug/info/warn/error) let you filter noise 
// by environment, and JSON output in production makes logs parseable by tools like Datadog or CloudWatch. 
// The dev format is colorized and human-readable, while prod emits structured JSON — both configured automatically based on NODE_ENV.
//-----------------------------------------------------
import { createLogger, format, transports } from 'winston';  // Logging library
import config from "../config"; // Config object from .env files

// Destructuring format object, extracting specific functions for log formatting
// combine - merges output of other formatters into a single output
// timestamp - grabs the timestamp of logged event
// colorize - provides color code in terminal (green = good, yellow = warning, red = error)
// printf - allows custom output rather than raw json
// json - logs outputted as json, used in production to be consumed by logging tools (Datadog, CloudWatch)
const { combine, timestamp, colorize, printf, json  } = format;

const DEV_FORMAT = printf(({level, message, timestamp}) => {
  return `[${timestamp}] ${level}: ${message}`
});

const logger = createLogger({
  level: config.env === "production" ? "info" : "debug",
  format: combine(timestamp({format: "YYYY-MM-DD HH:mm:ss"})),
  transports: [
    // Send to terminal
    new transports.Console({
      format: config.env === "production" ?                  
      combine(timestamp(), json()) :                                    // Raw json in production
      combine(colorize(), timestamp({format: "HH:mm:ss"}), DEV_FORMAT)  // Pretty format in dev
    })
  ]
});

export default logger;