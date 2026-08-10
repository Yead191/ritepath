'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Bell } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { DashboardButton } from '@/components/shared/DashboardButton';
import { SignInButton } from '@/components/shared/SignInButton';
import { BookDemoButton } from '@/components/shared/BookDemoButton';
import { LocaleSwitcher } from '@/components/auth/LocaleSwitcher';
import { UserProfileDropdown } from '@/components/UserProfileDropdown';
import { useUserProfile } from '@/hooks/useUserProfile';
import { cn } from '@/components/ui/utils';
import { createClient } from '@ritepath/lib/supabase-browser';
import { ROUTES } from '@/constants/app';
import { useProfileStore } from '@/store/useProfileStore';
import { useStaffStore } from '@/store/useStaffStore';

interface AuthButtonsProps {
  className?: string;
  onBookDemo?: () => void;
}

interface NavigationLinksProps {
  className?: string;
  itemClassName?: string;
}

const NavigationLinks = ({ className = "", itemClassName = "" }: NavigationLinksProps) => {
  const t = useTranslations('landing.nav');
  const items = t.raw('items') as string[];
  return (
    <>
      {items.map((label) => (
        <a
          key={label}
          href="#"
          className={cn(
            "text-base text-slate-700 transition-all duration-200 hover:text-slate-900",
            itemClassName
          )}
        >
          {label}
        </a>
      ))}
    </>
  );
};

const MobileSignOutLink = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('landing.nav');
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    if (isSigningOut) return;

    setIsSigningOut(true);
    onClose();

    try {
      const supabase = createClient();
      await supabase.auth.signOut();

      // SECURITY (Phase 13.1 — cross-tenant bleed fix): mirror the
      // UserProfileDropdown logout. Wipe the in-memory profile + staff/vendor
      // stores and defensively remove any legacy persisted blobs so no identity
      // or vendor PII survives into the next user's session on a shared browser.
      useProfileStore.getState().reset();
      useStaffStore.getState().reset();
      try {
        window.localStorage.removeItem('rite-path-profile-storage');
      } catch {
        // localStorage unavailable (SSR/private mode) — nothing to clear.
      }
      try {
        window.localStorage.removeItem('staff-storage');
      } catch {
        // localStorage unavailable (SSR/private mode) — nothing to clear.
      }

      window.location.assign(ROUTES.HOME);
    } catch (error) {
      console.error('Logout failed:', error);
      setIsSigningOut(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={isSigningOut}
      className="block w-full text-left text-base text-slate-700 transition-all duration-200 hover:text-slate-900 disabled:opacity-50"
      aria-label={t('signOutAria')}
    >
      {isSigningOut ? t('signingOut') : t('signOut')}
    </button>
  );
};

const AuthButtons = ({ className = "", onBookDemo }: AuthButtonsProps) => {
  const { userProfile, isAuthenticated, isLoading } = useUserProfile();
  
  if (isLoading) return null;
  
  if (isAuthenticated && userProfile) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <DashboardButton />
        <UserProfileDropdown userProfile={userProfile} />
      </div>
    );
  }
  
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <BookDemoButton onClick={onBookDemo} />
      <SignInButton />
    </div>
  );
};

interface LandingHeaderProps {
  onBookDemo?: () => void;
}

export const LandingHeader = ({ onBookDemo }: LandingHeaderProps) => {
  const t = useTranslations('landing.nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useUserProfile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm",
      "h-16 min-h-[64px] transition-all duration-200",
      isScrolled && "h-20 min-h-[80px] border-b border-gray-200 shadow-sm",
      !isScrolled && "shadow-none"
    )}>
      <div className="h-full px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 relative">
        <div className="h-full flex items-center">
          {/* Logo */}
          <div className="shrink-0 ml-6 sm:ml-8 lg:ml-12">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/logos/Headerlogo3.webp" 
                alt={t('logoAlt')}
                width={200} 
                height={48}
                className="h-10 md:h-16 w-auto object-contain"
                priority
                quality={100}
                unoptimized={false}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden ml-auto items-center gap-3">
            {isAuthenticated ? (
              <DashboardButton />
            ) : (
              <SignInButton className="px-4 py-2 text-sm" />
            )}
            <button
              type="button"
              className="text-black"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 lg:space-x-12 items-center">
            <NavigationLinks />
          </nav>

          {/* CTA / User Profile */}
          <div className="relative hidden md:inline-flex items-center gap-3 group shrink-0 ml-auto">
            <LocaleSwitcher />
            {isAuthenticated && (
              <button
                type="button"
                className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#1aabe2] focus:ring-offset-2"
                title={t('notifications')}
                aria-label={t('notifications')}
              >
                <Bell className="w-5 h-5" aria-hidden="true" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" aria-hidden="true" />
              </button>
            )}
            <AuthButtons onBookDemo={onBookDemo} />
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 bg-white backdrop-blur-lg rounded-2xl border border-slate-200 p-6 shadow-xl">
            <div className="flex flex-col space-y-6">
              <NavigationLinks itemClassName="block" />
              <LocaleSwitcher />
              {isAuthenticated && (
                <div className="border-t border-slate-200 pt-6">
                  <MobileSignOutLink onClose={() => setMobileMenuOpen(false)} />
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

