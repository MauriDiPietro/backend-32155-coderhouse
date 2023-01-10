import winston from 'winston';

const { createLogger, format, transports } = winston;
const { combine, printf, timestamp, colorize } = format;


export const ejemplo3 = () => {
  const logConfiguration = {
    level: 'silly',
    format: combine(
      timestamp({
        format: 'MMM-DD-YYYY HH:mm:ss',
      }),
      colorize(),
      printf((info) => `${info.level} | ${[info.timestamp]} | ${info.message}`)
    ),
    transports: [new transports.Console()],
  };

  const logger = createLogger(logConfiguration);


  logger.silly('ahora si tiene color!');
  logger.debug('Imprimimos Debug');
  logger.verbose('Imprimimos Verbose');
  logger.info('Imprimimos Info');
  logger.warn('Imprimimos Warn');
  logger.error('Imprimimos Error');
};
