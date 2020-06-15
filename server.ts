import {serve} from 'https://deno.land/std@0.53.0/http/server.ts'

const port = 8000

const server = serve({
    port: port
})

console.log(`Now serving on port ${port} 🔥`)

for await (const req of server) {
    req.respond({
        body: 'Hello World from Deno!'
    })
}