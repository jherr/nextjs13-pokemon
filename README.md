Example application using Redux during both SSR and CSR in a NextJS 13 application using the `app` directory.

## Warnings and Caveats

Global state managers (Redux, Jotai, Zustand, etc.) are global and if you use them on the server you run into the potential of cross-request data leakage, you 100% should be aware of the risk here.

Some way to mitigate that risk.

1. Purge the global store at the root layout to remove the previous request state
2. Do **all** of your async requests first, then load the store, then let the render go so that the rest of the request handling is synchronous.

Overall this is an **advanced use** of both Redux and NextJS 13, there are risks, and you should know what you are doing.

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
