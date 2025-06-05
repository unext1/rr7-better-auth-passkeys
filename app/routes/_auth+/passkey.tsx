import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';
import { Form, href, redirect } from 'react-router';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { authClient } from '~/services/auth.client';
import { auth, isLoggedIn } from '~/services/auth.server';
import type { Route } from './+types/passkey';

export const loader = async ({ request }: Route.LoaderArgs) => {
  const session = await isLoggedIn({ request });
  if (!session) {
    return redirect('/signin');
  }
  const passkeys = await auth.api.listPasskeys({
    headers: request.headers
  });

  return { hasPassKey: passkeys.length > 0 };
};

const Passkey = ({ loaderData }: Route.ComponentProps) => {
  const handlePasskeySignIn = async () => {
    await authClient.passkey.addPasskey({
      fetchOptions: {
        onSuccess: () => {
          // eslint-disable-next-line no-alert
          alert('Passkey added');
        }
      }
    });
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-background to-background/80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Add Passkey Authentication</CardTitle>
          <CardDescription>Add Passkey Authentication to your account</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {loaderData.hasPassKey ? (
            <p className="text-sm ">You already have a passkey. You can sign in with it.</p>
          ) : (
            <Button onClick={() => void handlePasskeySignIn()}>Add PassKey</Button>
          )}
        </CardContent>

        <CardFooter className="flex flex-col text-sm text-muted-foreground">
          <p>Passkeys let you sign in with your fingerprint, face, or screen lock instead of passwords.</p>
        </CardFooter>
      </Card>
      <Form method="post" action={href('/logout')}>
        <Button type="submit" size="sm" variant="outline" className="w-full justify-start mt-4">
          <LogOut />
          Log out
        </Button>
      </Form>
    </motion.div>
  );
};

export default Passkey;
