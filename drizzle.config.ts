import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './app/db/schema/index.ts',
  out: './app/db/migrations/drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'file:./db.sqlite3'
  }
});
