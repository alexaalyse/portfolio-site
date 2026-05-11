import { ArrowDown, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const WorkSection = () => {
  const projects = [
    {
      title: "Zero Trust Navigation Overhaul",
      description: (
        <>
          A user once described the previous navigation as "the house of mirrors at the carnival." We needed a better way to help users quickly find what they needed.
          <br /><br />
          I led a redesign of the entire information architecture to focus on use cases rather than product silos.
        </>
      ),
      tags: ["UX strategy", "Information architecture", "User research"],
      slug: "zero-trust-navigation"
    },
    {
      title: "Zero Trust Onboarding",
      description: ( 
        <>
        We advertised VPN replacement as a use case for our Zero Trust platform. But there was a problem. Once you were in the dashboard, there was no mention of how to get started. 
        <br /><br /> 
        I led content strategy for new intent-based onboarding flows to help more users get started faster.
        </>
      ),
      tags: ["Journey mapping", "Content strategy", "Data-driven"],
      slug: "zero-trust-onboarding"
    },
    {
      title: "Overview Pages",
      description: (
        <>
          While doing some exploratory analysis, I noticed a pattern in our product data. Users would click straight down the side navigation before getting started - if they did at all.
          <br /><br />
          I advocated for the introduction of overview pages for top-level navigation items, and led content strategy once product signed off. 
        </>
      ),
      tags: ["Product strategy", "UX writing", "Data analysis"],
      slug: "overview-pages"
    },
    {
      title: "Empty States Strategy",
      description: (
        <>
          Empty states across the platform were generic and failed to guide users toward meaningful actions. First-time users often felt lost when encountering zero-data scenarios, leading to high bounce rates and poor user retention.
          <br /><br />
          I developed a comprehensive empty states framework with engaging copy and visual designs that provided contextual guidance and clear next steps.
        </>
      ),
      tags: ["Content Strategy", "User Engagement", "First-Time Experience", "UX Writing"],
      slug: "empty-states"
    },
    {
      title: "CLUE Index",
      description: (
        <>
          The organization lacked a comprehensive framework for measuring and improving user experience across the customer lifecycle. UX initiatives were prioritized based on gut feelings rather than data, making it difficult to demonstrate ROI and secure resources for improvements.
          <br /><br />
          I created the CLUE Index (Content Legibility for User Ease) - a tool that grades content according to our style guide and democratizes UX writing through AI-powered rules.
        </>
      ),
      tags: ["UX Metrics", "Framework Development", "Content Strategy", "AI Tools"],
      slug: "clue-index"
    },
    {
      title: "Cloudy AI",
      description: (
        <>
          A user reported that an error message scared them so badly they stopped using the platform for 3 months. Our AI-powered dashboard agent lacked the ability to explain errors in human-friendly terms, leaving users confused and frustrated when things went wrong.
          <br /><br />
          I designed an error explainer system that uses AI to translate technical errors into clear explanations with actionable next steps, building user confidence and reducing support tickets.
        </>
      ),
      tags: ["AI/UX", "Error Management", "User Trust", "Contextual Help"],
      slug: "cloudy-ai"
    }
  ]

  return (
    <section id="work" className="relative overflow-hidden bg-background py-24 md:py-32 lg:pl-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-24 hidden h-64 w-64 rotate-12 border border-accent/15 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(168,85,247,0.045))] lg:block" />

      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-10 lg:pr-20">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-14 bg-accent" />
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            My work
          </p>
        </div>

        <div className="mb-16 max-w-6xl">
          <h2 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
            Case studies
          </h2>
          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
            A selection of some of my favorite projects across UX strategy, content systems, AI, and product clarity.
          </p>
        </div>

        <div className="grid border-t border-primary/20 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex min-h-[22rem] flex-col border-b border-primary/20 py-8 pr-6 transition-colors hover:border-accent/70 md:py-10 lg:px-8"
            >
              <div className="mb-8 flex items-start justify-between gap-6">
                <div>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight text-primary md:text-3xl">
                    {project.title}
                  </h3>
                </div>
                <ArrowUpRight className="mt-1 h-6 w-6 flex-none text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>

              <p className="text-base leading-relaxed text-muted-foreground/90 md:text-lg">
                {project.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-3 pt-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 flex items-center gap-3 text-accent">
          <ArrowDown className="h-5 w-5 animate-bounce" />
          <span className="text-sm font-medium uppercase tracking-[0.22em]">
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}

export default WorkSection
