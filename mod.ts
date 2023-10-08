/*
    emit@>0.25.0 doesn't work in Deno Deploy.
    https://github.com/denoland/deno_cache/issues/35
*/
import { transpile } from "https://deno.land/x/emit@0.25.0/mod.ts"

const handler =
    async (request: Request) => {
        const url = new URL(request.url)
        try {
            const target = new URL(url.pathname.substring(1))
            const result = await transpile(
                target,
                {
                    cacheRoot: Deno.cwd(),
                }
            )
            return new Response(
                result.get(target.href) || "",
                {
                    status: 200,
                    headers: {
                        "content-type": "application/javascript",
                        "access-control-allow-origin": "*",
                        "x-typescript-types": target.href,
                    },
                }
            )    
        } catch(e) {
            return new Response(
                url.pathname.substring(1)
                + "\n"
                + e,
                {
                    status: 404,
                }
            )    
        }
    }

console.log(`http://localhost:8081`)
Deno.serve(
    {
        port: 8081,
    },
    handler,
)