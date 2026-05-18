import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import PortfolioProcessNavigation from '@/components/PortfolioProcessNavigation'
import { HeaderNavLinks } from '@/components/HeaderNavLinks'
import type { PortfolioPiece } from './types'
import { CaseStudySection } from './CaseStudySection'
import { contentQualityImpact, contentQualitySteps } from './case-study-data'

export function ContentQualityIndexCaseStudy({ piece }: { piece: PortfolioPiece }) {
  return (
    <>
      <PortfolioProcessNavigation steps={contentQualitySteps} />
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
          <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(137,148,129,0.1))] lg:block" />

          <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-20 md:px-10 md:py-24 lg:pl-44 lg:pr-20 xl:pl-48">
            <section id="hero" className="pb-16 md:pb-20">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-14 bg-accent" />
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                  Case study
                </p>
              </div>
              <h1 className="max-w-[1400px] text-5xl font-bold leading-[0.98] text-primary md:text-7xl">
                AI-assisted content quality scoring and generation
              </h1>
              <div className="mt-8 max-w-[1400px]">
                <div className="text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
                  <div className="mb-6 overflow-hidden border border-primary/20 bg-card/40 shadow-sm lg:float-right lg:mb-6 lg:ml-10 lg:mt-2 lg:w-[48%]">
                    <video
                      className="aspect-video w-full bg-background object-contain"
                      controls
                      muted
                      playsInline
                      poster="/content-quality-full-score.png"
                      preload="metadata"
                    >
                      <source src="/content-quality-demo.mp4" type="video/mp4" />
                    </video>
                    <p className="border-t border-primary/10 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                      For the clearest view of the content quality workflow, open the video in full screen.
                    </p>
                  </div>
                  <p>
                    As the company's product suite scaled, customer-facing content became increasingly inconsistent across dashboards, APIs, emails, and onboarding flows. UX writing reviews could not keep pace with the speed of product development, and emerging AI-generated content introduced even more variability in tone, terminology, and clarity.
                  </p>
                  <p className="mt-5">
                    I saw an opportunity to turn UX writing guidance into something measurable and operationalized: a system that could evaluate content against the company's voice, tone, terminology, and usability standards in real time.
                  </p>
                  <p className="mt-5">
                    I designed an AI-assisted content quality scoring and generation workflow. I created the evaluation framework, wrote the regex-based rules that translated UX writing standards into measurable checks, and shaped the workflow teams used to score, revise, and improve content.
                  </p>
                </div>
                <div className="clear-both mt-10 flex flex-wrap gap-3">
                  {piece.tags.map((tag) => (
                    <span key={tag} className="border border-primary/15 bg-[#EDE3D8] px-3 py-2 text-sm font-medium leading-tight text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <CaseStudySection id="impact" eyebrow="Impact" title="Made UX writing quality measurable and scalable">
              <div className="grid gap-6 md:grid-cols-2">
                {contentQualityImpact.map((item) => (
                  <div key={item.title} className="border-t border-primary/20 pt-5">
                    <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3">{item.body}</p>
                  </div>
                ))}
              </div>
            </CaseStudySection>

            <CaseStudySection id="problem" eyebrow="The problem" title="UX writing standards were treated like reference material, not operational infrastructure">
              <div className="max-w-[1400px] space-y-6">
                <p>
                  Most organizations treat UX writing standards as reference material. The assumption is that if teams have access to a glossary or style guide, consistency will naturally follow.
                </p>
                <p>
                  In practice, that rarely happens. Teams were shipping content from dozens of different perspectives, each with their own assumptions about terminology, tone, and user familiarity. Some descriptions were overly technical. Others were vague or abstract. Many explained implementation details without clarifying user outcomes.
                </p>
                <p>
                  The inconsistencies became especially visible in the enterprise dashboard, where users were already navigating highly complex workflows. Even small wording differences changed how users interpreted products, policies, and system behavior.
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
                  The introduction of generative AI accelerated the urgency of the problem. Teams could now generate content faster than ever, but speed amplified inconsistency. AI tools were effective at producing drafts, yet they lacked awareness of company-specific terminology, UX conventions, and product context.
                </p>
                <p className="text-foreground">
                  The challenge was no longer just "How do we review more content?" It became: "How do we create a scalable system that helps teams produce clearer content before UX review is needed?"
                </p>
              </div>
            </CaseStudySection>

            <CaseStudySection id="system" eyebrow="The framework" title="A custom AI-assisted evaluation system for UX writing">
              <div className="space-y-8">
                <div className="grid gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(18rem,0.45fr)]">
                  <div className="space-y-6">
                    <p>
                      I designed and built a custom AI-assisted UX writing evaluation system tailored specifically to the company's products, terminology, and voice guidelines.
                    </p>
                    <p>
                      At the time, AI writing workflows were still in their infancy, and primarily focused on generating copy with ChatGPT or Gemini. I approached the problem differently: how could AI help evaluate and improve content quality instead?
                    </p>
                    <p>
                      The system transformed UX writing principles into programmable scoring logic. I translated subjective writing guidance into measurable evaluation criteria using regex-based language detection, indexed terminology validation, structural writing checks, contextual AI analysis, and content-type-specific scoring models.
                    </p>
                    <p>
                      This meant the system could evaluate far more than grammar. It identified passive voice, missing Oxford commas, unclear action framing, terminology inconsistencies, tone mismatches, and UX writing anti-patterns using custom-built rules and AI interpretation layers.
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
                        body: "Checked copy against preferred company terms so product language stayed consistent across surfaces.",
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
                          body: "Checked list structures against the company's style expectations for clarity and consistency.",
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
                      src="/content-quality-score-modal.png"
                      alt="AI-assisted content quality score details modal showing weighted rule categories and individual writing guidelines"
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
                  I also designed the product experience for the tool itself, focusing on fast iteration loops and actionable recommendations rather than abstract scoring. Teams could paste content into the system, receive immediate feedback, generate AI-assisted revisions, and iterate toward stronger content quality directly within the workflow.
                </p>
                <p>
                  The result was not a generic grammar checker. It was a company-specific UX writing system designed to scale clarity, consistency, and usability across a rapidly growing enterprise platform.
                </p>

                <div className="grid gap-6 border-t border-primary/20 pt-8 lg:grid-cols-2">
                  {[
                    {
                      label: "Scoring workflow",
                      src: "/content-quality-full-score.png",
                      alt: "AI-assisted content quality scoring interface with copy input, a 10 out of 10 score, and no recommendations",
                      caption: "Teams could select a content type, paste draft copy, and generate a score tied to company-specific UX writing standards.",
                    },
                    {
                      label: "Recommendation output",
                      src: "/content-quality-recommendations.png",
                      alt: "AI-assisted content generation recommendations panel showing conversational tone, sentence length, and active voice feedback",
                      caption: "When content missed a rule, the system returned specific recommendations with examples teams could act on immediately.",
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
                      body: "Analyze content against company-specific terminology, voice, tone, usability, and content-type expectations.",
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
              <div className="space-y-8">
                <p>
                  Here are principles I would carry into any organization trying to make UX quality measurable and repeatable:
                </p>

                <div className="grid gap-6">
                {[
                  {
                    title: "Scalable UX systems matter more than isolated copy improvements",
                    body: "The long-term value of the system was not individual recommendations. It was the creation of a reusable system that embedded UX writing standards directly into day-to-day workflows. That shift made consistency more sustainable as the organization scaled.",
                  },
                  {
                    title: "AI content generation increases the importance of UX standards",
                    body: "Generative AI dramatically accelerates content creation, but acceleration without guardrails increases inconsistency. Content quality systems become more valuable in AI-assisted environments because they provide measurable standards for clarity, terminology, and usability.",
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


