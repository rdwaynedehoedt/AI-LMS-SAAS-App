import { integer, pgTable, varchar, boolean } from "drizzle-orm/pg-core";


export const USER_TABLE = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userName: varchar().notNull(),
    email: varchar().notNull().unique(),
    isMember: boolean().default(false),
});
