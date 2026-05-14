import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from "lucide-react"
import PortfolioProcessNavigation from "@/components/PortfolioProcessNavigation"
import PortfolioPieceClient from "@/components/PortfolioPieceClient"

// Portfolio piece data - in a real app this would come from a CMS or database
const portfolioPieces = {
  'zero-trust-navigation': {
    title: 'Zero Trust Navigation Overhaul',
    subtitle: 'Enterprise navigation system redesign',
    problem: 'A powerful product was becoming structurally overwhelming. As our Zero Trust suite expanded, navigation grew organically. Labels reflected our org chart instead of user intent. Research signals were clear: <br /><br /><ul><li> Users struggled to predict where to find key workflows </li><li> Cross-product features lacked cohesion </li><li> Expansion without strategy risked long-term fragmentation </li></ul>',
    impact: [
      {
        header: 'Statistically validated structure',
        description: 'Ran a large-scale survey and tree test to identify structural misalignment and validate a new model with statistical significance.'
      },
      {
        header: 'Cross-functional alignment at scale',
        description: 'Built consensus across 30+ product, design, and engineering stakeholders on a unified IA direction.'
      },
      {
        header: 'A future-proof navigation strategy',
        description: 'Established enduring principles and evaluation tests to prevent future drift.'
      },
      {
        header: 'Sustainable governance model',
        description: 'Enabled long-term adherence through guidance frameworks and an AI-based helper for evaluating new navigation proposals.'
      }
    ],
    process: [
      {
        phase: 'Diagnose with data',
        description: 'Validated navigation friction through survey data and quantitative tree testing.',
        slides: [
          { title: 'The Challenge', content: 'Navigation had grown organically. Labels reflected our org chart instead of user intent.' },
          { title: 'Research Approach', content: 'Ran large-scale survey and tree test to identify structural misalignment.' },
          { title: 'Key Findings', content: 'Users struggled to predict where to find key workflows. Cross-product features lacked cohesion.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      },
      {
        phase: 'Define navigation principles',
        description: 'Established strategy guardrails to align product decisions beyond this project.',
        slides: [
          { title: 'Strategy Framework', content: 'Established enduring principles to guide navigation decisions.' },
          { title: 'Alignment Process', content: 'Built consensus across 30+ stakeholders on unified IA direction.' },
          { title: 'Future-Proofing', content: 'Created evaluation tests to prevent future structural drift.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      },
      {
        phase: 'Design in layers',
        description: 'Created a multi-layered IA model that clarified product intent.',
        slides: [
          { title: 'IA Model', content: 'Designed a multi-layered structure focusing on use cases over org chart.' },
          { title: 'User-Centric Design', content: 'Reorganized around user intent rather than product silos.' },
          { title: 'Validation', content: 'Tested new structure with users to ensure findability improved.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      },
      {
        phase: 'Operationalize & Scale',
        description: 'Made it buildable — and sustainable.',
        slides: [
          { title: 'Implementation Strategy', content: 'Created phased rollout plan across all Zero Trust products.' },
          { title: 'Governance Model', content: 'Established AI-based helper for evaluating new navigation proposals.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      }
    ],
    beforeAfter: undefined,
    tags: ['UX Strategy', 'Information architecture', 'User research'],
    nextProject: 'empty-states',
    prevProject: null
  },
  'zero-trust-onboarding': {
    title: 'Zero Trust Onboarding',
    subtitle: 'Comprehensive onboarding strategy for Zero Trust security platform',
    problem: "The Zero Trust security platform had a steep learning curve, resulting in poor user adoption and high churn rates. New users were overwhelmed by complex security concepts and couldn't understand the value proposition. The onboarding process did not have personalization and failed to address different user personas's needs.",
    impact: [
      {
        header: 'Improved user adoption rates by 75% within 6 months',
        description: 'Significant increase in user engagement and platform adoption through streamlined onboarding experience.'
      },
      {
        header: 'Reduced onboarding time from 45 minutes to 15 minutes',
        description: 'Dramatic time savings for new users getting started with the Zero Trust platform.'
      },
      {
        header: 'Decreased support tickets by 40%',
        description: 'Reduced burden on support team through clearer onboarding guidance and self-service resources.'
      },
      {
        header: 'Increased user confidence in security features',
        description: 'Users better understand and trust the security features they need to configure.'
      }
    ],
    process: [
      {
        phase: 'User Research',
        description: 'Interviewed 30+ users across different roles and experience levels.',
        slides: [
          { title: 'User Interviews', content: 'Interviewed 30+ users across different roles and experience levels to understand pain points.' },
          { title: 'Data Analysis', content: 'Analyzed support tickets and user feedback to identify common onboarding barriers.' },
          { title: 'Personas', content: 'Created detailed user personas and journey maps to guide design decisions.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      },
      {
        phase: 'Strategy Development',
        description: 'Developed personalized onboarding framework based on user personas.',
        slides: [
          { title: 'Personalization Framework', content: 'Developed framework to tailor onboarding based on user persona and role.' },
          { title: 'Progressive Disclosure', content: 'Created strategy to introduce complex concepts gradually rather than all at once.' },
          { title: 'Success Metrics', content: 'Defined clear KPIs to measure onboarding effectiveness and user adoption.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      },
      {
        phase: 'Content & Design',
        description: 'Created comprehensive onboarding content including tutorials and walkthroughs.',
        slides: [
          { title: 'Tutorial Design', content: 'Created interactive tutorials and walkthroughs to guide users through setup.' },
          { title: 'Contextual Help', content: 'Designed contextual help system providing guidance when users need it most.' },
          { title: 'Gamification', content: 'Added gamification elements to increase engagement and completion rates.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      },
      {
        phase: 'Testing & Iteration',
        description: 'Conducted extensive usability testing with prototype.',
        slides: [
          { title: 'Usability Testing', content: 'Conducted extensive testing with prototypes across user groups.' },
          { title: 'Iterative Refinement', content: 'Iterated based on user feedback and behavioral analytics.' },
          { title: 'Analytics Integration', content: 'Implemented tracking to measure onboarding funnel effectiveness.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      }
    ],
    beforeAfter: undefined,
    tags: ['Onboarding', 'User Journey', 'Security', 'Research'],
    nextProject: 'overview-pages',
    prevProject: 'zero-trust-navigation'
  },
  'overview-pages': {
    title: 'Overview Pages',
    subtitle: 'Bridging the gap between product discovery and proven value',
    problem: 'Behavioral analytics revealed a "cold start" friction point: users were clicking straight down every item in the left-hand side-navigation before beginning their first configuration. The lack of a "front door" meant users struggled to bridge the gap between initial intent and successful first-use, resulting in stalled onboarding and underutilized features.',
    impact: [
      {
        header: '33-43% more likely to save key configuration',
        description: 'Users starting from an Overview page showed significantly higher conversion rates.'
      },
      {
        header: '50% reduction in time-to-value',
        description: 'Median time to add a first device decreased from 97 minutes to 47 minutes.'
      },
      {
        header: '15% increase in monthly activation rates',
        description: 'Over 7,000 users added a device in the first 90 days after launch.'
      },
      {
        header: '75% higher retention rates',
        description: 'Users who engaged with an overview page were significantly more likely to continue using the product a month later.'
      }
    ],
    process: [
      {
        phase: 'Data Analysis',
        description: 'Analyzed usage data from 10,000+ users to understand information needs.',
        slides: [
          { title: 'The Problem Discovery', content: `• Insight: Behavioral analytics revealed users were clicking directly into deep side-navigation menus before completing foundational configurations. Meanwhile qualitative navigation research revealed users did not understand how products connected.
• Friction: This "straight-to-nav" behavior bypassed critical context, leading to a "cold start" experience where users felt overwhelmed by complex tools.
• Goal: Transition from a "hunt-and-peck" navigation style to a flatter, intent-based structure.` },
          { title: 'Card Sorting', content: 'Conducted exercises with 50+ users to validate information architecture.' },
          { title: 'Insights', content: 'Discovered key pain points in finding information across product dashboards.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      },
      {
        phase: 'User Research',
        description: 'Conducted contextual inquiry sessions with 40+ users across different roles.',
        slides: [
          { title: 'Contextual Inquiry', content: 'Conducted sessions with 40+ users across different roles and contexts.' },
          { title: 'Task Analysis', content: 'Created detailed task analysis to understand user workflows and goals.' },
          { title: 'Journey Maps', content: 'Mapped user journeys to identify friction points and opportunities.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      },
      {
        phase: 'Design Strategy',
        description: 'Developed comprehensive dashboard design strategy.',
        slides: [
          { title: 'Strategy Document', content: 'Developed comprehensive design strategy for dashboard standardization.' },
          { title: 'Component Library', content: 'Created modular component library for consistent dashboard elements.' },
          { title: 'Design System', content: 'Defined responsive patterns and standards for 8 products.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      },
      {
        phase: 'Implementation',
        description: 'Rolling implementation across 8 products with A/B testing.',
        slides: [
          { title: 'Rollout Plan', content: 'Created phased rollout across 8 products to minimize disruption.' },
          { title: 'A/B Testing', content: 'Ran experiments to validate improvements in task completion.' },
          { title: 'Monitoring', content: 'Implemented continuous monitoring based on feedback and metrics.' }
        ],
        images: ['/api/placeholder/800/600', '/api/placeholder/800/600']
      }
    ],
    beforeAfter: undefined,
    tags: ['Dashboard', 'Information Architecture', 'Data Visualization', 'UX Strategy'],
    nextProject: 'empty-states',
    prevProject: 'zero-trust-onboarding'
  },
  'empty-states': {
    title: 'Empty States Strategy',
    subtitle: "Educational empty state framework for Cloudflare's Zero Trust dashboard",
    problem: 'When users landed on tool-level pages within Cloudflare Zero Trust dashboard for the first time, they encountered generic empty states that provided only brief tool overviews. The dashboard failed to provide users with a full scope of what individual tools do, why they should configure them, or how to get started, leading to poor user engagement and adoption.',
    impact: [
      {
        header: 'Increased user success rates by 10.5% after onboarding',
        description: 'More users successfully complete initial setup and configuration tasks.'
      },
      {
        header: 'Improved user engagement with first-time configuration',
        description: 'Users are more likely to engage with and complete initial configuration steps.'
      },
      {
        header: 'Reduced support queries about getting started',
        description: 'Fewer users need help understanding how to get started with tools.'
      },
      {
        header: 'Enhanced user understanding of tool capabilities',
        description: 'Better comprehension of what each tool does and why it matters.'
      }
    ],
    beforeAfter: {
      before: '/empty-states-before.png',
      after: '/empty-states-after.png'
    },
    process: [
      {
        phase: 'Phase 1: A/B Testing',
        description: 'Selected Access applications tool for controlled A/B test.',
        slides: [
          { title: 'Test Design', content: 'Selected Access applications tool for controlled A/B test comparing traditional vs educational empty states.' },
          { title: 'Enhancements', content: 'Added value proposition, summary, educational resources, prerequisites, and recommended actions.' },
          { title: 'Setup', content: 'Configured test to measure success rates and user engagement metrics.' }
        ],
        images: ['test-tube', 'bar-chart']
      },
      {
        phase: 'Data Analysis & Results',
        description: 'Analyzed A/B test results showing significant improvements.',
        slides: [
          { title: 'Results', content: 'Analyzed results showing 10.5% improvement in user success rates across all application types.' },
          { title: 'Validation', content: 'Validated hypothesis that educational content drives better user outcomes.' },
          { title: 'Reporting', content: 'Presented findings to leadership to secure buy-in for broader implementation.' }
        ],
        images: ['trending-up', 'users']
      },
      {
        phase: 'Cross-Functional Implementation',
        description: 'Led cross-functional effort to implement across all tool pages.',
        slides: [
          { title: 'Collaboration', content: 'Led effort with product, design, and engineering teams through SHIP process.' },
          { title: 'Rollout Strategy', content: 'Prioritized tools based on user traffic and business impact.' },
          { title: 'Quality Assurance', content: 'Ensured consistent implementation across all tool-level pages.' }
        ],
        images: ['team', 'settings']
      },
      {
        phase: 'Content Guidelines Development',
        description: 'Developed comprehensive content guidelines for designers.',
        slides: [
          { title: 'Framework', content: 'Created guidelines with three objectives: Educate, Motivate, and Empower.' },
          { title: 'Standards', content: 'Defined standards for value props, descriptions, features, CTAs, and recommendations.' },
          { title: 'Documentation', content: 'Published guidelines for Content Designers and Product Designers company-wide.' }
        ],
        images: ['book-open', 'checklist']
      }
    ],
    tags: ['Content Strategy', 'User Engagement', 'First-Time Experience', 'UX Writing', 'A/B Testing'],
    nextProject: 'clue-index',
    prevProject: 'zero-trust-navigation'
  },
  'clue-index': {
    title: 'The PCX CLUE Index',
    subtitle: 'AI-assisted infrastructure for scalable UX writing quality',
    problem: "As Cloudflare's product suite scaled, customer-facing content became increasingly inconsistent across dashboards, APIs, emails, and onboarding flows. UX writing reviews could not keep pace with the speed of product development, and emerging AI-generated content introduced even more variability in tone, terminology, and clarity.",
    impact: [
      {
        header: 'Improved dashboard content quality by 34.8%',
        description: 'Initial testing across Zero Trust page descriptions increased the average CLUE score from 7.42 to 10 after revisions generated from the system recommendations.'
      },
      {
        header: 'Standardized UX writing guidance across multiple content types',
        description: 'Expanded the framework beyond UI copy to support error messages, API descriptions, changelogs, customer emails, and blog content.'
      },
      {
        header: 'Reduced dependency on manual UX writing reviews',
        description: 'Provided immediate, actionable feedback directly to teams, enabling faster iteration and reducing review bottlenecks for urgent releases.'
      },
      {
        header: 'Created an operational system for measuring content quality',
        description: 'Transformed UX writing guidance from subjective review feedback into a repeatable scoring framework tied to terminology, readability, tone, and usability standards.'
      }
    ],
    process: [
      {
        phase: 'Research & Framework Design',
        description: 'Researched existing UX measurement approaches and designed framework.',
        slides: [
          { title: 'Research', content: 'Researched existing UX measurement approaches across industry.' },
          { title: 'Gap Analysis', content: 'Identified gaps in current measurement practices within the organization.' },
          { title: 'Framework Design', content: 'Designed comprehensive framework covering customer lifecycle stages.' }
        ],
        images: ['users', 'bar-chart']
      },
      {
        phase: 'Tool Development',
        description: 'Built tools and dashboards for tracking CLUE Index metrics.',
        slides: [
          { title: 'Metric Definition', content: 'Defined clear, actionable metrics for each lifecycle stage.' },
          { title: 'Dashboard Design', content: 'Created intuitive dashboards for teams to track their metrics.' },
          { title: 'Integration', content: 'Integrated with existing analytics and data infrastructure.' }
        ],
        images: ['settings', 'trending-up']
      },
      {
        phase: 'Training & Adoption',
        description: 'Trained product teams on using CLUE Index for decision making.',
        slides: [
          { title: 'Workshops', content: 'Conducted workshops across product teams on framework usage.' },
          { title: 'Documentation', content: 'Created comprehensive documentation and playbooks.' },
          { title: 'Success Stories', content: 'Shared early wins to drive adoption across teams.' }
        ],
        images: ['book-open', 'team']
      }
    ],
    beforeAfter: undefined,
    tags: ['AI-assisted UX', 'Content quality', 'UX Writing Systems', 'Measurement'],
    nextProject: 'gateway-policy-builder',
    prevProject: 'empty-states'
  },
  'gateway-policy-builder': {
    title: 'Gateway Firewall Policy Builder',
    subtitle: 'Building a policy builder for how administrators actually think',
    problem: 'The Gateway firewall policy builder was a heavily used Zero Trust surface, but administrators had to configure conditional DNS, HTTP, and Network policies through fragmented, scroll-heavy workflows shaped around implementation details instead of user intent.',
    impact: [
      {
        header: 'Unified fragmented workflows',
        description: 'Consolidated separate DNS, HTTP, and Network policy experiences into a single workflow aligned to how administrators naturally think about policy creation.'
      },
      {
        header: 'Reduced cognitive overhead',
        description: 'Introduced a persistent If / Then structure that kept conditions, actions, and downstream settings visible simultaneously.'
      },
      {
        header: 'Accelerated organizational momentum',
        description: 'Used AI-assisted prototyping to rapidly transform abstract UX concepts into interactive workflows stakeholders could immediately react to.'
      },
      {
        header: 'Improved policy validation',
        description: 'Added visual previews, natural-language summaries, and advanced expression views to help users better understand policy behavior before deployment.'
      }
    ],
    process: [],
    beforeAfter: undefined,
    tags: ['Enterprise UX', 'Workflow Design', 'AI Prototyping', 'Zero Trust'],
    nextProject: 'documentation-for-retrieval',
    prevProject: 'clue-index'
  },
  'documentation-for-retrieval': {
    title: 'Designing Documentation for Retrieval',
    subtitle: 'Designing documentation for retrieval, not just reading',
    problem: 'As Cloudflare expanded AI-assisted support and retrieval workflows, documentation quality became increasingly difficult to evaluate. Pages that worked well for human readers often produced incomplete or misleading AI responses once ingested into retrieval systems.',
    impact: [
      {
        header: 'Reduced major AI inaccuracies by up to 83%',
        description: 'After restructuring documentation using the chunkability framework, several test sets saw major inaccuracies drop from 6/10 responses to as low as 0-1/10 across multiple LLMs.'
      },
      {
        header: 'Improved complete-answer rates from 0/10 to 7/10',
        description: 'In one Cloudflare One connectivity test set, models that initially failed nearly every retrieval question became consistently reliable after structural documentation updates.'
      },
      {
        header: 'Created a reusable framework for AI-readable documentation',
        description: 'Built a chunkability audit system that evaluated documentation against retrieval-focused criteria like identity persistence, table survivability, scope locality, and boundary clarity.'
      },
      {
        header: 'Reframed hallucinations as information architecture problems',
        description: 'Demonstrated that many unreliable AI responses were caused less by missing information and more by documentation structure that failed under fragmented retrieval.'
      }
    ],
    process: [],
    beforeAfter: undefined,
    tags: ['AI Content Strategy', 'Documentation IA', 'RAG', 'Information Architecture'],
    nextProject: null,
    prevProject: 'gateway-policy-builder'
  },
  'cloudy-ai': {
    title: 'Cloudy AI',
    subtitle: 'UX strategy for AI-powered cloud management platform',
    problem: 'The AI-powered cloud management platform was too complex for non-technical users, limiting adoption to only expert users. Users struggled to understand AI recommendations and trust the system\'s suggestions. The interface failed to provide adequate explanations and control over AI-driven decisions.',
    impact: [
      {
        header: 'Increased user adoption by 200% among non-technical users',
        description: 'Dramatic increase in platform adoption by users without technical backgrounds.'
      },
      {
        header: 'Improved user trust in AI recommendations',
        description: 'Users now trust and act on AI recommendations more frequently.'
      },
      {
        header: 'Reduced decision-making time by 60%',
        description: 'Users make faster decisions with AI assistance and clear explanations.'
      },
      {
        header: 'Enhanced user satisfaction scores',
        description: 'Higher satisfaction due to improved AI transparency and user control.'
      }
    ],
    process: [
      {
        phase: 'Research & Discovery',
        description: 'Conducted research with technical and non-technical users to understand AI interaction patterns and trust barriers.',
        slides: [
          { title: 'User Research', content: 'Interviewed technical and non-technical users to understand AI interaction patterns.' },
          { title: 'Trust Barriers', content: 'Identified key barriers preventing users from trusting AI recommendations.' },
          { title: 'Opportunity Areas', content: 'Mapped opportunities to improve transparency and user control.' }
        ],
        images: ['users', 'bar-chart']
      },
      {
        phase: 'Interface Design',
        description: 'Designed intuitive interfaces that make AI capabilities accessible.',
        slides: [
          { title: 'Progressive Disclosure', content: 'Created patterns to reveal complexity gradually as users need it.' },
          { title: 'Explainability', content: 'Designed interfaces that explain AI reasoning in human-friendly terms.' },
          { title: 'User Control', content: 'Added controls letting users adjust AI behavior and override suggestions.' }
        ],
        images: ['settings', 'book-open']
      },
      {
        phase: 'Testing & Iteration',
        description: 'Extensive usability testing with diverse user groups.',
        slides: [
          { title: 'Usability Testing', content: 'Tested with diverse user groups including non-technical users.' },
          { title: 'Trust Metrics', content: 'Measured improvements in user trust and confidence scores.' },
          { title: 'Iterative Refinement', content: 'Refined designs based on feedback until adoption goals were met.' }
        ],
        images: ['test-tube', 'trending-up']
      }
    ],
    beforeAfter: undefined,
    tags: ['AI/UX', 'Complex Systems', 'User Research', 'Interface Design'],
    nextProject: null,
    prevProject: 'gateway-policy-builder'
  }
}

interface PortfolioPiece {
  title: string
  subtitle: string
  problem: string
  impact: Array<{
    header: string
    description: string
  }>
  beforeAfter?: {
    before: string
    after: string
  }
  process: Array<{
    phase: string
    description: string
    slides: Array<{
      title: string
      content: string
    }>
    images: string[]
  }>
  tags: string[]
  nextProject: string | null
  prevProject: string | null
}

export function generateStaticParams() {
  return Object.keys(portfolioPieces).map((slug) => ({ slug }))
}

export default async function PortfolioPiece({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const piece = portfolioPieces[slug as keyof typeof portfolioPieces]

  if (!piece) {
    notFound()
  }

  if (slug === 'zero-trust-navigation') {
    return <NavigationOverhaulCaseStudy piece={piece} />
  }

  if (slug === 'empty-states') {
    return <EmptyStatesCaseStudy piece={piece} />
  }

  if (slug === 'clue-index') {
    return <ClueIndexCaseStudy piece={piece} />
  }

  if (slug === 'gateway-policy-builder') {
    return <GatewayPolicyBuilderCaseStudy piece={piece} />
  }

  if (slug === 'documentation-for-retrieval') {
    return <DocumentationForRetrievalCaseStudy piece={piece} />
  }

  return (
    <PortfolioPieceClient piece={piece} />
  )
}

const navigationSteps = [
  { id: "hero", label: "Summary", iconName: "book-open" as const, href: "#hero" },
  { id: "impact", label: "Impact", iconName: "trending-up" as const, href: "#impact" },
  { id: "problem", label: "Problem", iconName: "target" as const, href: "#problem" },
  { id: "system", label: "Solution", iconName: "layers" as const, href: "#system" },
  { id: "validated", label: "Validation", iconName: "flask" as const, href: "#validated" },
  { id: "reflection", label: "Reflection", iconName: "book-open" as const, href: "#reflection" },
]

const emptyStatesSteps = [
  { id: "hero", label: "Summary", iconName: "book-open" as const, href: "#hero" },
  { id: "impact", label: "Impact", iconName: "trending-up" as const, href: "#impact" },
  { id: "problem", label: "Problem", iconName: "target" as const, href: "#problem" },
  { id: "solution", label: "Solution", iconName: "layers" as const, href: "#solution" },
  { id: "validation", label: "Metrics", iconName: "flask" as const, href: "#validation" },
  { id: "reflection", label: "Reflection", iconName: "book-open" as const, href: "#reflection" },
]

const clueSteps = [
  { id: "hero", label: "Summary", iconName: "book-open" as const, href: "#hero" },
  { id: "impact", label: "Impact", iconName: "trending-up" as const, href: "#impact" },
  { id: "problem", label: "Problem", iconName: "target" as const, href: "#problem" },
  { id: "system", label: "Framework", iconName: "layers" as const, href: "#system" },
  { id: "usage", label: "Use", iconName: "flask" as const, href: "#usage" },
  { id: "reflection", label: "Reflection", iconName: "book-open" as const, href: "#reflection" },
]

const gatewaySteps = [
  { id: "hero", label: "Summary", iconName: "book-open" as const, href: "#hero" },
  { id: "impact", label: "Impact", iconName: "trending-up" as const, href: "#impact" },
  { id: "problem", label: "Problem", iconName: "target" as const, href: "#problem" },
  { id: "solution", label: "Solution", iconName: "layers" as const, href: "#solution" },
  { id: "validation", label: "Validation", iconName: "flask" as const, href: "#validation" },
  { id: "reflection", label: "Reflection", iconName: "book-open" as const, href: "#reflection" },
]

const retrievalSteps = [
  { id: "hero", label: "Summary", iconName: "book-open" as const, href: "#hero" },
  { id: "impact", label: "Impact", iconName: "trending-up" as const, href: "#impact" },
  { id: "problem", label: "Problem", iconName: "target" as const, href: "#problem" },
  { id: "solution", label: "Solution", iconName: "layers" as const, href: "#solution" },
  { id: "metrics", label: "Metrics", iconName: "flask" as const, href: "#metrics" },
  { id: "reflection", label: "Reflection", iconName: "book-open" as const, href: "#reflection" },
]

const emptyStatesImpact = [
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

const clueImpact = [
  {
    title: "Improved dashboard content quality by 34.8%",
    body: "Initial testing across Zero Trust page descriptions increased the average CLUE score from 7.42 to 10 after revisions generated from the system's recommendations.",
  },
  {
    title: "Standardized UX writing guidance across multiple content types",
    body: "The framework expanded beyond UI copy to support error messages, API descriptions, changelogs, customer emails, and blog content.",
  },
  {
    title: "Reduced dependency on manual UX writing reviews",
    body: "CLUE provided immediate, actionable feedback directly to teams, enabling faster iteration and reducing review bottlenecks for urgent releases.",
  },
  {
    title: "Created an operational system for measuring content quality",
    body: "The project transformed UX writing guidance from subjective review feedback into a repeatable scoring framework tied to terminology, readability, tone, and usability standards.",
  },
]

const gatewayImpact = [
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

const retrievalImpact = [
  {
    title: "Reduced major AI inaccuracies by up to 83%",
    body: "After restructuring documentation using the chunkability framework, several test sets saw major inaccuracies drop from 6/10 responses to as low as 0-1/10 across multiple LLMs.",
  },
  {
    title: "Improved complete-answer rates from 0/10 to 7/10",
    body: "In one Cloudflare One connectivity test set, models that initially failed nearly every retrieval question became consistently reliable after structural documentation updates.",
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

const impactHighlights = [
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
    title: "Introduced a decision framework",
    body: "Created a structured flowchart to help teams decide where future capabilities should live within the IA.",
  },
  {
    title: "Made language more literal",
    body: "Reduced reliance on acronyms, internal product names, abstract concepts, and labels that required Cloudflare-specific context.",
  },
  {
    title: "Expanded the UX strategy",
    body: "Influenced longer-term thinking around contextual navigation, discoverability, search, education, and workflow connectivity.",
  },
]

const iaLayers = [
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
    items: ["Networks", "Access controls", "Traffic policies", "Cloud & SaaS findings", "Email Security"],
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

function CaseStudySection({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="border-t border-primary/20 py-16 md:py-20">
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px w-14 bg-accent" />
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
      </div>
      <h2 className="max-w-5xl text-3xl font-bold leading-tight text-primary md:text-5xl">
        {title}
      </h2>
      <div className="mt-8 max-w-6xl text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
        {children}
      </div>
    </section>
  )
}

function NavigationOverhaulCaseStudy({ piece }: { piece: PortfolioPiece }) {
  return (
    <>
      <PortfolioProcessNavigation steps={navigationSteps} />
      <main className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 w-full items-center justify-between px-6 md:px-8">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-xl font-bold">Alexa Mavrogianis</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#about" className="text-sm font-medium transition-colors hover:text-accent">Philosophy</Link>
              <Link href="/#work" className="text-sm font-medium transition-colors hover:text-accent">Work</Link>
              <Link href="/#resume" className="text-sm font-medium transition-colors hover:text-accent">Resume</Link>
              <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-accent">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="relative overflow-hidden lg:pl-28">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-32 hidden h-72 w-72 rotate-12 border border-accent/15 lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(45,212,191,0.04))] lg:block" />

          <div className="relative z-10 w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-24 lg:pr-20">
            <section id="hero" className="pb-16 md:pb-20">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-14 bg-accent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                  Case study
                </p>
              </div>
              <h1 className="max-w-6xl text-5xl font-bold leading-[0.98] text-primary md:text-7xl">
                Rebuilding navigation around user goals instead of product silos
              </h1>
              <div className="mt-8 max-w-6xl space-y-5 text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
                <p>
                  Cloudflare Zero Trust had grown into a powerful enterprise platform, but users consistently described the navigation as confusing, overlapping, and difficult to learn.
                </p>
                <p>
                  I led a large-scale information architecture initiative to redesign the navigation around mental models, workflows, and task clarity rather than internal product structures.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {piece.tags.map((tag) => (
                  <span key={tag} className="border border-primary/20 px-3 py-1 text-sm font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <CaseStudySection id="impact" eyebrow="Impact snapshot" title="My impact">
              <div className="grid gap-6 md:grid-cols-2">
                {impactHighlights.map((item) => (
                  <div key={item.title} className="border-t border-primary/20 pt-5">
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3">{item.body}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="problem" eyebrow="The problem" title="The navigation reflected Cloudflare's org chart, not how users thought about their work">
              <div className="max-w-6xl space-y-6">
                <p>
                  As Zero Trust expanded, the dashboard evolved organically around products, feature ownership, and technical terminology. Users repeatedly described the experience as fragmented, overlapping, difficult to scan, and difficult to learn. Or as one so aptly put it: 
                </p>

                <blockquote className="border-y border-accent/30 py-6 text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
                  "The burden of navigation."
                </blockquote>

                <p>
                  Another user said they would "end up with a dozen tabs open," sometimes with duplicates they did not realize were there.
                </p>

                <p>
                  The deeper issue was not just naming. Research showed that users approached the dashboard through workflows like troubleshooting a tunnel, securing an application, investigating traffic, managing devices, and configuring policies, not through Cloudflare's internal product boundaries.
                </p>
                <p>
                  The project quickly evolved from a navigation cleanup effort into a broader rethink of how the platform should organize itself around user intent.
                </p>
              </div>
            </CaseStudySection>

            <CaseStudySection id="system" eyebrow="The solution" title="A layered information architecture model">
              <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
                <div className="space-y-6">
                <p>
                  I introduced a five-layer IA framework that grouped the dashboard by how users engage with the platform.
                </p>
                <div className="grid gap-4">
                    {iaLayers.map((item) => (
                      <div key={item.label} className="grid gap-2 border-t border-primary/20 pt-5 md:grid-cols-[9rem_minmax(0,1fr)]">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{item.layer}</p>
                        <div>
                          <h3 className="text-xl font-semibold text-primary">{item.label}</h3>
                          <p className="mt-2">{item.question}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {item.items.map((navItem) => (
                              <span key={navItem} className="border border-primary/20 px-2.5 py-1 text-sm text-muted-foreground">
                                {navItem}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                </div>
                <figure className="mx-auto w-full max-w-[18rem] lg:mx-0">
                  <div className="overflow-hidden border border-primary/20 bg-card/40 shadow-2xl shadow-background/40">
                    <img
                      src="/zero-trust-new-navigation.png"
                      alt="New Zero Trust navigation structure in the Cloudflare dashboard"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    The redesigned navigation grouped top-level areas around user intent and reusable platform concepts.
                  </figcaption>
                </figure>
              </div>
            </CaseStudySection>

            <CaseStudySection id="validated" eyebrow="Research approach" title="Multi-phase research and testing">
              <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.45fr)]">
                <div>
                  <p>
                    The work combined qualitative interviews, moderated walkthroughs, large-scale surveys, tree testing, and open-ended mental model analysis. It was intentionally iterative: I would test a structure quickly, study where users struggled, adjust the model, and test again.
                  </p>
                  <p className="mt-5">
                    The validation data was statistically significant, which gave the team more confidence that we were not just reacting to a handful of loud anecdotes. I used the research to evaluate findability, overlap, terminology clarity, user mental models, and conceptual understanding of reusable systems.
                  </p>
                  <p className="mt-5">
                    I brought those findings to product and engineering leaders to build the buy-in needed across 30+ stakeholders. That alignment helped move the work from a proposed IA cleanup to a shared direction for navigation strategy, governance, and future expansion.
                  </p>
                </div>
                <div className="grid gap-4">
                  {["393 survey responses", "273 tree test participants", "Statistically significant validation testing", "Buy-in across 30+ stakeholders"].map((item) => (
                    <div key={item} className="border-t border-accent/40 pt-4 text-foreground">{item}</div>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="reflection" eyebrow="Reflection" title="Navigation shapes how users understand complex systems">
              <div className="space-y-8">
                <p>
                  This project fundamentally changed how I think about enterprise UX systems. I left with three principles:
                </p>

                <div className="grid gap-6">
                  {[
                    {
                      title: "Labels should be literal, specific, and jargon-free",
                      body: "Navigation labels should clearly communicate what users will find or do. We need to avoid clever phrasing that may obscure meaning, and we also need to be careful with terms we assume are industry standard. According to our users, top-level items should feel mutually exclusive and collectively exhaustive. Specificity not only helps users scan, it is critical in building trust.",
                    },
                    {
                      title: "Users think about their tasks, not how our system works",
                      body: "Users approach the dashboard with goals, not technical models in mind. They look at navigation labels almost like a task list. When labeling navigation items, we need to prioritize task clarity over system accuracy. Imagine explaining the navigation structure to a user by saying, \"Here, you will find X.\" Whatever X is should be the label. This means avoiding product names and acronyms when possible.",
                    },
                    {
                      title: "Navigation goes beyond the menu",
                      body: "Navigation happens everywhere. The side navigation menu cannot and should not be the only way users understand the system and make connections. Users have a deep desire for search, personalization like recents or favorites, clear in-workflow connections, and strong product content to reduce reliance on the side navigation alone.",
                    },
                  ].map((principle, index) => (
                    <div key={principle.title} className="grid gap-3 border-t border-primary/20 pt-5 md:grid-cols-[4rem_minmax(0,1fr)]">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <div>
                        <h3 className="text-xl font-semibold text-primary">{principle.title}</h3>
                        <p className="mt-3">{principle.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <section className="border-t border-primary/20 py-16">
              <div className="flex justify-between items-center">
                <div className="flex-1" />
                {piece.nextProject && (
                  <Link href={`/work/${piece.nextProject}`}>
                    <Button size="lg">
                      Next case study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

function EmptyStatesCaseStudy({ piece }: { piece: PortfolioPiece }) {
  return (
    <>
      <PortfolioProcessNavigation steps={emptyStatesSteps} />
      <main className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 w-full items-center justify-between px-6 md:px-8">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-xl font-bold">Alexa Mavrogianis</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#about" className="text-sm font-medium transition-colors hover:text-accent">Philosophy</Link>
              <Link href="/#work" className="text-sm font-medium transition-colors hover:text-accent">Work</Link>
              <Link href="/#resume" className="text-sm font-medium transition-colors hover:text-accent">Resume</Link>
              <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-accent">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="relative overflow-hidden lg:pl-28">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-32 hidden h-72 w-72 rotate-12 border border-accent/15 lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.04))] lg:block" />

          <div className="relative z-10 w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-24 lg:pr-20">
            <section id="hero" className="pb-16 md:pb-20">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-14 bg-accent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                  Case study
                </p>
              </div>
              <h1 className="max-w-6xl text-5xl font-bold leading-[0.98] text-primary md:text-7xl">
                Turning empty states into lightweight onboarding experiences
              </h1>
              <div className="mt-8 max-w-6xl space-y-5 text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
                <p>
                  When users first entered a product area in the Zero Trust dashboard, they were greeted with an empty state page. Technically, it did its job: it introduced the tool and provided a CTA to begin setup.
                </p>
                <p>
                  But in practice, it created a sharp drop in guidance. Users were expected to move from high-level onboarding directly into complex configuration work with very little context around what the product did, why they should configure it, or what steps they needed to complete first.
                </p>
                <p>
                  Rather than proposing an entirely new onboarding system, I focused on a quick-win opportunity with lower implementation risk: turning empty states into lightweight onboarding experiences.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {piece.tags.map((tag) => (
                  <span key={tag} className="border border-primary/20 px-3 py-1 text-sm font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <CaseStudySection id="impact" eyebrow="Impact" title="My impact">
              <div className="grid gap-6 md:grid-cols-2">
                {emptyStatesImpact.map((item) => (
                  <div key={item.title} className="border-t border-primary/20 pt-5">
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3">{item.body}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="problem" eyebrow="The problem" title="The original empty states functioned more like transition screens than onboarding experiences">
              <div className="max-w-6xl space-y-6">
                <p>
                  Users landed on highly technical pages and were immediately asked to make configuration decisions without enough context to feel confident doing so. The dashboard explained where to click, but not necessarily how the pieces fit together or why certain steps mattered.
                </p>
                <p>
                  This became especially visible in Access application onboarding. Users configuring self-hosted applications often failed because they did not realize they first needed to complete Zones onboarding. Identity provider configuration lived elsewhere in the dashboard entirely, with little explanation connecting it back to Access setup.
                </p>
                <p>
                  SaaS application flows introduced terminology like Entity ID and Assertion Consumer Service URL without helping users map those concepts to the platforms they were configuring.
                </p>
                <p>
                  Users needed enough context to understand what they were doing, why it mattered, and whether they were on the right path before committing to a setup flow.
                </p>
              </div>
            </CaseStudySection>

            <CaseStudySection id="solution" eyebrow="The solution" title="A measurable product hypothesis, not just a content refresh">
              <div className="space-y-8">
                <div className="space-y-6">
                  <p>
                    I identified empty states as an overlooked onboarding opportunity and proposed a broader product strategy experiment: using lightweight in-product education to improve onboarding success without requiring a large-scale onboarding rebuild.
                  </p>
                  <p>
                    I framed the work as a measurable hypothesis. If users were given clearer context, guidance, and motivation at the moment they entered a workflow, they would be more likely to successfully complete setup.
                  </p>
                  <p>
                    To validate the idea, I partnered with a PM and cross-functional stakeholders to launch an A/B test focused on Access Applications. Together, we defined success metrics, identified onboarding friction points, and connected empty state engagement directly to downstream configuration outcomes.
                  </p>
                </div>

                <div className="grid gap-6 border-t border-primary/20 pt-8 lg:grid-cols-2">
                  {[
                    { label: "Before", src: "/empty-state-before.webp", alt: "Original tunnel empty state" },
                    { label: "After", src: "/empty-state-after-cropped.jpg", alt: "Redesigned tunnel onboarding empty state" },
                  ].map((image) => (
                    <figure key={image.label}>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        {image.label}
                      </p>
                      <div className="overflow-hidden border border-primary/20 bg-card/40">
                        <img src={image.src} alt={image.alt} className="h-auto w-full" />
                      </div>
                    </figure>
                  ))}
                </div>

                <div className="border-t border-primary/20 pt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">A reusable empty state framework</h3>
                    <p className="mt-4">
                      Once the experiment demonstrated measurable improvements in onboarding success, the project expanded from a single proof of concept into a scalable framework for empty states across the dashboard.
                    </p>
                    <p className="mt-4">
                      I partnered closely with product design to develop a reusable empty state template and content model centered around three goals: educating users on what a tool does, motivating them by clarifying value and outcomes, and empowering them to confidently begin technical workflows.
                    </p>
                  </div>
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="validation" eyebrow="Metrics" title="Education moved users from understanding to action">
              <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.45fr)]">
                <div className="space-y-6">
                  <p>
                    The experiment validated the idea that users who better understand a workflow are more likely to complete it successfully. Across every application type tested, the redesigned onboarding experience outperformed the baseline experience.
                  </p>
                  <p>
                    The strongest gains came from users who interacted with prerequisite education. Private network setup improved by 27.9% for users who viewed prerequisite guidance, while SaaS application setup improved by 42.8%. Even in flows that already had relatively high success rates, like self-hosted applications, users who engaged with onboarding education still converted at higher rates.
                  </p>
                  <p>
                    The project also surfaced deeper product insights. SaaS onboarding remained significantly lower-performing overall, pointing to workflow and terminology issues extending beyond onboarding content alone.
                  </p>
                </div>
                <div className="grid gap-4">
                  {["42.8% lift in SaaS setup", "27.9% lift in private network setup", "173% increase in prerequisite task completion", "82% of users who engaged with education began the application flow"].map((item) => (
                    <div key={item} className="border-t border-accent/40 pt-4 text-foreground">{item}</div>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="reflection" eyebrow="Reflection" title="Small moments of clarity can change whether users keep going">
              <div className="grid gap-6">
                {[
                  {
                    title: "Educated users are more successful users",
                    body: "Users are more likely to complete complex workflows when the product helps them understand the task before asking them to act. The experiment showed that even lightweight educational guidance, including prerequisites, process overviews, and contextual explanations, could meaningfully improve onboarding success rates across multiple application types.",
                  },
                  {
                    title: "Understanding the why increases motivation",
                    body: "The strongest results came from moments where users understood how a supporting task connected to their larger goal. When users understood why they needed to configure an identity provider or complete Zones onboarding, they were significantly more likely to follow through.",
                  },
                ].map((principle, index) => (
                  <div key={principle.title} className="grid gap-3 border-t border-primary/20 pt-5 md:grid-cols-[4rem_minmax(0,1fr)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{principle.title}</h3>
                      <p className="mt-3">{principle.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <section className="border-t border-primary/20 py-16">
              <div className="flex justify-between items-center">
                {piece.prevProject && (
                  <Link href={`/work/${piece.prevProject}`}>
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous case study
                    </Button>
                  </Link>
                )}
                <div className="flex-1" />
                {piece.nextProject && (
                  <Link href={`/work/${piece.nextProject}`}>
                    <Button size="lg">
                      Next case study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

function ClueIndexCaseStudy({ piece }: { piece: PortfolioPiece }) {
  return (
    <>
      <PortfolioProcessNavigation steps={clueSteps} />
      <main className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 w-full items-center justify-between px-6 md:px-8">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-xl font-bold">Alexa Mavrogianis</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#about" className="text-sm font-medium transition-colors hover:text-accent">Philosophy</Link>
              <Link href="/#work" className="text-sm font-medium transition-colors hover:text-accent">Work</Link>
              <Link href="/#resume" className="text-sm font-medium transition-colors hover:text-accent">Resume</Link>
              <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-accent">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="relative overflow-hidden lg:pl-28">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-32 hidden h-72 w-72 rotate-12 border border-accent/15 lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(45,212,191,0.04))] lg:block" />

          <div className="relative z-10 w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-24 lg:pr-20">
            <section id="hero" className="pb-16 md:pb-20">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-14 bg-accent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                  Case study
                </p>
              </div>
              <h1 className="max-w-6xl text-5xl font-bold leading-[0.98] text-primary md:text-7xl">
                AI-assisted infrastructure for scalable UX writing quality
              </h1>
              <div className="mt-8 max-w-6xl">
                <div className="text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
                  <div className="mb-6 overflow-hidden border border-primary/20 bg-card/40 shadow-sm lg:float-right lg:mb-6 lg:ml-10 lg:mt-2 lg:w-[48%]">
                    <video
                      className="aspect-video w-full bg-background object-contain"
                      controls
                      muted
                      playsInline
                      poster="/clue-index-full-score.png"
                      preload="metadata"
                    >
                      <source src="/clue-demo.mp4" type="video/mp4" />
                    </video>
                    <p className="border-t border-primary/10 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                      For the clearest view of the CLUE workflow, open the video in full screen.
                    </p>
                  </div>
                  <p>
                    As Cloudflare's product suite scaled, customer-facing content became increasingly inconsistent across dashboards, APIs, emails, and onboarding flows. UX writing reviews could not keep pace with the speed of product development, and emerging AI-generated content introduced even more variability in tone, terminology, and clarity.
                  </p>
                  <p className="mt-5">
                    I saw an opportunity to turn UX writing guidance into something measurable and operationalized: a system that could evaluate content against Cloudflare's voice, tone, terminology, and usability standards in real time.
                  </p>
                  <p className="mt-5">
                    The result was the PCX CLUE Index, which stood for Content Legibility for User Ease. I designed the evaluation framework, wrote the regex-based rules that translated UX writing standards into measurable checks, and shaped the workflow teams used to score, revise, and improve content.
                  </p>
                </div>
                <div className="clear-both mt-10 flex flex-wrap gap-3">
                  {piece.tags.map((tag) => (
                    <span key={tag} className="border border-primary/20 px-3 py-1 text-sm font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <CaseStudySection id="impact" eyebrow="Impact" title="My impact">
              <div className="grid gap-6 md:grid-cols-2">
                {clueImpact.map((item) => (
                  <div key={item.title} className="border-t border-primary/20 pt-5">
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3">{item.body}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="problem" eyebrow="The problem" title="UX writing standards were treated like reference material, not operational infrastructure">
              <div className="max-w-6xl space-y-6">
                <p>
                  Most organizations treat UX writing standards as reference material. The assumption is that if teams have access to a glossary or style guide, consistency will naturally follow.
                </p>
                <p>
                  In practice, that rarely happens. Teams were shipping content from dozens of different perspectives, each with their own assumptions about terminology, tone, and user familiarity. Some descriptions were overly technical. Others were vague or abstract. Many explained implementation details without clarifying user outcomes.
                </p>
                <p>
                  The inconsistencies became especially visible in the Zero Trust dashboard, where users were already navigating highly complex workflows. Even small wording differences changed how users interpreted products, policies, and system behavior.
                </p>
                <div className="space-y-4 border-t border-primary/20 pt-6">
                  <p>
                    What initially appeared to be a writing consistency issue revealed a larger systems problem. UX writing guidance was difficult to operationalize at scale, teams lacked immediate feedback loops during content creation, and content quality could not be measured consistently.
                  </p>
                  <p>
                    Review processes also relied heavily on institutional knowledge, while AI-generated copy introduced additional variability in tone and terminology.
                  </p>
                </div>
                <p>
                  The introduction of generative AI accelerated the urgency of the problem. Teams could now generate content faster than ever, but speed amplified inconsistency. AI tools were effective at producing drafts, yet they lacked awareness of Cloudflare-specific terminology, UX conventions, and product context.
                </p>
                <p className="text-foreground">
                  The challenge was no longer just "How do we review more content?" It became: "How do we create a scalable system that helps teams produce clearer content before UX review is needed?"
                </p>
              </div>
            </CaseStudySection>

            <CaseStudySection id="system" eyebrow="The framework" title="A custom AI-assisted evaluation system for Cloudflare UX writing">
              <div className="space-y-8">
                <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.45fr)]">
                  <div className="space-y-6">
                    <p>
                      I designed and built the PCX CLUE Index as a custom AI-assisted UX writing evaluation system tailored specifically to Cloudflare's products, terminology, and voice guidelines.
                    </p>
                    <p>
                      At the time, AI writing workflows were still in their infancy, and primarily focused on generating copy with ChatGPT or Gemini. I approached the problem differently: how could AI help evaluate and improve content quality instead?
                    </p>
                    <p>
                      The system transformed UX writing principles into programmable scoring logic. I translated subjective writing guidance into measurable evaluation criteria using regex-based language detection, indexed terminology validation, structural writing checks, contextual AI analysis, and content-type-specific scoring models.
                    </p>
                    <p>
                      This meant CLUE could evaluate far more than grammar. The system identified passive voice, missing Oxford commas, unclear action framing, terminology inconsistencies, tone mismatches, and UX writing anti-patterns using custom-built rules and AI interpretation layers.
                    </p>
                    <p>
                      I was able to write the regex expressions and scoring heuristics in a way that effectively turned UX writing standards into mathematical evaluation systems.
                    </p>
                  </div>
                  <div className="grid gap-5">
                    {[
                      {
                        title: "Regex-based language detection",
                        body: "Found repeatable writing patterns like passive voice, missing Oxford commas, hidden verbs, and overly formal phrasing.",
                      },
                      {
                        title: "Indexed terminology validation",
                        body: "Checked copy against preferred Cloudflare terms so product language stayed consistent across surfaces.",
                      },
                      {
                        title: "Sentence-level readability checks",
                        body: "Measured length, density, acronyms, and action framing to identify copy that was accurate but hard to scan.",
                      },
                      {
                        title: "Contextual AI analysis",
                        body: "Used AI interpretation for judgment-based guidance, including tone, clarity, and whether the recommendation fit the content type.",
                      },
                      {
                        title: "Content-type-specific scoring",
                        body: "Weighted rules differently for UI copy, docs, emails, changelogs, and other formats based on their user context.",
                      },
                    ].map((item) => (
                      <div key={item.title} className="border-t border-accent/40 pt-4">
                        <h3 className="text-lg font-semibold leading-snug text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <figure className="border-t border-primary/20 pt-8">
                  <div className="mb-8">
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      Regex examples
                    </p>
                    <div className="grid gap-4 lg:grid-cols-3">
                      {[
                        {
                          title: "Passive voice",
                          body: "Flagged passive constructions so teams could rewrite with clearer action and ownership.",
                          patterns: [
                            String.raw`\b(?:are|was|were|be|been|have|is|am|had|by|has)\s+[a-zA-Z]+(?:d|ing|en|ne|de)\b`,
                          ],
                        },
                        {
                          title: "Hidden verbs",
                          body: "Detected nominalized phrasing that made product copy feel heavier than it needed to be.",
                          patterns: [
                            String.raw`\b(?:achieve|effect|give|make|reach|take|have)\w*s(?:an|a|the)\b.*(?:ment|tion|ance|sis)\b`,
                            String.raw`\b(?:the|a|an)\b\s*(?:\w*[-]?(?:ing|tion|ment|sion))\s*\bof\b`,
                          ],
                        },
                        {
                          title: "Oxford commas",
                          body: "Checked list structures against Cloudflare's style expectations for clarity and consistency.",
                          patterns: [
                            String.raw`[^,.]+, [^,.]+ \b(and|or)\b [^,]+`,
                          ],
                        },
                      ].map((rule) => (
                        <div key={rule.title} className="border-t border-primary/20 pt-5">
                          <h3 className="text-xl font-semibold text-primary">{rule.title}</h3>
                          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{rule.body}</p>
                          <pre className="mt-4 whitespace-pre-wrap break-words border border-primary/20 bg-card/40 p-4 text-xs leading-relaxed text-foreground [overflow-wrap:anywhere]">
                            <code>{rule.patterns.join("\n")}</code>
                          </pre>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-hidden border border-primary/20 bg-card/40">
                    <img
                      src="/clue-index-score-modal.png"
                      alt="CLUE Index score details modal showing weighted rule categories and individual writing guidelines"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    The score explanation showed how each content type was evaluated across weighted rules, including regex checks, indexed terminology checks, and AI-assisted interpretation.
                  </figcaption>
                </figure>
              </div>
            </CaseStudySection>

            <CaseStudySection id="usage" eyebrow="How it worked" title="Fast feedback loops, tailored scoring, and actionable recommendations">
              <div className="space-y-8">
                <p>
                  Different content types, including error messages, API parameter descriptions, UI descriptions, emails, changelogs, and blog content, each used tailored scoring criteria based on their user context and communication goals.
                </p>
                <p>
                  I also designed the product experience for the tool itself, focusing on fast iteration loops and actionable recommendations rather than abstract scoring. Teams could paste content into CLUE, receive immediate feedback, generate AI-assisted revisions, and iterate toward stronger content quality directly within the workflow.
                </p>
                <p>
                  The result was not a generic grammar checker. It was a Cloudflare-specific UX writing system designed to scale clarity, consistency, and usability across a rapidly growing enterprise platform.
                </p>

                <div className="grid gap-6 border-t border-primary/20 pt-8 lg:grid-cols-2">
                  {[
                    {
                      label: "Scoring workflow",
                      src: "/clue-index-full-score.png",
                      alt: "CLUE Index interface with copy input, a 10 out of 10 score, and no recommendations",
                      caption: "Teams could select a content type, paste draft copy, and generate a score tied to Cloudflare-specific UX writing standards.",
                    },
                    {
                      label: "Recommendation output",
                      src: "/clue-index-recommendations.png",
                      alt: "CLUE Index recommendations panel showing conversational tone, sentence length, and active voice feedback",
                      caption: "When content missed a rule, CLUE returned specific recommendations with examples teams could act on immediately.",
                    },
                  ].map((image) => (
                    <figure key={image.label}>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        {image.label}
                      </p>
                      <div className="overflow-hidden border border-primary/20 bg-card/40">
                        <img src={image.src} alt={image.alt} className="h-auto w-full" />
                      </div>
                      <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {image.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      title: "Evaluate",
                      body: "Analyze content against Cloudflare-specific terminology, voice, tone, usability, and content-type expectations.",
                    },
                    {
                      title: "Recommend",
                      body: "Surface specific issues and generate actionable AI-assisted revisions instead of only returning a score.",
                    },
                    {
                      title: "Iterate",
                      body: "Help teams refine content quickly inside the workflow before a manual UX writing review was needed.",
                    },
                  ].map((step, index) => (
                    <div key={step.title} className="border-t border-primary/20 pt-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-4 text-xl font-semibold text-primary">{step.title}</h3>
                      <p className="mt-3">{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="reflection" eyebrow="Reflection" title="Scalable UX systems matter more than isolated copy improvements">
              <div className="grid gap-6">
                {[
                  {
                    title: "Scalable UX systems matter more than isolated copy improvements",
                    body: "The long-term value of CLUE was not individual recommendations. It was the creation of a reusable system that embedded UX writing standards directly into day-to-day workflows. That shift made consistency more sustainable as the organization scaled.",
                  },
                  {
                    title: "AI content generation increases the importance of UX standards",
                    body: "Generative AI dramatically accelerates content creation, but acceleration without guardrails increases inconsistency. Systems like CLUE become more valuable in AI-assisted environments because they provide measurable standards for clarity, terminology, and usability.",
                  },
                  {
                    title: "Content quality is a product experience issue",
                    body: "One of the strongest takeaways from this project was that unclear content often signals unclear product thinking. The most effective revisions were rarely cosmetic. They clarified intent, simplified mental models, and made system behavior easier to predict.",
                  },
                ].map((principle, index) => (
                  <div key={principle.title} className="grid gap-3 border-t border-primary/20 pt-5 md:grid-cols-[4rem_minmax(0,1fr)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{principle.title}</h3>
                      <p className="mt-3">{principle.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <section className="border-t border-primary/20 py-16">
              <div className="flex justify-between items-center">
                {piece.prevProject && (
                  <Link href={`/work/${piece.prevProject}`}>
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous case study
                    </Button>
                  </Link>
                )}
                <div className="flex-1" />
                {piece.nextProject && (
                  <Link href={`/work/${piece.nextProject}`}>
                    <Button size="lg">
                      Next case study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

function DocumentationForRetrievalCaseStudy({ piece }: { piece: PortfolioPiece }) {
  return (
    <>
      <PortfolioProcessNavigation steps={retrievalSteps} />
      <main className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 w-full items-center justify-between px-6 md:px-8">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-xl font-bold">Alexa Mavrogianis</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#about" className="text-sm font-medium transition-colors hover:text-accent">Philosophy</Link>
              <Link href="/#work" className="text-sm font-medium transition-colors hover:text-accent">Work</Link>
              <Link href="/#resume" className="text-sm font-medium transition-colors hover:text-accent">Resume</Link>
              <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-accent">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="relative overflow-hidden lg:pl-28">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-32 hidden h-72 w-72 rotate-12 border border-accent/15 lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(45,212,191,0.04))] lg:block" />

          <div className="relative z-10 w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-24 lg:pr-20">
            <section id="hero" className="pb-16 md:pb-20">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-14 bg-accent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                  Case study
                </p>
              </div>
              <h1 className="max-w-6xl text-5xl font-bold leading-[0.98] text-primary md:text-7xl">
                Designing documentation for retrieval, not just reading
              </h1>
              <div className="mt-8 max-w-6xl space-y-5 text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
                <p>
                  As LLMs became increasingly integrated into support and product workflows, I noticed a recurring pattern: technically correct documentation was still producing unreliable AI answers.
                </p>
                <p>
                  I led an initiative to rethink documentation structure through the lens of retrieval and chunking, creating a chunkability framework that evaluated whether content could survive fragmented retrieval while still remaining understandable, trustworthy, and actionable in isolation.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {piece.tags.map((tag) => (
                  <span key={tag} className="border border-primary/20 px-3 py-1 text-sm font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <CaseStudySection id="impact" eyebrow="Impact" title="My impact">
              <div className="grid gap-6 md:grid-cols-2">
                {retrievalImpact.map((item) => (
                  <div key={item.title} className="border-t border-primary/20 pt-5">
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3">{item.body}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="problem" eyebrow="The problem" title="Documentation that worked for humans was failing under fragmented retrieval">
              <div className="max-w-6xl space-y-6">
                <p>
                  As Cloudflare expanded AI-assisted support and retrieval workflows, documentation quality became increasingly difficult to evaluate. Pages that worked well for human readers often produced incomplete or misleading AI responses once ingested into retrieval systems.
                </p>
                <p>
                  Large comparison tables lost context when chunked. Generic headings like Selectors or Allow became meaningless in isolation. Important constraints were frequently separated from the actions they governed. Even when the correct information existed, models struggled to consistently retrieve and reconstruct it.
                </p>
                <p>
                  The challenge was compounded by the lack of shared standards for AI-readable documentation. Most existing content guidance focused on readability, completeness, or writing quality rather than retrieval survivability.
                </p>
              </div>
            </CaseStudySection>

            <CaseStudySection id="solution" eyebrow="The solution" title="A chunkability framework for AI-readable documentation">
              <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.45fr)]">
                <div className="space-y-6">
                  <p>
                    To better understand why technically accurate documentation was producing unreliable AI answers, I researched retrieval-augmented generation systems, chunking strategies, and retrieval behavior in modern LLM pipelines. I also completed specialized coursework focused on RAG architecture, retrieval evaluation, and context management.
                  </p>
                  <p>
                    Using that research, I developed a chunkability evaluation framework designed to test whether documentation could remain understandable and trustworthy after retrieval fragmentation. Instead of evaluating content purely for readability, the framework evaluated how well information survived chunk isolation, missing surrounding context, truncated tables, and retrieval ordering issues.
                  </p>
                  <p>
                    I then built an AI-assisted auditing skill that analyzed existing documentation against retrieval-focused criteria and generated structured findings, risk summaries, severity ratings, and proposed rewrites tied directly to retrieval failure patterns.
                  </p>
                  <p>
                    To complement the auditing workflow, I developed a remediation skill that translated findings into retrieval-friendly structural revisions. This created a repeatable feedback loop where documentation could be audited, revised, retested against LLM prompts, and continuously improved based on measurable answer quality outcomes.
                  </p>
                </div>
                <div className="grid gap-4">
                  {["Identity persistence", "Heading clarity", "Table survivability", "Scope locality", "Procedural atomicity", "Query-term alignment"].map((item) => (
                    <div key={item} className="border-t border-accent/40 pt-4 text-foreground">{item}</div>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="metrics" eyebrow="Metrics" title="Small structural changes produced large answer-quality gains">
              <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.45fr)]">
                <div className="space-y-6">
                  <p>
                    The work showed that AI answer quality could improve dramatically without rewriting the underlying technical content. In several test sets, restructuring documentation around chunkability reduced major inaccuracies from 6/10 responses to as low as 0-1/10 across multiple LLMs.
                  </p>
                  <p>
                    In one Cloudflare One connectivity test set, complete-answer rates improved from 0/10 to 7/10 after structural documentation updates. The improvements came from making product identity, scope, constraints, and relationships more resilient when retrieved as fragments.
                  </p>
                </div>
                <div className="grid gap-4">
                  {["Up to 83% reduction in major inaccuracies", "0/10 to 7/10 complete-answer improvement", "Reusable retrieval audit criteria", "Repeatable audit, revise, retest workflow"].map((item) => (
                    <div key={item} className="border-t border-accent/40 pt-4 text-foreground">{item}</div>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="reflection" eyebrow="Reflection" title="AI-ready documentation is fundamentally an information architecture problem">
              <div className="grid gap-6">
                {[
                  {
                    title: "AI-ready documentation is fundamentally an information architecture problem",
                    body: "The biggest lesson from this work was that retrieval quality depends heavily on structure, not just writing quality. Documentation now has to function both as a human reading experience and as a machine-readable knowledge system.",
                  },
                  {
                    title: "Retrieval failures are often predictable",
                    body: "Many hallucinations were not random. They consistently mapped back to structural weaknesses like anonymous headings, fragmented tables, missing scope, or disconnected constraints.",
                  },
                  {
                    title: "Small structural changes can dramatically improve AI reliability",
                    body: "Some of the highest-impact fixes were deceptively lightweight: adding product identity to section openers, rewriting generic headings, adding table captions, moving constraints earlier, and using more retrieval-oriented phrasing.",
                  },
                ].map((principle, index) => (
                  <div key={principle.title} className="grid gap-3 border-t border-primary/20 pt-5 md:grid-cols-[4rem_minmax(0,1fr)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{principle.title}</h3>
                      <p className="mt-3">{principle.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <section className="border-t border-primary/20 py-16">
              <div className="flex justify-between items-center">
                {piece.prevProject && (
                  <Link href={`/work/${piece.prevProject}`}>
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous case study
                    </Button>
                  </Link>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

function GatewayPolicyBuilderCaseStudy({ piece }: { piece: PortfolioPiece }) {
  return (
    <>
      <PortfolioProcessNavigation steps={gatewaySteps} />
      <main className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 w-full items-center justify-between px-6 md:px-8">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-xl font-bold">Alexa Mavrogianis</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#about" className="text-sm font-medium transition-colors hover:text-accent">Philosophy</Link>
              <Link href="/#work" className="text-sm font-medium transition-colors hover:text-accent">Work</Link>
              <Link href="/#resume" className="text-sm font-medium transition-colors hover:text-accent">Resume</Link>
              <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-accent">Contact</Link>
            </div>
          </div>
        </nav>

        <div className="relative overflow-hidden lg:pl-28">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-32 hidden h-72 w-72 rotate-12 border border-accent/15 lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.04))] lg:block" />

          <div className="relative z-10 w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-24 lg:pr-20">
            <section id="hero" className="pb-16 md:pb-20">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-14 bg-accent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                  Case study
                </p>
              </div>
              <h1 className="max-w-6xl text-5xl font-bold leading-[0.98] text-primary md:text-7xl">
                Building a policy builder for how administrators actually think
              </h1>
              <div className="mt-8 max-w-6xl space-y-5 text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
                <p>
                  The Gateway firewall policy builder was a fragmented, scroll-heavy configuration experience. I led a redesign to turn it into a unified visual workflow built around real user mental models.
                </p>
                <p>
                  This work reframed policy creation around a persistent If / Then structure while using AI-assisted prototyping to rapidly accelerate alignment, iteration, and organizational momentum.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {piece.tags.map((tag) => (
                  <span key={tag} className="border border-primary/20 px-3 py-1 text-sm font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <CaseStudySection id="impact" eyebrow="Impact" title="My impact">
              <div className="grid gap-6 md:grid-cols-2">
                {gatewayImpact.map((item) => (
                  <div key={item.title} className="border-t border-primary/20 pt-5">
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3">{item.body}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="problem" eyebrow="The problem" title="A critical enterprise workflow had become a wall of scroll">
              <div className="max-w-6xl space-y-6">
                <p>
                  The Gateway firewall policy builder was one of the most heavily used surfaces in the Zero Trust dashboard, but over time the experience became increasingly difficult to scale. Administrators needed to configure highly conditional policies across DNS, HTTP, and Network traffic, yet the UI separated those workflows into distinct policy types despite sharing the same underlying logic.
                </p>
                <p>
                  As more controls, exceptions, and conditional settings were introduced, the experience gradually evolved into what many internally referred to as a wall of scroll: a vertically stacked workflow with excessive whitespace, limited progressive disclosure, and disconnected relationships between policy conditions and their resulting actions.
                </p>
                <p>
                  Through customer calls, feedback sessions, and competitive analysis, a recurring pattern emerged. Users generally understood the security outcomes they wanted, but struggled to map those goals to the structure of the interface itself. Administrators were not naturally thinking in terms of traffic categories or sequential configuration flows. They were thinking: If this happens, then do this.
                </p>
                <p>
                  Redesigning such a critical enterprise workflow also carried significant organizational friction. Conversations around improving the policy builder had existed for a long time, but the sheer amount of conditionality made it difficult to communicate a radically different approach through static wireframes alone.
                </p>
                <p className="text-foreground">
                  The challenge was not just simplifying the experience. It was creating enough momentum to make a large-scale redesign feel achievable.
                </p>
              </div>
            </CaseStudySection>

            <CaseStudySection id="solution" eyebrow="The solution" title="A unified If / Then workflow that preserved technical flexibility">
              <div className="space-y-8">
                <div className="max-w-6xl space-y-6">
                  <p>
                    I began by reframing the builder around a much simpler mental model: outcomes instead of implementation details. Rather than separating policies into distinct DNS, HTTP, and Network builders, traffic type became another component of policy scope itself.
                  </p>
                  <p>
                    The redesigned experience centered around a persistent dual-column If / Then structure. Conditions and traffic scope remained visible on the left, while actions and downstream settings remained visible on the right. This preserved the relationship between policy inputs and outcomes at all times.
                  </p>
                  <p>
                    To further reduce visual noise, the builder introduced progressive disclosure patterns that revealed advanced settings only when relevant. Instead of forcing users to parse every possible configuration state simultaneously, the interface adapted dynamically based on the policy selections being made.
                  </p>
                  <p>
                    The redesign also introduced multiple ways to validate policy behavior depending on user expertise and preference: visual flow previews, natural-language summaries, and raw Wirefilter expressions for advanced users.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      title: "If",
                      body: "Keep conditions, selectors, traffic scope, and exceptions visible as the policy is built.",
                    },
                    {
                      title: "Then",
                      body: "Show actions and downstream settings beside the conditions they depend on.",
                    },
                    {
                      title: "Validate",
                      body: "Help administrators preview behavior through visual flows, summaries, and advanced expressions.",
                    },
                  ].map((step, index) => (
                    <div key={step.title} className="border-t border-primary/20 pt-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-4 text-xl font-semibold text-primary">{step.title}</h3>
                      <p className="mt-3">{step.body}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-primary/20 pt-8">
                  <div className="grid gap-6 lg:grid-cols-2">
                    {[
                      {
                        label: "Before",
                        src: "/gateway-policy-builder-before.png",
                        alt: "Original Gateway policy builder with a long vertical configuration flow",
                        caption: "The original builder spread related policy decisions across a long sequential form.",
                      },
                      {
                        label: "After",
                        src: "/gateway-policy-builder-solution.jpeg",
                        alt: "Redesigned Gateway firewall policy builder with If and Then columns and a visual policy preview",
                        caption: "The redesigned builder kept conditions, actions, and preview behavior visible together.",
                      },
                    ].map((image) => (
                      <figure key={image.label}>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                          {image.label}
                        </p>
                        <div className="overflow-hidden border border-primary/20 bg-card/40">
                          <img src={image.src} alt={image.alt} className="h-auto w-full" />
                        </div>
                        <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {image.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="validation" eyebrow="Validation" title="AI-assisted prototyping turned abstract alignment into tangible momentum">
              <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.45fr)]">
                <div className="space-y-6">
                  <p>
                    One of the most important parts of this project was not just the redesign itself. It was how AI dramatically accelerated the ability to explore and communicate complex UX ideas.
                  </p>
                  <p>
                    Instead of relying solely on static wireframes, I used Figma Make alongside natural-language prompting and reference materials to rapidly generate interactive workflow concepts that stakeholders could immediately engage with. This moved conversations beyond abstract discussions and into tangible experiences much earlier in the process.
                  </p>
                  <p>
                    I also used AI-assisted analysis of internal documentation to quickly extract and categorize the large number of conditional settings and behaviors supported by Gateway policies. This made it possible to simulate realistic progressive disclosure behaviors within the prototype itself.
                  </p>
                  <p>
                    Although the redesigned policy builder is still early in its lifecycle, the prototype created a shared visual language for alignment discussions and compressed the path from concept to design refinement and engineering handoff.
                  </p>
                </div>
                <div className="grid gap-4">
                  {["Interactive workflows over static screens", "AI-assisted settings analysis", "Realistic progressive disclosure", "Faster stakeholder alignment"].map((item) => (
                    <div key={item} className="border-t border-accent/40 pt-4 text-foreground">{item}</div>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="reflection" eyebrow="Reflection" title="Enterprise complexity becomes easier to manage when interfaces reflect user intent">
              <div className="grid gap-6">
                {[
                  {
                    title: "Enterprise complexity becomes easier to manage when interfaces reflect user intent",
                    body: "Administrators already understood the security outcomes they wanted to achieve. The friction came from needing to translate those goals into workflows shaped around implementation details, protocol categories, and fragmented configuration patterns.",
                  },
                  {
                    title: "Progressive disclosure is critical for scalable enterprise UX",
                    body: "The issue was not the existence of advanced functionality. It was exposing too much of it simultaneously. Contextual progressive disclosure allowed the builder to support highly conditional workflows while reducing cognitive overhead and visual noise.",
                  },
                  {
                    title: "AI is most valuable when it accelerates momentum, not just production",
                    body: "The biggest impact AI had on this project was reducing the friction required to explore ambitious UX changes. By rapidly prototyping conditional workflows and simulating realistic interactions, AI helped transform abstract redesign conversations into tangible experiences teams could immediately align around.",
                  },
                ].map((principle, index) => (
                  <div key={principle.title} className="grid gap-3 border-t border-primary/20 pt-5 md:grid-cols-[4rem_minmax(0,1fr)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{principle.title}</h3>
                      <p className="mt-3">{principle.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <section className="border-t border-primary/20 py-16">
              <div className="flex justify-between items-center">
                {piece.prevProject && (
                  <Link href={`/work/${piece.prevProject}`}>
                    <Button variant="outline" size="lg">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Previous case study
                    </Button>
                  </Link>
                )}
                <div className="flex-1" />
                {piece.nextProject && (
                  <Link href={`/work/${piece.nextProject}`}>
                    <Button size="lg">
                      Next case study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}

