import { relations } from "drizzle-orm/relations";
import { user, session, account, project } from "./schema";

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	sessions: many(session),
	accounts: many(account),
	projects: many(project),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(user, {
		fields: [account.userId],
		references: [user.id]
	}),
}));

export const projectRelations = relations(project, ({one}) => ({
	user: one(user, {
		fields: [project.ownerId],
		references: [user.id]
	}),
}));