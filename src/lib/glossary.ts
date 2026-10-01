import glossary from "@/data/glossary.json";
import {
  CATEGORIES,
  CATEGORY_BY_ID,
  type CategoryId,
  type LayerId,
} from "@/data/taxonomy";

export type TermStatus =
  | "debated"
  | "hypothetical"
  | "informal"
  | "vendor-specific"
  | "historical"
  | "emerging";

export interface Term {
  slug: string;
  term: string;
  definition: string;
  category: CategoryId;
  status: TermStatus[];
  aliases: string[];
  related: string[];
}

interface GlossaryFile {
  title: string;
  subtitle: string;
  version: string;
  compiled: string;
  termCount: number;
  terms: Term[];
}

const data = glossary as GlossaryFile;

export const META = {
  title: data.title,
  subtitle: data.subtitle,
  version: data.version,
  compiled: data.compiled,
  termCount: data.terms.length,
};

export const TERMS: Term[] = data.terms;

const BY_SLUG = new Map(TERMS.map((t) => [t.slug, t]));

export const FEATURED_SLUGS = [
  "ai",
  "model-vs-ai-system",
  "foundation-model",
  "llm",
  "agent",
  "rag",
  "hallucination",
  "alignment",
  "model-context-protocol",
  "chain-of-thought",
  "world-model",
  "speculative-decoding",
] as const;

export const FEATURED_TERMS: Term[] = FEATURED_SLUGS.map((s) => BY_SLUG.get(s)).filter(
  (t): t is Term => Boolean(t),
);

export const CATEGORY_COUNTS = TERMS.reduce(
  (acc, t) => {
    acc[t.category] = (acc[t.category] ?? 0) + 1;
    return acc;
  },
  {} as Record<CategoryId, number>,
);

export const LAYER_COUNTS = CATEGORIES.reduce(
  (acc, c) => {
    acc[c.layer] = (acc[c.layer] ?? 0) + (CATEGORY_COUNTS[c.id] ?? 0);
    return acc;
  },
  {} as Record<LayerId, number>,
);

export function getTerm(slug: string): Term | undefined {
  return BY_SLUG.get(slug);
}

export function termsInCategory(id: CategoryId): Term[] {
  return TERMS.filter((t) => t.category === id).sort((a, b) => a.term.localeCompare(b.term));
}

export function termsInLayer(id: LayerId): Term[] {
  const cats = new Set(CATEGORIES.filter((c) => c.layer === id).map((c) => c.id));
  return TERMS.filter((t) => cats.has(t.category)).sort((a, b) => a.term.localeCompare(b.term));
}

export function relatedTerms(term: Term, limit = 8): Term[] {
  const seen = new Set<string>([term.slug]);
  const out: Term[] = [];
  const push = (t: Term | undefined) => {
    if (!t || seen.has(t.slug)) return;
    seen.add(t.slug);
    out.push(t);
  };

  for (const slug of term.related) push(BY_SLUG.get(slug));
  if (out.length < limit) {
    for (const other of TERMS) {
      if (other.related.includes(term.slug)) push(other);
      if (out.length >= limit) break;
    }
  }
  if (out.length < limit) {
    for (const other of TERMS) {
      if (other.category === term.category) push(other);
      if (out.length >= limit) break;
    }
  }
  return out.slice(0, limit);
}

export function letterOf(term: Term): string {
  const ch = term.term.replace(/^\W+/, "").charAt(0).toUpperCase();
  return /[A-Z]/.test(ch) ? ch : "#";
}

export function termsByLetter(): Map<string, Term[]> {
  const map = new Map<string, Term[]>();
  const sorted = [...TERMS].sort((a, b) => a.term.localeCompare(b.term));
  for (const t of sorted) {
    const L = letterOf(t);
    const arr = map.get(L) ?? [];
    arr.push(t);
    map.set(L, arr);
  }
  return map;
}

export function categoryOf(term: Term) {
  return CATEGORY_BY_ID[term.category];
}

function scoreTerm(term: Term, q: string): number {
  const query = q.trim().toLowerCase();
  if (!query) return 0;
  const name = term.term.toLowerCase();
  const slug = term.slug.toLowerCase();
  if (name === query || slug === query) return 100;
  if (term.aliases.some((a) => a.toLowerCase() === query)) return 95;
  if (name.startsWith(query)) return 80;
  if (slug.startsWith(query)) return 75;
  if (term.aliases.some((a) => a.toLowerCase().startsWith(query))) return 70;
  if (name.includes(query)) return 55;
  if (term.aliases.some((a) => a.toLowerCase().includes(query))) return 50;
  if (term.definition.toLowerCase().includes(query)) return 20;
  const parts = query.split(/\s+/).filter(Boolean);
  if (parts.length > 1 && parts.every((p) => (name + " " + term.definition).includes(p))) {
    return 18;
  }
  return 0;
}

export function searchTerms(q: string, limit = 40): Term[] {
  const query = q.trim();
  if (!query) return [];
  return TERMS.map((t) => ({ t, s: scoreTerm(t, query) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.t.term.localeCompare(b.t.term))
    .slice(0, limit)
    .map((x) => x.t);
}

export const STATUS_LABEL: Record<TermStatus, string> = {
  debated: "Debated",
  hypothetical: "Hypothetical",
  informal: "Informal",
  "vendor-specific": "Vendor-specific",
  historical: "Historical",
  emerging: "Emerging",
};

export const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "#",
] as const;
