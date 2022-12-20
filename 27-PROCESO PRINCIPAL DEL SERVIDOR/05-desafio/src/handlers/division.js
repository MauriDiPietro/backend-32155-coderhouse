const division = (argv) => {
  console.log('Estoy ejecutando la division');
  const operando1 = argv.op1;
  const operando2 = argv.op2;

  console.log(`El resultado es ${operando1 / operando2} `);
};

export const divCommand = {
  command: 'div',
  describe: 'operacion division',
  builder: {
    op1: {
      describe: 'operando 1',
      demandOption: true,
    },
    op2: {
      describe: 'operando 2',
      demandOption: true,
    },
  },
  handler: division,
};
