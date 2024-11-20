import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const USER_TABLE = pgTable("users", {
    id: serial().primaryKey(),
    userName: varchar().notNull(),
    email: varchar().notNull().unique(),
    isMember: boolean().default(false),
});
