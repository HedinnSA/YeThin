import { usersTable } from "./schema";
import { db } from ".";
import { eq } from "drizzle-orm";

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