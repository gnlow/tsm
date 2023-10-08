const handler =
    (request: Request) => {
        const body = "hello, world!"
        return new Response(
            body,
            {
                status: 200,
            }
        )
    }

console.log(`http://localhost:8081`)
Deno.serve(
    {
        port: 8081,
    },
    handler,
)