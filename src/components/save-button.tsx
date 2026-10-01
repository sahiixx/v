"use client";

import { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSaved } from "@/lib/saved";
import { cn } from "@/lib/utils";

export function SaveButton({ slug, className }: { slug: string; className?: string }) {
  const stored = useSaved((s) => s.slugs.includes(slug));
  const toggle = useSaved((s) => s.toggle);
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const saved = ready && stored;

  return (
    <Button
      type="button"
      variant={saved ? "secondary" : "outline"}
      className={cn(className)}
      onClick={() => toggle(slug)}
      aria-pressed={saved}
    >
      {saved ? <BookmarkCheck /> : <Bookmark />}
      {saved ? "Saved" : "Save"}
    </Button>
  );
}
