'use client';

import { ReactNode } from 'react';
import { cn } from '@/components/ui/utils';

interface PillProps {
  children: ReactNode;
  className?: string;
}

export const Pill = ({ children, className }: PillProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-100 text-[#1aabe2]',
        className
      )}
    >
      {children}
    </span>
  );
};
