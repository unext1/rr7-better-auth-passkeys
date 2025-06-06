import { createAuthClient } from 'better-auth/client';
import { passkeyClient } from 'better-auth/client/plugins';

export const authClient = createAuthClient({
  baseURL: 'http://localhost:3000',
  appName: 'BetterAuth',

  plugins: [passkeyClient()]
});
