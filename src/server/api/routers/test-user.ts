import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '../trpc';

export const testUserRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.database.testUser.create({
        data: {
          name: input.name
        }
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.database.testUser.findMany();
  }),
  getByName: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .query(({ ctx, input }) => {
      return ctx.database.testUser.findFirst({
        where: {
          name: {
            equals: input.name
          }
        }
      });
    })
});
