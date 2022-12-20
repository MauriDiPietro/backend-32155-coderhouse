import minimist from 'minimist';

const optionalArgsObject = {
  alias: {
    h: 'help',  
    v: 'version',
    x: 'mialiasPersonalizado',
    m: 'message',
  },
  //node src/index2.js -h --v=1.0.0 --m=hola
  default: {
    port: '6100',
    cluster: false,
  },
};

const args = minimist(process.argv.slice(2), optionalArgsObject);
console.log(args);

