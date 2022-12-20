import minimist from 'minimist';

const args = minimist(process.argv);

console.log('ARGV SIN MINIMIST');
console.log(process.argv);
console.log('ARGV CON MINIMIST')
console.log(args);


// console.log(args.port);

//node src/index.js --port=8000
//node src/index.js -p 8000