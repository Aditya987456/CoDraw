# My Notes and Important concepts that i learnt during building this - 

> req.cookies.token works in Express because middleware like cookie-parser has already parsed the cookie string into an object.

> In native ws, you only get the raw header (req.headers.cookie), so you must parse it yourself using cookie.parse() before accessing cookies.token.



<br>
<br>


### TS type-

```
JSON.parse() -> any

any -> TypeScript trusts you and skips checking properties.

That's why parsedData.type doesn't produce an error.
```


<br>
<br>

## ChatGPT suggestion - future improvements (backend)

1. Rate Limiting
   - Prevent spam messages
   - Prevent abuse / DoS attacks
   - Example: max 20 messages per second per user

2. Message Validation
   - Validate incoming websocket payloads
   - Use Zod schemas
   - Check message length, format, roomId, etc.

3. Queue System (BullMQ + Redis)
   - Offload heavy work from websocket server
   - Save messages/drawings asynchronously
   - Handle notifications and background jobs

4. Redis
   - Shared state across multiple WS servers
   - Online presence tracking
   - Room membership storage
   - Pub/Sub for broadcasting

5. Presence System
   - Show users online/offline
   - Track active users in rooms

6. Drawing Optimization
   - Batch drawing events
   - Debounce/throttle mouse movements
   - Reduce websocket traffic

7. Security
   - Message sanitization
   - Room access control
   - Better authorization checks

8. Scalability
   - Multiple websocket servers
   - Load balancing
   - Horizontal scaling

9. Monitoring & Logging
   - Structured logs
   - Error tracking
   - Metrics and analytics

10. Reconnection Handling
    - Auto reconnect
    - Restore room membership
    - Recover unsent events

11. Event Persistence
    - Store drawing events
    - Replay drawings for new users
    - Event sourcing concepts

12. System Design Concepts
    - Pub/Sub
    - Message Queues
    - Caching
    - Distributed Systems
    - Real-time Architecture

Current Version:
- JWT Authentication 
- Room Management 
- WebSocket Broadcasting 
- Database Persistence 

*/

<br>
<br>


<br>
<br>






<br>
<br>


<br>
<br>



# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed (recommended):

```sh
cd my-turborepo
turbo build
```

Without global `turbo`, use your package manager:

```sh
cd my-turborepo
npx turbo build
pnpm dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters):

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed:

```sh
turbo build --filter=docs
```

Without global `turbo`:

```sh
npx turbo build --filter=docs
pnpm exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed (recommended):

```sh
cd my-turborepo
turbo dev
```

Without global `turbo`, use your package manager:

```sh
cd my-turborepo
npx turbo dev
pnpm exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters):

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed:

```sh
turbo dev --filter=web
```

Without global `turbo`:

```sh
npx turbo dev --filter=web
pnpm exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed (recommended):

```sh
cd my-turborepo
turbo login
```

Without global `turbo`, use your package manager:

```sh
cd my-turborepo
npx turbo login
pnpm exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

With [global `turbo`](https://turborepo.dev/docs/getting-started/installation#global-installation) installed:

```sh
turbo link
```

Without global `turbo`:

```sh
npx turbo link
pnpm exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.dev/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.dev/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.dev/docs/reference/configuration)
- [CLI Usage](https://turborepo.dev/docs/reference/command-line-reference)
