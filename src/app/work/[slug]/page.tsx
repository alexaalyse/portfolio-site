'use client'

import { notFound } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, TestTube, BarChart, TrendingUp, Users, Users as Team, Settings, BookOpen, CheckSquare as CheckList, Target, Layers, FlaskConical } from "lucide-react"
import PortfolioProcessNavigation from "@/components/PortfolioProcessNavigation"

// Icon mapping for process images
const iconMap: Record<string, React.ComponentType<any>> = {
  'test-tube': TestTube,
  'bar-chart': BarChart,
  'trending-up': TrendingUp,
  'users': Users,
  'team': Team,
  'settings': Settings,
  'book-open': BookOpen,
  'checklist': CheckList
}

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
    nextProject: 'zero-trust-onboarding',
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
    prevProject: 'overview-pages'
  },
  'clue-index': {
    title: 'CLUE Index Framework',
    subtitle: 'Customer Lifecycle User Experience measurement framework',
    problem: 'Product teams lacked a comprehensive way to measure user experience across the customer lifecycle. There was no standardized approach to track UX metrics, making it difficult to identify improvement opportunities and measure the impact of UX initiatives.',
    impact: [
      {
        header: 'Comprehensive UX measurement framework',
        description: 'Established a complete framework for measuring and tracking user experience metrics.'
      },
      {
        header: 'Data-driven decision making across product teams',
        description: 'Enabled teams to make informed decisions based on user experience data.'
      },
      {
        header: 'Improved customer journey understanding',
        description: 'Better insights into how users interact with products across their journey.'
      },
      {
        header: 'Reduced customer churn by 25%',
        description: 'Significant reduction in customer churn through improved user experience.'
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
    tags: ['UX Metrics', 'Framework Development', 'Customer Journey', 'Analytics'],
    nextProject: 'cloudy-ai',
    prevProject: 'empty-states'
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
    prevProject: 'clue-index'
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

export default async function PortfolioPiece({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const piece = portfolioPieces[slug as keyof typeof portfolioPieces]

  if (!piece) {
    notFound()
  }

  if (slug === 'zero-trust-navigation') {
    return <NavigationOverhaulCaseStudy piece={piece} />
  }

  return (
    <PortfolioPieceClient piece={piece} />
  )
}

const navigationSteps = [
  { id: "hero", label: "Summary", icon: BookOpen, href: "#hero" },
  { id: "impact", label: "Impact", icon: TrendingUp, href: "#impact" },
  { id: "problem", label: "Problem", icon: Target, href: "#problem" },
  { id: "system", label: "Solution", icon: Layers, href: "#system" },
  { id: "validated", label: "Validation", icon: FlaskConical, href: "#validated" },
  { id: "reflection", label: "Reflection", icon: BookOpen, href: "#reflection" },
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
  children: React.ReactNode
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
          <div className="container flex h-16 items-center justify-between">
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
                      Next project
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

function PortfolioPieceClient({ piece }: { piece: PortfolioPiece }) {
  const [selectedPhase, setSelectedPhase] = useState<number>(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = () => {
    const totalSlides = piece.process[selectedPhase].slides.length
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1)
    } else if (selectedPhase < piece.process.length - 1) {
      setSelectedPhase((prev) => prev + 1)
      setCurrentSlide(0)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    } else if (selectedPhase > 0) {
      const prevPhase = selectedPhase - 1
      setSelectedPhase(prevPhase)
      setCurrentSlide(piece.process[prevPhase].slides.length - 1)
    }
  }

  return (
    <>
      <PortfolioProcessNavigation />
      <main className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-xl font-bold">Alexa Mavrogianis</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#about" className="text-sm font-medium transition-colors hover:text-accent">About</Link>
              <Link href="/#work" className="text-sm font-medium transition-colors hover:text-accent">Work</Link>
              <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-accent">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{piece.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{piece.subtitle}</p>
              <div className="flex flex-wrap gap-2 justify-start">
                {piece.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-left">
              <h2 className="text-3xl font-bold mb-8 text-left text-primary">The problem</h2>
              <Card>
                <CardContent className="p-8">
                  <div 
                    className="text-lg leading-relaxed text-muted-foreground [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_li]:ml-2"
                    dangerouslySetInnerHTML={{ __html: piece.problem }}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-left">
              <h2 className="text-3xl font-bold mb-8 text-left text-primary">My impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {piece.impact.map((impact, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2">{impact.header}</h4>
                      <p className="text-muted-foreground">{impact.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        {piece.beforeAfter && (
          <section id="before-after" className="py-20 bg-background">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-left">
                <h2 className="text-3xl font-bold mb-8 text-left text-primary">Before & After</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Before</h3>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={piece.beforeAfter.before} 
                        alt="Before empty state design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-muted-foreground">After</h3>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img 
                        src={piece.beforeAfter.after} 
                        alt="After empty state design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Process Section - Embedded Slide Deck */}
        <section id="process" className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-left">
              <h2 className="text-3xl font-bold mb-12 text-left text-primary">My process</h2>
              
              {/* Slide Deck Container */}
              <Card className="overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-border bg-muted/30">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      {piece.process[selectedPhase].phase}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Phase {selectedPhase + 1} of {piece.process.length} • 
                      Slide {currentSlide + 1} of {piece.process[selectedPhase].slides.length}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {piece.process[selectedPhase].slides[currentSlide].title}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted h-1">
                  <div 
                    className="bg-primary h-1 transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / piece.process[selectedPhase].slides.length) * 100}%` }}
                  />
                </div>
                
                {/* Slide Content */}
                <div className="p-8 min-h-[400px]">
                  <div className="prose prose-invert max-w-none">
                    <h4 className="text-xl font-semibold text-primary mb-4">
                      {piece.process[selectedPhase].slides[currentSlide].title}
                    </h4>
                    <div className="text-muted-foreground leading-relaxed text-lg mb-8 whitespace-pre-line">
                      {piece.process[selectedPhase].slides[currentSlide].content}
                    </div>
                    
                    {/* Images Grid - show on first slide of each phase */}
                    {currentSlide === 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {piece.process[selectedPhase].images.map((image, imgIndex) => {
                          const IconComponent = iconMap[image]
                          return (
                            <div key={imgIndex} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                {IconComponent ? (
                                  <IconComponent className="w-16 h-16 text-accent mb-2 mx-auto" />
                                ) : (
                                  <>
                                    <div className="text-2xl font-bold text-primary/30 mb-2">Image {imgIndex + 1}</div>
                                    <div className="text-sm text-muted-foreground">{image}</div>
                                  </>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation Footer */}
                <div className="flex justify-between items-center p-6 border-t border-border bg-muted/30">
                  <Button
                    variant="outline"
                    onClick={goToPrevSlide}
                    disabled={currentSlide === 0 && selectedPhase === 0}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {/* Phase Dots */}
                  <div className="flex gap-1">
                    {piece.process.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="flex gap-1">
                        {phase.slides.map((_, slideIndex) => {
                          const isActive = selectedPhase === phaseIndex && currentSlide === slideIndex
                          const isPast = selectedPhase > phaseIndex || (selectedPhase === phaseIndex && currentSlide > slideIndex)
                          return (
                            <button
                              key={`${phaseIndex}-${slideIndex}`}
                              onClick={() => {
                                setSelectedPhase(phaseIndex)
                                setCurrentSlide(slideIndex)
                              }}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                isActive ? 'bg-primary' : isPast ? 'bg-primary/50' : 'bg-muted-foreground/30'
                              }`}
                            />
                          )
                        })}
                        {phaseIndex < piece.process.length - 1 && (
                          <div className="w-4 flex items-center justify-center">
                            <div className="w-2 h-px bg-muted-foreground/20" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={goToNextSlide}
                    disabled={selectedPhase === piece.process.length - 1 && currentSlide === piece.process[piece.process.length - 1].slides.length - 1}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center">
                {piece.prevProject && (
                  <Link href={`/work/${piece.prevProject}`}>
                    <Button variant="outline" size="lg">
                      ← Previous project
                    </Button>
                  </Link>
                )}
                <div className="flex-1" />
                {piece.nextProject && (
                  <Link href={`/work/${piece.nextProject}`}>
                    <Button size="lg">
                      Next project →
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
