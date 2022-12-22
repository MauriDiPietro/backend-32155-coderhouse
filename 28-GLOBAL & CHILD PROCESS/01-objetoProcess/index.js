console.log(`Directorio actual de trabajo ===> ${process.cwd()}`);
console.log(`ID Del proceso actual ====> ${process.pid}`);
console.log(`Version de NodeJs corriendo ====> ${process.version}`);
console.log(`Nombre del proceso ====> ${process.title}`); 
console.log(`Sistema Operativo ====> ${process.platform}`);
console.log(`Uso de memoria====> ${JSON.stringify(process.memoryUsage())}`);


process.exit(2);


console.log(
  'Esta linea no se va a ejecutar nunca porque llame a process.exit antes'
);

