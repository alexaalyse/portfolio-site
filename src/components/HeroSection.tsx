import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-background py-16 md:py-20 lg:pl-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[32vw] bg-[linear-gradient(90deg,transparent,rgba(45,212,191,0.06))] lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-24 hidden h-72 w-72 rotate-12 border border-primary/20 lg:block" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-6 bottom-20 hidden h-40 w-40 -rotate-6 border border-accent/20 lg:block" />

      <div className="relative z-10 flex min-h-[calc(100svh-12rem)] w-full max-w-[1440px] items-center px-6 md:px-10 lg:pr-20">
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
              I'm a UX, content, and product strategist who helps make complex systems feel intuitive and actionable.
            </p>
            <p>
              My sweet spot sits at the intersection of data, storytelling, and product strategy. I'm motivated by tough problems and thrive on turning user insights into scalable systems and experiences that boost clarity and adoption.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="text-lg px-8 py-6 md:px-10 md:py-7 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
              <a href="#work">View my work</a>
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
      </div>
    </section>
  )
}

export default HeroSection
