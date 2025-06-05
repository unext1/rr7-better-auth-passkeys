import { z } from 'zod';
import 'dotenv/config';

const environmentSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),

  BETTER_AUTH_SECRET: z.string().min(1).trim(),
  BETTER_AUTH_URL: z.string().min(1).trim()
});

export const env = environmentSchema.parse(process.env);
