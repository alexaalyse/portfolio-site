import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[calc(100svh-4rem)] overflow-hidden py-16 md:py-20 lg:pl-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[32vw] bg-[linear-gradient(90deg,transparent,rgba(137,148,129,0.12))] lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-12rem)] w-full max-w-[1600px] items-center gap-16 px-6 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)] lg:pr-20">
        <div className="w-full max-w-6xl text-left">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-14 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              UX / AI / Content / Product Strategy
            </p>
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] text-primary md:text-7xl lg:text-8xl">
            Hi, I'm Alexa
          </h1>

          <div className="mt-8 max-w-6xl space-y-4 text-xl leading-relaxed text-muted-foreground/90 md:text-2xl lg:text-3xl">
            <p>
              I translate user confusion into product direction.
            </p>
            <p>
              My sweet spot sits at the intersection of data, storytelling, and product strategy. Lately, I've been focused on how user behavior, AI systems, and product architecture shape the way people experience complex software.
            </p>
            <p>
              The work I enjoy most is finding the patterns beneath friction and turning them into experiences that feel more intentional, scalable, and human.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-lg px-8 py-6 md:px-10 md:py-7 bg-primary hover:bg-primary/90">
              <a href="#work">View case studies</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 md:px-10 md:py-7 border-primary text-primary hover:bg-accent hover:text-accent-foreground">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <div className="mt-14 flex items-center gap-3 text-accent">
            <ArrowDown className="h-5 w-5 animate-bounce" />
            <span className="text-sm font-medium uppercase tracking-[0.22em]">
              Scroll
            </span>
          </div>
        </div>

        <aside className="hidden border-l border-primary/20 pl-8 lg:block">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
            Focus areas
          </p>
          <div className="mt-8 space-y-8">
            {[
              "Complex systems",
              "AI-driven experiences",
              "Clarity at scale",
              "Insight-led strategy"
            ].map((item, index) => (
              <div key={item} className="border-t border-primary/15 pt-5">
                <p className="text-sm font-semibold text-accent/80">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-2xl font-semibold leading-tight text-primary">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}

export default HeroSection
