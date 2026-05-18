export const navigationSteps = [
  { id: "hero", label: "Summary", iconName: "book-open" as const, href: "#hero" },
  { id: "impact", label: "Impact", iconName: "trending-up" as const, href: "#impact" },
  { id: "problem", label: "Problem", iconName: "target" as const, href: "#problem" },
  { id: "system", label: "Solution", iconName: "layers" as const, href: "#system" },
  { id: "validated", label: "Validation", iconName: "flask" as const, href: "#validated" },
  { id: "reflection", label: "Reflection", iconName: "book-open" as const, href: "#reflection" },
]

export const emptyStatesSteps = [
  { id: "hero", label: "Summary", iconName: "book-open" as const, href: "#hero" },
  { id: "impact", label: "Impact", iconName: "trending-up" as const, href: "#impact" },
  { id: "problem", label: "Problem", iconName: "target" as const, href: "#problem" },
  { id: "solution", label: "Solution", iconName: "layers" as const, href: "#solution" },
  { id: "validation", label: "Metrics", iconName: "flask" as const, href: "#validation" },
  { id: "reflection", label: "Reflection", iconName: "book-open" as const, href: "#reflection" },
]

export const contentQualitySteps = [
  { id: "hero", label: "Summary", iconName: "book-open" as const, href: "#hero" },
  { id: "impact", label: "Impact", iconName: "trending-up" as const, href: "#impact" },
  { id: "problem", label: "Problem", iconName: "target" as const, href: "#problem" },
  { id: "system", label: "Framework", iconName: "layers" as const, href: "#system" },
  { id: "usage", label: "Use", iconName: "flask" as const, href: "#usage" },
  { id: "reflection", label: "Reflection", iconName: "book-open" as const, href: "#reflection" },
]

export const policyBuilderSteps = [
  { id: "hero", label: "Summary", iconName: "book-open" as const, href: "#hero" },
  { id: "impact", label: "Impact", iconName: "trending-up" as const, href: "#impact" },
  { id: "problem", label: "Problem", iconName: "target" as const, href: "#problem" },
  { id: "solution", label: "Solution", iconName: "layers" as const, href: "#solution" },
  { id: "alignment", label: "Alignment", iconName: "flask" as const, href: "#alignment" },
  { id: "reflection", label: "Reflection", iconName: "book-open" as const, href: "#reflection" },
]

export const retrievalSteps = [
  { id: "hero", label: "Summary", iconName: "book-open" as const, href: "#hero" },
  { id: "impact", label: "Impact", iconName: "trending-up" as const, href: "#impact" },
  { id: "problem", label: "Problem", iconName: "target" as const, href: "#problem" },
  { id: "solution", label: "Solution", iconName: "layers" as const, href: "#solution" },
  { id: "metrics", label: "Metrics", iconName: "flask" as const, href: "#metrics" },
  { id: "reflection", label: "Reflection", iconName: "book-open" as const, href: "#reflection" },
]

export const emptyStatesImpact = [
  {
    title: "Increased onboarding completion by up to 42.8%",
    body: "Users who engaged with onboarding education completed setup flows at significantly higher rates than users who experienced the original baseline, with some onboarding paths improving by more than 40%.",
  },
  {
    title: "Increased prerequisite task completion by 173%",
    body: "Users were substantially more likely to complete supporting setup tasks when the product clearly explained how those tasks connected to their larger goal.",
  },
  {
    title: "Established a scalable onboarding framework",
    body: "Created reusable content patterns and guidelines for onboarding-focused empty states, including recommendations for value framing, prerequisites, action hierarchy, and contextual education.",
  },
  {
    title: "Introduced measurable onboarding experimentation",
    body: "Partnered with product, design, and engineering to implement analytics instrumentation, event tracking, and A/B testing that connected onboarding education directly to user success metrics.",
  },
]

