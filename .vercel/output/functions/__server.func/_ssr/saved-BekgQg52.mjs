import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/saved-BekgQg52.js
var useSaved = create()(persist((set, get) => ({
	slugs: [],
	has: (slug) => get().slugs.includes(slug),
	toggle: (slug) => set((s) => ({ slugs: s.slugs.includes(slug) ? s.slugs.filter((x) => x !== slug) : [...s.slugs, slug] }))
}), {
	name: "ai-dictionary-saved",
	partialize: (s) => ({ slugs: s.slugs })
}));
//#endregion
export { useSaved as t };
