
const winston = require('winston');

// Logging events such as registration and login

const logger = winston.createLogger({
  level: 'info', 
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.File({ filename: 'events.log' })
  ]
});



const logUserAction = (action, email) => {
  const message = `${action} with email: ${email}`;
  logger.info(message); 
};

// Export the log function
module.exports = { logUserAction };
