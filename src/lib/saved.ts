import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SavedState {
  slugs: string[];
  toggle: (slug: string) => void;
  has: (slug: string) => boolean;
}

export const useSaved = create<SavedState>()(
  persist(
    (set, get) => ({
      slugs: [],
      has: (slug) => get().slugs.includes(slug),
      toggle: (slug) =>
        set((s) => ({
          slugs: s.slugs.includes(slug) ? s.slugs.filter((x) => x !== slug) : [...s.slugs, slug],
        })),
    }),
    {
      name: "ai-dictionary-saved",
      partialize: (s) => ({ slugs: s.slugs }),
    },
  ),
);
