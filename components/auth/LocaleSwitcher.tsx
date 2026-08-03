'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';

export const LocaleSwitcher = () => {
  const [locale, setLocale] = useState('en');

  return (
    <div className="relative inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200 transition-colors">
      <Globe className="w-3.5 h-3.5 text-slate-500" />
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value)}
        className="bg-transparent text-xs font-medium text-slate-700 focus:outline-none cursor-pointer pr-1"
        aria-label="Select language"
      >
        <option value="en">English (EN)</option>
        <option value="es">Español (ES)</option>
      </select>
    </div>
  );
};
