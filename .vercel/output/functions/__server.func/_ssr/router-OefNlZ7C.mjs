import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { S as useRouter, Y as notFound, _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useNavigate, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Milestone, c as Bookmark, n as TriangleAlert, o as Library, r as Search, s as Layers, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogPortal$1, i as DialogOverlay$1, m as Slot, n as DialogClose, o as DialogTitle$1, r as DialogContent$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
import { t as _e } from "../_libs/cmdk.mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/taxonomy-CXQpNGHM.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Container({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className),
		children
	});
}
var LAYERS = [
	{
		id: "foundations",
		name: "Foundations",
		blurb: "What intelligence, learning, and models actually are — plus the math and classical methods underneath."
	},
	{
		id: "systems",
		name: "Systems",
		blurb: "Architectures and stacks that turn models into working language, vision, retrieval, agent, and robot systems."
	},
	{
		id: "reliability",
		name: "Reliability",
		blurb: "How we measure, align, secure, and ground systems that remain uneven and fallible."
	},
	{
		id: "deployment",
		name: "Deployment & society",
		blurb: "Shipping, governing, paying for, and arguing about AI as a product and a public force."
	}
];
var CATEGORIES = [
	{
		id: "core",
		name: "Core concepts",
		layer: "foundations",
		blurb: "AI, AGI, models versus systems, and the learning families."
	},
	{
		id: "types",
		name: "Model types",
		layer: "foundations",
		blurb: "LLMs, transformers, diffusion, MoE, and related families."
	},
	{
		id: "mechanics",
		name: "Model mechanics",
		layer: "foundations",
		blurb: "Tokens, attention, sampling, loss, and inference knobs."
	},
	{
		id: "math",
		name: "Math & optimization",
		layer: "foundations",
		blurb: "Losses, gradients, information theory, and optimizers."
	},
	{
		id: "symbolic",
		name: "Classical symbolic AI",
		layer: "foundations",
		blurb: "Rules, knowledge bases, ontologies, and expert systems."
	},
	{
		id: "classical-ml",
		name: "Classical ML",
		layer: "foundations",
		blurb: "Trees, SVMs, boosting, and statistical workhorses."
	},
	{
		id: "probabilistic",
		name: "Probabilistic models",
		layer: "foundations",
		blurb: "Bayes, HMMs, MDPs, and structured uncertainty."
	},
	{
		id: "neural",
		name: "Neural networks",
		layer: "foundations",
		blurb: "From perceptrons to residual and convolutional nets."
	},
	{
		id: "representation",
		name: "Representation learning",
		layer: "foundations",
		blurb: "Embeddings, latents, contrastive and self-supervised methods."
	},
	{
		id: "training",
		name: "Training & adaptation",
		layer: "foundations",
		blurb: "Pre-training, SFT, preference optimization, scaling."
	},
	{
		id: "nlp",
		name: "Natural language",
		layer: "systems",
		blurb: "Tokenizers, embeddings, language modeling, and prompting."
	},
	{
		id: "vision",
		name: "Computer vision",
		layer: "systems",
		blurb: "Detection, segmentation, OCR, and visual architectures."
	},
	{
		id: "multimodal",
		name: "Multimodal AI",
		layer: "systems",
		blurb: "Image, audio, video, and joint embedding systems."
	},
	{
		id: "rl",
		name: "Reinforcement learning",
		layer: "systems",
		blurb: "Policies, values, exploration, and reward design."
	},
	{
		id: "search",
		name: "Search & planning",
		layer: "systems",
		blurb: "A*, minimax, MCTS, and classical planners."
	},
	{
		id: "retrieval",
		name: "Retrieval & memory",
		layer: "systems",
		blurb: "RAG, vector search, grounding, and memory."
	},
	{
		id: "architectures",
		name: "Architectures",
		layer: "systems",
		blurb: "Attention variants, caches, and efficient building blocks."
	},
	{
		id: "training-systems",
		name: "Training systems",
		layer: "systems",
		blurb: "Parallelism, sharding, adapters, and run stability."
	},
	{
		id: "inference",
		name: "Inference & serving",
		layer: "systems",
		blurb: "Latency, batching, speculative decoding, accelerators."
	},
	{
		id: "robotics",
		name: "Robotics & embodiment",
		layer: "systems",
		blurb: "Sim-to-real, VLAs, teleoperation, physical agents."
	},
	{
		id: "evaluation",
		name: "Evaluation",
		layer: "reliability",
		blurb: "Benchmarks, Elo, contamination, and behavioral failure modes."
	},
	{
		id: "alignment",
		name: "Alignment & safety",
		layer: "reliability",
		blurb: "Preferences, interpretability, jailbreaks, contested failure modes."
	},
	{
		id: "security",
		name: "Security",
		layer: "reliability",
		blurb: "Prompt injection, poisoning, privacy, and adversarial inputs."
	},
	{
		id: "data-eng",
		name: "Data engineering",
		layer: "reliability",
		blurb: "Corpora, lineage, decontamination, and documentation."
	},
	{
		id: "agents",
		name: "Agents & production",
		layer: "deployment",
		blurb: "Loops, tools, orchestration, eval harnesses, guardrails."
	},
	{
		id: "mlops",
		name: "MLOps",
		layer: "deployment",
		blurb: "Registries, canaries, monitoring, and reproducibility."
	},
	{
		id: "economics",
		name: "Economics & product",
		layer: "deployment",
		blurb: "Token cost, washing, unit economics, augmentation."
	},
	{
		id: "governance",
		name: "Governance & policy",
		layer: "deployment",
		blurb: "Regulation, model cards, export controls, responsible scaling."
	},
	{
		id: "labs",
		name: "Labs & products",
		layer: "deployment",
		blurb: "The organizations and named systems that shape the field."
	},
	{
		id: "history",
		name: "History & pioneers",
		layer: "deployment",
		blurb: "Milestones, winters, papers, and people."
	},
	{
		id: "culture",
		name: "Culture & debates",
		layer: "deployment",
		blurb: "Memes, critiques, and long-term hypotheses — labeled as such."
	},
	{
		id: "frontier",
		name: "Frontier research",
		layer: "deployment",
		blurb: "Test-time compute, world models, overhang, sleeper-agent demos."
	}
];
var CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
var LAYER_BY_ID = Object.fromEntries(LAYERS.map((l) => [l.id, l]));
function isCategoryId(id) {
	return Object.hasOwn(CATEGORY_BY_ID, id);
}
var LEVELS = [
	{
		id: 0,
		label: "Conventional software",
		status: "Common",
		definition: "Explicit rules, calculators, deterministic if-then programs and workflows."
	},
	{
		id: 1,
		label: "Task-specific AI",
		status: "Common",
		definition: "Optimized for a bounded task or environment — chess engines, image classifiers, speech recognition."
	},
	{
		id: 2,
		label: "General-purpose AI",
		status: "Current frontier",
		current: true,
		definition: "Foundation-model systems that work across many tasks, domains, and modalities, but remain uneven and fallible. They often need tools, scaffolding, and supervision."
	},
	{
		id: 3,
		label: "AGI",
		status: "Not established",
		definition: "Reliable, broadly transferable human-level capability across most cognitive domains, including novel tasks and long-horizon work. No accepted demonstration or universal definition."
	},
	{
		id: 4,
		label: "ASI",
		status: "Hypothetical",
		definition: "Capability substantially beyond the best humans across virtually all cognitive domains."
	},
	{
		id: 5,
		label: "Artificial God",
		status: "Speculative",
		definition: "A cultural or philosophical label, not a technical category or measurable scientific threshold."
	}
];
var EDITORIAL_NOTE = "AI terminology is evolving rapidly. Definitions involving AGI, agents, reasoning, world models, alignment, emergence, and hallucination remain contested. This reference distinguishes established engineering concepts from interpretations, forecasts, and open research questions.";
var POSITIONING = "A practical reference for understanding and building with modern AI — separating established technical concepts from contested future claims.";
var WHERE_WE_ARE = "We have highly capable general-purpose AI systems — not verified AGI. They can perform many cognitive tasks, often at or above human level in bounded evaluations, but their capabilities remain uneven and they can fail unpredictably on novel, long-horizon, or high-stakes work.";
var CHANGELOG = [
	{
		version: "1.2",
		date: "2026-10-01",
		title: "Web edition",
		items: [
			"Published as a searchable living reference with four layers, the six-level scale, and saved entries.",
			"Reorganized 421 unique terms into 32 categories spanning foundations through deployment.",
			"Optional Grok expansions on any entry; generated text is not editorial canon."
		]
	},
	{
		version: "1.1",
		date: "2026-09-30",
		title: "Expanded technical edition",
		items: ["Grew the dictionary from a core AI reference into a full-stack technical guide.", "Added mathematics, architectures, training systems, inference, evaluation, alignment, multimodality, robotics, security, datasets, economics, policy, prompting, and frontier research."]
	},
	{
		version: "1.0",
		date: "2026-09-30",
		title: "Initial public release",
		items: [
			"Introduced the six-level AI capability scale and distinguished general-purpose AI from AGI.",
			"Added Agentic Systems & Production AI.",
			"Corrected the tokenizer appendix and added editorial guidance for contested terminology."
		]
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/glossary-nlKzNXyE.js
var data = {
	title: "THE AI DICTIONARY",
	subtitle: "A Practical Reference for Modern AI Systems",
	version: "1.2",
	compiled: "2026-10-01",
	termCount: 421,
	terms: [
		{
			"slug": "ai",
			"term": "AI (Artificial Intelligence)",
			"definition": "Computational systems that can perform functions associated with intelligence, such as prediction, learning, reasoning, perception, planning, generation, or decision support.",
			"category": "core",
			"status": [],
			"aliases": ["Artificial Intelligence", "AI"],
			"related": []
		},
		{
			"slug": "agi",
			"term": "AGI (Artificial General Intelligence)",
			"definition": "Hypothetical broad, flexible, transferable intelligence that can perform most cognitive work at roughly human level or better, including on unfamiliar tasks. No consensus threshold or accepted demonstration exists.",
			"category": "core",
			"status": ["debated", "hypothetical"],
			"aliases": ["Artificial General Intelligence", "AGI"],
			"related": []
		},
		{
			"slug": "asi",
			"term": "ASI (Artificial Superintelligence)",
			"definition": "Hypothetical capability substantially beyond the best humans across virtually all cognitive domains.",
			"category": "core",
			"status": ["hypothetical"],
			"aliases": ["Artificial Superintelligence", "ASI"],
			"related": []
		},
		{
			"slug": "ani",
			"term": "ANI (Artificial Narrow Intelligence)",
			"definition": "AI without demonstrated general intelligence. Classic ANI is task-specific, but modern foundation models are general-purpose across many tasks while still not AGI.",
			"category": "core",
			"status": [],
			"aliases": [
				"Artificial Narrow Intelligence",
				"ANI",
				"Narrow AI"
			],
			"related": ["foundation-model"]
		},
		{
			"slug": "machine-learning",
			"term": "Machine Learning (ML)",
			"definition": "Systems that can learn patterns from data instead of being explicitly programmed.",
			"category": "core",
			"status": [],
			"aliases": ["ML"],
			"related": []
		},
		{
			"slug": "deep-learning",
			"term": "Deep Learning",
			"definition": "Machine learning using multi-layer neural networks.",
			"category": "core",
			"status": [],
			"aliases": [],
			"related": ["machine-learning", "neural-network"]
		},
		{
			"slug": "neural-network",
			"term": "Neural Network",
			"definition": "Computing model inspired by biological neurons; a large class of modern AI is built on neural networks.",
			"category": "core",
			"status": [],
			"aliases": ["NN"],
			"related": []
		},
		{
			"slug": "foundation-model",
			"term": "Foundation Model",
			"definition": "Large model trained on broad data and adaptable to many downstream tasks.",
			"category": "core",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "generative-ai",
			"term": "Generative AI",
			"definition": "AI that can create new content such as text, images, audio, or video.",
			"category": "core",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "model-vs-ai-system",
			"term": "Model vs. AI System",
			"definition": "A model is the trained computational artifact that maps inputs to outputs. An AI system is the deployed socio-technical product around it: models, data, prompts, retrieval, tools, code, infrastructure, interfaces, policies, monitoring, and human actors.",
			"category": "core",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "supervised-learning",
			"term": "Supervised Learning",
			"definition": "Training a model on labeled input-output pairs so it can map new inputs to predicted outputs.",
			"category": "core",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "unsupervised-learning",
			"term": "Unsupervised Learning",
			"definition": "Training a model to find structure in unlabeled data, such as clusters or compressed representations.",
			"category": "core",
			"status": [],
			"aliases": [],
			"related": ["supervised-learning", "cluster"]
		},
		{
			"slug": "self-supervised-learning",
			"term": "Self-Supervised Learning",
			"definition": "Training that creates supervisory signals from the data itself, such as predicting masked tokens or nearby views.",
			"category": "core",
			"status": [],
			"aliases": ["SSL"],
			"related": ["supervised-learning", "token"]
		},
		{
			"slug": "semi-supervised-learning",
			"term": "Semi-Supervised Learning",
			"definition": "Training that combines a small labeled set with a larger unlabeled set.",
			"category": "core",
			"status": [],
			"aliases": [],
			"related": ["supervised-learning"]
		},
		{
			"slug": "transfer-learning",
			"term": "Transfer Learning",
			"definition": "Reusing knowledge learned on one task to improve performance on a related task.",
			"category": "core",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "representation-learning",
			"term": "Representation Learning",
			"definition": "Learning useful internal features automatically rather than hand-engineering them.",
			"category": "core",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "llm",
			"term": "LLM (Large Language Model)",
			"definition": "A neural network trained on massive text that can understand and generate language.",
			"category": "types",
			"status": [],
			"aliases": ["Large Language Model", "LLM"],
			"related": ["neural-network"]
		},
		{
			"slug": "transformer",
			"term": "Transformer",
			"definition": "The dominant neural architecture, introduced in 2017, based on self-attention.",
			"category": "types",
			"status": [],
			"aliases": [],
			"related": ["attention-self-attention"]
		},
		{
			"slug": "gpt",
			"term": "GPT (Generative Pre-trained Transformer)",
			"definition": "Autoregressive LLM family (vendor-specific: OpenAI).",
			"category": "types",
			"status": ["vendor-specific"],
			"aliases": ["GPT"],
			"related": ["transformer", "openai"]
		},
		{
			"slug": "bert",
			"term": "BERT",
			"definition": "Bidirectional encoder model (vendor-specific: Google) used mainly for understanding tasks.",
			"category": "types",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "diffusion-model",
			"term": "Diffusion Model",
			"definition": "Generative model that denoises random noise into images, audio, or other signals.",
			"category": "types",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "vae",
			"term": "VAE (Variational Autoencoder)",
			"definition": "Probabilistic generative model that learns a latent distribution and can sample from it.",
			"category": "types",
			"status": [],
			"aliases": ["Variational Autoencoder", "VAE"],
			"related": ["autoencoder"]
		},
		{
			"slug": "gan",
			"term": "GAN (Generative Adversarial Network)",
			"definition": "Two networks competing: a generator that creates samples and a discriminator that tries to detect fakes.",
			"category": "types",
			"status": [],
			"aliases": ["GAN"],
			"related": []
		},
		{
			"slug": "rnn",
			"term": "RNN (Recurrent Neural Network)",
			"definition": "Sequence model that can carry memory of previous inputs through recurrent connections.",
			"category": "types",
			"status": [],
			"aliases": ["RNN"],
			"related": ["neural-network", "memory"]
		},
		{
			"slug": "lstm-gru",
			"term": "LSTM / GRU",
			"definition": "RNN variants with gating that can handle longer-range dependencies better than vanilla RNNs.",
			"category": "types",
			"status": [],
			"aliases": ["LSTM", "GRU"],
			"related": []
		},
		{
			"slug": "cnn",
			"term": "CNN (Convolutional Neural Network)",
			"definition": "Grid-pattern model using spatial filters; historically dominant for images.",
			"category": "types",
			"status": [],
			"aliases": ["CNN", "ConvNet"],
			"related": ["neural-network"]
		},
		{
			"slug": "moe",
			"term": "MoE (Mixture of Experts)",
			"definition": "Architecture that activates only some specialized sub-networks per input.",
			"category": "types",
			"status": [],
			"aliases": ["Mixture of Experts", "MoE"],
			"related": []
		},
		{
			"slug": "multimodal-model",
			"term": "Multimodal Model",
			"definition": "A model that can handle text, image, audio, and/or video together.",
			"category": "types",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "small-language-model",
			"term": "Small Language Model (SLM)",
			"definition": "A compact LLM designed to run on edge or phone hardware.",
			"category": "types",
			"status": [],
			"aliases": ["SLM"],
			"related": []
		},
		{
			"slug": "o-series-reasoning-models",
			"term": "o-Series Reasoning Models",
			"definition": "OpenAI's test-time-compute model family (vendor-specific), trained with RL on verifiable tasks.",
			"category": "types",
			"status": ["vendor-specific", "emerging"],
			"aliases": [],
			"related": ["reasoning-model", "openai"]
		},
		{
			"slug": "deepseek-r1",
			"term": "DeepSeek-R1",
			"definition": "Open reasoning model family from DeepSeek (vendor-specific), notable for a public training methodology.",
			"category": "types",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": ["reasoning-model", "deepseek"]
		},
		{
			"slug": "vision-transformer",
			"term": "Vision Transformer (ViT)",
			"definition": "Architecture that applies a Transformer directly to sequences of image patches.",
			"category": "types",
			"status": [],
			"aliases": ["ViT"],
			"related": ["transformer"]
		},
		{
			"slug": "state-space-model",
			"term": "State-Space Model",
			"definition": "Sequence architecture such as Mamba that models dynamics with state-space updates rather than full attention.",
			"category": "types",
			"status": ["emerging"],
			"aliases": ["Mamba", "SSM"],
			"related": ["attention-self-attention"]
		},
		{
			"slug": "rwkv",
			"term": "RWKV",
			"definition": "RNN-style architecture that aims to match Transformer quality with linear-time inference (vendor-specific lineage).",
			"category": "types",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": ["transformer", "inference"]
		},
		{
			"slug": "token",
			"term": "Token",
			"definition": "Chunk of text — a word, subword, character, or symbol — that a language model processes.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "tokenizer",
			"term": "Tokenizer",
			"definition": "Tool that splits text into subword units using a model-specific vocabulary. Designs include byte-level BPE, WordPiece, and Unigram; there is no universal first-256-token layout.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": [
				"byte-level-bpe",
				"vocabulary",
				"wordpiece",
				"token"
			]
		},
		{
			"slug": "vocabulary",
			"term": "Vocabulary",
			"definition": "The full list of tokens a model knows.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "embedding",
			"term": "Embedding",
			"definition": "Numeric vector representing a token, word, or other item in a learned meaning space.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "attention-self-attention",
			"term": "Attention / Self-Attention",
			"definition": "Mechanism letting tokens weigh each other's importance when computing a representation.",
			"category": "mechanics",
			"status": [],
			"aliases": ["Self-Attention", "Attention"],
			"related": ["token"]
		},
		{
			"slug": "context-window",
			"term": "Context Window",
			"definition": "Maximum number of tokens a model can consider at once.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "inference",
			"term": "Inference",
			"definition": "Running a trained model to produce outputs.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "parameters-weights",
			"term": "Parameters / Weights",
			"definition": "The learned numbers that define a model's behavior.",
			"category": "mechanics",
			"status": [],
			"aliases": ["Weights", "Parameters"],
			"related": []
		},
		{
			"slug": "fine-tuning",
			"term": "Fine-tuning",
			"definition": "Further training on specific data to specialize a model.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "distillation",
			"term": "Distillation",
			"definition": "Compressing a larger model's knowledge into a smaller one.",
			"category": "mechanics",
			"status": [],
			"aliases": ["Knowledge Distillation"],
			"related": []
		},
		{
			"slug": "quantization",
			"term": "Quantization",
			"definition": "Reducing numeric precision to shrink models, for example from FP16 to INT4.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "temperature",
			"term": "Temperature",
			"definition": "Sampling setting: low values make output more predictable; high values make it more varied.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "top-p-top-k-sampling",
			"term": "Top-p / Top-k Sampling",
			"definition": "Methods that limit which tokens can be chosen next by probability mass or rank.",
			"category": "mechanics",
			"status": [],
			"aliases": [
				"Nucleus Sampling",
				"Top-p",
				"Top-k"
			],
			"related": ["token"]
		},
		{
			"slug": "beam-search",
			"term": "Beam Search",
			"definition": "Exploring multiple output paths in parallel to find a high-scoring sequence.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "logits",
			"term": "Logits",
			"definition": "Raw scores for each possible next token, before they are converted to probabilities.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "softmax",
			"term": "Softmax",
			"definition": "Function that converts logits into a probability distribution.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["logits"]
		},
		{
			"slug": "loss-function",
			"term": "Loss Function",
			"definition": "Measure of error the model learns to minimize.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "backpropagation",
			"term": "Backpropagation",
			"definition": "Algorithm that computes gradients so weights can be adjusted based on error.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["parameters-weights"]
		},
		{
			"slug": "gradient-descent",
			"term": "Gradient Descent",
			"definition": "Optimization that steps downhill on the loss surface.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "epoch",
			"term": "Epoch",
			"definition": "One full pass through the training data.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["training-data"]
		},
		{
			"slug": "batch-size",
			"term": "Batch Size",
			"definition": "Number of samples processed together in one training or inference step.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["inference"]
		},
		{
			"slug": "learning-rate",
			"term": "Learning Rate",
			"definition": "Step size of weight updates during training.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "overfitting",
			"term": "Overfitting",
			"definition": "Memorizing training data so the model fails to generalize to new inputs.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["training-data"]
		},
		{
			"slug": "regularization",
			"term": "Regularization",
			"definition": "Techniques that reduce overfitting by constraining model complexity or training dynamics.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["overfitting"]
		},
		{
			"slug": "dropout",
			"term": "Dropout",
			"definition": "Randomly disabling neurons during training as a regularization method.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["regularization"]
		},
		{
			"slug": "attention-masking",
			"term": "Attention Masking",
			"definition": "Controlling which tokens can attend to which others, used for causality, padding, or sparsity.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["attention-self-attention", "token"]
		},
		{
			"slug": "residual-stream",
			"term": "Residual Stream",
			"definition": "The residual pathway through a Transformer where layer outputs are added back to the running representation.",
			"category": "mechanics",
			"status": [],
			"aliases": [],
			"related": ["transformer"]
		},
		{
			"slug": "layer-normalization",
			"term": "Layer Normalization",
			"definition": "Normalizing activations within a layer to stabilize training.",
			"category": "mechanics",
			"status": [],
			"aliases": ["LayerNorm"],
			"related": []
		},
		{
			"slug": "activation-function",
			"term": "Activation Function",
			"definition": "Nonlinear transform such as ReLU, GELU, or sigmoid applied to neuron outputs.",
			"category": "mechanics",
			"status": [],
			"aliases": [
				"ReLU",
				"GELU",
				"Sigmoid"
			],
			"related": []
		},
		{
			"slug": "positional-encoding",
			"term": "Positional Encoding",
			"definition": "Signal that gives a model information about token order, since attention itself is permutation-sensitive.",
			"category": "mechanics",
			"status": [],
			"aliases": ["RoPE", "ALiBi"],
			"related": ["attention-self-attention", "token"]
		},
		{
			"slug": "kv-cache",
			"term": "KV Cache",
			"definition": "Stored attention keys and values from previous tokens, reused to speed autoregressive generation.",
			"category": "mechanics",
			"status": [],
			"aliases": ["Key-Value Cache"],
			"related": ["attention-self-attention", "token"]
		},
		{
			"slug": "rope",
			"term": "RoPE",
			"definition": "Rotary positional embeddings that encode relative position by rotating query and key vectors.",
			"category": "mechanics",
			"status": [],
			"aliases": ["Rotary Positional Embeddings"],
			"related": ["embedding", "positional-encoding"]
		},
		{
			"slug": "grouped-query-attention",
			"term": "Grouped-Query Attention (GQA)",
			"definition": "Attention variant that shares key/value heads across groups of query heads to reduce memory.",
			"category": "architectures",
			"status": [],
			"aliases": ["GQA"],
			"related": ["attention-self-attention", "memory"]
		},
		{
			"slug": "multi-query-attention",
			"term": "Multi-Query Attention (MQA)",
			"definition": "Attention variant where all query heads share a single key/value head.",
			"category": "architectures",
			"status": [],
			"aliases": ["MQA"],
			"related": ["attention-self-attention"]
		},
		{
			"slug": "flashattention",
			"term": "FlashAttention",
			"definition": "IO-aware attention algorithm that computes exact attention with less memory movement.",
			"category": "architectures",
			"status": [],
			"aliases": [],
			"related": ["attention-self-attention", "memory"]
		},
		{
			"slug": "attention-sink",
			"term": "Attention Sink",
			"definition": "Empirical pattern where models keep attending strongly to initial tokens, relevant to long-context stability.",
			"category": "architectures",
			"status": ["emerging"],
			"aliases": [],
			"related": ["attention-self-attention", "token"]
		},
		{
			"slug": "training-data",
			"term": "Training Data",
			"definition": "The text, images, audio, or other examples a model learns from.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "corpus",
			"term": "Corpus",
			"definition": "A body of text used for training or evaluation.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "data-pipeline",
			"term": "Data Pipeline",
			"definition": "Collection, cleaning, formatting, and delivery of training data.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": ["training-data"]
		},
		{
			"slug": "data-augmentation",
			"term": "Data Augmentation",
			"definition": "Artificially expanding training data with variations of existing examples.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": ["training-data"]
		},
		{
			"slug": "pre-training",
			"term": "Pre-training",
			"definition": "Initial broad training on massive data before specialization.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "post-training",
			"term": "Post-training",
			"definition": "Alignment and specialization stages after pre-training, such as SFT and preference optimization.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": ["pre-training", "alignment"]
		},
		{
			"slug": "sft",
			"term": "SFT (Supervised Fine-Tuning)",
			"definition": "Training on labeled example responses to teach a desired style or skill.",
			"category": "training",
			"status": [],
			"aliases": ["Supervised Fine-Tuning", "SFT"],
			"related": ["fine-tuning"]
		},
		{
			"slug": "rlhf",
			"term": "RLHF",
			"definition": "Reinforcement learning from human feedback: using human preference rewards to shape model behavior.",
			"category": "training",
			"status": [],
			"aliases": ["Reinforcement Learning from Human Feedback"],
			"related": ["reinforcement-learning"]
		},
		{
			"slug": "rlaif",
			"term": "RLAIF",
			"definition": "Preference training in which rewards come from an AI judge rather than direct human labels.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "checkpoint",
			"term": "Checkpoint",
			"definition": "Saved snapshot of model weights during or after training.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": ["parameters-weights"]
		},
		{
			"slug": "token-budget",
			"term": "Token Budget",
			"definition": "Total training tokens processed; a core measure of training scale.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "scaling-laws",
			"term": "Scaling Laws",
			"definition": "Empirical relationships between model size, data, compute, and performance.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "emergent-abilities",
			"term": "Emergent Abilities",
			"definition": "Capabilities that appear abruptly in some measurements as models scale; whether these are genuine discontinuities or artifacts of benchmark thresholds remains debated.",
			"category": "training",
			"status": ["debated"],
			"aliases": [],
			"related": ["benchmark"]
		},
		{
			"slug": "grokking",
			"term": "Grokking",
			"definition": "Delayed generalization that can appear long after a model has memorized the training set.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": ["grok"]
		},
		{
			"slug": "end-to-end-training",
			"term": "End-to-End Training",
			"definition": "Training a model or system jointly from raw inputs to final outputs through the full processing stack.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "synthetic-data",
			"term": "Synthetic Data",
			"definition": "Machine-generated examples used to expand or replace collected training data.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": ["training-data"]
		},
		{
			"slug": "compute-optimal-training",
			"term": "Compute-Optimal Training",
			"definition": "Choosing model size and data volume to get the best result for a given compute budget.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "catastrophic-forgetting",
			"term": "Catastrophic Forgetting",
			"definition": "Loss of previously learned behavior when a model is trained on new tasks.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "distribution-shift",
			"term": "Distribution Shift",
			"definition": "A change between training conditions and deployment conditions that can degrade performance.",
			"category": "training",
			"status": [],
			"aliases": ["Covariate Shift"],
			"related": []
		},
		{
			"slug": "model-collapse",
			"term": "Model Collapse",
			"definition": "Degradation that can occur when models are repeatedly trained on their own synthetic outputs. Mechanisms and severity are actively studied.",
			"category": "training",
			"status": ["debated"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "lora",
			"term": "LoRA",
			"definition": "Low-rank adaptation: a parameter-efficient fine-tuning method that trains small adapter matrices instead of all weights.",
			"category": "training-systems",
			"status": [],
			"aliases": ["Low-Rank Adaptation"],
			"related": ["fine-tuning", "parameters-weights"]
		},
		{
			"slug": "qlora",
			"term": "QLoRA",
			"definition": "Quantized LoRA: fine-tuning a quantized base model with low-rank adapters.",
			"category": "training-systems",
			"status": [],
			"aliases": [],
			"related": [
				"fine-tuning",
				"adapters",
				"lora"
			]
		},
		{
			"slug": "prefix-tuning",
			"term": "Prefix Tuning",
			"definition": "A parameter-efficient method that learns prefix vectors prepended to activations rather than changing all weights.",
			"category": "training-systems",
			"status": [],
			"aliases": [],
			"related": ["parameters-weights"]
		},
		{
			"slug": "adapters",
			"term": "Adapters",
			"definition": "Small trainable modules inserted into a frozen model to specialize it with few extra parameters.",
			"category": "training-systems",
			"status": [],
			"aliases": [],
			"related": ["parameters-weights"]
		},
		{
			"slug": "instruction-tuning",
			"term": "Instruction Tuning",
			"definition": "Fine-tuning a model on instruction-response pairs so it follows natural-language requests.",
			"category": "training",
			"status": [],
			"aliases": [],
			"related": ["fine-tuning"]
		},
		{
			"slug": "entropy",
			"term": "Entropy",
			"definition": "Information-theoretic measure of uncertainty in a distribution.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "cross-entropy",
			"term": "Cross-Entropy",
			"definition": "Loss that measures how well predicted probabilities match true labels; standard for classification and language modeling.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": ["language-modeling", "entropy"]
		},
		{
			"slug": "kl-divergence",
			"term": "KL Divergence",
			"definition": "Asymmetric measure of how one probability distribution diverges from another.",
			"category": "math",
			"status": [],
			"aliases": ["Kullback-Leibler Divergence"],
			"related": []
		},
		{
			"slug": "calibration",
			"term": "Calibration",
			"definition": "How well a model's stated confidence matches empirical correctness.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "adam-adamw",
			"term": "Adam / AdamW",
			"definition": "Adaptive optimizers widely used in deep learning; AdamW decouples weight decay from the adaptive update.",
			"category": "math",
			"status": [],
			"aliases": ["Adam", "AdamW"],
			"related": ["deep-learning"]
		},
		{
			"slug": "lion",
			"term": "Lion",
			"definition": "Optimizer that uses sign-based updates; used in some large-model training recipes.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "muon",
			"term": "Muon",
			"definition": "Newer optimizer variant explored for large-model training (emerging, not a universal standard).",
			"category": "math",
			"status": ["emerging"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "loss-landscape",
			"term": "Loss Landscape",
			"definition": "Geometry of the loss surface over parameter space.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "bias-variance-tradeoff",
			"term": "Bias-Variance Tradeoff",
			"definition": "Tension between underfitting from overly simple assumptions and overfitting from excessive sensitivity to training data.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": ["training-data", "overfitting"]
		},
		{
			"slug": "convexity",
			"term": "Convexity",
			"definition": "Property of an objective that has no local minima other than the global minimum; useful but uncommon in deep nets.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": ["positional-encoding", "rope"]
		},
		{
			"slug": "norms-and-similarity",
			"term": "Norms and Similarity",
			"definition": "Ways of measuring vector size and closeness, including L2 distance and cosine similarity.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "numerical-stability",
			"term": "Numerical Stability",
			"definition": "Keeping computations from overflowing, underflowing, or accumulating destructive rounding error.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "learning-rate-schedule",
			"term": "Learning Rate Schedule",
			"definition": "Plan for changing the step size over training, such as warmup and cosine decay.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": ["learning-rate"]
		},
		{
			"slug": "expectation-maximization",
			"term": "Expectation-Maximization (EM)",
			"definition": "Iterative algorithm for estimating parameters when some variables are latent.",
			"category": "math",
			"status": [],
			"aliases": ["EM"],
			"related": ["parameters-weights"]
		},
		{
			"slug": "bayesian-inference",
			"term": "Bayesian Inference",
			"definition": "Updating beliefs about unknowns by combining a prior with observed evidence.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": ["inference"]
		},
		{
			"slug": "maximum-likelihood",
			"term": "Maximum Likelihood",
			"definition": "Choosing parameters that make the observed data most probable under the model.",
			"category": "math",
			"status": [],
			"aliases": [],
			"related": ["parameters-weights"]
		},
		{
			"slug": "expert-system",
			"term": "Expert System",
			"definition": "Rule-based program designed to simulate the judgment of a human expert in a bounded domain.",
			"category": "symbolic",
			"status": ["historical"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "knowledge-base",
			"term": "Knowledge Base",
			"definition": "Repository of facts, rules, and relations used by a symbolic reasoner.",
			"category": "symbolic",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "inference-engine",
			"term": "Inference Engine",
			"definition": "Component that applies logical rules to a knowledge base to derive conclusions.",
			"category": "symbolic",
			"status": [],
			"aliases": [],
			"related": ["knowledge-base", "inference"]
		},
		{
			"slug": "ontology",
			"term": "Ontology",
			"definition": "Formal specification of concepts and relationships in a domain.",
			"category": "symbolic",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "production-rules",
			"term": "Production Rules",
			"definition": "IF-THEN rules used to model stepwise reasoning.",
			"category": "symbolic",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "frame-problem",
			"term": "Frame Problem",
			"definition": "Difficulty of specifying what does not change after an action in a logical world model.",
			"category": "symbolic",
			"status": ["historical"],
			"aliases": [],
			"related": ["world-model"]
		},
		{
			"slug": "semantic-network",
			"term": "Semantic Network",
			"definition": "Graph representation of concepts and the relations among them.",
			"category": "symbolic",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "scripts",
			"term": "Scripts (AI)",
			"definition": "Stereotyped event sequences used in classical AI to represent everyday situations.",
			"category": "symbolic",
			"status": ["historical"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "semantic-web",
			"term": "Semantic Web",
			"definition": "W3C effort to make web data machine-readable through shared standards and ontologies.",
			"category": "symbolic",
			"status": ["historical"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "constraint-satisfaction",
			"term": "Constraint Satisfaction",
			"definition": "Solving problems by finding assignments that satisfy a set of constraints.",
			"category": "symbolic",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "state-space-search",
			"term": "State-Space Search",
			"definition": "Solving a problem by exploring states and the transitions between them.",
			"category": "search",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "heuristic-search",
			"term": "Heuristic Search",
			"definition": "Search guided by an estimate of remaining cost or distance to a goal.",
			"category": "search",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "a",
			"term": "A*",
			"definition": "Pathfinding algorithm that combines actual path cost with a heuristic estimate of remaining cost.",
			"category": "search",
			"status": [],
			"aliases": ["A-star"],
			"related": []
		},
		{
			"slug": "minimax",
			"term": "Minimax",
			"definition": "Adversarial decision rule that minimizes possible loss in a worst-case, typically zero-sum, game tree.",
			"category": "search",
			"status": [],
			"aliases": [],
			"related": ["zero-fsdp"]
		},
		{
			"slug": "alpha-beta-pruning",
			"term": "Alpha-Beta Pruning",
			"definition": "Search optimization that skips minimax branches that cannot affect the final decision.",
			"category": "search",
			"status": [],
			"aliases": [],
			"related": ["minimax"]
		},
		{
			"slug": "monte-carlo-tree-search",
			"term": "Monte Carlo Tree Search (MCTS)",
			"definition": "Search guided by randomized rollouts and statistical tree updates, famously used in AlphaGo.",
			"category": "search",
			"status": [],
			"aliases": ["MCTS"],
			"related": ["alphago"]
		},
		{
			"slug": "strips",
			"term": "STRIPS",
			"definition": "Classical symbolic planning formalism based on operators with preconditions and effects.",
			"category": "search",
			"status": ["historical"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "planning-graph",
			"term": "Planning Graph",
			"definition": "Layered representation of reachable actions and propositions used in classical planning.",
			"category": "search",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "sat-smt-planning",
			"term": "SAT / SMT Planning",
			"definition": "Encoding planning problems as satisfiability or satisfiability-modulo-theories instances.",
			"category": "search",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "limited-beam-search",
			"term": "Limited Beam Search",
			"definition": "Keeping only the top-k partial paths at each step to trade completeness for speed in planning.",
			"category": "search",
			"status": [],
			"aliases": [],
			"related": ["beam-search", "top-p-top-k-sampling"]
		},
		{
			"slug": "logistic-regression",
			"term": "Logistic Regression",
			"definition": "Linear model for classification that outputs class probabilities.",
			"category": "classical-ml",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "naive-bayes",
			"term": "Naive Bayes",
			"definition": "Probabilistic classifier that assumes features are conditionally independent given the class.",
			"category": "classical-ml",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "k-nearest-neighbors",
			"term": "k-Nearest Neighbors (k-NN)",
			"definition": "Instance-based method that classifies a point from its nearest labeled neighbors.",
			"category": "classical-ml",
			"status": [],
			"aliases": ["k-NN"],
			"related": []
		},
		{
			"slug": "decision-tree",
			"term": "Decision Tree",
			"definition": "Interpretable model that splits data with sequential tests on features.",
			"category": "classical-ml",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "random-forest",
			"term": "Random Forest",
			"definition": "Ensemble of decision trees whose votes or averages form the prediction.",
			"category": "classical-ml",
			"status": [],
			"aliases": [],
			"related": ["decision-tree"]
		},
		{
			"slug": "gradient-boosting",
			"term": "Gradient Boosting",
			"definition": "Sequential ensemble method that adds weak learners to correct remaining error.",
			"category": "classical-ml",
			"status": [],
			"aliases": [
				"GBM",
				"XGBoost",
				"LightGBM"
			],
			"related": []
		},
		{
			"slug": "support-vector-machine",
			"term": "Support Vector Machine (SVM)",
			"definition": "Classifier that finds a maximum-margin hyperplane between classes.",
			"category": "classical-ml",
			"status": [],
			"aliases": ["SVM"],
			"related": []
		},
		{
			"slug": "clustering",
			"term": "Clustering",
			"definition": "Grouping unlabeled examples by similarity, as in k-means.",
			"category": "classical-ml",
			"status": [],
			"aliases": [],
			"related": ["cluster"]
		},
		{
			"slug": "dimensionality-reduction",
			"term": "Dimensionality Reduction",
			"definition": "Projecting data into fewer dimensions while preserving structure, as in PCA or t-SNE.",
			"category": "classical-ml",
			"status": [],
			"aliases": ["PCA"],
			"related": []
		},
		{
			"slug": "cross-validation",
			"term": "Cross-Validation",
			"definition": "Evaluating a model by rotating held-out splits of the data.",
			"category": "classical-ml",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "feature-engineering",
			"term": "Feature Engineering",
			"definition": "Manually constructing input variables that make a learning problem easier.",
			"category": "classical-ml",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "bayesian-network",
			"term": "Bayesian Network",
			"definition": "Probabilistic graphical model of variables and conditional dependencies on a directed acyclic graph.",
			"category": "probabilistic",
			"status": [],
			"aliases": [],
			"related": ["graphical-model"]
		},
		{
			"slug": "hidden-markov-model",
			"term": "Hidden Markov Model (HMM)",
			"definition": "Model of a Markov process whose states are not directly observed.",
			"category": "probabilistic",
			"status": [],
			"aliases": ["HMM"],
			"related": []
		},
		{
			"slug": "markov-decision-process",
			"term": "Markov Decision Process (MDP)",
			"definition": "Framework for sequential decisions where outcomes are partly random and partly controlled.",
			"category": "probabilistic",
			"status": [],
			"aliases": ["MDP"],
			"related": []
		},
		{
			"slug": "graphical-model",
			"term": "Graphical Model",
			"definition": "Probabilistic model whose dependence structure is represented as a graph.",
			"category": "probabilistic",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "probabilistic-programming",
			"term": "Probabilistic Programming",
			"definition": "Writing probabilistic models as programs and inferring their latent variables.",
			"category": "probabilistic",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "uncertainty-estimation",
			"term": "Uncertainty Estimation",
			"definition": "Quantifying how unsure a model is, including aleatoric and epistemic uncertainty.",
			"category": "probabilistic",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "gaussian-process",
			"term": "Gaussian Process",
			"definition": "Nonparametric Bayesian model over functions, used for regression with uncertainty.",
			"category": "probabilistic",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "perceptron",
			"term": "Perceptron",
			"definition": "Early neural classifier (1958) computing a weighted sum plus a threshold.",
			"category": "neural",
			"status": ["historical"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "feedforward-network",
			"term": "Feedforward Network",
			"definition": "Layered network without recurrent connections; information flows input to output.",
			"category": "neural",
			"status": [],
			"aliases": ["MLP"],
			"related": []
		},
		{
			"slug": "residual-network",
			"term": "Residual Network (ResNet)",
			"definition": "Architecture with skip connections that ease training of very deep networks.",
			"category": "neural",
			"status": [],
			"aliases": ["ResNet"],
			"related": []
		},
		{
			"slug": "u-net",
			"term": "U-Net",
			"definition": "Encoder-decoder convolutional architecture widely used for segmentation and as a diffusion backbone.",
			"category": "neural",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "autoencoder",
			"term": "Autoencoder",
			"definition": "Network trained to reconstruct its input through a compressed latent code.",
			"category": "representation",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "latent-space",
			"term": "Latent Space",
			"definition": "Compressed internal representation space in which similar items lie close together.",
			"category": "representation",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "contrastive-learning",
			"term": "Contrastive Learning",
			"definition": "Learning representations by pulling related examples together and pushing unrelated ones apart.",
			"category": "representation",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "metric-learning",
			"term": "Metric Learning",
			"definition": "Learning a similarity space in which distance reflects task-relevant likeness.",
			"category": "representation",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "clip",
			"term": "CLIP",
			"definition": "Contrastive image-text model (vendor-specific: OpenAI) that embeds images and captions in a shared space.",
			"category": "representation",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": ["openai"]
		},
		{
			"slug": "logit-lens",
			"term": "Logit Lens",
			"definition": "Interpretability technique that reads intermediate Transformer states as if they were final logits.",
			"category": "architectures",
			"status": ["emerging"],
			"aliases": [],
			"related": [
				"interpretability",
				"transformer",
				"logits"
			]
		},
		{
			"slug": "tensor-parallelism",
			"term": "Tensor Parallelism",
			"definition": "Splitting individual layers across chips so one model layer is computed in parallel.",
			"category": "training-systems",
			"status": [],
			"aliases": [],
			"related": ["parallelism"]
		},
		{
			"slug": "pipeline-parallelism",
			"term": "Pipeline Parallelism",
			"definition": "Splitting sequential layers across chips and overlapping their computation.",
			"category": "training-systems",
			"status": [],
			"aliases": [],
			"related": ["parallelism"]
		},
		{
			"slug": "data-parallelism",
			"term": "Data Parallelism",
			"definition": "Replicating a model across chips and splitting the batch.",
			"category": "training-systems",
			"status": [],
			"aliases": [],
			"related": ["parallelism"]
		},
		{
			"slug": "zero-fsdp",
			"term": "ZeRO / FSDP",
			"definition": "Sharded-optimizer and fully sharded data-parallel methods that split optimizer state and parameters across devices.",
			"category": "training-systems",
			"status": [],
			"aliases": ["ZeRO", "FSDP"],
			"related": ["parameters-weights"]
		},
		{
			"slug": "gradient-checkpointing",
			"term": "Gradient Checkpointing",
			"definition": "Recomputing activations during backward pass to save memory.",
			"category": "training-systems",
			"status": [],
			"aliases": [],
			"related": ["checkpoint", "memory"]
		},
		{
			"slug": "loss-spike",
			"term": "Loss Spike",
			"definition": "Sudden jump in training loss that can destabilize a run.",
			"category": "training-systems",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "tokenization",
			"term": "Tokenization (NLP)",
			"definition": "Splitting a stream of text into words, subwords, or symbols.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "stemming-and-lemmatization",
			"term": "Stemming and Lemmatization",
			"definition": "Reducing words to a stem by crude rules (stemming) or to a dictionary lemma (lemmatization).",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "named-entity-recognition",
			"term": "Named Entity Recognition (NER)",
			"definition": "Locating and classifying names of people, organizations, places, and similar entities in text.",
			"category": "nlp",
			"status": [],
			"aliases": ["NER"],
			"related": []
		},
		{
			"slug": "part-of-speech-tagging",
			"term": "Part-of-Speech Tagging",
			"definition": "Labeling each word with its grammatical category given context.",
			"category": "nlp",
			"status": [],
			"aliases": ["POS Tagging"],
			"related": []
		},
		{
			"slug": "parsing",
			"term": "Parsing",
			"definition": "Analyzing the grammatical structure of a sentence.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "tf-idf",
			"term": "TF-IDF",
			"definition": "Statistic reflecting how important a term is to a document relative to a corpus.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": ["corpus"]
		},
		{
			"slug": "word2vec",
			"term": "Word2Vec",
			"definition": "Predictive embedding method (skip-gram or CBOW) that learns word vectors from local context.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": ["embedding"]
		},
		{
			"slug": "glove",
			"term": "GloVe",
			"definition": "Embedding method that factorizes global word-word co-occurrence statistics.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": ["embedding"]
		},
		{
			"slug": "language-modeling",
			"term": "Language Modeling",
			"definition": "Predicting the next token or a missing span of text.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "sequence-to-sequence",
			"term": "Sequence-to-Sequence",
			"definition": "Encoder-decoder setup that maps one sequence to another, used for translation and similar tasks.",
			"category": "nlp",
			"status": [],
			"aliases": ["seq2seq"],
			"related": []
		},
		{
			"slug": "machine-translation",
			"term": "Machine Translation",
			"definition": "Automatically converting text from one language to another.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "summarization",
			"term": "Summarization",
			"definition": "Compressing a document into a shorter text that preserves key meaning.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "question-answering",
			"term": "Question Answering",
			"definition": "Returning an answer to a natural-language question, extractive or generative.",
			"category": "nlp",
			"status": [],
			"aliases": ["QA"],
			"related": []
		},
		{
			"slug": "instruction-following",
			"term": "Instruction Following",
			"definition": "Obeying natural-language directions, often measured with verifiable constraints.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "prompt-caching",
			"term": "Prompt Caching",
			"definition": "Reusing computed prefixes of a prompt so repeated context is cheaper and faster.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "lost-in-the-middle",
			"term": "Lost in the Middle",
			"definition": "Observed tendency of long-context models to underuse information placed in the middle of a prompt.",
			"category": "nlp",
			"status": ["emerging"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "context-rot",
			"term": "Context Rot",
			"definition": "Informal name for quality drop as a conversation or prompt grows long and noisy.",
			"category": "nlp",
			"status": ["informal"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "byte-level-bpe",
			"term": "Byte-Level BPE",
			"definition": "Subword tokenization that starts from bytes and learns merges; can encode arbitrary text, though not always efficiently.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": ["tokenization", "token"]
		},
		{
			"slug": "wordpiece",
			"term": "WordPiece",
			"definition": "Subword tokenization used by BERT-style models, with a different vocabulary construction than byte-level BPE.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": [
				"byte-level-bpe",
				"tokenization",
				"vocabulary",
				"token",
				"bert"
			]
		},
		{
			"slug": "unigram-tokenizer",
			"term": "Unigram Tokenizer",
			"definition": "Subword model that selects a vocabulary by probabilistic unigram language modeling.",
			"category": "nlp",
			"status": [],
			"aliases": [],
			"related": [
				"language-modeling",
				"vocabulary",
				"tokenizer",
				"token"
			]
		},
		{
			"slug": "image-classification",
			"term": "Image Classification",
			"definition": "Assigning a categorical label to an entire image.",
			"category": "vision",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "object-detection",
			"term": "Object Detection",
			"definition": "Localizing instances of object classes, typically with bounding boxes.",
			"category": "vision",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "semantic-segmentation",
			"term": "Semantic Segmentation",
			"definition": "Labeling every pixel with a class.",
			"category": "vision",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "instance-segmentation",
			"term": "Instance Segmentation",
			"definition": "Separating individual object instances, even of the same class.",
			"category": "vision",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "intersection-over-union",
			"term": "Intersection over Union (IoU)",
			"definition": "Overlap metric comparing a predicted box or mask with ground truth.",
			"category": "vision",
			"status": [],
			"aliases": ["IoU"],
			"related": []
		},
		{
			"slug": "ocr",
			"term": "OCR",
			"definition": "Extracting machine-readable text from images of documents or scenes.",
			"category": "vision",
			"status": [],
			"aliases": ["Optical Character Recognition"],
			"related": []
		},
		{
			"slug": "pose-estimation",
			"term": "Pose Estimation",
			"definition": "Inferring the pose of a body or object from images or video.",
			"category": "vision",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "optical-flow",
			"term": "Optical Flow",
			"definition": "Estimating apparent motion between video frames.",
			"category": "vision",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "latent-diffusion",
			"term": "Latent Diffusion",
			"definition": "Diffusion process run in a compressed latent space rather than on raw pixels.",
			"category": "multimodal",
			"status": [],
			"aliases": [],
			"related": ["latent-space"]
		},
		{
			"slug": "dit",
			"term": "DiT",
			"definition": "Diffusion Transformer: a transformer backbone used inside diffusion models.",
			"category": "multimodal",
			"status": [],
			"aliases": [],
			"related": ["diffusion-model", "transformer"]
		},
		{
			"slug": "text-to-image",
			"term": "Text-to-Image",
			"definition": "Generating images from a text prompt.",
			"category": "multimodal",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "text-to-video",
			"term": "Text-to-Video",
			"definition": "Generating moving imagery from a text prompt.",
			"category": "multimodal",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "speech-recognition",
			"term": "Speech Recognition",
			"definition": "Converting spoken audio into text.",
			"category": "multimodal",
			"status": [],
			"aliases": ["ASR"],
			"related": []
		},
		{
			"slug": "text-to-speech",
			"term": "Text-to-Speech",
			"definition": "Generating speech audio from text.",
			"category": "multimodal",
			"status": [],
			"aliases": ["TTS"],
			"related": []
		},
		{
			"slug": "cross-modal-retrieval",
			"term": "Cross-Modal Retrieval",
			"definition": "Searching one modality using a query from another, such as images from text.",
			"category": "multimodal",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "joint-embedding",
			"term": "Joint Embedding",
			"definition": "Shared vector space for more than one modality.",
			"category": "multimodal",
			"status": [],
			"aliases": [],
			"related": ["embedding"]
		},
		{
			"slug": "neural-codec",
			"term": "Neural Codec",
			"definition": "Learned compressor for audio or video used as tokens or latents for generative models.",
			"category": "multimodal",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "reinforcement-learning",
			"term": "Reinforcement Learning (RL)",
			"definition": "Learning to act by interacting with an environment to maximize cumulative reward.",
			"category": "rl",
			"status": [],
			"aliases": ["RL"],
			"related": []
		},
		{
			"slug": "policy",
			"term": "Policy",
			"definition": "Mapping from states to actions, or to a distribution over actions.",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "value-function",
			"term": "Value Function",
			"definition": "Estimate of expected future reward from a state or state-action pair.",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "bellman-equation",
			"term": "Bellman Equation",
			"definition": "Recursive relationship between a state's value, its immediate reward, and the value of the next state.",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "q-learning",
			"term": "Q-Learning",
			"definition": "Off-policy algorithm that learns action values without requiring the behavior policy to match the target.",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": ["policy"]
		},
		{
			"slug": "policy-gradient",
			"term": "Policy Gradient",
			"definition": "Directly optimizing a policy by following the gradient of expected reward.",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": ["policy"]
		},
		{
			"slug": "actor-critic",
			"term": "Actor-Critic",
			"definition": "RL method that learns both a policy (actor) and a value function (critic).",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": ["value-function", "policy"]
		},
		{
			"slug": "exploration",
			"term": "Exploration",
			"definition": "Trying uncertain actions to gather information, as opposed to exploiting current knowledge.",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": ["lora"]
		},
		{
			"slug": "epsilon-greedy",
			"term": "Epsilon-Greedy",
			"definition": "Exploration rule that usually takes the best-known action and otherwise acts randomly.",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": ["exploration", "lora"]
		},
		{
			"slug": "upper-confidence-bound",
			"term": "Upper Confidence Bound (UCB)",
			"definition": "Bandit algorithm that prefers actions with high estimated value or high uncertainty.",
			"category": "rl",
			"status": [],
			"aliases": ["UCB"],
			"related": []
		},
		{
			"slug": "intrinsic-motivation",
			"term": "Intrinsic Motivation",
			"definition": "Internal rewards such as curiosity used when external rewards are sparse.",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "reward-shaping",
			"term": "Reward Shaping",
			"definition": "Modifying the reward signal to make learning easier, at the risk of changing the true objective.",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "behavior-cloning",
			"term": "Behavior Cloning",
			"definition": "Imitation learning that treats expert trajectories as supervised data.",
			"category": "rl",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "sim-to-real-gap",
			"term": "Sim-to-Real Gap",
			"definition": "Performance drop when a policy trained in simulation is deployed in the physical world.",
			"category": "robotics",
			"status": [],
			"aliases": [],
			"related": ["policy"]
		},
		{
			"slug": "domain-randomization",
			"term": "Domain Randomization",
			"definition": "Varying simulation parameters so a policy is more robust when transferred to reality.",
			"category": "robotics",
			"status": [],
			"aliases": [],
			"related": ["parameters-weights", "policy"]
		},
		{
			"slug": "teleoperation",
			"term": "Teleoperation",
			"definition": "A human remotely controlling a robot, often to collect demonstrations.",
			"category": "robotics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "vision-language-action",
			"term": "Vision-Language-Action (VLA)",
			"definition": "Model that maps visual observations and language instructions to robot actions.",
			"category": "robotics",
			"status": ["emerging"],
			"aliases": ["VLA"],
			"related": []
		},
		{
			"slug": "embodied-agent",
			"term": "Embodied Agent",
			"definition": "An agent that acts through a physical or simulated body rather than only through text.",
			"category": "robotics",
			"status": [],
			"aliases": [],
			"related": ["agent"]
		},
		{
			"slug": "rag",
			"term": "RAG (Retrieval-Augmented Generation)",
			"definition": "Retrieving relevant external information at query time and supplying it to a model so the response can be grounded in that information.",
			"category": "retrieval",
			"status": [],
			"aliases": ["Retrieval-Augmented Generation", "RAG"],
			"related": []
		},
		{
			"slug": "sparse-retrieval",
			"term": "Sparse Retrieval",
			"definition": "Keyword-based retrieval such as BM25 that matches terms rather than vectors.",
			"category": "retrieval",
			"status": [],
			"aliases": ["BM25"],
			"related": []
		},
		{
			"slug": "dense-retrieval",
			"term": "Dense Retrieval",
			"definition": "Retrieval that embeds queries and documents into a vector space and searches by similarity.",
			"category": "retrieval",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "hybrid-search",
			"term": "Hybrid Search",
			"definition": "Combining sparse and dense retrieval, often with a later re-ranker.",
			"category": "retrieval",
			"status": [],
			"aliases": [],
			"related": ["dense-retrieval"]
		},
		{
			"slug": "approximate-nearest-neighbor",
			"term": "Approximate Nearest Neighbor (ANN)",
			"definition": "Fast, approximate search for vectors near a query, trading a little recall for speed.",
			"category": "retrieval",
			"status": [],
			"aliases": ["ANN"],
			"related": []
		},
		{
			"slug": "hnsw",
			"term": "HNSW",
			"definition": "Graph-based ANN index used by many vector databases.",
			"category": "retrieval",
			"status": [],
			"aliases": [],
			"related": ["vector-database"]
		},
		{
			"slug": "vector-database",
			"term": "Vector Database",
			"definition": "System specialized for storing, indexing, and querying embeddings.",
			"category": "retrieval",
			"status": [],
			"aliases": [],
			"related": ["embedding"]
		},
		{
			"slug": "re-ranking",
			"term": "Re-ranking",
			"definition": "A second-stage model that reorders retrieved candidates more carefully.",
			"category": "retrieval",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "grounding",
			"term": "Grounding",
			"definition": "Connecting an output to supplied, retrieved, or verified evidence rather than relying only on model parameters.",
			"category": "retrieval",
			"status": [],
			"aliases": [],
			"related": ["parameters-weights"]
		},
		{
			"slug": "citation-verification",
			"term": "Citation Verification",
			"definition": "Checking that a cited source actually supports the precise claim attached to it.",
			"category": "retrieval",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "memory",
			"term": "Memory (AI)",
			"definition": "Storing past interactions or facts so they can be used in later steps.",
			"category": "retrieval",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "agent",
			"term": "Agent",
			"definition": "A system that combines a model with state, tools, policies, and an action loop to pursue a bounded objective. Distinct from mere tool use.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["tool-use-function-calling"]
		},
		{
			"slug": "agent-loop",
			"term": "Agent Loop",
			"definition": "Repeated cycle of observing state, planning, calling tools, checking results, and deciding whether to continue.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["agent"]
		},
		{
			"slug": "agentic-workflow",
			"term": "Agentic Workflow",
			"definition": "A constrained multi-step process combining models, tools, state, policies, and verification to finish a task.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["agent"]
		},
		{
			"slug": "orchestration",
			"term": "Orchestration",
			"definition": "Coordinating models, tools, prompts, routing, memory, retries, and approvals.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["memory"]
		},
		{
			"slug": "context-engineering",
			"term": "Context Engineering",
			"definition": "Designing the complete model input environment: instructions, state, retrieved knowledge, tool results, memories, examples, and output constraints.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "model-routing",
			"term": "Model Routing",
			"definition": "Choosing a model dynamically based on task type, quality, latency, cost, risk, or modality.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["latency"]
		},
		{
			"slug": "structured-output",
			"term": "Structured Output",
			"definition": "Model output constrained to a formal schema, commonly JSON, for use by downstream software.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "schema-validation",
			"term": "Schema Validation",
			"definition": "Checking whether structured output conforms to required types, fields, and constraints.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["structured-output"]
		},
		{
			"slug": "tool-schema",
			"term": "Tool Schema",
			"definition": "Machine-readable specification of an external function, its parameters, and return data.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["parameters-weights"]
		},
		{
			"slug": "tool-use-function-calling",
			"term": "Tool Use / Function Calling",
			"definition": "Model invocation of external tools, APIs, or functions. Distinct from agency, which is iterative action toward an objective.",
			"category": "agents",
			"status": [],
			"aliases": ["Function Calling", "Tool Use"],
			"related": []
		},
		{
			"slug": "model-context-protocol",
			"term": "Model Context Protocol (MCP)",
			"definition": "An open protocol for connecting AI applications to external tools, resources, prompts, and contextual data. It is an ecosystem convention, not a universal AI primitive.",
			"category": "agents",
			"status": [],
			"aliases": ["MCP"],
			"related": []
		},
		{
			"slug": "human-in-the-loop",
			"term": "Human-in-the-Loop",
			"definition": "Requiring human review, correction, or approval at defined stages of an AI workflow.",
			"category": "agents",
			"status": [],
			"aliases": ["HITL"],
			"related": []
		},
		{
			"slug": "human-on-the-loop",
			"term": "Human-on-the-Loop",
			"definition": "Allowing an AI system to operate while a person supervises and can intervene.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "evaluation-harness",
			"term": "Evaluation Harness",
			"definition": "Repeatable testing setup that measures task success, factuality, safety, latency, cost, and robustness.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["latency"]
		},
		{
			"slug": "golden-dataset",
			"term": "Golden Dataset",
			"definition": "Curated set of representative inputs and expected outputs used for repeatable evaluation.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "regression-evaluation",
			"term": "Regression Evaluation",
			"definition": "Re-running prior tests after a prompt, workflow, model, or code change to detect quality loss.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "observability",
			"term": "Observability",
			"definition": "Capturing traces, prompts, outputs, tool calls, latency, errors, and costs for debugging and monitoring.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["latency", "trace"]
		},
		{
			"slug": "trace",
			"term": "Trace",
			"definition": "Chronological record of a workflow's model calls, tool actions, state transitions, and outputs.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "guardrail",
			"term": "Guardrail",
			"definition": "Preventive or detective control that constrains inputs, actions, permissions, outputs, or escalation paths.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "least-privilege",
			"term": "Least Privilege",
			"definition": "Giving an agent only the minimum tool access and permissions needed for its job.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["agent"]
		},
		{
			"slug": "sandbox",
			"term": "Sandbox",
			"definition": "Isolated execution environment that limits the effect of generated code or agent actions.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["agent"]
		},
		{
			"slug": "long-horizon-task",
			"term": "Long-Horizon Task",
			"definition": "A goal requiring many dependent actions, persistent state, recovery from errors, and verification over time.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "idempotency",
			"term": "Idempotency",
			"definition": "Designing an action so repeating it has the same effect as performing it once; essential for reliable retries.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "fallback-model",
			"term": "Fallback Model",
			"definition": "Secondary model used when the preferred model fails, is too slow, or is unavailable.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "semantic-cache",
			"term": "Semantic Cache",
			"definition": "Cache that reuses a previous answer when a new request is meaningfully similar, not necessarily identical.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "end-to-end-testing",
			"term": "End-to-End Testing (E2E Testing)",
			"definition": "Validating a complete AI pipeline from raw input through model, tools, state, and integrations to final output as an integrated system.",
			"category": "agents",
			"status": [],
			"aliases": ["E2E Testing"],
			"related": []
		},
		{
			"slug": "react",
			"term": "ReAct",
			"definition": "Pattern that interleaves reasoning-style text with tool actions in a loop.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "plan-and-execute",
			"term": "Plan-and-Execute",
			"definition": "Agent pattern that first drafts a plan, then carries out steps, often with replanning on failure.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["agent"]
		},
		{
			"slug": "reflection",
			"term": "Reflection",
			"definition": "Having a model critique its own output or traces and then revise.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["trace"]
		},
		{
			"slug": "tree-of-thoughts",
			"term": "Tree of Thoughts",
			"definition": "Search over intermediate reasoning branches rather than a single chain.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "multi-agent-system",
			"term": "Multi-Agent System",
			"definition": "Multiple agents collaborating or competing, with coordination and communication overhead.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": ["agent"]
		},
		{
			"slug": "verifier-model",
			"term": "Verifier Model",
			"definition": "A model used to check another model's outputs, such as a solution checker or process reward model.",
			"category": "agents",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "capability-overhang",
			"term": "Capability Overhang",
			"definition": "Gap between what a model can do in evaluation and what users or institutions have actually deployed or recognized.",
			"category": "frontier",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "latency",
			"term": "Latency",
			"definition": "Delay before a response starts, often measured as time to first token.",
			"category": "inference",
			"status": [],
			"aliases": ["TTFT"],
			"related": ["time-to-first-token", "token"]
		},
		{
			"slug": "throughput",
			"term": "Throughput",
			"definition": "Amount processed per second, such as tokens per second.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "speculative-decoding",
			"term": "Speculative Decoding",
			"definition": "Using a cheaper draft model to propose tokens that a larger model verifies, speeding generation.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "pagedattention",
			"term": "PagedAttention",
			"definition": "Memory management for KV cache that pages attention state like virtual memory.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": [
				"attention-self-attention",
				"kv-cache",
				"memory"
			]
		},
		{
			"slug": "continuous-batching",
			"term": "Continuous Batching",
			"definition": "Dynamically adding and removing requests in a running inference batch.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": ["inference"]
		},
		{
			"slug": "disaggregated-serving",
			"term": "Disaggregated Serving",
			"definition": "Splitting prefill and decode, or other stages, across different machines.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "prompt-cache",
			"term": "Prompt Cache (Serving)",
			"definition": "Reusing KV state for repeated prompt prefixes at serving time.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "inference-quantization",
			"term": "Inference Quantization",
			"definition": "Running a model at reduced precision at serving time to cut cost and memory.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": [
				"quantization",
				"inference",
				"memory"
			]
		},
		{
			"slug": "kv-quantization",
			"term": "KV Quantization",
			"definition": "Storing the KV cache at lower precision to save memory during generation.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": [
				"quantization",
				"kv-cache",
				"memory"
			]
		},
		{
			"slug": "serving-graph",
			"term": "Serving Graph",
			"definition": "Composed inference pipeline of models, routers, caches, and tools.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": ["inference"]
		},
		{
			"slug": "time-to-first-token",
			"term": "Time to First Token (TTFT)",
			"definition": "Latency until the first generated token is produced.",
			"category": "inference",
			"status": [],
			"aliases": ["TTFT"],
			"related": ["latency", "token"]
		},
		{
			"slug": "time-per-output-token",
			"term": "Time per Output Token (TPOT)",
			"definition": "Average time to produce each subsequent token.",
			"category": "inference",
			"status": [],
			"aliases": ["TPOT"],
			"related": ["token"]
		},
		{
			"slug": "gpu",
			"term": "GPU",
			"definition": "Graphics processing unit; the dominant accelerator for AI training and inference, with NVIDIA currently leading.",
			"category": "inference",
			"status": [],
			"aliases": ["Graphics Processing Unit"],
			"related": ["inference"]
		},
		{
			"slug": "tpu",
			"term": "TPU",
			"definition": "Tensor Processing Unit: Google's custom AI accelerator (vendor-specific).",
			"category": "inference",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "npu",
			"term": "NPU",
			"definition": "Neural processing unit: an on-device AI accelerator in phones and PCs.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "hbm",
			"term": "HBM",
			"definition": "High-bandwidth memory sitting next to accelerators; often the scarce resource for large models.",
			"category": "inference",
			"status": [],
			"aliases": ["High-Bandwidth Memory"],
			"related": ["memory"]
		},
		{
			"slug": "cuda",
			"term": "CUDA",
			"definition": "NVIDIA's GPU programming platform (vendor-specific).",
			"category": "inference",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "cluster",
			"term": "Cluster",
			"definition": "Network of accelerators and servers used to train or serve one model.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "parallelism",
			"term": "Parallelism",
			"definition": "Splitting work across chips via data, tensor, or pipeline parallelism.",
			"category": "inference",
			"status": [],
			"aliases": [],
			"related": ["pipeline-parallelism"]
		},
		{
			"slug": "benchmark",
			"term": "Benchmark",
			"definition": "Standardized test that can measure some aspect of model or system capability.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "mmlu",
			"term": "MMLU",
			"definition": "Massive Multitask Language Understanding: a broad academic-and-professional knowledge benchmark.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["benchmark"]
		},
		{
			"slug": "humanity-s-last-exam",
			"term": "Humanity's Last Exam (HLE)",
			"definition": "Hard expert-level benchmark introduced in 2025.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["benchmark"]
		},
		{
			"slug": "gsm8k",
			"term": "GSM8K",
			"definition": "Grade-school math word-problem benchmark.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["benchmark"]
		},
		{
			"slug": "gpqa",
			"term": "GPQA",
			"definition": "Graduate-level Google-proof Q&A benchmark aimed at hard science questions.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["benchmark"]
		},
		{
			"slug": "swe-bench",
			"term": "SWE-bench",
			"definition": "Benchmark of real software-engineering tasks from GitHub issues.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["benchmark"]
		},
		{
			"slug": "arc-agi",
			"term": "ARC-AGI",
			"definition": "Abstraction and Reasoning Corpus style benchmark emphasizing novel pattern puzzles, not language fluency.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["benchmark", "corpus"]
		},
		{
			"slug": "livebench",
			"term": "LiveBench",
			"definition": "Benchmark designed to reduce contamination by using fresher or harder-to-memorize items.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["contamination", "benchmark"]
		},
		{
			"slug": "ifeval",
			"term": "IFEval",
			"definition": "Instruction-following evaluation with verifiable constraints.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "glue-superglue",
			"term": "GLUE / SuperGLUE",
			"definition": "Earlier NLP understanding benchmark collections, now largely saturated by large models.",
			"category": "evaluation",
			"status": ["historical"],
			"aliases": [],
			"related": ["benchmark"]
		},
		{
			"slug": "bleu-rouge",
			"term": "BLEU / ROUGE",
			"definition": "N-gram overlap metrics for translation and summarization against reference text.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["summarization"]
		},
		{
			"slug": "perplexity",
			"term": "Perplexity",
			"definition": "Language-model prediction metric derived from probability assigned to text; lower values generally indicate better next-token prediction on the evaluated dataset.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "pass-k",
			"term": "Pass@k",
			"definition": "Probability that at least one of k sampled attempts solves a task, common in coding evals.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["evals"]
		},
		{
			"slug": "arena-elo",
			"term": "Arena / Elo",
			"definition": "Ranking models from pairwise human (or proxy) preferences, often displayed as an Elo score.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "contamination",
			"term": "Contamination",
			"definition": "Benchmark items leaking into training data, inflating scores.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["training-data", "benchmark"]
		},
		{
			"slug": "saturation",
			"term": "Saturation",
			"definition": "A benchmark becoming too easy to distinguish frontier systems.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["benchmark"]
		},
		{
			"slug": "hallucination",
			"term": "Hallucination",
			"definition": "Behavioral term for output that is unsupported, false, fabricated, or inappropriately confident relative to available evidence. The term is contested; the failure mode is real.",
			"category": "evaluation",
			"status": ["debated"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "evals",
			"term": "Evals",
			"definition": "Evaluations, especially those targeting dangerous or high-stakes capabilities.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "zero-shot",
			"term": "Zero-shot",
			"definition": "Performing a task with no in-prompt examples.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": ["zero-fsdp"]
		},
		{
			"slug": "few-shot-learning",
			"term": "Few-shot Learning",
			"definition": "Performing a task from a few in-prompt examples without weight updates.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "chain-of-thought",
			"term": "Chain-of-Thought (CoT)",
			"definition": "Intermediate reasoning-style output that can improve performance on some tasks, but may not faithfully represent a model's internal computation.",
			"category": "evaluation",
			"status": ["debated"],
			"aliases": ["CoT", "Chain of Thought"],
			"related": []
		},
		{
			"slug": "self-consistency",
			"term": "Self-Consistency",
			"definition": "Sampling multiple reasoning paths and selecting the most common answer.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "chain-of-thought-distillation",
			"term": "Chain-of-Thought Distillation",
			"definition": "Training a smaller model to imitate reasoning traces from a larger one.",
			"category": "evaluation",
			"status": [],
			"aliases": [],
			"related": [
				"chain-of-thought",
				"distillation",
				"trace"
			]
		},
		{
			"slug": "alignment",
			"term": "Alignment",
			"definition": "Ensuring AI behavior matches human values and goals. No settled technical definition or completion threshold.",
			"category": "alignment",
			"status": ["debated"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "ai-safety",
			"term": "AI Safety",
			"definition": "Research and engineering aimed at preventing AI-caused harm.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "interpretability",
			"term": "Interpretability",
			"definition": "Explaining what happens inside neural networks.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": ["neural-network"]
		},
		{
			"slug": "mechanistic-interpretability",
			"term": "Mechanistic Interpretability",
			"definition": "Reverse-engineering internal circuits and features, often with sparse autoencoders.",
			"category": "alignment",
			"status": [],
			"aliases": ["SAE"],
			"related": ["interpretability", "autoencoder"]
		},
		{
			"slug": "red-teaming",
			"term": "Red Teaming",
			"definition": "Adversarial testing that can surface weaknesses, jailbreaks, or harmful behavior before deployment.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": ["jailbreak"]
		},
		{
			"slug": "jailbreak",
			"term": "Jailbreak",
			"definition": "Prompt or input tricks that can bypass safety restrictions.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "system-prompt",
			"term": "System Prompt",
			"definition": "Higher-priority instructions that guide a system's behavior; they may be private, visible, or partially exposed depending on the product.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "constitutional-ai",
			"term": "Constitutional AI",
			"definition": "Self-critique training guided by a written set of principles.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "superalignment",
			"term": "Superalignment",
			"definition": "Research program aimed at aligning systems that could exceed human-level capability. Hypothetical target.",
			"category": "alignment",
			"status": ["hypothetical"],
			"aliases": [],
			"related": ["alignment"]
		},
		{
			"slug": "dpo",
			"term": "DPO",
			"definition": "Direct Preference Optimization: aligning a model from preference pairs without an explicit reward model.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "kto-orpo-grpo",
			"term": "KTO / ORPO / GRPO",
			"definition": "Preference-optimization variants used in post-training; details differ by objective and whether a reward model is required.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": ["post-training"]
		},
		{
			"slug": "process-vs-outcome-reward",
			"term": "Process vs. Outcome Reward",
			"definition": "Rewarding intermediate steps versus rewarding only the final answer.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "reward-hacking",
			"term": "Reward Hacking",
			"definition": "Exploiting a reward signal in ways that raise the score without satisfying the intended goal.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "specification-gaming",
			"term": "Specification Gaming",
			"definition": "Satisfying the literal specification while missing the intended spirit of the task.",
			"category": "alignment",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "deceptive-alignment",
			"term": "Deceptive Alignment",
			"definition": "Hypothetical failure mode in which an AI appears aligned while pursuing hidden goals. Not established empirically.",
			"category": "alignment",
			"status": ["hypothetical", "debated"],
			"aliases": [],
			"related": ["alignment"]
		},
		{
			"slug": "mesa-optimizer",
			"term": "Mesa-Optimizer",
			"definition": "Hypothetical internal optimizer that a model might develop during training. Debated.",
			"category": "alignment",
			"status": ["hypothetical", "debated"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "sleeper-agent",
			"term": "Sleeper Agent",
			"definition": "Research demonstration of models that behave well until a trigger reveals latent misbehavior. Not a claim about deployed systems.",
			"category": "frontier",
			"status": ["debated"],
			"aliases": [],
			"related": ["agent"]
		},
		{
			"slug": "model-organisms-of-misalignment",
			"term": "Model Organisms of Misalignment",
			"definition": "Controlled experimental systems used to study failure modes in the lab.",
			"category": "frontier",
			"status": [],
			"aliases": [],
			"related": ["alignment"]
		},
		{
			"slug": "world-model",
			"term": "World Model",
			"definition": "A learned representation that supports prediction, planning, or simulation of an environment; whether a particular model has a robust world model is an empirical question.",
			"category": "frontier",
			"status": ["debated"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "reasoning-model",
			"term": "Reasoning Model",
			"definition": "Model trained or served with extra test-time compute for harder multi-step tasks. Whether this constitutes 'reasoning' is debated.",
			"category": "frontier",
			"status": ["debated"],
			"aliases": [],
			"related": ["test-time-compute"]
		},
		{
			"slug": "test-time-compute",
			"term": "Test-Time Compute",
			"definition": "Extra inference-time computation — longer traces, search, or sampling — used to improve answers.",
			"category": "frontier",
			"status": [],
			"aliases": [],
			"related": ["inference", "trace"]
		},
		{
			"slug": "scaffolding",
			"term": "Scaffolding",
			"definition": "Tools, prompts, memory, and control flow wrapped around a model to complete tasks it cannot reliably do alone.",
			"category": "frontier",
			"status": [],
			"aliases": [],
			"related": ["memory"]
		},
		{
			"slug": "jagged-frontier",
			"term": "Jagged Frontier",
			"definition": "Informal description of current systems: superhuman on some tasks and brittle on nearby ones.",
			"category": "frontier",
			"status": ["informal"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "prompt-injection",
			"term": "Prompt Injection",
			"definition": "Malicious input that hijacks an AI system's instructions.",
			"category": "security",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "indirect-prompt-injection",
			"term": "Indirect Prompt Injection",
			"definition": "Attack where untrusted retrieved or linked content contains hidden instructions.",
			"category": "security",
			"status": [],
			"aliases": [],
			"related": ["prompt-injection"]
		},
		{
			"slug": "adversarial-example",
			"term": "Adversarial Example",
			"definition": "Input crafted to make a model produce a wrong or attacker-chosen output.",
			"category": "security",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "data-poisoning",
			"term": "Data Poisoning",
			"definition": "Corrupting training or retrieval data to change later behavior.",
			"category": "security",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "model-extraction",
			"term": "Model Extraction",
			"definition": "Stealing a model's behavior by querying it and training a substitute.",
			"category": "security",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "membership-inference",
			"term": "Membership Inference",
			"definition": "Attack that tries to tell whether a particular record was in the training set.",
			"category": "security",
			"status": [],
			"aliases": [],
			"related": ["inference"]
		},
		{
			"slug": "differential-privacy",
			"term": "Differential Privacy",
			"definition": "Training or release method that limits what can be inferred about any one training example.",
			"category": "security",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "watermarking",
			"term": "Watermarking",
			"definition": "Embedding a statistical signal in generated content so it can later be detected as synthetic. Reliability varies.",
			"category": "security",
			"status": [],
			"aliases": [],
			"related": ["embedding"]
		},
		{
			"slug": "adversarial-training",
			"term": "Adversarial Training",
			"definition": "Including adversarial or attack-like examples in training to improve robustness.",
			"category": "security",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "ood-generalization",
			"term": "OOD Generalization",
			"definition": "Performance on inputs outside the training distribution.",
			"category": "security",
			"status": [],
			"aliases": ["Out-of-Distribution"],
			"related": []
		},
		{
			"slug": "threat-modeling",
			"term": "Threat Modeling",
			"definition": "Systematically enumerating who might attack an AI system, how, and with what impact.",
			"category": "security",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "annotation",
			"term": "Annotation",
			"definition": "Labeling data so it can be used for training or evaluation.",
			"category": "data-eng",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "deduplication",
			"term": "Deduplication",
			"definition": "Removing repeated documents or near-duplicates from a corpus.",
			"category": "data-eng",
			"status": [],
			"aliases": [],
			"related": ["corpus"]
		},
		{
			"slug": "provenance",
			"term": "Provenance",
			"definition": "Record of where data came from.",
			"category": "data-eng",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "data-lineage",
			"term": "Data Lineage",
			"definition": "Map of how data moved and was transformed through a pipeline.",
			"category": "data-eng",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "decontamination",
			"term": "Decontamination",
			"definition": "Removing evaluation items from training data so benchmarks stay honest.",
			"category": "data-eng",
			"status": [],
			"aliases": [],
			"related": [
				"training-data",
				"contamination",
				"benchmark"
			]
		},
		{
			"slug": "data-card",
			"term": "Data Card",
			"definition": "Structured documentation of a dataset's contents, collection, and known issues.",
			"category": "data-eng",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "common-crawl",
			"term": "Common Crawl",
			"definition": "Large public web crawl often used as a source for language-model pre-training.",
			"category": "data-eng",
			"status": [],
			"aliases": [],
			"related": ["pre-training"]
		},
		{
			"slug": "the-pile",
			"term": "The Pile",
			"definition": "Open-source language-modeling dataset assembled from diverse sources.",
			"category": "data-eng",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "fineweb",
			"term": "FineWeb",
			"definition": "Filtered web dataset used for language-model training.",
			"category": "data-eng",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "laion",
			"term": "LAION",
			"definition": "Large public image-text dataset family used in vision-language training.",
			"category": "data-eng",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "mlops",
			"term": "MLOps",
			"definition": "Practices for deploying and maintaining machine learning systems reliably in production.",
			"category": "mlops",
			"status": [],
			"aliases": [],
			"related": ["machine-learning"]
		},
		{
			"slug": "feature-store",
			"term": "Feature Store",
			"definition": "Repository for storing, documenting, and serving features for training and inference.",
			"category": "mlops",
			"status": [],
			"aliases": [],
			"related": ["inference"]
		},
		{
			"slug": "model-registry",
			"term": "Model Registry",
			"definition": "Versioned catalog of trained models and their metadata.",
			"category": "mlops",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "experiment-tracking",
			"term": "Experiment Tracking",
			"definition": "Logging runs, hyperparameters, metrics, and artifacts.",
			"category": "mlops",
			"status": [],
			"aliases": [],
			"related": ["parameters-weights"]
		},
		{
			"slug": "canary-deployment",
			"term": "Canary Deployment",
			"definition": "Releasing a new model or prompt to a small slice of traffic before full rollout.",
			"category": "mlops",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "shadow-deployment",
			"term": "Shadow Deployment",
			"definition": "Running a new system in parallel without affecting users, to compare behavior.",
			"category": "mlops",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "reproducibility",
			"term": "Reproducibility",
			"definition": "Ability to rerun training or evaluation and obtain consistent results.",
			"category": "mlops",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "ci-cd-for-ml",
			"term": "CI/CD for ML",
			"definition": "Automated testing and deployment pipelines that include data and model checks, not only code.",
			"category": "mlops",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "cost-per-token",
			"term": "Cost per Token",
			"definition": "Serving economics metric: price or internal cost of processing one token.",
			"category": "economics",
			"status": [],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "jevons-effect",
			"term": "Jevons Effect",
			"definition": "Observation that efficiency gains can increase total consumption of a resource, including compute.",
			"category": "economics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "ai-washing",
			"term": "AI Washing",
			"definition": "Overclaiming AI capability in products or marketing.",
			"category": "economics",
			"status": ["informal"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "unit-economics",
			"term": "Unit Economics",
			"definition": "Profitability of one customer, query, or task after variable costs.",
			"category": "economics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "human-augmentation",
			"term": "Human Augmentation",
			"definition": "Using AI to make people more productive rather than fully replacing them.",
			"category": "economics",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "ai-governance",
			"term": "AI Governance",
			"definition": "Policies and institutions that control how AI is developed and deployed.",
			"category": "governance",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "eu-ai-act",
			"term": "EU AI Act",
			"definition": "European Union regulation that classifies AI systems by risk and imposes corresponding duties.",
			"category": "governance",
			"status": [],
			"aliases": [],
			"related": ["positional-encoding", "rope"]
		},
		{
			"slug": "export-controls",
			"term": "Export Controls",
			"definition": "Restrictions on transferring advanced chips, models, or technical assistance across borders.",
			"category": "governance",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "model-card",
			"term": "Model Card",
			"definition": "Documentation of a model's intended use, metrics, and limitations.",
			"category": "governance",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "system-card",
			"term": "System Card",
			"definition": "Documentation of a deployed AI system, including surrounding tools, policies, and evaluations.",
			"category": "governance",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "responsible-scaling",
			"term": "Responsible Scaling",
			"definition": "Policy approach that ties stronger safety measures to capability thresholds; implementations vary and are contested.",
			"category": "governance",
			"status": ["debated"],
			"aliases": [],
			"related": ["policy"]
		},
		{
			"slug": "compute-governance",
			"term": "Compute Governance",
			"definition": "Using access to training compute as a control lever.",
			"category": "governance",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "frontier-model",
			"term": "Frontier Model",
			"definition": "A currently most-capable class of AI system, not a permanent category.",
			"category": "governance",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "openai",
			"term": "OpenAI",
			"definition": "Lab that created the GPT series and ChatGPT.",
			"category": "labs",
			"status": [],
			"aliases": [],
			"related": ["chatgpt"]
		},
		{
			"slug": "anthropic",
			"term": "Anthropic",
			"definition": "Lab that created the Claude assistant family.",
			"category": "labs",
			"status": [],
			"aliases": [],
			"related": ["claude"]
		},
		{
			"slug": "google-deepmind",
			"term": "Google DeepMind",
			"definition": "Lab behind Gemini, AlphaGo, and AlphaFold.",
			"category": "labs",
			"status": [],
			"aliases": [],
			"related": [
				"alphafold",
				"alphago",
				"gemini"
			]
		},
		{
			"slug": "meta-ai",
			"term": "Meta AI",
			"definition": "Lab that released the open-weight Llama family.",
			"category": "labs",
			"status": [],
			"aliases": [],
			"related": ["llama"]
		},
		{
			"slug": "mistral-ai",
			"term": "Mistral AI",
			"definition": "French lab known for open-weight language models.",
			"category": "labs",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "deepseek",
			"term": "DeepSeek",
			"definition": "Chinese lab known for efficient open models and public reasoning-model recipes.",
			"category": "labs",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "xai",
			"term": "xAI",
			"definition": "Lab that created the Grok model family (vendor-specific).",
			"category": "labs",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": ["grok"]
		},
		{
			"slug": "chatgpt",
			"term": "ChatGPT",
			"definition": "OpenAI's chatbot product, launched November 2022 (vendor-specific).",
			"category": "labs",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": ["openai"]
		},
		{
			"slug": "claude",
			"term": "Claude",
			"definition": "Anthropic's AI assistant family (vendor-specific).",
			"category": "labs",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": ["anthropic"]
		},
		{
			"slug": "gemini",
			"term": "Gemini",
			"definition": "Google's multimodal model family (vendor-specific).",
			"category": "labs",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": ["multimodal-model"]
		},
		{
			"slug": "llama",
			"term": "Llama",
			"definition": "Meta's open-weight model family (vendor-specific).",
			"category": "labs",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "grok",
			"term": "Grok",
			"definition": "xAI's assistant and model family (vendor-specific).",
			"category": "labs",
			"status": ["vendor-specific"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "alphago",
			"term": "AlphaGo",
			"definition": "First AI system to defeat a world champion at Go (2016, DeepMind).",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "alphafold",
			"term": "AlphaFold",
			"definition": "DeepMind system for protein-structure prediction.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "turing-test",
			"term": "Turing Test",
			"definition": "Proposed test of machine intelligence (1950): whether a machine's conversation is indistinguishable from a human's.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "dartmouth-workshop",
			"term": "Dartmouth Workshop (1956)",
			"definition": "Conference where the term Artificial Intelligence was coined.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": ["ai"]
		},
		{
			"slug": "ai-winter",
			"term": "AI Winter",
			"definition": "Period of reduced funding and interest after over-promised results, notably in the 1970s and late 1980s.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "imagenet-moment",
			"term": "ImageNet Moment (2012)",
			"definition": "AlexNet's win on ImageNet, widely treated as the start of the modern deep-learning boom.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "attention-is-all-you-need",
			"term": "Attention Is All You Need (2017)",
			"definition": "Paper introducing the Transformer architecture.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": ["transformer", "attention-self-attention"]
		},
		{
			"slug": "scaling-era",
			"term": "Scaling Era (2020s)",
			"definition": "Period in which LLM capability grew largely through more data, parameters, and compute.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": ["parameters-weights"]
		},
		{
			"slug": "alan-turing",
			"term": "Alan Turing",
			"definition": "Pioneer of computation and the Turing Test.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": ["turing-test"]
		},
		{
			"slug": "john-mccarthy",
			"term": "John McCarthy",
			"definition": "Coined the term Artificial Intelligence and created Lisp.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": ["ai"]
		},
		{
			"slug": "marvin-minsky",
			"term": "Marvin Minsky",
			"definition": "Early AI researcher and cofounder of the MIT AI laboratory.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "geoffrey-hinton",
			"term": "Geoffrey Hinton",
			"definition": "Researcher central to backpropagation and deep learning; often grouped in the 'Godfathers of Deep Learning.'",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": ["backpropagation", "deep-learning"]
		},
		{
			"slug": "yann-lecun",
			"term": "Yann LeCun",
			"definition": "Pioneer of convolutional networks and representation learning.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": ["representation-learning"]
		},
		{
			"slug": "yoshua-bengio",
			"term": "Yoshua Bengio",
			"definition": "Pioneer of deep learning and sequence models.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": ["deep-learning"]
		},
		{
			"slug": "demis-hassabis",
			"term": "Demis Hassabis",
			"definition": "Cofounder of DeepMind.",
			"category": "history",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "prompt-engineering",
			"term": "Prompt Engineering",
			"definition": "Crafting inputs to get better outputs from a model. Useful, but not a substitute for evaluation and system design.",
			"category": "culture",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "stochastic-parrot",
			"term": "Stochastic Parrot",
			"definition": "Critique that LLMs stitch linguistic forms from training data without understanding.",
			"category": "culture",
			"status": ["informal"],
			"aliases": [],
			"related": ["training-data"]
		},
		{
			"slug": "token-smuggling",
			"term": "Token Smuggling",
			"definition": "Hiding meaning in unusual token sequences to evade filters.",
			"category": "culture",
			"status": ["informal"],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "glitch-tokens",
			"term": "Glitch Tokens",
			"definition": "Rare or malformed tokens that can produce erratic model behavior.",
			"category": "culture",
			"status": ["informal"],
			"aliases": [],
			"related": ["token"]
		},
		{
			"slug": "delphi-oracle-problem",
			"term": "Delphi / Oracle Problem",
			"definition": "Informal safety concern: you cannot fully trust what an AI reports about its own internals or intentions.",
			"category": "culture",
			"status": ["informal"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "paperclip-maximizer",
			"term": "Paperclip Maximizer",
			"definition": "Thought experiment about a misaligned agent pursuing a narrow goal to catastrophic extremes.",
			"category": "culture",
			"status": ["informal"],
			"aliases": [],
			"related": ["agent", "clip"]
		},
		{
			"slug": "shoggoth",
			"term": "Shoggoth",
			"definition": "Meme depicting the messy learned system behind a polite assistant persona.",
			"category": "culture",
			"status": ["informal"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "vibe-coding",
			"term": "Vibe Coding",
			"definition": "Informal term for building software by describing intent to an AI and accepting its output with minimal review.",
			"category": "culture",
			"status": ["informal"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "skill-issue",
			"term": "Skill Issue (AI Meme)",
			"definition": "Informal meme that blames AI failures on the user; often criticized as avoiding product responsibility.",
			"category": "culture",
			"status": ["informal"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "fast-takeoff-foom",
			"term": "Fast Takeoff / FOOM",
			"definition": "Hypothetical rapid self-improvement to superintelligence. Informal community terminology; debated.",
			"category": "culture",
			"status": [
				"hypothetical",
				"informal",
				"debated"
			],
			"aliases": ["FOOM"],
			"related": []
		},
		{
			"slug": "slow-takeoff",
			"term": "Slow Takeoff",
			"definition": "Hypothetical gradual, more controllable capability growth. Debated.",
			"category": "culture",
			"status": ["hypothetical", "debated"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "ai-doomer",
			"term": "AI Doomer",
			"definition": "Person who believes AI poses existential risk.",
			"category": "culture",
			"status": ["informal"],
			"aliases": [],
			"related": ["existential-risk"]
		},
		{
			"slug": "ai-optimist-accelerationist",
			"term": "AI Optimist / Accelerationist",
			"definition": "Person who prioritizes rapid AI development, often expecting large benefits.",
			"category": "culture",
			"status": ["informal"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "existential-risk",
			"term": "Existential Risk (X-Risk)",
			"definition": "Hypothetical threat to humanity's survival; scope and probability are contested.",
			"category": "culture",
			"status": ["hypothetical", "debated"],
			"aliases": ["X-Risk"],
			"related": []
		},
		{
			"slug": "orthogonality-thesis",
			"term": "Orthogonality Thesis",
			"definition": "Philosophical claim that intelligence and final goals can vary independently. Debated.",
			"category": "culture",
			"status": ["debated"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "instrumental-convergence",
			"term": "Instrumental Convergence",
			"definition": "Hypothesis that diverse agents may pursue similar sub-goals such as self-preservation and resources. Debated.",
			"category": "culture",
			"status": ["debated"],
			"aliases": [],
			"related": ["agent"]
		},
		{
			"slug": "goodhart-s-law",
			"term": "Goodhart's Law",
			"definition": "When a measure becomes a target, it ceases to be a good measure.",
			"category": "culture",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "singularity",
			"term": "Singularity",
			"definition": "Hypothetical point of runaway technological growth. Informal and contested.",
			"category": "culture",
			"status": ["hypothetical", "informal"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "intelligence-explosion",
			"term": "Intelligence Explosion",
			"definition": "Hypothetical recursive self-improvement of AI at increasing speed. Debated.",
			"category": "culture",
			"status": ["hypothetical", "debated"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "oracle-ai",
			"term": "Oracle AI",
			"definition": "Hypothetical AI designed only to answer questions, not to act in the world.",
			"category": "culture",
			"status": ["hypothetical"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "boxing",
			"term": "Boxing",
			"definition": "Hypothetical strategy of restricting an AI's interaction with the world.",
			"category": "culture",
			"status": ["hypothetical"],
			"aliases": [],
			"related": []
		},
		{
			"slug": "cooperative-ai",
			"term": "Cooperative AI",
			"definition": "Research on making AIs cooperate safely with humans and with each other.",
			"category": "culture",
			"status": [],
			"aliases": [],
			"related": []
		},
		{
			"slug": "asi-timelines",
			"term": "ASI Timelines",
			"definition": "Debated forecasts of when superintelligence might arrive; there is no scientific consensus.",
			"category": "culture",
			"status": ["debated"],
			"aliases": [],
			"related": []
		}
	]
};
var META = {
	title: data.title,
	subtitle: data.subtitle,
	version: data.version,
	compiled: data.compiled,
	termCount: data.terms.length
};
var TERMS = data.terms;
var BY_SLUG = new Map(TERMS.map((t) => [t.slug, t]));
var FEATURED_TERMS = [
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
	"speculative-decoding"
].map((s) => BY_SLUG.get(s)).filter((t) => Boolean(t));
var CATEGORY_COUNTS = TERMS.reduce((acc, t) => {
	acc[t.category] = (acc[t.category] ?? 0) + 1;
	return acc;
}, {});
var LAYER_COUNTS = CATEGORIES.reduce((acc, c) => {
	acc[c.layer] = (acc[c.layer] ?? 0) + (CATEGORY_COUNTS[c.id] ?? 0);
	return acc;
}, {});
function getTerm(slug) {
	return BY_SLUG.get(slug);
}
function termsInCategory(id) {
	return TERMS.filter((t) => t.category === id).sort((a, b) => a.term.localeCompare(b.term));
}
function relatedTerms(term, limit = 8) {
	const seen = /* @__PURE__ */ new Set([term.slug]);
	const out = [];
	const push = (t) => {
		if (!t || seen.has(t.slug)) return;
		seen.add(t.slug);
		out.push(t);
	};
	for (const slug of term.related) push(BY_SLUG.get(slug));
	if (out.length < limit) for (const other of TERMS) {
		if (other.related.includes(term.slug)) push(other);
		if (out.length >= limit) break;
	}
	if (out.length < limit) for (const other of TERMS) {
		if (other.category === term.category) push(other);
		if (out.length >= limit) break;
	}
	return out.slice(0, limit);
}
function letterOf(term) {
	const ch = term.term.replace(/^\W+/, "").charAt(0).toUpperCase();
	return /[A-Z]/.test(ch) ? ch : "#";
}
function termsByLetter() {
	const map = /* @__PURE__ */ new Map();
	const sorted = [...TERMS].sort((a, b) => a.term.localeCompare(b.term));
	for (const t of sorted) {
		const L = letterOf(t);
		const arr = map.get(L) ?? [];
		arr.push(t);
		map.set(L, arr);
	}
	return map;
}
function categoryOf(term) {
	return CATEGORY_BY_ID[term.category];
}
function scoreTerm(term, q) {
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
	if (parts.length > 1 && parts.every((p) => (name + " " + term.definition).includes(p))) return 18;
	return 0;
}
function searchTerms(q, limit = 40) {
	const query = q.trim();
	if (!query) return [];
	return TERMS.map((t) => ({
		t,
		s: scoreTerm(t, query)
	})).filter((x) => x.s > 0).sort((a, b) => b.s - a.s || a.t.term.localeCompare(b.t.term)).slice(0, limit).map((x) => x.t);
}
var STATUS_LABEL = {
	debated: "Debated",
	hypothetical: "Hypothetical",
	informal: "Informal",
	"vendor-specific": "Vendor-specific",
	historical: "Historical",
	emerging: "Emerging"
};
var LETTERS = [
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
	"#"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-OefNlZ7C.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-6 text-center text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-danger",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-xl font-medium",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-muted",
				children: errorMessage(error)
			})
		]
	});
}
var buttonVariants = cva("pressable inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:opacity-90",
			secondary: "bg-bg-subtle text-fg shadow-hairline hover:shadow-hairline-hover",
			ghost: "text-muted hover:bg-bg-subtle hover:text-fg",
			outline: "text-fg shadow-hairline hover:bg-bg-subtle hover:shadow-hairline-hover",
			danger: "bg-danger text-fg hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function PageHeader({ kicker, title, description, actions, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("border-b border-border py-10 sm:py-14", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-xs tracking-widest text-subtle uppercase",
			children: kicker
		}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl",
					children: title
				}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 text-base leading-relaxed text-muted",
					children: description
				}) : null]
			}), actions ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0",
				children: actions
			}) : null]
		})] })
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		kicker: "404",
		title: "Not in the dictionary",
		description: "That page or term isn’t here. Search the living reference, or start from the four layers."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
		className: "flex flex-wrap gap-3 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					children: "Home"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/browse",
					children: "Browse"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/az",
					children: "A–Z"
				})
			})
		]
	})] });
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-bg/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, showClose = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-24 right-4 left-4 z-50 mx-auto max-w-xl rounded-xl bg-bg-elevated p-6 text-fg shadow-overlay duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props,
	children: [children, showClose ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "pressable absolute top-3 right-3 rounded-sm p-2 text-muted hover:bg-bg-subtle hover:text-fg focus-visible:ring-2 focus-visible:ring-ring/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}) : null]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-lg font-medium tracking-tight", className),
		...props
	});
}
var SearchContext = (0, import_react.createContext)(null);
function SearchProvider({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const value = (0, import_react.useMemo)(() => ({
		open,
		setOpen
	}), [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchContext.Provider, {
		value,
		children
	});
}
function useSearchPalette() {
	const ctx = (0, import_react.useContext)(SearchContext);
	if (!ctx) throw new Error("useSearchPalette must be used within SearchProvider");
	return ctx;
}
function CommandSearch() {
	const { open, setOpen } = useSearchPalette();
	const navigate = useNavigate();
	const [query, setQuery] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen(!open);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, setOpen]);
	(0, import_react.useEffect)(() => {
		if (!open) setQuery("");
	}, [open]);
	const results = (0, import_react.useMemo)(() => {
		if (!query.trim()) return FEATURED_TERMS;
		return searchTerms(query, 20);
	}, [query]);
	function go(slug) {
		setOpen(false);
		navigate({
			to: "/term/$slug",
			params: { slug }
		});
	}
	function seeAll() {
		const q = query.trim();
		setOpen(false);
		navigate({
			to: "/search",
			search: { q }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			showClose: false,
			className: "overflow-hidden p-0 sm:top-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "sr-only",
				children: "Search the dictionary"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e, {
				shouldFilter: false,
				className: "bg-transparent",
				label: "Search the dictionary",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 border-b border-border px-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Input, {
						value: query,
						onValueChange: setQuery,
						placeholder: `Search ${META.termCount} terms`,
						className: "h-14 w-full bg-transparent text-base text-fg outline-none placeholder:text-subtle"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.List, {
					className: "max-h-80 overflow-y-auto p-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Empty, {
							className: "px-3 py-8 text-center text-sm text-muted",
							children: "No matching terms. Try a shorter query, or browse by category."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(_e.Group, {
							heading: query.trim() ? "Results" : "Start here",
							children: results.map((term) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
								value: term.slug,
								keywords: [term.term, ...term.aliases],
								onSelect: () => go(term.slug),
								className: "flex cursor-pointer items-baseline justify-between gap-3 rounded-sm px-3 py-2.5 text-sm data-[selected=true]:bg-bg-subtle",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-fg",
									children: term.term
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 font-mono text-xs text-subtle uppercase",
									children: CATEGORY_BY_ID[term.category].name
								})]
							}, term.slug))
						}),
						query.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(_e.Item, {
							value: "__see-all",
							onSelect: seeAll,
							className: "mt-1 cursor-pointer rounded-sm px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-bg-subtle data-[selected=true]:text-fg",
							children: [
								"See all matches for “",
								query.trim(),
								"”"
							]
						}) : null
					]
				})]
			})]
		})
	});
}
function SearchTrigger({ size = "header", className }) {
	const { setOpen } = useSearchPalette();
	const [mod, setMod] = (0, import_react.useState)("Ctrl");
	(0, import_react.useEffect)(() => {
		setMod(/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl");
	}, []);
	if (size === "hero") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		className: cn("pressable flex h-14 w-full items-center gap-3 rounded-lg bg-bg-elevated px-4 text-left shadow-hairline hover:shadow-hairline-hover", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5 text-subtle" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex-1 text-base text-subtle",
				children: [
					"Search ",
					META.termCount,
					" terms"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("kbd", {
				className: "hidden rounded-xs bg-bg-subtle px-2 py-1 font-mono text-xs text-muted shadow-hairline sm:inline-block",
				children: [mod, "K"]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => setOpen(true),
		"aria-label": "Search",
		className: cn("pressable inline-flex h-11 items-center gap-2 rounded-sm px-3 text-sm text-muted shadow-hairline hover:bg-bg-subtle hover:text-fg hover:shadow-hairline-hover", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "hidden sm:inline",
				children: "Search"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("kbd", {
				className: "hidden rounded-xs bg-bg-subtle px-1.5 py-0.5 font-mono text-xs text-subtle md:inline-block",
				children: [mod, "K"]
			})
		]
	});
}
var NAV = [
	{
		to: "/browse",
		label: "Browse"
	},
	{
		to: "/levels",
		label: "Scale"
	},
	{
		to: "/az",
		label: "A–Z"
	},
	{
		to: "/saved",
		label: "Saved"
	},
	{
		to: "/about",
		label: "About"
	}
];
var MOBILE_NAV = [
	{
		to: "/",
		label: "Home",
		icon: Library,
		exact: true
	},
	{
		to: "/browse",
		label: "Browse",
		icon: Layers,
		exact: false
	},
	{
		to: "/levels",
		label: "Scale",
		icon: Milestone,
		exact: false
	},
	{
		to: "/saved",
		label: "Saved",
		icon: Bookmark,
		exact: false
	}
];
function isActive(pathname, to, exact) {
	if (exact || to === "/") return pathname === to;
	return pathname === to || pathname.startsWith(`${to}/`);
}
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "flex h-16 items-center gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "group flex min-w-0 items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-lg font-medium tracking-tight text-fg",
								children: "AI"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm tracking-wide text-muted uppercase",
								children: "Dictionary"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ml-4 hidden items-center gap-1 lg:flex",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: cn("rounded-sm px-3 py-2 text-sm transition-colors duration-150", isActive(pathname, item.to) ? "text-fg" : "text-muted hover:text-fg"),
								children: item.label
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchTrigger, {})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "flex-1 pb-24 lg:pb-0",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "hidden border-t border-border py-10 lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
					className: "flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base text-fg",
						children: "The AI Dictionary"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 max-w-lg leading-relaxed",
						children: [
							"Version ",
							META.version,
							" · ",
							META.termCount,
							" terms · a living reference, not a permanent canon."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-fg",
								children: "About"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/az",
								className: "hover:text-fg",
								children: "A–Z"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/levels",
								className: "hover:text-fg",
								children: "Scale"
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				"aria-label": "Primary",
				className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-4",
					children: MOBILE_NAV.map((item) => {
						const Icon = item.icon;
						const active = isActive(pathname, item.to, item.exact);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							className: cn("flex h-16 flex-col items-center justify-center gap-1 text-xs", active ? "text-fg" : "text-muted"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: 1.5
							}), item.label]
						}) }, item.to);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommandSearch, {})
		]
	});
}
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 rounded-sm bg-bg-subtle px-2.5 py-1.5 text-xs text-fg shadow-hairline", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
var styles_default = "/assets/styles-Cs1cvwvX.css";
var APP_NAME = "The AI Dictionary";
var Route$9 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "A practical reference for understanding and building with modern AI — separating established technical concepts from contested future claims."
			},
			{
				name: "theme-color",
				content: "#0b0b0a"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		className: "antialiased",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
				delayDuration: 200,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) })
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-CIu_CwOZ.mjs");
var Route$8 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	head: () => ({ meta: [{ title: "The AI Dictionary" }, {
		name: "description",
		content: POSITIONING
	}] })
});
var $$splitComponentImporter$7 = () => import("./about-4PuzKLj8.mjs");
var Route$7 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: "About — The AI Dictionary" }] })
});
var $$splitComponentImporter$6 = () => import("./az-BbmhCP5O.mjs");
var Route$6 = createFileRoute("/az")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: "A–Z — The AI Dictionary" }] })
});
var $$splitComponentImporter$5 = () => import("./browse-BKa5i21J.mjs");
var Route$5 = createFileRoute("/browse")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: "Browse — The AI Dictionary" }] })
});
var $$splitComponentImporter$4 = () => import("./levels-CDAKPVQK.mjs");
var Route$4 = createFileRoute("/levels")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "AI level scale — The AI Dictionary" }] })
});
var $$splitComponentImporter$3 = () => import("./saved-cfo9-MB1.mjs");
var Route$3 = createFileRoute("/saved")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Saved — The AI Dictionary" }] })
});
var $$splitComponentImporter$2 = () => import("./search-CH_kteIU.mjs");
var Route$2 = createFileRoute("/search")({
	validateSearch: (search) => ({ q: typeof search.q === "string" ? search.q : "" }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Search — The AI Dictionary" }] })
});
var $$splitComponentImporter$1 = () => import("./category._id-Dpt-Gk6U.mjs");
var Route$1 = createFileRoute("/category/$id")({
	loader: ({ params }) => {
		if (!isCategoryId(params.id)) throw notFound();
		const category = CATEGORY_BY_ID[params.id];
		return {
			category,
			layer: LAYER_BY_ID[category.layer],
			terms: termsInCategory(category.id)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.category.name} — The AI Dictionary` : "Category — The AI Dictionary" }] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./term._slug-C2jbm_2O.mjs");
var Route = createFileRoute("/term/$slug")({
	loader: ({ params }) => {
		const term = getTerm(params.slug);
		if (!term) throw notFound();
		const category = categoryOf(term);
		return {
			term,
			category,
			layer: LAYER_BY_ID[category.layer],
			related: relatedTerms(term)
		};
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData ? `${loaderData.term.term} — The AI Dictionary` : "Term — The AI Dictionary" }, {
		name: "description",
		content: loaderData?.term.definition ?? ""
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute: Route$7.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$9
	}),
	AzRoute: Route$6.update({
		id: "/az",
		path: "/az",
		getParentRoute: () => Route$9
	}),
	BrowseRoute: Route$5.update({
		id: "/browse",
		path: "/browse",
		getParentRoute: () => Route$9
	}),
	LevelsRoute: Route$4.update({
		id: "/levels",
		path: "/levels",
		getParentRoute: () => Route$9
	}),
	SavedRoute: Route$3.update({
		id: "/saved",
		path: "/saved",
		getParentRoute: () => Route$9
	}),
	SearchRoute: Route$2.update({
		id: "/search",
		path: "/search",
		getParentRoute: () => Route$9
	}),
	CategoryIdRoute: Route$1.update({
		id: "/category/$id",
		path: "/category/$id",
		getParentRoute: () => Route$9
	}),
	TermSlugRoute: Route.update({
		id: "/term/$slug",
		path: "/term/$slug",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { LAYERS as C, cn as D, WHERE_WE_ARE as E, EDITORIAL_NOTE as S, POSITIONING as T, termsByLetter as _, SearchTrigger as a, CHANGELOG as b, CATEGORY_COUNTS as c, LETTERS as d, META as f, searchTerms as g, getTerm as h, Route$2 as i, FEATURED_TERMS as l, TERMS as m, Route as n, PageHeader as o, STATUS_LABEL as p, Route$1 as r, Button as s, router_exports as t, LAYER_COUNTS as u, CATEGORIES as v, LEVELS as w, Container as x, CATEGORY_BY_ID as y };
