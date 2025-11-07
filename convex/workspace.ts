// convex/workspace.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const create = mutation({
  args: { name: v.string() },
  handler: async (ctx, { name }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) throw new Error("Unauthorized");

    const joinCode = "123456";

    const id = await ctx.db.insert("workspaces", {
      name,
      userId,
      joinCode,
    });

    return id;
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    // eventueel filteren op ingelogde user:
    // const userId = await getAuthUserId(ctx);
    // if (!userId) return [];
    // return await ctx.db.query("workspaces").withIndex("by_user", q => q.eq("userId", userId)).collect();
    return await ctx.db.query("workspaces").collect();
  },
});

export const getById = query({
  args: { id: v.id("workspaces") },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});
