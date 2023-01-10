import winston from 'winston';

export const ejemplo1 = () => {

  const logConfiguration = {
    transports: [ new winston.transports.Console() ],
  };

  const logger = winston.createLogger(logConfiguration);


  logger.level = 'silly';

  logger.silly('Imprimimos Silly');
  logger.debug('Imprimimos Debug');
  logger.verbose('Imprimimos Verbose');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
};

