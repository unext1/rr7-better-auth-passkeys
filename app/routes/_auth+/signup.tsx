import { Form, href, redirect } from 'react-router';

import { Button } from '~/components/ui/button';

import { Input } from '~/components/ui/input';
import { APIError, auth } from '~/services/auth.server';
import type { Route } from './+types/signup';

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const name = String(formData.get('name'));
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));

  try {
    const { headers } = await auth.api.signUpEmail({
      request,
      headers: request.headers,
      returnHeaders: true,
      body: {
        name,
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

export const SignupPage = ({ actionData }: Route.ComponentProps) => {
  const error = actionData?.error;
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Form method="post" className="flex flex-col gap-6 max-w-md  w-full">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
        </div>
        <Input name="name" placeholder="John Doe" required />
        <Input name="email" type="email" placeholder="me@example.com" required />
        <Input name="password" type="password" required placeholder="password" />
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default SignupPage;
