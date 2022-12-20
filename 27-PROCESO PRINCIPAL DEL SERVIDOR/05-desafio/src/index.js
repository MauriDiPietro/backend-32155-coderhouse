import yargs from 'yargs';
import { addCommand } from './handlers/suma.js';
import { subCommand } from './handlers/resta.js';
import { mulCommand } from './handlers/multiplicacion.js';
import { divCommand } from './handlers/division.js';

yargs.version('1.0.0');

yargs.command(addCommand);
yargs.command(subCommand);
yargs.command(mulCommand);
yargs.command(divCommand);

yargs.parse();


