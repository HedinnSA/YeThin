import { integer, pgTable, varchar, uuid } from "drizzle-orm/pg-core";


// export const usersTable = pgTable("users", {
//     id: integer().primaryKey().generatedAlwaysAsIdentity(),
//     name: varchar({length: 255}).notNull(),
//     age: integer().notNull(),
//     email: varchar({length: 255}).notNull().unique(),
// });

export const userTable = pgTable("user", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({length: 255}).notNull(),
    email: varchar({length: 255}).notNull().unique(),
});
