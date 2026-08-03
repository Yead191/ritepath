'use client';

import Link from 'next/link';
import { cn } from '@/components/ui/utils';
import { ROUTES } from '@/constants/app';

interface SignInButtonProps {
  className?: string;
}

export const SignInButton = ({ className }: SignInButtonProps) => {
  return (
    <Link
      href={ROUTES.SIGN_IN}
      className={cn(
        'inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 transition-all',
        className
      )}
    >
      Sign In
    </Link>
  );
};
