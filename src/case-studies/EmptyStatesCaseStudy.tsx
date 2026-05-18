import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PortfolioProcessNavigation from '@/components/PortfolioProcessNavigation'
import { HeaderNavLinks } from '@/components/HeaderNavLinks'
import type { PortfolioPiece } from './types'
import { CaseStudySection } from './CaseStudySection'
import { emptyStatesImpact, emptyStatesSteps } from './case-study-data'

export function EmptyStatesCaseStudy({ piece }: { piece: PortfolioPiece }) {
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
            <HeaderNavLinks />
          </div>
        </nav>

        <div className="relative overflow-hidden lg:pl-28">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-32 hidden h-72 w-72 rotate-12 border border-accent/15 lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(93,28,52,0.08))] lg:block" />

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

            <CaseStudySection id="reflection" eyebrow="Transferable principles" title="Small moments of clarity can change whether users keep going">
              <div className="space-y-8">
                <p>
                  Here are principles I would carry into any complex onboarding experience:
                </p>

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


