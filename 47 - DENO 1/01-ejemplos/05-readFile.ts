import { readFileStr } from 'https://deno.land/std@0.55.0/fs/read_file_str.ts';

const contenido = await readFileStr('test2.txt')
console.log(contenido);

//deno run --allow-read 05-readFile.ts