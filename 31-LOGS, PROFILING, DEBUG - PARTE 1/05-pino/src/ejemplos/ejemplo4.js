import pino from 'pino';

export const ejemplo4 = () => {
  const loggerPadre = pino({
    level: 'trace',
  });

  const loggerHijo = loggerPadre.child({ logHeredado: true }); 
  const obj = {
    nombre: 'Lionel',
    edad: 35,
  };

  loggerPadre.trace({
    mensaje: 'Imprimimos Trace',
    nombre: 'Lionel',
    edad: 35,
  });
  loggerHijo.debug('Imprimimos Debug');
  loggerPadre.info('Imprimimos Info');
  loggerHijo.warn('Imprimimos Warn');
  loggerPadre.error('Imprimimos Error');
  loggerHijo.fatal(
    {
      mensaje: 'Imprimimos Fatal',
      nombre: 'Lionel',
      edad: 35,
    },
    'esto es un mensaje adicional'
  );
};
