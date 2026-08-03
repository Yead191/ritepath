'use client';

import Link from 'next/link';
import { LayoutDashboard } from 'lucide-react';
import { cn } from '@/components/ui/utils';
import { ROUTES } from '@/constants/app';

interface DashboardButtonProps {
  className?: string;
}

export const DashboardButton = ({ className }: DashboardButtonProps) => {
  return (
    <Link
      href={ROUTES.DASHBOARD}
      className={cn(
        'inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#1aabe2] rounded-full hover:bg-[#158dbb] transition-all shadow-sm hover:shadow-md',
        className
      )}
    >
      <LayoutDashboard className="w-4 h-4" />
      <span>Dashboard</span>
    </Link>
  );
};