export const contentQualityImpact = [
  {
    title: "Improved dashboard content quality by 34.8%",
    body: "Initial testing across enterprise dashboard page descriptions increased the average quality score from 7.42 to 10 after revisions generated from the system's recommendations.",
  },
  {
    title: "Standardized UX writing guidance across multiple content types",
    body: "The framework expanded beyond UI copy to support error messages, API descriptions, changelogs, customer emails, and blog content.",
  },
  {
    title: "Reduced dependency on manual UX writing reviews",
    body: "The system provided immediate, actionable feedback directly to teams, enabling faster iteration and reducing review bottlenecks for urgent releases.",
  },
  {
    title: "Created an operational system for measuring content quality",
    body: "The project transformed UX writing guidance from subjective review feedback into a repeatable scoring framework tied to terminology, readability, tone, and usability standards.",
  },
]

export const policyBuilderImpact = [
  {
    title: "Unified fragmented workflows",
    body: "Consolidated separate DNS, HTTP, and Network policy experiences into a single workflow aligned to how administrators naturally think about policy creation.",
  },
  {
    title: "Reduced cognitive overhead",
    body: "Introduced a persistent If / Then structure that kept conditions, actions, and downstream settings visible simultaneously.",
  },
  {
    title: "Accelerated organizational momentum",
    body: "Used AI-assisted prototyping to rapidly transform abstract UX concepts into interactive workflows stakeholders could immediately react to.",
  },
  {
    title: "Improved policy validation",
    body: "Added visual previews, natural-language summaries, and advanced expression views to help users better understand policy behavior before deployment.",
  },
]

export const retrievalImpact = [
  {
    title: "Reduced major AI inaccuracies by up to 83%",
    body: "After restructuring documentation using the chunkability framework, several test sets saw major inaccuracies drop from 6/10 responses to as low as 0-1/10 across multiple LLMs.",
  },
  {
    title: "Improved complete-answer rates from 0/10 to 7/10",
    body: "In one enterprise connectivity test set, models that initially failed nearly every retrieval question became consistently reliable after structural documentation updates.",
  },
  {
    title: "Created a reusable framework for AI-readable documentation",
    body: "Built a chunkability audit system that evaluated documentation against retrieval-focused criteria like identity persistence, table survivability, scope locality, and boundary clarity.",
  },
  {
    title: "Reframed hallucinations as information architecture problems",
    body: "The project demonstrated that many unreliable AI responses were caused less by missing information and more by documentation structure that failed under fragmented retrieval.",
  },
]

export const impactHighlights = [
  {
    title: "Validated the new structure at scale",
    body: "Led multi-phase IA research with 393 survey responses, 273 tree test participants, qualitative walkthroughs, and statistically significant validation testing.",
  },
  {
    title: "Reframed the navigation model",
    body: "Moved the dashboard from product-centric organization toward observability, solution overview, use-case management, global configuration, and global settings.",
  },
  {
    title: "Created scalable governance",
    body: "Established principles for top-level additions, child pages, reusable systems, settings placement, and future feature expansion.",
  },
  {
    title: "Made language more literal",
    body: "Reduced reliance on acronyms, internal product names, abstract concepts, and labels that required company-specific context.",
  },
]

export const iaLayers = [
  {
    layer: "Layer 1",
    label: "Observability",
    question: "What should I know about my environment?",
    items: ["Overview", "Insights & Logs"],
  },
  {
    layer: "Layer 2",
    label: "Object ecosystem",
    question: "What am I protecting and connecting?",
    items: ["Team & Resources", "Networks"],
  },
  {
    layer: "Layer 3",
    label: "Use-case management",
    question: "How do I configure security workflows?",
    items: ["Networks", "Access controls", "Traffic policies", "Cloud and SaaS findings", "Email security"],
  },
  {
    layer: "Layer 4",
    label: "Global configurations",
    question: "What reusable systems support multiple workflows?",
    items: ["Browser isolation", "Reusable components", "Integrations"],
  },
  {
    layer: "Layer 5",
    label: "Global settings",
    question: "How do I manage the overall platform experience?",
    items: ["Settings"],
  },
]

