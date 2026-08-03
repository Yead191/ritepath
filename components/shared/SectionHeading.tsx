'use client';

import { cn } from '@/components/ui/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  center = false,
  light = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn('mb-12 sm:mb-16', center && 'text-center', className)}>
      <h2
        className={cn(
          'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4',
          light ? 'text-slate-900' : 'text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed',
            light ? 'text-slate-600' : 'text-slate-300'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
