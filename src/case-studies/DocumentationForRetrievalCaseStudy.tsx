import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PortfolioProcessNavigation from '@/components/PortfolioProcessNavigation'
import { HeaderNavLinks } from '@/components/HeaderNavLinks'
import type { PortfolioPiece } from './types'
import { CaseStudySection } from './CaseStudySection'
import { retrievalImpact, retrievalSteps } from './case-study-data'

export function DocumentationForRetrievalCaseStudy({ piece }: { piece: PortfolioPiece }) {
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
            <HeaderNavLinks />
          </div>
        </nav>

        <div className="relative overflow-hidden lg:pl-28">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-32 hidden h-72 w-72 rotate-12 border border-accent/15 lg:block" />
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(137,148,129,0.1))] lg:block" />

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
                  {[
                    {
                      title: "Identity persistence",
                      body: "Each retrievable section carries enough product, version, or surface context to identify itself in isolation.",
                    },
                    {
                      title: "Heading clarity",
                      body: "Headings describe the specific product, action, or outcome a user might search for.",
                    },
                    {
                      title: "Table survivability",
                      body: "Captions and row labels preserve meaning when tables are chunked without headers or surrounding text.",
                    },
                    {
                      title: "Scope locality",
                      body: "Prerequisites, warnings, and constraints stay near the action or decision they govern.",
                    },
                    {
                      title: "Procedural atomicity",
                      body: "Each step contains one action and one outcome, with branching logic clearly separated.",
                    },
                    {
                      title: "Query-term alignment",
                      body: "Documentation uses formal product terms alongside the language users are likely to search with.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-t border-accent/40 pt-4">
                      <h3 className="text-lg font-semibold leading-snug text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                    </div>
                  ))}
                </div>

                <figure className="border-t border-primary/20 pt-8 md:col-span-2">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    Example comparison
                  </p>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {[
                      {
                        label: "Before",
                        src: "/chunkability-cni-before.svg",
                        alt: "Cloudflare Network Interconnect documentation before revision with a generic connection types heading and table without a descriptive caption",
                      },
                      {
                        label: "After",
                        src: "/chunkability-cni-example.svg",
                        alt: "Cloudflare Network Interconnect documentation after revision with clear product identity, a specific section heading, and a self-describing connection types table",
                      },
                    ].map((image) => (
                      <div key={image.label}>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                          {image.label}
                        </p>
                        <div className="overflow-hidden border border-primary/20 bg-card/40">
                          <img src={image.src} alt={image.alt} className="h-auto w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    The revised version improves identity persistence by repeating the full Cloudflare Network Interconnect (CNI) context in the section heading and table setup. It also improves table survivability with a descriptive caption and row labels that remain meaningful if the table is retrieved without surrounding page context.
                  </figcaption>
                </figure>
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

            <CaseStudySection id="reflection" eyebrow="Transferable principles" title="AI-ready documentation is fundamentally an information architecture problem">
              <div className="space-y-8">
                <p>
                  Here are principles I would carry into any content system that needs to remain accurate when retrieved, fragmented, or read out of order:
                </p>

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


