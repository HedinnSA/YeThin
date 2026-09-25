"use server";

import { db } from "./index";
import { usersTable } from "./schema";
import { eq } from "drizzle-orm";

export async function testConnection() {
    const user: typeof usersTable.$inferInsert = {
        name: "Test",
        age: 23,
        email: "test@test.test",
    }

    await db.insert(usersTable).values(user);
    console.log("User added to table");

    await db.delete(usersTable).where(eq(usersTable.email, user.email));
    console.log("User deleted from table")
    return { success: true };
}