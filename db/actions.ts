"use server";

import { db } from "./index";
import { userTable } from "./schema";
import { eq } from "drizzle-orm";

export async function testConnection() {
    const user: typeof userTable.$inferInsert = {
        name: "Test",
        email: "test@test.test",
    }

    await db.insert(userTable).values(user);
    console.log("User added to table");

    await db.delete(userTable).where(eq(userTable.email, user.email));
    console.log("User deleted from table")
    return { success: true };
}