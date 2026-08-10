'use client';

import Link from 'next/link';
import { cn } from '@/components/ui/utils';
import { ROUTES } from '@/constants/app';

interface SignInButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export const SignInButton = ({ className, children }: SignInButtonProps) => {
  return (
    <Link
      href={ROUTES.SIGN_IN}
      className={cn(
        'inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#1aabe2] hover:bg-[#1596c7] rounded-lg transition-all shadow-sm hover:shadow-md border border-[#1aabe2]',
        className
      )}
    >
      {children || 'Partner Portal'}
    </Link>
  );
};
