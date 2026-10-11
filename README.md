This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Database migrations (Drizzle + Neon)

Schema lives in `db/schema.ts`. Migrations are generated into `drizzle/` and committed to git.

### Workflow

1. Edit `db/schema.ts`
2. Generate a migration: `npx drizzle-kit generate`
3. Review the generated SQL in `drizzle/` (check table/column names, nullability, foreign keys)
4. Apply it: `npx drizzle-kit migrate`
5. Verify in the Neon dashboard

### Notes

- `DATABASE_URL` is read from `.env.local` (configured in `drizzle.config.ts`)
- Never hand-edit a migration that has already been applied; make a new one instead
- `drizzle-kit push` is for quick throwaway experiments only, since it skips migration history