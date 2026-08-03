'use client';

import { cn } from '@/components/ui/utils';

interface ViewDemoButtonProps {
  className?: string;
  onClick?: () => void;
}

export const ViewDemoButton = ({ className, onClick }: ViewDemoButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-[#1aabe2] rounded-full hover:bg-[#158dbb] transition-all shadow-md hover:shadow-lg',
        className
      )}
    >
      View Live Demo
    </button>
  );
};
