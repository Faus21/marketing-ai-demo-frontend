# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured yet.

## Architecture

This is a Next.js 16 app using the App Router with React 19, TypeScript, and Tailwind CSS v4.

- `app/layout.tsx` — root layout with Geist font configuration and global metadata
- `app/page.tsx` — home page (currently the default Next.js starter)
- `app/globals.css` — global styles; uses Tailwind v4's `@import "tailwindcss"` syntax and `@theme inline` for CSS variable theming

**Path alias:** `@/*` maps to the repo root (e.g. `@/app/...`, `@/components/...`).

**Styling:** Tailwind v4 is configured via PostCSS (`@tailwindcss/postcss`). Theme tokens (`--color-background`, `--color-foreground`, `--font-sans`, `--font-mono`) are defined in `globals.css` using `@theme inline`, not in a `tailwind.config` file. Dark mode is handled via `prefers-color-scheme` media query on CSS variables.

**ESLint:** Uses `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` with a flat config (`eslint.config.mjs`).

## Folder Structure

```
app/                        # Next.js App Router — only routing files go here
  (marketing)/              # Route group (no URL segment) for marketing pages
    page.tsx
    layout.tsx
  (dashboard)/              # Route group for authenticated/app pages
    dashboard/
      page.tsx
    layout.tsx
  api/                      # API route handlers
    example/
      route.ts
  layout.tsx                # Root layout
  globals.css

components/                 # Shared React components
  ui/                       # Primitive/generic UI (buttons, inputs, modals)
  layout/                   # Header, Footer, Sidebar, etc.
  forms/                    # Form components

lib/                        # Pure utility/helper functions and configs (no React)
  utils.ts
  constants.ts

hooks/                      # Custom React hooks (use* naming)

services/                   # External API clients and data-fetching logic
  api.ts

types/                      # Shared TypeScript types and interfaces
  index.ts

public/                     # Static assets served at /
  images/
```

Route groups `(name)` organize layouts without affecting the URL. Colocation: keep a component in `app/` only if it is used exclusively by one route; otherwise move it to `components/`.

## Naming Conventions

**Files and folders:** `kebab-case` for all files and directories (`user-profile.tsx`, `auth-layout.tsx`). Exception: Next.js reserved filenames use their exact names (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`).

**React components:** `PascalCase` for the component function and its file export (`UserProfile`, `AuthLayout`). One component per file.

**Hooks:** prefix with `use`, camelCase (`useUserSession`, `useFetchPosts`).

**Types and interfaces:** `PascalCase`. Prefer `type` over `interface` unless declaration merging is needed. Do not prefix with `I` (`UserProfile`, not `IUserProfile`).

**Constants:** `SCREAMING_SNAKE_CASE` for module-level constants (`MAX_RETRY_COUNT`). camelCase for local variables.

**API route handlers:** file is always `route.ts`, export named HTTP-method functions (`GET`, `POST`, `PATCH`, `DELETE`).

## Next.js Best Practices

**Server vs. Client components:** Default to Server Components. Add `"use client"` only when the component needs browser APIs, event handlers, or React state/effects. Push `"use client"` boundaries as far down the tree as possible.

**Data fetching:** Fetch data in Server Components using `async/await` directly. Use React's `cache()` to deduplicate requests across a render. Avoid fetching in Client Components when a Server Component can do it instead.

**Metadata:** Export a `metadata` object or `generateMetadata` function from each `page.tsx` — never set `<title>` or `<meta>` tags manually in JSX.

**Images:** Always use `next/image` (`<Image>`). Provide explicit `width`/`height` or use `fill` with a sized parent to avoid layout shift.

**Links:** Always use `next/link` (`<Link>`) for internal navigation. Never use a plain `<a>` for internal routes.

**Loading and error states:** Create `loading.tsx` and `error.tsx` siblings to `page.tsx` inside each route segment to handle suspense and error boundaries automatically.

**Environment variables:** Server-only secrets go in plain `NEXT_PUBLIC_`-less vars; anything needed on the client must be prefixed `NEXT_PUBLIC_`. Never expose secret vars to the client.

**Route handlers:** Keep `route.ts` files thin — validate input, call a service, return a `NextResponse`. Business logic belongs in `services/` or `lib/`.
