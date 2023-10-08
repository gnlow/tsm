# tsm
**tsm is experimental project, and is not ready for production**

Use TypeScript everywhere
- Transfiles TS to JS via [deno_emit](https://github.com/denoland/deno_emit)
- Provides type information via `x-typescript-types` header

## Usage
```ts
// https://examples.deno.land/import-export/util.ts
export function sayHello(thing: string) {
  console.log(`Hello, ${thing}!`);
}
export interface Foo {}
export class Bar {}
export const baz = "baz";
```
```js
// https://tsm.deno.dev/https://examples.deno.land/import-export/util.ts
export function sayHello(thing) {
    console.log(`Hello, ${thing}!`);
}
export class Bar {
}
export const baz = "baz";
```
```html
<script type="module" src="https://tsm.deno.dev/https://examples.deno.land/import-export/util.ts"></script>
```