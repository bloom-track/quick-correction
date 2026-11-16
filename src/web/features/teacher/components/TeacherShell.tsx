/**
 * TeacherShell — the signed-in teacher's frame, in the admin console's style:
 * a sidebar on wide screens and a floating tab bar on phones. Gated here, so
 * every page under /teacher inherits it: signed-out visitors go to sign-in,
 * teachers waiting for approval go to the holding page, anyone else goes to
 * their own home.
 */
import * as React from 'react';
import { Link, NavLink, Navigate, Outlet, useLocation, useMatch } from 'react-router-dom';
import { Loader2, Home, FileText, Users, ClipboardCheck, Sparkles, LogOut, type LucideIcon } from 'lucide-react';
import { LogoMark } from '@/shared/Logo';
import { ThemeControls } from '@/shared/ThemeControls';
import { brand } from '@/shared/brand';
import { api } from '@/shared/api';
import { useAuth } from '@/features/auth/hooks';
import { homeFor } from '@/features/auth/lib/home';

type Tab = { to: string; label: string; icon: LucideIcon; end: boolean };

const TABS: Tab[] = [
  { to: '/teacher', label: 'Home', icon: Home, end: true },
  { to: '/teacher/chat', label: 'Create', icon: Sparkles, end: false },
  { to: '/teacher/papers', label: 'Papers', icon: FileText, end: false },
  { to: '/teacher/students', label: 'Students', icon: Users, end: false },
  { to: '/teacher/review', label: 'Review', icon: ClipboardCheck, end: false },
];

function useReviewCount() {
  const [n, setN] = React.useState(0);
  const { pathname } = useLocation();
  React.useEffect(() => {
    api.get<{ submissions: unknown[] }>('/api/tutor/review').then((r) => setN(r.submissions.length)).catch(() => setN(0));
  }, [pathname]);
  return n;
}

export function TeacherLayoutRoute() {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div className="grid min-h-screen place-items-center"><Loader2 className="size-5 animate-spin text-muted-foreground" aria-label="Loading" /></div>;
  }
  if (!isAuthenticated) return <Navigate to="/auth/login" state={{ from: location }} replace />;
  if (user?.appRole !== 'teacher' || user.appStatus !== 'active') return <Navigate to={homeFor(user)} replace />;
  return <Shell name={user.name || user.email} />;
}

const initialsOf = (name: string) => {
  const parts = name.trim().split(/[\s@._-]+/).filter(Boolean);
  return ((parts[0]?.[0] ?? 'T') + (parts[1]?.[0] ?? '')).toUpperCase();
};

function Avatar({ name, className = '' }: { name: string; className?: string }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-primary/70 font-semibold text-primary-foreground ${className}`}>
      {initialsOf(name)}
    </span>
  );
}

function SideLink({ tab, badge }: { tab: Tab; badge?: number }) {
  const active = Boolean(useMatch({ path: tab.to, end: tab.end }));
  const Icon = tab.icon;
  return (
    <NavLink
      to={tab.to}
      end={tab.end}
      className={`group relative flex h-10 items-center gap-3 rounded-xl px-3 text-sm transition-colors ${active ? 'bg-primary/10 font-semibold text-primary' : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground'}`}
    >
      {active && <span aria-hidden className="absolute inset-y-2.5 -left-4 w-[3px] rounded-r-full bg-primary" />}
      <Icon className={`size-[18px] ${active ? 'text-primary' : 'text-sidebar-foreground/55 group-hover:text-sidebar-foreground'}`} />
      <span className="truncate">{tab.label}</span>
      {!!badge && <span className="ml-auto rounded-full bg-primary px-1.5 text-[11px] font-semibold text-primary-foreground">{badge}</span>}
    </NavLink>
  );
}

function TabItem({ tab, badge }: { tab: Tab; badge?: number }) {
  const active = Boolean(useMatch({ path: tab.to, end: tab.end }));
  const Icon = tab.icon;
  return (
    <NavLink
      to={tab.to}
      end={tab.end}
      className={`relative flex h-[52px] flex-1 flex-col items-center justify-center gap-0.5 rounded-[18px] text-[11px] font-semibold transition-colors ${active ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}
    >
      <Icon className="size-5" />
      {tab.label}
      {!!badge && <span className="absolute right-[22%] top-1 rounded-full bg-primary px-1.5 text-[10px] text-primary-foreground">{badge}</span>}
    </NavLink>
  );
}

function Shell({ name }: { name: string }) {
  const review = useReviewCount();
  const { pathname } = useLocation();
  const { logout } = useAuth();
  const chat = pathname.startsWith('/teacher/chat');

  return (
    <div className="flex min-h-screen bg-muted/40 text-foreground dark:bg-background">
      <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar lg:block">
        <div className="sticky top-0 flex h-screen flex-col">
          <Link to="/teacher" className="flex h-16 shrink-0 items-center gap-2.5 px-5">
            <LogoMark className="size-8 shrink-0" />
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-[15px] font-semibold tracking-tight text-sidebar-foreground">{brand.name}</span>
              <span className="block text-[11px] font-medium text-sidebar-foreground/50">Teacher</span>
            </span>
          </Link>
          <nav className="flex flex-1 flex-col gap-0.5 px-4 pb-3" aria-label="Teacher">
            {TABS.map((t) => <SideLink key={t.to} tab={t} badge={t.label === 'Review' ? review : undefined} />)}
          </nav>
          <div className="border-t border-sidebar-border p-3">
            <div className="flex items-center gap-3 rounded-xl px-2 py-1.5">
              <Avatar name={name} className="size-9 text-xs" />
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block truncate text-sm font-medium text-sidebar-foreground">{name}</span>
                <span className="block text-xs text-sidebar-foreground/50">Teacher</span>
              </span>
              <button onClick={() => logout()} aria-label="Sign out" className="grid size-8 shrink-0 cursor-pointer place-items-center rounded-lg text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground">
                <LogOut className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-2 border-b border-border/70 bg-background/80 px-4 backdrop-blur-md md:px-6">
          <Link to="/teacher" className="flex min-w-0 items-center gap-2 lg:hidden" aria-label={`${brand.name} home`}>
            <LogoMark className="size-8 shrink-0" />
            <span className="truncate text-[15px] font-semibold tracking-tight">{brand.name}</span>
          </Link>
          <div className="ml-auto flex items-center gap-1">
            <ThemeControls />
            <Avatar name={name} className="size-8 text-[11px] lg:hidden" />
            <button onClick={() => logout()} aria-label="Sign out" className="grid size-9 cursor-pointer place-items-center rounded-lg text-muted-foreground hover:bg-muted lg:hidden">
              <LogOut className="size-[18px]" />
            </button>
          </div>
        </header>

        <main className={`flex-1 px-4 py-6 md:px-8 md:py-8 ${chat ? 'pb-4' : ''} pb-32 lg:pb-8`}>
          <div className="mx-auto w-full max-w-6xl"><Outlet /></div>
        </main>

        <nav
          aria-label="Teacher"
          className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 flex h-[66px] items-center gap-1 rounded-[26px] border border-white/60 bg-background/85 px-2 shadow-[0_16px_34px_-12px_rgba(15,23,51,0.3)] backdrop-blur-xl dark:border-border lg:hidden"
        >
          {TABS.map((t) => <TabItem key={t.to} tab={t} badge={t.label === 'Review' ? review : undefined} />)}
        </nav>
      </div>
    </div>
  );
}
