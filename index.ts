const srv = Bun.serve({
    port: 3000,
    routes: {
        "/teste": {
            GET: () => new Response("Wawa!!_get"),
            PUT: () => new Response("Wawa!!_put"),
            POST: () => new Response("Wawa!!_post"),
            DELETE: () => new Response("Wawa!!_delete")
        }

    }
})

console.log(`Rodando no ${srv.url}`)