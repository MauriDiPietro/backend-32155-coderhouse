import { parse, dayOfYear, difference } from "https://deno.land/std@0.178.0/datetime/mod.ts";

const date1 = parse('08-03-2023', 'dd-MM-yyyy')
const date2 = parse('08-03-2015', 'dd-MM-yyyy')


console.log(dayOfYear(date1));

console.log(difference(date1, date2));



console.log(date1.getMonth() + 1);
console.log(date1.getDay());
console.log(date1.getFullYear());
