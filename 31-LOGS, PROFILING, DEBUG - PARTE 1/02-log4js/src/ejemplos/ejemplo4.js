import log4js from 'log4js';

export const ejemplo4 = () => {
  log4js.configure({
    appenders: {
      fileAppender: { type: 'file', filename: './logs/example-1.log' },
      consola: { type: 'console' },
    },
    categories: {
      default: { appenders: ['fileAppender', 'consola'], level: 'error' },
      miLoggerPersonalizado: { appenders: ['consola'], level: 'warn' },
    },
  });

  const logger = log4js.getLogger('miLoggerPersonalizado');


  logger.trace('Imprimimos Trace');
  logger.debug('Imprimimos Debug');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
  logger.fatal('Imprimimos Fatal');
};
