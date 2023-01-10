import log4js from 'log4js';

export const ejemplo1 = () => {
  const logger = log4js.getLogger();

  logger.level = 'trace';

  logger.trace('Imprimimos Trace');
  logger.debug('Imprimimos Debug');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
  logger.fatal('Imprimimos Fatal');
};
