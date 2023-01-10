import winston from 'winston';

export const ejemplo2 = () => {
  const logConfiguration = {
    level: 'info',
    transports: [
      new winston.transports.Console({ level: 'silly' }),
      new winston.transports.File({
        filename: './logs/error.log',
        level: 'error', 
      }),
      new winston.transports.File({
        filename: './logs/loggers.log',
      }),
    ],
  };

  const logger = winston.createLogger(logConfiguration);

  logger.silly('Imprimimos Silly');
  logger.debug('Imprimimos Debug');
  logger.verbose('Imprimimos Verbose');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
};
