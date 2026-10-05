# The AI Dictionary

A practical reference for modern AI systems, built with React 19, TanStack
Start/Router, Vite, and Tailwind CSS. The checked-in glossary contains 421 terms
across 32 categories and four layers: foundations, systems, reliability, and
deployment & society. Entries distinguish established concepts from debated,
hypothetical, informal, emerging, historical, and vendor-specific terminology.

## What the app does

- Browse by layer or category, use the A–Z index, or search names, aliases, and
  definitions locally.
- Read definitions and related terms, plus a six-level AI capability scale.
- Save terms in this browser through Zustand's local-storage persistence. Saved
  terms are not account-backed or synchronized across devices.
- Optionally request a short expansion with Grok. This is a server-side xAI API
  call initiated by the **Expand** button; generated text is separate from the
  canonical glossary.

Routes include `/`, `/browse`, `/category/$id`, `/az`, `/search` (with a `q` search
parameter), `/term/$slug`, `/saved`, `/levels`, and `/about`.

## Prerequisites and installation

- **Node.js 22.12 or newer** and npm. There is no root `engines` declaration, but
  the locked TanStack Start packages require this Node version. Verification
  described below used Node.js 24.21.0 and npm 12.2.0.
- Install development dependencies to run the lint and test tools.
- PostgreSQL and an xAI key are **not required** to browse the glossary locally.

From the repository root:

```sh
npm ci --ignore-scripts
```

The lockfile is checked in. The installation and compilation checks below work
with dependency install scripts disabled.

## Run locally

Use a local development shell with `DATABASE_URL` and `XAI_API_KEY` absent for a
glossary-only session, then run:

```sh
npm run dev
```

The dev server binds to `0.0.0.0:8080`; open `http://localhost:8080`. The port is
strict, so an existing listener causes startup to fail. Stop it with Ctrl+C.

Use the npm entry points: `dev`, `build`, `build:dev`, and `preview` pass through
`scripts/with-app-env.mjs`, which reads the public build flags in
`.grok/app-env.json`. Explicit process environment variables take precedence.
The checked-in file opts out of authentication and database provisioning.

`startup.sh` is the Grok sandbox restart entry point and assumes the repository
is at `/workspace`; it is not a general-purpose startup script for other clone
locations.

## Configuration

This project follows the platform's injected-environment setup; do not create a
`.env` file. Supply configuration through the process environment or deployment
provider. Only public configuration belongs in `VITE_` variables, which can be
included in browser bundles. Variable names and their uses are listed below;
no credentials are included.

