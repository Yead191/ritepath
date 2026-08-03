'use client';

import { useState } from 'react';
import { LogOut, Settings } from 'lucide-react';
import { UserProfile } from '@/hooks/useUserProfile';

interface UserProfileDropdownProps {
  userProfile: UserProfile;
}

export const UserProfileDropdown = ({ userProfile }: UserProfileDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 p-1.5 rounded-full hover:bg-slate-100 transition-colors focus:outline-none"
      >
        <div className="w-8 h-8 rounded-full bg-[#1aabe2] flex items-center justify-center text-white font-bold text-sm">
          {userProfile.name?.[0] || 'U'}
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-1 z-50">
          <div className="px-4 py-2 border-b border-slate-100">
            <p className="text-sm font-semibold text-slate-800">{userProfile.name || 'User'}</p>
            <p className="text-xs text-slate-500 truncate">{userProfile.email}</p>
          </div>
          <a
            href="/settings"
            className="flex items-center gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              window.location.assign('/');
            }}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg text-left"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
};
