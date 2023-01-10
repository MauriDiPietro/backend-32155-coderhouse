import pino from 'pino';

export const ejemplo2 = () => {
  const logger = pino({ level: 'trace' });

  logger.trace({
    nombre: 'Juan',
    edad: 42,
  });
  logger.debug('Imprimimos Debug');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
  logger.fatal(
    {
      nombre: 'Carlos',
      edad: 22,
    },
    'esto es un mensaje adicional'
  );
};
