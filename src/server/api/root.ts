import { testUserRouter } from './routers/test-user';
import { createCallerFactory, createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  testUser: testUserRouter
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
