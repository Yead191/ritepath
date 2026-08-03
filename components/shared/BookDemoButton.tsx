'use client';

import { cn } from '@/components/ui/utils';

interface BookDemoButtonProps {
  className?: string;
  onClick?: () => void;
}

export const BookDemoButton = ({ className, onClick }: BookDemoButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#1aabe2] rounded-full hover:bg-[#158dbb] transition-all shadow-sm hover:shadow-md',
        className
      )}
    >
      Book a Demo
    </button>
  );
};
