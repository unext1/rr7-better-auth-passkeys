import { createCookie } from 'react-router';
import { env } from '~/services/env.server';

export const MINUTE = 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const YEAR = DAY * 365;

export const SESSION_MAX_AGE = WEEK;

export function cookie(name: string, maxAge: number = SESSION_MAX_AGE) {
  return createCookie(name, {
    path: '/',
    sameSite: 'lax',
    httpOnly: true,
    secrets: [env.SESSION_SECRET],
    secure: env.NODE_ENV === 'production',
    maxAge
  });
}

export const selectedOrgCookie = createCookie('selectedOrganization', {
  maxAge: YEAR
});
