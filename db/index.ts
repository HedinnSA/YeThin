import { config } from "dotenv"
import { drizzle } from "drizzle-orm/neon-http"
import { usersTable } from "./schema";
import { eq } from "drizzle-orm";

config ({ path: '.env.local'})


if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}

export const db = drizzle(process.env.DATABASE_URL);
