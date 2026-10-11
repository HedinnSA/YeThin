import { integer, pgTable, varchar, uuid, timestamp, numeric, pgEnum, text, boolean } from "drizzle-orm/pg-core";

export const sideEnum = pgEnum("side", ["left", "right"]);

export const userTable = pgTable("user", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({length: 255}).notNull(),
    email: varchar({length: 255}).notNull().unique(),
});

export const sessionTable = pgTable("session", {
    id: uuid().primaryKey().defaultRandom(),
    userId: uuid("user_id").notNull().references(() => userTable.id),
    timeStarted: timestamp("time_started").notNull().defaultNow(),
    timeEnded: timestamp("time_ended"),
    workoutTemplateID: uuid().notNull().references(() => workoutTemplateTable.id),
})

export const sessionSetTable = pgTable("session_set", {
    id: uuid().primaryKey().defaultRandom(),
    sessionId: uuid("session_id").notNull().references(() => sessionTable.id),
    exerciseId: uuid("exercise_id").notNull().references(() => exerciseTable.id),
    setNumber: integer("set_number").notNull(),
    weight: numeric("weight",{precision: 5, scale: 2}),
    reps: integer("reps"),
    duration: integer("duration"), // Tracks seconds
    side: sideEnum(),
    notes: text(),
})

export const exerciseTable = pgTable("exercise", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({length: 255}).notNull(),
    notes: text(),
    tracksDuration: boolean("tracks_duration").notNull().default(false),
    tracksSide: boolean("tracks_side"),
})

export const workoutTemplateTable = pgTable ("workout_template", {
    id: uuid().primaryKey().defaultRandom(),
    type: varchar("type", {length: 255}).notNull(),
    variant: varchar("variant", {length: 255}).notNull(),
    warmupNote: text("warmup_note"),
})

export const templateExerciseTable = pgTable ("template_exercise", {
    id: uuid().primaryKey().defaultRandom(),
    workoutTemplateId: uuid("workout_template_id").notNull().references(() => workoutTemplateTable.id),
    exerciseId: uuid("exercise_id").notNull().references(() => exerciseTable.id),
    targetSets: integer("target_sets").notNull(),
    targetRepsMin: integer("target_reps_min"),
    targetRepsMax: integer("target_reps_max"),
    targetDuration: integer("target_duration"),
    sortOrder: integer("sort_order").notNull(),
    notes: text(),
})