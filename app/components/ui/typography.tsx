import type { HTMLAttributes } from 'react';
import { cn } from '~/utils';

export function H1({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)} {...props}>
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)} {...props}>
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)} {...props}>
      {children}
    </h3>
  );
}

export function H4({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={cn('scroll-m-20 text-lg font-semibold tracking-tight', className)} {...props}>
      {children}
    </h4>
  );
}

export function P({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('leading-7', className)} {...props}>
      {children}
    </p>
  );
}

export function List({ children, className, ...props }: HTMLAttributes<HTMLDListElement>) {
  return (
    <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)} {...props}>
      {children}
    </ul>
  );
}

export function Large({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('text-lg font-semibold', className)} {...props}>
      {children}
    </div>
  );
}

export function Small({ children, className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <small className={cn('text-sm font-medium leading-none', className)} {...props}>
      {children}
    </small>
  );
}

export function Muted({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn('text-sm text-muted-foreground', className)} {...props}>
      {children}
    </p>
  );
}
