export type LayerId = "foundations" | "systems" | "reliability" | "deployment";

export type CategoryId =
  | "core"
  | "types"
  | "mechanics"
  | "math"
  | "symbolic"
  | "classical-ml"
  | "probabilistic"
  | "neural"
  | "representation"
  | "training"
  | "nlp"
  | "vision"
  | "multimodal"
  | "rl"
  | "search"
  | "retrieval"
  | "architectures"
  | "training-systems"
  | "inference"
  | "robotics"
  | "evaluation"
  | "alignment"
  | "security"
  | "data-eng"
  | "agents"
  | "mlops"
  | "economics"
  | "governance"
  | "labs"
  | "history"
  | "culture"
  | "frontier";

export interface Layer {
  id: LayerId;
  name: string;
  blurb: string;
}

export interface Category {
  id: CategoryId;
  name: string;
  layer: LayerId;
  blurb: string;
}

export const LAYERS: Layer[] = [
  {
    id: "foundations",
    name: "Foundations",
    blurb: "What intelligence, learning, and models actually are — plus the math and classical methods underneath.",
  },
  {
    id: "systems",
    name: "Systems",
    blurb: "Architectures and stacks that turn models into working language, vision, retrieval, agent, and robot systems.",
  },
  {
    id: "reliability",
    name: "Reliability",
    blurb: "How we measure, align, secure, and ground systems that remain uneven and fallible.",
  },
  {
    id: "deployment",
    name: "Deployment & society",
    blurb: "Shipping, governing, paying for, and arguing about AI as a product and a public force.",
  },
];

export const CATEGORIES: Category[] = [
  { id: "core", name: "Core concepts", layer: "foundations", blurb: "AI, AGI, models versus systems, and the learning families." },
  { id: "types", name: "Model types", layer: "foundations", blurb: "LLMs, transformers, diffusion, MoE, and related families." },
  { id: "mechanics", name: "Model mechanics", layer: "foundations", blurb: "Tokens, attention, sampling, loss, and inference knobs." },
  { id: "math", name: "Math & optimization", layer: "foundations", blurb: "Losses, gradients, information theory, and optimizers." },
  { id: "symbolic", name: "Classical symbolic AI", layer: "foundations", blurb: "Rules, knowledge bases, ontologies, and expert systems." },
  { id: "classical-ml", name: "Classical ML", layer: "foundations", blurb: "Trees, SVMs, boosting, and statistical workhorses." },
  { id: "probabilistic", name: "Probabilistic models", layer: "foundations", blurb: "Bayes, HMMs, MDPs, and structured uncertainty." },
  { id: "neural", name: "Neural networks", layer: "foundations", blurb: "From perceptrons to residual and convolutional nets." },
  { id: "representation", name: "Representation learning", layer: "foundations", blurb: "Embeddings, latents, contrastive and self-supervised methods." },
  { id: "training", name: "Training & adaptation", layer: "foundations", blurb: "Pre-training, SFT, preference optimization, scaling." },
  { id: "nlp", name: "Natural language", layer: "systems", blurb: "Tokenizers, embeddings, language modeling, and prompting." },
  { id: "vision", name: "Computer vision", layer: "systems", blurb: "Detection, segmentation, OCR, and visual architectures." },
  { id: "multimodal", name: "Multimodal AI", layer: "systems", blurb: "Image, audio, video, and joint embedding systems." },
  { id: "rl", name: "Reinforcement learning", layer: "systems", blurb: "Policies, values, exploration, and reward design." },
  { id: "search", name: "Search & planning", layer: "systems", blurb: "A*, minimax, MCTS, and classical planners." },
  { id: "retrieval", name: "Retrieval & memory", layer: "systems", blurb: "RAG, vector search, grounding, and memory." },
  { id: "architectures", name: "Architectures", layer: "systems", blurb: "Attention variants, caches, and efficient building blocks." },
  { id: "training-systems", name: "Training systems", layer: "systems", blurb: "Parallelism, sharding, adapters, and run stability." },
  { id: "inference", name: "Inference & serving", layer: "systems", blurb: "Latency, batching, speculative decoding, accelerators." },
  { id: "robotics", name: "Robotics & embodiment", layer: "systems", blurb: "Sim-to-real, VLAs, teleoperation, physical agents." },
  { id: "evaluation", name: "Evaluation", layer: "reliability", blurb: "Benchmarks, Elo, contamination, and behavioral failure modes." },
  { id: "alignment", name: "Alignment & safety", layer: "reliability", blurb: "Preferences, interpretability, jailbreaks, contested failure modes." },
  { id: "security", name: "Security", layer: "reliability", blurb: "Prompt injection, poisoning, privacy, and adversarial inputs." },
  { id: "data-eng", name: "Data engineering", layer: "reliability", blurb: "Corpora, lineage, decontamination, and documentation." },
  { id: "agents", name: "Agents & production", layer: "deployment", blurb: "Loops, tools, orchestration, eval harnesses, guardrails." },
  { id: "mlops", name: "MLOps", layer: "deployment", blurb: "Registries, canaries, monitoring, and reproducibility." },
  { id: "economics", name: "Economics & product", layer: "deployment", blurb: "Token cost, washing, unit economics, augmentation." },
  { id: "governance", name: "Governance & policy", layer: "deployment", blurb: "Regulation, model cards, export controls, responsible scaling." },
  { id: "labs", name: "Labs & products", layer: "deployment", blurb: "The organizations and named systems that shape the field." },
  { id: "history", name: "History & pioneers", layer: "deployment", blurb: "Milestones, winters, papers, and people." },
  { id: "culture", name: "Culture & debates", layer: "deployment", blurb: "Memes, critiques, and long-term hypotheses — labeled as such." },
  { id: "frontier", name: "Frontier research", layer: "deployment", blurb: "Test-time compute, world models, overhang, sleeper-agent demos." },
];

