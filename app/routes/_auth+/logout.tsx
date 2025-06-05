import { href, redirect } from 'react-router';

import { auth } from '~/services/auth.server';
import type { Route } from './+types/logout';

export const loader = (_: Route.LoaderArgs) => {
  return redirect(href('/signin'));
};

export const action = async ({ request }: Route.ActionArgs) => {
  const { headers } = await auth.api.signOut({
    request,
    headers: request.headers,
    returnHeaders: true
  });
  return redirect(href('/signin'), { headers });
};
