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
        'inline-flex items-center justify-center !px-6 !py-2.5 text-sm font-medium text-slate-700 !bg-white !border !border-slate-200 rounded-full hover:!bg-slate-50 transition-all',
        className
      )}
    >
      Sign In
    </Link>
  );
};
