import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./configs/schema.js",
    dbCredentials: {
        url: 'postgresql://neondb_owner:XYkKx8SQ7UcD@ep-soft-term-a5oo3nc6.us-east-2.aws.neon.tech/AI_LMS?sslmode=require'
    }
});