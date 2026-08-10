"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Bell } from "lucide-react";
import { useTranslations } from "next-intl";
import { DashboardButton } from "@/components/shared/DashboardButton";
import { SignInButton } from "@/components/shared/SignInButton";
import { BookDemoButton } from "@/components/shared/BookDemoButton";
import { LocaleSwitcher } from "@/components/auth/LocaleSwitcher";
import { UserProfileDropdown } from "@/components/UserProfileDropdown";
import { useUserProfile } from "@/hooks/useUserProfile";
import { cn } from "@/components/ui/utils";
import { createClient } from "@ritepath/lib/supabase-browser";
import { ROUTES } from "@/constants/app";
import { useProfileStore } from "@/store/useProfileStore";
import { useStaffStore } from "@/store/useStaffStore";

interface AuthButtonsProps {
  className?: string;
  onBookDemo?: () => void;
}

interface NavigationLinksProps {
  className?: string;
  itemClassName?: string;
}

const NavigationLinks = ({
  className = "",
  itemClassName = "",
}: NavigationLinksProps) => {
  const t = useTranslations("landing.nav");
  const items = (t.raw("items") as string[]) || ["Solutions", "How It Works", "Product", "Pricing"];
  return (
    <div className={cn("flex items-center gap-6", className)}>
      {items.map((label) => (
        <a
          key={label}
          href="#"
          className={cn(
            "text-sm font-semibold text-slate-800 transition-all duration-200 hover:text-[#1aabe2]",
            itemClassName,
          )}
        >
          {label}
        </a>
      ))}
    </div>
  );
};

const MobileSignOutLink = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations("landing.nav");
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    if (isSigningOut) return;

    setIsSigningOut(true);
    onClose();

    try {
      const supabase = createClient();
      await supabase.auth.signOut();

      useProfileStore.getState().reset();
      useStaffStore.getState().reset();
      try {
        window.localStorage.removeItem("rite-path-profile-storage");
      } catch {}
      try {
        window.localStorage.removeItem("staff-storage");
      } catch {}

      window.location.assign(ROUTES.HOME);
    } catch (error) {
      console.error("Logout failed:", error);
      setIsSigningOut(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={isSigningOut}
      className="block w-full text-left text-sm font-medium text-slate-800 transition-all duration-200 hover:text-[#1aabe2] disabled:opacity-50"
      aria-label={t("signOutAria")}
    >
      {isSigningOut ? t("signingOut") : t("signOut")}
    </button>
  );
};

const AuthButtons = ({ className = "", onBookDemo }: AuthButtonsProps) => {
  const { userProfile, isAuthenticated, isLoading } = useUserProfile();

  if (isLoading) return null;

  if (isAuthenticated && userProfile) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <DashboardButton className="rounded-lg" />
        <UserProfileDropdown userProfile={userProfile} />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <BookDemoButton onClick={onBookDemo} className="rounded-lg font-semibold">
        Book a Demo
      </BookDemoButton>
      <SignInButton className="rounded-lg font-semibold bg-[#1aabe2] text-white hover:bg-[#1596c7]">
        Partner Portal
      </SignInButton>
    </div>
  );
};

interface LandingHeaderProps {
  onBookDemo?: () => void;
}

export const LandingHeader = ({ onBookDemo }: LandingHeaderProps) => {
  const t = useTranslations("landing.nav");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useUserProfile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 h-20",
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
          : "bg-transparent backdrop-blur-none border-b-0 border-transparent shadow-none",
      )}
    >
      <div className="h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
        <div className="h-full flex items-center justify-between">
          {/* Logo - Always visible using Headerlogo3.webp */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logos/Headerlogo3.webp"
                alt="RitePath Logo"
                width={200}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                priority
                quality={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered with crisp black text */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 items-center">
            {/* <NavigationLinks itemClassName="text-slate-900 hover:text-[#1aabe2]" /> */}
          </nav>

          {/* CTA / User Profile - Square buttons for Partner Portal and Book Demo */}
          <div className="relative hidden md:inline-flex items-center gap-3 group shrink-0 ml-auto">
            <LocaleSwitcher />
            {isAuthenticated && (
              <button
                type="button"
                className="relative p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#1aabe2]"
                title={t("notifications")}
                aria-label={t("notifications")}
              >
                <Bell className="w-5 h-5" aria-hidden="true" />
                <span
                  className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"
                  aria-hidden="true"
                />
              </button>
            )}
            <AuthButtons onBookDemo={onBookDemo} />
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex md:hidden items-center gap-3">
            {isAuthenticated ? (
              <DashboardButton className="rounded-lg" />
            ) : (
              <SignInButton className="px-3.5 py-2 text-xs rounded-lg">
                Partner Portal
              </SignInButton>
            )}
            <button
              type="button"
              className="text-slate-900 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-2xl border border-slate-200 p-6 shadow-xl space-y-6">
            <NavigationLinks itemClassName="block text-slate-900" />
            <LocaleSwitcher />
            {isAuthenticated && (
              <div className="border-t border-slate-200 pt-4">
                <MobileSignOutLink onClose={() => setMobileMenuOpen(false)} />
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
};
