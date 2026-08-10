'use client';

import { cn } from '@/components/ui/utils';

interface BookDemoButtonProps {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const BookDemoButton = ({ className, onClick, children }: BookDemoButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 rounded-lg transition-all shadow-sm',
        className
      )}
    >
      {children || 'Book a Demo'}
    </button>
  );
};