export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<
  CategoryId,
  Category
>;

export const LAYER_BY_ID = Object.fromEntries(LAYERS.map((l) => [l.id, l])) as Record<
  LayerId,
  Layer
>;

export function isCategoryId(id: string): id is CategoryId {
  return Object.hasOwn(CATEGORY_BY_ID, id);
}

export function isLayerId(id: string): id is LayerId {
  return Object.hasOwn(LAYER_BY_ID, id);
}

export interface Level {
  id: number;
  label: string;
  status: string;
  definition: string;
  current?: boolean;
}

export const LEVELS: Level[] = [
  {
    id: 0,
    label: "Conventional software",
    status: "Common",
    definition: "Explicit rules, calculators, deterministic if-then programs and workflows.",
  },
  {
    id: 1,
    label: "Task-specific AI",
    status: "Common",
    definition: "Optimized for a bounded task or environment — chess engines, image classifiers, speech recognition.",
  },
  {
    id: 2,
    label: "General-purpose AI",
    status: "Current frontier",
    current: true,
    definition:
      "Foundation-model systems that work across many tasks, domains, and modalities, but remain uneven and fallible. They often need tools, scaffolding, and supervision.",
  },
  {
    id: 3,
    label: "AGI",
    status: "Not established",
    definition:
      "Reliable, broadly transferable human-level capability across most cognitive domains, including novel tasks and long-horizon work. No accepted demonstration or universal definition.",
  },
  {
    id: 4,
    label: "ASI",
    status: "Hypothetical",
    definition: "Capability substantially beyond the best humans across virtually all cognitive domains.",
  },
  {
    id: 5,
    label: "Artificial God",
    status: "Speculative",
    definition: "A cultural or philosophical label, not a technical category or measurable scientific threshold.",
  },
];

export const EDITORIAL_NOTE =
  "AI terminology is evolving rapidly. Definitions involving AGI, agents, reasoning, world models, alignment, emergence, and hallucination remain contested. This reference distinguishes established engineering concepts from interpretations, forecasts, and open research questions.";

export const POSITIONING =
  "A practical reference for understanding and building with modern AI — separating established technical concepts from contested future claims.";

export const WHERE_WE_ARE =
  "We have highly capable general-purpose AI systems — not verified AGI. They can perform many cognitive tasks, often at or above human level in bounded evaluations, but their capabilities remain uneven and they can fail unpredictably on novel, long-horizon, or high-stakes work.";

export const CHANGELOG = [
  {
    version: "1.2",
    date: "2026-10-01",
    title: "Web edition",
    items: [
      "Published as a searchable living reference with four layers, the six-level scale, and saved entries.",
      "Reorganized 421 unique terms into 32 categories spanning foundations through deployment.",
      "Optional Grok expansions on any entry; generated text is not editorial canon.",
    ],
  },
  {
    version: "1.1",
    date: "2026-09-30",
    title: "Expanded technical edition",
    items: [
      "Grew the dictionary from a core AI reference into a full-stack technical guide.",
      "Added mathematics, architectures, training systems, inference, evaluation, alignment, multimodality, robotics, security, datasets, economics, policy, prompting, and frontier research.",
    ],
  },
  {
    version: "1.0",
    date: "2026-09-30",
    title: "Initial public release",
    items: [
      "Introduced the six-level AI capability scale and distinguished general-purpose AI from AGI.",
      "Added Agentic Systems & Production AI.",
      "Corrected the tokenizer appendix and added editorial guidance for contested terminology.",
    ],
  },
] as const;
