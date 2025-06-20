import { defineConfig } from "drizzle-kit";

export default defineConfig({
    out: "./drizzle/migrations",
    schema: ["./src/schema/schema.ts"],
    dialect: "postgresql",
    dbCredentials: {
        url: Bun.env.DATABASE_URL!,
    },
});