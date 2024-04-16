/* eslint-disable unicorn/prevent-abbreviations */

import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  client: {
    // NEXT_PUBLIC_CLIENT_VAR: z.string(),
  },
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development')
  },
  runtimeEnv: {
    // Client
    // NEXT_PUBLIC_CLIENT_VAR: process.env.NEXT_PUBLIC_CLIENT_VAR,
    // Server
    NODE_ENV: process.env.NODE_ENV
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * Useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true
});
