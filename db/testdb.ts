import { userTable } from "./schema";
import { db } from ".";
import { eq } from "drizzle-orm";

async function main() {
    const user: typeof userTable.$inferInsert = {
        name: "Tester",
        email: "retset@tester.com",
    };

    await db.insert(userTable).values(user);
    console.log("New User Created");

    const users = await db.select().from(userTable);
    console.log("Getting all users from the database", users);

    await db
    .update(userTable)
    .set({
        name : "Tester2",
    })
    .where (eq(userTable.email, user.email));
    console.log("User info updated");

    await db
    .delete(userTable).where(eq(userTable.email, user.email));
    console.log("User deleted!")
}
main();