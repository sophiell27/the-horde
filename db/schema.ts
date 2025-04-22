import { uuid, text, pgTable, timestamp } from 'drizzle-orm/pg-core';
export const waitingList = pgTable('waiting_list', {
  id: uuid('id').primaryKey().defaultRandom().notNull(),
  email: text('email').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
