import { serve } from 'https://deno.land/std@0.100.0/http/mod.ts';

const server = serve({port: 8080});

for await(const req of server) {
    req.respond({body: 'Hola desde deno server!'})
}

// deno run --allow-net 09-server.ts 