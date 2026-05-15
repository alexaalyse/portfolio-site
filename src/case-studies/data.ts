export const portfolioPieces = {
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

export type PortfolioSlug = keyof typeof portfolioPieces

