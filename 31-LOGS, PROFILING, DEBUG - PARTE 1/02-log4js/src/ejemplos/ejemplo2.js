import log4js from 'log4js';

export const ejemplo2 = () => {
  log4js.configure({
    appenders: {
      fileAppender: { type: 'file', filename: './logs/example-1.log' },
    },
    categories: {
      default: { appenders: ['fileAppender'], level: 'info' },
    },
  });

  const logger = log4js.getLogger();

  logger.trace('Imprimimos Trace');
  logger.debug('Imprimimos Debug');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
  logger.fatal('Imprimimos Fatal');
};
