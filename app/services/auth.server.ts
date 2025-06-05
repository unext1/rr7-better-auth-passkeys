import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { passkey } from 'better-auth/plugins/passkey';

import { db } from '~/db';
import { env } from './env.server';
export { APIError } from 'better-auth/api';

export const auth = betterAuth({
  appName: 'BetterAuth',
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: 'sqlite'
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({ user, token }) => {
      console.log({ user, url: `${env.BETTER_AUTH_URL}/auth/reset/${token}` });
      return Promise.resolve();
    }
  },
  plugins: [passkey()]
});

export const isLoggedIn = async ({ request }: { request: Request }) => {
  const session = await auth.api.getSession({ headers: request.headers });

  return session;
};
