"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface SearchContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearchPalette() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearchPalette must be used within SearchProvider");
  return ctx;
}
