import { config } from "dotenv"
import { drizzle } from "drizzle-orm/neon-http"
import { usersTable } from "./schema";
import { eq } from "drizzle-orm";

config ({ path: '.env.local'})


if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set");
}

const db = drizzle(process.env.DATABASE_URL);

async function main() {
    const user: typeof usersTable.$inferInsert = {
        name: "Tester",
        age: 32,
        email: "retset@tester.com",
    };

    await db.insert(usersTable).values(user);
    console.log("New User Created");

    const users = await db.select().from(usersTable);
    console.log("Getting all users from the database", users);

    await db
    .update(usersTable)
    .set({
        age : 31,
    })
    .where (eq(usersTable.email, user.email));
    console.log("User info updated");

    await db
    .delete(usersTable).where(eq(usersTable.email, user.email));
    console.log("User deleted!")
}
main();
