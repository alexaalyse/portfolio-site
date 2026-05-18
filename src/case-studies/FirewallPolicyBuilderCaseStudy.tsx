import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PortfolioProcessNavigation from '@/components/PortfolioProcessNavigation'
import { HeaderNavLinks } from '@/components/HeaderNavLinks'
import type { PortfolioPiece } from './types'
import { CaseStudySection } from './CaseStudySection'
import { policyBuilderImpact, policyBuilderSteps } from './case-study-data'

export function FirewallPolicyBuilderCaseStudy({ piece }: { piece: PortfolioPiece }) {
  return (
    <>
      <PortfolioProcessNavigation steps={policyBuilderSteps} />
      <main className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 w-full items-center justify-between px-6 md:px-8">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-xl font-bold">Alexa Mavrogianis</span>
            </Link>
            <HeaderNavLinks />
          </div>
        </nav>

        <div className="relative overflow-hidden lg:pl-28">
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(93,28,52,0.08))] lg:block" />

          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 md:py-24 lg:pl-44 lg:pr-20 xl:pl-48">
            <section id="hero" className="pb-16 md:pb-20">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-14 bg-accent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                  Case study
                </p>
              </div>
              <h1 className="max-w-[1400px] text-5xl font-bold leading-[0.98] text-primary md:text-7xl">
                Building a policy builder for how administrators actually think
              </h1>
              <div className="mt-8 max-w-[1400px] space-y-5 text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
                <p>
                  The firewall policy builder was a fragmented, scroll-heavy configuration experience. I led a redesign to turn it into a unified visual workflow built around real user mental models.
                </p>
                <p>
                  This work reframed policy creation around a persistent If / Then structure while using AI-assisted prototyping to rapidly accelerate alignment, iteration, and organizational momentum.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                {piece.tags.map((tag) => (
                  <span key={tag} className="border border-primary/15 bg-[#EDE3D8] px-3 py-2 text-sm font-medium leading-tight text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <CaseStudySection id="impact" eyebrow="Impact" title="Reframed policy creation around administrator intent">
              <div className="grid gap-6 md:grid-cols-2">
                {policyBuilderImpact.map((item) => (
                  <div key={item.title} className="border-t border-primary/20 pt-5">
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3">{item.body}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="problem" eyebrow="The problem" title="A critical enterprise workflow had become a wall of scroll">
              <div className="max-w-[1400px] space-y-6">
                <p>
                  The firewall policy builder was one of the most heavily used surfaces in the enterprise dashboard, but over time the experience became increasingly difficult to scale. Administrators needed to configure highly conditional policies across DNS, HTTP, and Network traffic, yet the UI separated those workflows into distinct policy types despite sharing the same underlying logic.
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
                  The biggest challenge became momentum: making a large-scale redesign concrete enough for teams to understand, evaluate, and believe they could ship.
                </p>
              </div>
            </CaseStudySection>

            <CaseStudySection id="solution" eyebrow="The solution" title="A unified If / Then workflow that preserved technical flexibility">
              <div className="space-y-8">
                <div className="max-w-[1400px] space-y-6">
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
                        src: "/policy-builder-before.png",
                        alt: "Original policy builder with a long vertical configuration flow",
                        caption: "The original builder spread related policy decisions across a long sequential form.",
                      },
                      {
                        label: "After",
                        src: "/policy-builder-solution.jpeg",
                        alt: "Redesigned firewall policy builder with If and Then columns and a visual policy preview",
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

            <CaseStudySection id="alignment" eyebrow="Alignment" title="AI-assisted prototyping turned abstract alignment into tangible momentum">
              <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.45fr)]">
                <div className="space-y-6">
                  <p>
                    One of the most important parts of this project was not just the redesign itself. It was how AI dramatically accelerated the ability to explore and communicate complex UX ideas.
                  </p>
                  <p>
                    Instead of relying solely on static wireframes, I used Figma Make alongside natural-language prompting and reference materials to rapidly generate interactive workflow concepts that stakeholders could immediately engage with. This moved conversations beyond abstract discussions and into tangible experiences much earlier in the process.
                  </p>
                  <p>
                    I also used AI-assisted analysis of internal documentation to quickly extract and categorize the large number of conditional settings and behaviors supported by network policies. This made it possible to simulate realistic progressive disclosure behaviors within the prototype itself.
                  </p>
                  <p>
                    Although the redesigned policy builder is still early in its lifecycle, the prototype created a shared visual language for alignment discussions and compressed the path from concept to design refinement and engineering handoff.
                  </p>
                </div>
                <div className="grid gap-4">
                  {[
                    {
                      title: "Interactive workflows over static screens",
                      body: "Clickable prototypes helped stakeholders evaluate policy creation through realistic workflow behavior.",
                    },
                    {
                      title: "AI-assisted settings analysis",
                      body: "AI helped analyze the codebase for all conditional logic that needed representation.",
                    },
                    {
                      title: "Realistic progressive disclosure",
                      body: "Advanced settings appeared when specific policy choices made them relevant.",
                    },
                    {
                      title: "Faster stakeholder alignment",
                      body: "Concrete interactions helped teams align earlier across product and engineering conversations.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-t border-accent/40 pt-4">
                      <h3 className="text-lg font-semibold leading-snug text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CaseStudySection>

            <CaseStudySection id="reflection" eyebrow="Reflection" title="Enterprise complexity becomes easier to manage when interfaces reflect user intent">
              <div className="space-y-8">
                <p>
                  Here are principles I would carry into any enterprise workflow with conditional logic, advanced settings, and high-stakes configuration:
                </p>

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


