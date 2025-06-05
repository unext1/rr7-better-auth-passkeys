import { useEffect } from 'react';
import { Form, href, redirect, useNavigate } from 'react-router';

import { Button } from '~/components/ui/button';
import { Input } from '~/components/ui/input';
import { authClient } from '~/services/auth.client';
import { APIError, auth } from '~/services/auth.server';
import type { Route } from './+types/signup';

export const loader = async ({ request }: Route.LoaderArgs) => {
  const data = await auth.api.getSession({ headers: request.headers });
  if (data) {
    return redirect(href('/passkey'));
  }
  return data;
};

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));

  try {
    const { headers } = await auth.api.signInEmail({
      request,
      headers: request.headers,
      returnHeaders: true,
      body: {
        email,
        password
      }
    });
    return redirect(href('/passkey'), { headers });
  } catch (error) {
    if (error instanceof APIError) {
      return { error: error?.body?.message };
    }
    throw error;
  }
};

export const SignIn = ({ actionData }: Route.ComponentProps) => {
  const error = actionData?.error;
  const navigate = useNavigate();

  useEffect(() => {
    void authClient.signIn.passkey({
      fetchOptions: {
        onSuccess: () => {
          void navigate(href('/passkey'));
        }
      }
    });
  }, []);

  const handlePasskeySignIn = () => {
    void authClient.signIn.passkey({
      fetchOptions: {
        onSuccess: () => {
          void navigate(href('/passkey'));
        }
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Form method="post" className="flex flex-col gap-6 max-w-md w-full">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Sign In</h1>
        </div>
        <Input name="email" type="email" placeholder="me@example.com" required autoComplete="email webauthn" />
        <Input
          name="password"
          type="password"
          required
          placeholder="password"
          autoComplete="current-password webauthn"
        />
        {error && <p className="text-red-500 text-xs">{error}</p>}

        <Button type="submit" className="w-full">
          Sign In with Email
        </Button>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">Or</span>
          </div>
        </div>

        <Button type="button" variant="outline" className="w-full" onClick={() => void handlePasskeySignIn()}>
          Force Passkey Pop Up
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
