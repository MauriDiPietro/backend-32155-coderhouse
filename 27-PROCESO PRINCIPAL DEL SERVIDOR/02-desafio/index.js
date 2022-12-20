import minimist from 'minimist';

const optionalArgsObject = {
  alias: {
    p: 'puerto',
    m: 'modo',
    d: 'debug'
  },
  default: {
    d: false,
    m: 'prod',
    p: 0
  },
};

const args = minimist(process.argv.slice(2), optionalArgsObject);

console.log(args);


const objetoFinal = {
  otros: args._,
  modo: args.modo,
  puerto: args.puerto,
  debug: args.debug,
}

console.log('FINAL')
console.log(objetoFinal);

// node index.js -p=8080 -m=dev -d