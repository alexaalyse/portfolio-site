import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PortfolioProcessNavigation from '@/components/PortfolioProcessNavigation'
import type { PortfolioPiece } from './types'
import { CaseStudySection } from './CaseStudySection'
import { impactHighlights, iaLayers, navigationSteps } from './case-study-data'

export function NavigationOverhaulCaseStudy({ piece }: { piece: PortfolioPiece }) {
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
              <div className="space-y-10">
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
                <div className="border-t border-primary/20 pt-6">
                  <h3 className="text-xl font-semibold text-primary">Developed guidance for sustainable navigation growth</h3>
                  <div className="mt-5 grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-accent">Top-level items</h4>
                      <p className="mt-3">
                        These were exceptionally rare. The new IA was intended to be collectively exhaustive and scalable enough for future features. A new top-level item could be added if it:
                      </p>
                      <ul className="mt-3 list-disc space-y-2 pl-5">
                        <li>Introduced a net new use case</li>
                        <li>Established a brand new way of interacting with the Zero Trust dashboard</li>
                      </ul>
                      <p className="mt-3">
                        I treated these as new pillars in the user experience, or as things Zero Trust provides a service for managing. They were areas that could potentially be the main or only thing someone uses in the dashboard.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-accent">Child-level items</h4>
                      <p className="mt-3">
                        A page could become a child item if it met both criteria:
                      </p>
                      <ol className="mt-3 list-decimal space-y-3 pl-5">
                        <li>
                          <span className="font-semibold text-foreground">It allowed for immediate action or value:</span> new child items needed object creation directly from the empty state or another immediate value pathway.
                        </li>
                        <li>
                          <span className="font-semibold text-foreground">It was mutually exclusive from other nav items:</span> closely related or overlapping content was better suited as a tab or inline view.
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div className="border-t border-primary/20 pt-6">
                  <h3 className="text-xl font-semibold text-primary">Operationalized the decision path</h3>
                  <div className="mt-3 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:items-start">
                    <div className="space-y-4">
                      <p>
                        I turned the placement criteria into a decision flowchart that helped teams reason through the tradeoffs before adding new navigation surface area. The flowchart asked whether a feature introduced a new use case, served an existing workflow, created immediate action or value, overlapped with another page, or belonged better as a tab or inline view.
                      </p>
                      <p>
                        To make that guidance usable beyond a static artifact, I translated the flowchart into an AI-driven skill. Product and design partners could describe a proposed feature, and the skill would return a recommendation for where it should live, such as a new child item, a tab, an inline view, or an existing section, along with the reasoning behind that recommendation.
                      </p>
                    </div>
                    <figure className="w-full">
                      <div className="overflow-hidden border border-primary/20 bg-card/40">
                        <img
                          src="/navigation-decision-flowchart.png"
                          alt="Flowchart for deciding where a new Zero Trust feature should live in the navigation"
                          className="h-auto w-full"
                        />
                      </div>
                      <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        The placement flowchart translated navigation principles into repeatable decision logic.
                      </figcaption>
                    </figure>
                  </div>
                </div>
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

            <CaseStudySection id="reflection" eyebrow="Transferable principles" title="Navigation shapes how users understand complex systems">
              <div className="space-y-8">
                <p>
                  Here are principles I would carry into any complex product environment:
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


