import axios from 'npm:axios'

const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

console.log(response.data);

//intall denon --> deno install -qAf --unstable https://deno.land/x/denon/denon.ts
//denon run --allow-net --allow-read 13-axios.ts 

