CREATE TYPE "side" AS ENUM('left', 'right');--> statement-breakpoint
CREATE TABLE "exercise" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" varchar(255) NOT NULL,
	"notes" text,
	"tracks_duration" boolean DEFAULT false NOT NULL,
	"tracks_side" boolean
);
--> statement-breakpoint
CREATE TABLE "session_set" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"session_id" uuid NOT NULL,
	"exercise_id" uuid NOT NULL,
	"set_number" integer NOT NULL,
	"weight" numeric(5,2),
	"reps" integer,
	"duration" integer,
	"side" "side",
	"notes" text
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"user_id" uuid NOT NULL,
	"time_started" timestamp DEFAULT now() NOT NULL,
	"time_ended" timestamp,
	"workoutTemplateID" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "template_exercise" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"workout_template_id" uuid NOT NULL,
	"exercise_id" uuid NOT NULL,
	"target_sets" integer NOT NULL,
	"target_reps_min" integer,
	"target_reps_max" integer,
	"target_duration" integer,
	"sort_order" integer NOT NULL,
	"notes" text
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE
);
--> statement-breakpoint
CREATE TABLE "workout_template" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"type" varchar(255) NOT NULL,
	"variant" varchar(255) NOT NULL,
	"warmup_note" text
);
--> statement-breakpoint
ALTER TABLE "session_set" ADD CONSTRAINT "session_set_session_id_session_id_fkey" FOREIGN KEY ("session_id") REFERENCES "session"("id");--> statement-breakpoint
ALTER TABLE "session_set" ADD CONSTRAINT "session_set_exercise_id_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercise"("id");--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id");--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_workoutTemplateID_workout_template_id_fkey" FOREIGN KEY ("workoutTemplateID") REFERENCES "workout_template"("id");--> statement-breakpoint
ALTER TABLE "template_exercise" ADD CONSTRAINT "template_exercise_workout_template_id_workout_template_id_fkey" FOREIGN KEY ("workout_template_id") REFERENCES "workout_template"("id");--> statement-breakpoint
ALTER TABLE "template_exercise" ADD CONSTRAINT "template_exercise_exercise_id_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercise"("id");