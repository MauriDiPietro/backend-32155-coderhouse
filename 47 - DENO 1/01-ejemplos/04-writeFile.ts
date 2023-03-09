// const encoder = new TextEncoder()
// const data = encoder.encode('Comision 32155')
// await Deno.writeFile('test.txt', data)

//deno run --allow-write 04-writeFile

import { writeFileStr } from 'https://deno.land/std@0.55.0/fs/write_file_str.ts';

await writeFileStr('test2.txt', 'Hola Comision 32155');