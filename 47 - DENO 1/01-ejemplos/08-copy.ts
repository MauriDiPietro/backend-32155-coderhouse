import { copy } from 'https://deno.land/std@0.97.0/fs/copy.ts';

await copy('archivo-original.txt', 'archivo-copia.txt')
