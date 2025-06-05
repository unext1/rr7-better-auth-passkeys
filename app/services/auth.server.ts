import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin, emailOTP } from 'better-auth/plugins';
import { db } from '~/db';
import { env } from './env.server';
import { passkey } from 'better-auth/plugins/passkey';
export { APIError } from 'better-auth/api';

export const auth = betterAuth({
  appName: 'BetterAuth',
  baseURL: env.BETTER_AUTH_URL,
  secret: env.BETTER_AUTH_SECRET,
  rateLimit: {
    enabled: false
  },
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
  plugins: [
    admin({
      adminUserIds: ['Vt7dTS6mEnUsQpg2G4lLomYdeGfrEQqI'],
      // Allow any user to stop impersonating (including impersonated users)
      permissions: {
        stopImpersonating: '*' // This allows any user to stop impersonation
      }

      // impersonateUser: async ({ userId }: { userId: string }) => {
      //   console.log('Impersonating user:', userId);
      //   return Promise.resolve();
      // }
    }),
    passkey(),
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        console.log(`Sending ${type} OTP to ${email}: ${otp}`);
        return Promise.resolve();
      },
      sendVerificationOnSignUp: true,
      otpLength: 6,
      expiresIn: 600000,
      disableSignUp: false
    })
  ]
});

export const isLoggedIn = async ({ request }: { request: Request }) => {
  const session = await auth.api.getSession({ headers: request.headers });

  return session;
};
