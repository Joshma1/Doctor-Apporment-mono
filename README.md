# Schedula Doctor Appointment System

## Monorepo Structure

- `apps/frontend`: Next.js frontend
- `apps/backend`: NestJS backend
- `libs/types`: Shared TypeScript types
- `prisma/`: Prisma schema and migrations
- `.github/workflows/`: CI/CD pipelines

## Getting Started

1. Install dependencies: `npm install`
2. Set up your `.env` file
3. Run the database: `docker-compose up -d postgres` (if using Docker)
4. Run the backend: `npm run dev --workspace=apps/backend`
5. Run the frontend: `npm run dev --workspace=apps/frontend`
6. Run tests: `npm run test`

## License

MIT

## frontend can run
1) npx next dev apps/frontend
or
2) cd apps/frontend
npx next dev
