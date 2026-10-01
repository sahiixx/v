"use client";

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useSearchPalette } from "@/components/search-context";
import { FEATURED_TERMS, META, searchTerms } from "@/lib/glossary";
import { CATEGORY_BY_ID } from "@/data/taxonomy";

export function CommandSearch() {
  const { open, setOpen } = useSearchPalette();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const results = useMemo(() => {
    if (!query.trim()) return FEATURED_TERMS;
    return searchTerms(query, 20);
  }, [query]);

  function go(slug: string) {
    setOpen(false);
    void navigate({ to: "/term/$slug", params: { slug } });
  }

  function seeAll() {
    const q = query.trim();
    setOpen(false);
    void navigate({ to: "/search", search: { q } });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent showClose={false} className="overflow-hidden p-0 sm:top-28">
        <DialogTitle className="sr-only">Search the dictionary</DialogTitle>
        <Command shouldFilter={false} className="bg-transparent" label="Search the dictionary">
          <div className="flex items-center gap-3 border-b border-border px-4">
            <Search className="size-4 text-subtle" />
            <Command.Input
              value={query}
              onValueChange={setQuery}
              placeholder={`Search ${META.termCount} terms`}
              className="h-14 w-full bg-transparent text-base text-fg outline-none placeholder:text-subtle"
            />
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-8 text-center text-sm text-muted">
              No matching terms. Try a shorter query, or browse by category.
            </Command.Empty>
            <Command.Group heading={query.trim() ? "Results" : "Start here"}>
              {results.map((term) => (
                <Command.Item
                  key={term.slug}
                  value={term.slug}
                  keywords={[term.term, ...term.aliases]}
                  onSelect={() => go(term.slug)}
                  className="flex cursor-pointer items-baseline justify-between gap-3 rounded-sm px-3 py-2.5 text-sm data-[selected=true]:bg-bg-subtle"
                >
                  <span className="font-medium text-fg">{term.term}</span>
                  <span className="shrink-0 font-mono text-xs text-subtle uppercase">
                    {CATEGORY_BY_ID[term.category].name}
                  </span>
                </Command.Item>
              ))}
            </Command.Group>
            {query.trim() ? (
              <Command.Item
                value="__see-all"
                onSelect={seeAll}
                className="mt-1 cursor-pointer rounded-sm px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-bg-subtle data-[selected=true]:text-fg"
              >
                See all matches for “{query.trim()}”
              </Command.Item>
            ) : null}
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
