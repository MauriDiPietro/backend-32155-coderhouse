process.on('uncaughtException', (err) => {
  console.log(`Uncaught Exception: ${err.message}\n\n`);
  console.log(err.stack);  
  process.exit(1);
});

const miFunc2 = () => {
  console.log('ejecutando algo...');
  throw new Error('Mensaje Personalizado del error');
};

const miFunc1 = () => miFunc2();

miFunc1();

