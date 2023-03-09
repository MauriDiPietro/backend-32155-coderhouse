//deno test fileName.ts

import {
  assertEquals,
  assertStrictEquals,
  assertObjectMatch,
  equal,
  assertNotEquals
} from 'https://deno.land/std@0.100.0/testing/asserts.ts';

Deno.test('example', () => {  
  const a = 'world';
  assertEquals(a, 'world');
  assertEquals({ hello: 'world' }, { hello: 'world' });
});


Deno.test('assertObjectMatch - Compara contenido de objetos', () => {
  const a = {};
  const b = {};
  assertObjectMatch(a, b);
  equal(a,b);
});

Deno.test('isStrictlyEqual - Compara igualdad objetos', () => {
  const a = {};
  const b = a;
  assertStrictEquals(a, b);
});


Deno.test('assertNotEquals - Verifica que los elementos no sean iguales', () => {
  const a = { name: 'Juan' };
  const b = {};
  assertNotEquals(a, b);
});
