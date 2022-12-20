import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv

console.log('\n\nArgumentos de YARGS');
console.log(argv);
