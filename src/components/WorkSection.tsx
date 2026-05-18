import { ArrowDown, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const WorkSection = () => {
  const projects = [
    {
      title: "Zero Trust navigation overhaul",
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
      title: "Empty states strategy",
      description: (
        <>
          Empty states across the platform were generic and failed to guide users toward meaningful actions. First-time users often felt lost when encountering zero-data scenarios, leading to high bounce rates and poor user retention.
          <br /><br />
          I developed a comprehensive empty states framework with engaging copy and visual designs that provided contextual guidance and clear next steps.
        </>
      ),
      tags: ["Content strategy", "A/B testing", "Onboarding experience", "UX writing"],
      slug: "empty-states"
    },
    {
      title: "The PCX CLUE Index",
      description: (
        <>
          Copy reviews came fast and furious, taking time away from larger, strategic initiatives. We needed a way to democratize UX writing. 
          <br /><br />
          I built the CLUE Index, which stood for Content Legibility for User Ease. An AI-assisted tool for evaluating content against Cloudflare's voice, tone, terminology, and usability standards.
        </>
      ),
      tags: ["AI-assisted UX", "Content strategy", "UX writing systems"],
      slug: "clue-index"
    },
    {
      title: "Gateway firewall policy builder",
      description: (
        <>
          Gateway administrators were configuring highly conditional DNS, HTTP, and Network policies through fragmented, scroll-heavy workflows.
          <br /><br />
          I led a redesign of the policy builder around a simpler "If / Then" mental model, using AI-assisted prototyping to accelerate alignment and make a complex enterprise workflow feel achievable.
        </>
      ),
      tags: ["Enterprise UX", "AI prototyping", "UX design"],
      slug: "gateway-policy-builder"
    },
    {
      title: "Designing documentation for retrieval",
      description: (
        <>
          Technically correct documentation was still producing unreliable AI answers once it was fragmented and retrieved by LLM systems.
          <br /><br />
          I created a chunkability framework for evaluating whether documentation could remain understandable, trustworthy, and actionable in isolation.
        </>
      ),
      tags: ["AI content strategy", "Documentation IA", "RAG systems"],
      slug: "documentation-for-retrieval"
    }
  ]

  return (
    <section id="work" className="relative overflow-hidden py-24 md:py-32 lg:pl-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(93,28,52,0.08))] lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:pr-20">
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
              className="group flex min-h-[22rem] flex-col border-b border-primary/20 py-8 pr-6 transition-colors hover:border-accent/70 md:py-10 lg:pr-8 lg:[&:nth-child(even)]:pl-8"
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
