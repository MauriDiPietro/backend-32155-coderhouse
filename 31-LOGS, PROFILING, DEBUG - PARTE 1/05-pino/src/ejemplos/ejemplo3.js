import pino from 'pino';

export const ejemplo3 = () => {
  const logger = pino({
    level: 'trace',
  });

  const obj = {
    nombre: 'Martin',
    edad: 30,
  };

  logger.debug('el nombre es %s', obj.nombre); 
  logger.info('la edad es %d', obj.edad); 
  logger.warn('el objeto es %o', obj); 
};
