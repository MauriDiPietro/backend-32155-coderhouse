import pino from 'pino';

export const ejemplo1 = () => {
  const logger = pino({ level: 'info' });

  logger.trace('Imprimimos Trace');
  logger.debug('Imprimimos Debug');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
  logger.fatal('Imprimimos Fatal');
};
