import { $ } from "http://localhost:8081/https://deno.land/x/iteruyo@v0.3.0/mod.ts"
    $([1, 2, 3, 4, 5])
        .filter(x => x % 2 === 0)
        .map(x => x * 2)
        .forEach(console.log) // 4 8