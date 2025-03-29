import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './src/db/schema.js',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://admin:password@127.0.0.1:5432/db",
    }
})