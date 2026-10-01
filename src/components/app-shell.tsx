"use client";

import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bookmark, Layers, Library, Milestone } from "lucide-react";
import { Container } from "@/components/container";
import { CommandSearch } from "@/components/command-search";
import { SearchTrigger } from "@/components/search-trigger";
import { META } from "@/lib/glossary";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/browse", label: "Browse" },
  { to: "/levels", label: "Scale" },
  { to: "/az", label: "A–Z" },
  { to: "/saved", label: "Saved" },
  { to: "/about", label: "About" },
] as const;

const MOBILE_NAV = [
  { to: "/", label: "Home", icon: Library, exact: true },
  { to: "/browse", label: "Browse", icon: Layers, exact: false },
  { to: "/levels", label: "Scale", icon: Milestone, exact: false },
  { to: "/saved", label: "Saved", icon: Bookmark, exact: false },
] as const;

function isActive(pathname: string, to: string, exact?: boolean) {
  if (exact || to === "/") return pathname === to;
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
        <Container className="flex h-16 items-center gap-4">
          <Link to="/" className="group flex min-w-0 items-baseline gap-2">
            <span className="font-display text-lg font-medium tracking-tight text-fg">AI</span>
            <span className="truncate text-sm tracking-wide text-muted uppercase">Dictionary</span>
          </Link>
          <nav className="ml-4 hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-sm px-3 py-2 text-sm transition-colors duration-150",
                  isActive(pathname, item.to) ? "text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto">
            <SearchTrigger />
          </div>
        </Container>
      </header>
      <main id="main" className="flex-1 pb-24 lg:pb-0">
        {children}
      </main>
      <footer className="hidden border-t border-border py-10 lg:block">
        <Container className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-base text-fg">The AI Dictionary</p>
            <p className="mt-1 max-w-lg leading-relaxed">
              Version {META.version} · {META.termCount} terms · a living reference, not a permanent canon.
            </p>
          </div>
          <div className="flex gap-4">
            <Link to="/about" className="hover:text-fg">
              About
            </Link>
            <Link to="/az" className="hover:text-fg">
              A–Z
            </Link>
            <Link to="/levels" className="hover:text-fg">
              Scale
            </Link>
          </div>
        </Container>
      </footer>
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
      >
        <ul className="grid grid-cols-4">
          {MOBILE_NAV.map((item) => {
            const Icon = item.icon;
            const active = isActive(pathname, item.to, item.exact);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={cn(
                    "flex h-16 flex-col items-center justify-center gap-1 text-xs",
                    active ? "text-fg" : "text-muted",
                  )}
                >
                  <Icon className="size-5" strokeWidth={1.5} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <CommandSearch />
    </div>
  );
}
