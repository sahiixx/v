"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useSearchPalette } from "@/components/search-context";
import { META } from "@/lib/glossary";
import { cn } from "@/lib/utils";

export function SearchTrigger({
  size = "header",
  className,
}: {
  size?: "header" | "hero";
  className?: string;
}) {
  const { setOpen } = useSearchPalette();
  const [mod, setMod] = useState("Ctrl");
  useEffect(() => {
    setMod(/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl");
  }, []);

  if (size === "hero") {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "pressable flex h-14 w-full items-center gap-3 rounded-lg bg-bg-elevated px-4 text-left shadow-hairline hover:shadow-hairline-hover",
          className,
        )}
      >
        <Search className="size-5 text-subtle" />
        <span className="flex-1 text-base text-subtle">Search {META.termCount} terms</span>
        <kbd className="hidden rounded-xs bg-bg-subtle px-2 py-1 font-mono text-xs text-muted shadow-hairline sm:inline-block">
          {mod}K
        </kbd>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-label="Search"
      className={cn(
        "pressable inline-flex h-11 items-center gap-2 rounded-sm px-3 text-sm text-muted shadow-hairline hover:bg-bg-subtle hover:text-fg hover:shadow-hairline-hover",
        className,
      )}
    >
      <Search className="size-4" />
      <span className="hidden sm:inline">Search</span>
      <kbd className="hidden rounded-xs bg-bg-subtle px-1.5 py-0.5 font-mono text-xs text-subtle md:inline-block">
        {mod}K
      </kbd>
    </button>
  );
}
