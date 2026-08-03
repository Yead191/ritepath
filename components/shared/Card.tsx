'use client';

import { ReactNode } from 'react';
import { cn } from '@/components/ui/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-slate-100 shadow-md p-6 overflow-hidden transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  );
};