| Variable                                                                                 | Use                                                                                                                                     |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_AUTH_ENABLED`                                                                      | Shared client/server auth flag, carried by `.grok/app-env.json` for local commands.                                                     |
| `DATABASE_URL`                                                                           | Server-side PostgreSQL connection, including build-time migration access when root SQL migrations exist.                                |
| `XAI_API_KEY`                                                                            | Optional server-only credential for **Expand with Grok** in `src/lib/explain.ts`. Leave absent for checks without model-provider calls. |
| `BETTER_AUTH_URL`, `BETTER_AUTH_SECRET`                                                  | Public auth origin and server-side session secret for the pre-wired Better Auth helpers.                                                |
| `GROK_AUTH_ISSUER`, `GROK_AUTH_CLIENT_ID`, `GROK_AUTH_CLIENT_SECRET`                     | Grok auth-broker configuration for those helpers.                                                                                       |
| `GROK_PROJECT_ID`, `GROK_GATE_ORIGIN`                                                    | Platform project identity and gate origin used by identity verification.                                                                |
| `GROK_CONNECTORS_URL`, `GROK_CONNECTOR_ACCESS_TOKEN`                                     | Platform connector helpers under `src/lib/app-data`; not needed by the glossary routes.                                                 |
| `VITE_PROJECT_ID`, `VITE_PUBLIC_HOSTNAME`, `VITE_OG_SERVICE_URL`, `VITE_GROK_EXTENSIONS` | Platform PWA, public-host, share-card, and extensions metadata.                                                                         |
| `X_CREATOR`, `X_CREATOR_ID`                                                              | Optional creator attribution metadata.                                                                                                  |
| `VITE_STUN_URLS`                                                                         | Optional configuration for the scaffold's peer-to-peer helper; not used by the dictionary UI.                                           |

The authentication code in `src/lib/auth` is scaffold infrastructure, not an
implemented dictionary account feature: there is no `/login` page or
`/api/auth/*` file route in this checkout, and `AuthProvider` is a passthrough.
Enabling the auth flag alone does not add these routes. The opt-in auth schema
lives under `migrations/auth/`, outside the non-recursive root migration scan.

If the database helper is used without `DATABASE_URL`, it initializes an
in-memory PGLite database. Its data resets when the server process restarts; it
is not persistent production storage. Glossary content comes from JSON, and
saved terms stay in browser storage.

## Verification

Run the existing checks from the root:

```sh
npm run typecheck
npm test
npm run lint
```

`npm test` runs the Node script tests first, then four TypeScript suites for
connector helpers, readiness scheduling, gate identity, and sign-in state.
Network interactions in those TypeScript tests are stubbed; no xAI calls are
needed. If the first stage fails, the second is skipped. It can be run directly:

```sh
node --experimental-strip-types --test src/lib/app-data/app-data.test.ts src/lib/app-data/readiness-schedule.test.ts src/lib/auth/gate-identity.test.ts src/lib/auth/sign-in-gate.test.ts
```

On the verified checkout, `npm test` completes both stages: all 195 script tests
and 56 TypeScript tests pass. `npm run typecheck` passes, and `npm run lint` exits
successfully with zero errors and four existing warnings (Fast Refresh exports
and an unused ESLint directive). The PWA tests use isolated workspaces so
fallback assertions do not depend on the dictionary's title or custom card;
filesystem fixtures also verify workspace identity and custom-card precedence
for both buffered and streaming responses.

### Compilation without database migrations

**Read the build script before running it:** `npm run build` runs the Vite
production build **and then `npm run db:migrate`**. The migrator uses
`DATABASE_URL`, creates migration bookkeeping, and applies pending
`migrations/*.sql` files transactionally. It skips when the connection variable
is absent or no root migrations exist. This checkout has only the nested opt-in
auth schema, but adding root SQL files changes the build's database requirements.
Do not use inherited production credentials for local verification.

`npm run build:dev` compiles in development mode without invoking the migrator.
For a production-mode compilation-only check on a POSIX shell, the following
uses the same Vite configuration and environment wrapper, with no inherited
credentials. It builds the client, SSR, and Nitro environments and redirects
generated files into ignored `node_modules` paths, preserving the checked-in
`.vercel/output` artifacts:

```sh
env -i PATH="$PATH" HOME="$PWD" node scripts/with-app-env.mjs node --input-type=module -e '
  import { createBuilder } from "vite";
  const builder = await createBuilder({
    nitro: {
      buildDir: "node_modules/.cache/readme-nitro",
      output: { dir: "node_modules/.cache/readme-build" }
    }
  });
  await builder.buildApp();
'
```

This compilation passed with bundle-size and dependency directive warnings. It
does not verify database migrations, browser rendering, or a live deployment.

With a normally located fresh build, `npm run preview` serves built output on
`127.0.0.1:8081`. `npm run check:auth` requires the running dev server and checks
its auth flag against the next build's flag. The browser smoke script additionally
requires Playwright's Chromium and confines screenshots to `/workspace`; it is
sandbox-specific rather than directly usable from an arbitrary local clone.
The Linux-only `preview:restart`/`preview:stop` helpers take ownership of port
8081 and terminate its listener, so use them only in their dedicated sandbox.

## Deployment constraints

- `vite.config.ts` targets **Vercel through Nitro**, including
  `server/middleware/grok-pwa.ts`. This is an SSR application with a server
  function for expansion; copying static assets alone does not provide that
  functionality. There is no generic production `start` script.
- `vercel.json` installs with development dependencies omitted. Build-time
  dependencies are in `dependencies`; lint, tests, and browser QA require a
  separate development install.
- A full build with root SQL migrations requires an explicitly selected
  PostgreSQL database reachable from the builder, credentials permitted to
  create/apply the schema, and the relevant runtime environment configuration.
  With no `DATABASE_URL`, the migration step skips rather than provisioning a
  database. The Grok platform can inject deployment flags independently of the
  local app-env file, so check the deployed configuration explicitly.
- Real auth or connector use depends on the corresponding platform services
  and wiring described above. An arbitrary host cannot rely on sandbox auth
  defaults as a complete standalone login setup.
- xAI expansions require server execution, network access, and a server-side
  credential. The page also references Google Fonts and the Grok extensions
  script; the UI is not wholly self-contained for offline use.
- The repository already tracks generated `.vercel/output` files. Rebuild from
  source when preparing a deployment rather than treating those artifacts as
  evidence that the current source has been verified.

## Source map

- `src/data/glossary.json`: shipped definitions, aliases, statuses, and links.
- `src/data/taxonomy.ts`: categories, layers, capability levels, and editorial
  notes; `src/lib/glossary.ts`: lookup and ranked local search.
- `src/routes/` and `src/components/`: file-based pages and the dictionary UI.
- `src/lib/saved.ts`: browser-local bookmarks; `src/lib/explain.ts`: optional
  server-side expansion.
- `src/lib/auth/`, `src/lib/app-data/`, and `src/lib/db.ts`: platform helpers.
- `scripts/` and `server/`: environment, verification, migration, preview, and
  PWA infrastructure. Read [AGENTS.md](AGENTS.md) before contributing.

`scripts/generate-glossary.py` regenerates the data from embedded term tuples
using Python 3. Its output path is hard-coded to
`/workspace/src/data/glossary.json`; running it from another clone does not
retarget the output to that clone. It is not part of installation or verification.
