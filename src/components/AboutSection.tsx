import { ArrowDown } from "lucide-react"

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-24 md:py-32 lg:pl-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-24 hidden h-56 w-56 -rotate-12 border border-primary/15 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(45,212,191,0.04))] lg:block" />

      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-10 lg:pr-20">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-14 bg-accent" />
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            My philosophy
          </p>
        </div>

        <div>
          <h2 className="max-w-6xl text-4xl font-bold leading-tight text-primary md:text-6xl">
            Listen. Learn. Build better systems.
          </h2>

          <div className="mt-10 max-w-6xl space-y-6 text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
            <p>
              I believe good UX starts with paying attention.
            </p>
            <p>
              What are users struggling with? What patterns keep showing up? What are people trying to accomplish beneath the feedback they're giving? Sometimes the issue is content. Sometimes it's the workflow. Sometimes the product itself is sending the wrong signals.
            </p>
            <p>
              That's the part of UX I enjoy most: digging into the "why" behind friction and turning those insights into better systems, clearer experiences, and more thoughtful product decisions.
            </p>
            <p>
              My work combines data, research, experimentation, and collaboration to improve complex B2B and AI-driven experiences. I'm especially interested in how people and AI navigate products differently - and how better structure, guidance, and context can make both more successful.
            </p>
            <p>
              The faster we learn, the faster we can build better systems.
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-6xl">
          <h3 className="text-2xl font-semibold text-primary md:text-3xl">Where I thrive</h3>
          <div className="mt-8 grid border-t border-primary/20 md:grid-cols-2 lg:grid-cols-4">
            {[
              "UX and product strategy", "Systems thinking", "API design as UX design",
              "Information architecture", "Data analysis", "AI workflows", "Content as a product",
              "ROI Measurement", "Conversational AI", "Context engineering", "User research", "Cross-functional leadership",
            ].map((skill) => (
              <div key={skill} className="group border-b border-primary/20 py-5 pr-6 transition-colors hover:border-accent/60 md:pl-5">
                <div className="mb-4 h-px w-8 bg-accent/50 transition-all group-hover:w-14 group-hover:bg-accent" />
                <p className="font-medium leading-snug">{skill}</p>
              </div>
            ))}
          </div>
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
