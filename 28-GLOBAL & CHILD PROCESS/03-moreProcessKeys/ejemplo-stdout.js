const myCls = (mensaje) => {
  process.stdout.write(mensaje + '\n');
};

myCls('PID');
myCls(process.pid);

myCls('Directorio actual de trabajo');
myCls(process.cwd());


