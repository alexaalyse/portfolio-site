import { frameworks } from "@/frameworks/data"
import { ArrowDown, ArrowUpRight, Bot, Compass, FileText, Network, Users } from "lucide-react"
import Link from "next/link"

const learningLoop = [
  {
    step: "01",
    title: "Listen",
    detail: "Find the friction in user behavior, support signals, and product data.",
  },
  {
    step: "02",
    title: "Frame",
    detail: "Turn ambiguity into a clear product direction and testable point of view.",
  },
  {
    step: "03",
    title: "Shape",
    detail: "Prototype the workflow, language, and system behavior together.",
  },
  {
    step: "04",
    title: "Learn",
    detail: "Measure what changed, sharpen the pattern, and iterate again.",
  },
]

const capabilityGroups = [
  {
    label: "Product strategy",
    Icon: Compass,
    skills: ["UX strategy", "Product direction", "ROI measurement", "User research"],
  },
  {
    label: "Systems thinking",
    Icon: Network,
    skills: ["Systems design", "Information architecture", "API design as UX design", "Connected experiences"],
  },
  {
    label: "AI and interaction",
    Icon: Bot,
    skills: ["AI workflows", "Conversational AI", "Context engineering", "AI-ready experiences"],
  },
  {
    label: "Content systems",
    Icon: FileText,
    skills: ["Content as a product", "UX writing systems", "Terminology and guidance", "Workflow simplification"],
  },
  {
    label: "Operational leadership",
    Icon: Users,
    skills: ["Cross-functional leadership", "Experimentation", "Insight synthesis", "Data analysis"],
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32 lg:pl-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(137,148,129,0.1))] lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:pr-20">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-14 bg-accent" />
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            My philosophy
          </p>
        </div>

        <div>
          <h2 className="max-w-[1400px] text-4xl font-bold leading-tight text-primary md:text-6xl">
            Listen closely. Build intentionally. Design experiences that scale.
          </h2>

          <div className="mt-10 max-w-[1400px] text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
            <aside aria-label="Fast learning loop diagram" className="relative float-right mb-6 ml-6 w-[min(28rem,42%)] border border-primary/20 bg-card/40 p-6 max-[520px]:float-none max-[520px]:mb-8 max-[520px]:ml-0 max-[520px]:w-full md:ml-10 md:p-8">
              <div aria-hidden="true" className="absolute -right-4 -top-4 h-20 w-20 border border-accent/40" />
              <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-16 w-16 border border-primary/30" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
                  Working rhythm
                </p>
                <p className="mt-5 text-4xl font-black leading-none text-primary md:text-5xl">
                  Learn fast.
                </p>
                <p className="mt-2 text-4xl font-black leading-none text-foreground md:text-5xl">
                  Iterate faster.
                </p>

                <div className="my-8 h-px bg-gradient-to-r from-accent via-primary to-transparent" />

                <div className="space-y-3">
                  {learningLoop.map((item, index) => (
                    <div key={item.title} className="relative grid grid-cols-[auto_1fr] gap-4 border border-primary/15 bg-background/60 p-4">
                      <div className="flex flex-col items-center">
                        <span className="flex h-9 w-9 items-center justify-center border border-accent/60 text-sm font-bold text-accent">
                          {item.step}
                        </span>
                        {index < learningLoop.length - 1 && (
                          <span aria-hidden="true" className="mt-3 h-full min-h-8 w-px bg-accent/35" />
                        )}
                      </div>
                      <div>
                        <p className="text-lg font-semibold leading-none text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-2 text-base leading-snug text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 border-l-2 border-accent pl-4 text-base font-semibold leading-snug text-foreground">
                  Work fast enough to learn, and learn clearly enough to build with intent.
                </p>
              </div>
            </aside>

            <div className="space-y-6">
              <p>
                I believe good UX starts with paying attention. Not just to what users say, but to the patterns beneath the friction. What keeps confusing people? What workarounds are becoming normalized? What signals is the product unintentionally sending?
              </p>
              <p>
                Sometimes the issue is content. Sometimes it's the workflow. Sometimes the product itself is fighting the user's mental model.
              </p>
              <p>
                That's the part of UX I enjoy most: Translating ambiguity into clearer experiences, stronger product decisions, and systems that become more intuitive over time.
              </p>
              <p>
                My work combines research, analytics, experimentation, and systems thinking to help make complex products easier to understand.
              </p>
              <p>
                Because of that, I think deeply about the role content plays within a product experience. Information architecture, terminology, guidance, and context all shape how people interpret, navigate, and trust a product. They influence whether something feels intuitive, discoverable, and actionable.
              </p>
              <p>
                We're also at a fascinating crossroads with software. Experiences are becoming increasingly AI-driven, and some of our users even <em className="text-primary">are</em> AI. As we design for this new world, one thing remains true regardless of who &mdash; or what &mdash; is interacting with a product: <span className="font-semibold text-primary">Clarity creates reliability.</span>
              </p>
              <p>
                When workflows are straightforward, systems behave more predictably. When concepts are unified, decisions become easier to make. When the product carries its weight, content doesn't have to compensate.
              </p>
              <p>
                Those are the kinds of experiences I'm driven to build. Experiences where complexity feels manageable, decisions feel intentional, and users can move forward with confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-[1400px]">
          <h3 className="text-2xl font-semibold text-primary md:text-3xl">Where I thrive</h3>
          <div className="mt-8 grid border-t border-primary/20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {capabilityGroups.map(({ label, Icon, skills }, index) => (
              <article
                key={label}
                className="group relative flex flex-col border-b border-primary/20 py-8 pr-6 transition-colors hover:border-accent/70 md:min-h-[17rem] md:pr-8 md:[&:nth-child(even)]:pl-8 xl:min-h-[21rem] xl:px-6 2xl:border-r 2xl:last:border-r-0"
              >
                <div className="mb-8 flex items-start justify-between gap-6 md:mb-10">
                  <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="text-xl font-semibold leading-tight text-primary md:text-2xl">
                      {label}
                    </h4>
                  </div>
                  <span className="flex h-11 w-11 flex-none items-center justify-center border border-accent/35 bg-card/35 text-accent transition-colors group-hover:border-accent/70 group-hover:bg-accent/10">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 md:mt-auto">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-primary/15 bg-background/45 px-3 py-2 text-sm font-medium leading-tight text-foreground transition-colors group-hover:border-accent/35 group-hover:bg-card/55 md:text-base"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-[1400px]" id="frameworks">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
                Frameworks
              </p>
              <h3 className="text-2xl font-semibold text-primary md:text-3xl">
                Mental models for making complexity usable
              </h3>
            </div>
            <Link
              href="/frameworks/"
              className="hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:text-primary md:flex"
            >
              View all
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {frameworks.slice(0, 2).map((entry, index) => {
              const content = (
                <>
                  <div className="mb-4 flex items-start justify-between gap-6">
                    <div>
                      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h4 className="text-2xl font-semibold leading-tight text-primary md:text-3xl">
                        {entry.title}
                      </h4>
                    </div>
                    {entry.href && (
                      <span className="flex h-11 w-11 flex-none items-center justify-center border border-accent/35 bg-background/35 text-accent transition-colors group-hover:border-accent/70 group-hover:bg-accent/10">
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground/90 md:text-lg">
                    {entry.dek}
                  </p>
                </>
              )

              return entry.href ? (
                <Link
                  key={entry.slug}
                  href={entry.href}
                  className="group flex min-h-[14rem] flex-col border border-primary/20 bg-card/35 p-6 transition-colors hover:border-accent/70 hover:bg-card/55 md:min-h-[15rem] md:p-7"
                >
                  {content}
                </Link>
              ) : (
                <article
                  key={entry.slug}
                  className="group flex min-h-[14rem] flex-col border border-primary/20 bg-card/35 p-6 md:min-h-[15rem] md:p-7"
                >
                  {content}
                </article>
              )
            })}
          </div>

          <Link
            href="/frameworks/"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:text-primary md:hidden"
          >
            View all
            <ArrowUpRight className="h-4 w-4" />
          </Link>
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

export default AboutSection
