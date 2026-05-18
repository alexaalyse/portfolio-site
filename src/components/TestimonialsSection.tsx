"use client"

import { useRef } from "react"
import { ArrowDown, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    relationship: "Product Manager",
    quote: [
      "Alexa is full-stop one of the brightest and most capable people I've ever worked with. Her capability and her pragmatism, curiosity, ability to digest information, and general attitude and aptitude are unmatched.",
      "We worked on 25+ projects together over 18 months, shipping tons of changes that affected the core interactions of the application our users interacted with. She is incredibly data-driven, savvy, quick-thinking, and is full of good ideas in any situation that are always creative, unique, and applicable.",
      "She literally touched every single thing about the Cloudflare One product suite during her time, and stretched far beyond the written bounds of her role. The entire product surface area, the documentation, down to the logical design of our interactions and API surface, and so so many other things. She makes everything she touches better. Every corner of the product is demonstrably better because of a suggestion or decision that she personally made.",
      "Alexa was a very early adopter at using AI at work and has an extreme proficiency for accelerating her own capability with agentic work. She is a true 10x employee in any capacity. She would be a star player for absolutely any team in any position.",
    ],
  },
  {
    relationship: "Engineering manager",
    quote: [
      "Alexa has been a pivotal force within the Zero Trust organization as a UX Content Strategist. Her leadership on multiple initiatives has significantly enhanced our users' experience through her close collaboration with the Zero Trust design and Dashboard teams. Alexa has spearheaded research initiatives and tracking efforts that have been crucial in understanding our users' habits and needs. This insight has allowed our product teams to make informed decisions, effectively filling the gap left by the absence of a Product Manager for the Dashboard team.",
      "Beyond her technical skills, Alexa is a pleasure to work with - she's professional, easy to collaborate with, and highly valued by my team. Engineers have frequently praised her work, noting how impressive and impactful her contributions have been. Alexa's leadership in driving user experience and content strategy within our organization is unmatched, and she has been a key advocate for prioritizing design teams within Zero Trust. Her willingness to tackle challenging problems and her dedication to sharing knowledge with Engineering and Product teams have been instrumental in fostering cross-team alignment and understanding.",
    ],
  },
  {
    relationship: "Technical writing manager",
    quote: [
      "I partnered with Alexa on projects at Cloudflare, and she knew the Zero Trust products better than some of the product managers and engineers building them. That's not an exaggeration. She was constantly in the product, on customer calls, pulling data, investigating how people actually used features and where they were getting stuck. And then she did something about it.",
      "For example, the Zero Trust dashboard navigation needed a lot of work. Customers couldn't figure out where to go to complete basic tasks. Alexa dug into the data, built a case for restructuring the information architecture around use cases instead of product silos, and got buy-in from the product management team. Anyone who's worked in a big company knows that last part alone is a project. After the revamp, customers had a noticeably easier time navigating the dashboard to configure policies and troubleshoot issues.",
      "But the work I got most excited about was her chunkability and retrievability research. She was testing how well our documentation performed when retrieved by LLMs -- tracking results across three different models, identifying what structural changes would improve accuracy, and seeing how product burn-in would improve contextualization. After she made updates, she reran the tests and the improvements were significant. She had a working AI content strategy and the data to prove it, fast.",
      "Alexa is someone people end up trusting because she earns it every time. Data-backed, empathetic, deeply knowledgeable, and always willing to help. She came to every collaboration with insights that made both the product and the docs better. A natural leader who doesn't need the title to operate like one.",
    ],
  },
  {
    relationship: "Product manager",
    quote: [
      "Alexa has revolutionized how we leverage usage data in the Zero Trust product. She has driven the creation of metrics and changes in the product that have directly driven increased usage and revenue. Alexa worked across product, engineering, BI and more to develop a clear and accurate picture of how Zero Trust users interact with the platform and then executed against a clear set of improvements she identified from those metrics.",
      "Alexa was such a great hire. She has elevated the quality of our in-product content with very little external support. She goes and gets things done without much hand holding or explanation. When I assign a task to Alexa, I know it will get done and it will be done with quality.",
      "Alexa is one of the strongest individual contributors in the Cloudflare One organization. She has created a seamless process to involve herself in important content, design and copy decisions in the dash. When I go check on dashboard PRs, Alexa has already jumped all over it. Additionally, Alexa has shown great initiative setting up product usage data and feedback collection. I've been able to make more data driven decisions because of the work Alexa has put in. I strongly endorse rewarding Alexa with a promotion for her exemplary work over the last 2 years.",
    ],
  },
  {
    relationship: "Design manager",
    quote: [
      "Alexa has truly elevated our strategic content experience. Her deep knowledge of the Cloudflare One product, combined with her sharp understanding of user needs, makes her an invaluable asset to our team and a cornerstone for enhancing the user experience. Alexa's reliability is unmatched; she consistently attends meetings and contributes meaningfully to workshops and brainstorming sessions.",
      "Her role in the CF1 Observatory has been pivotal in maintaining consistency and ensuring the user's voice is front and center, particularly during the rollout of new products, features, and company acquisitions.",
      "Her research initiatives stand out as some of her most impactful contributions, providing invaluable insights that have significantly shaped our approach. Beyond her professional expertise, working with Alexa is a pleasure - she seamlessly balances advocacy for both the user and the business with kindness and a collaborative spirit.",
      "Alexa has reached a point where she anticipates our content and insight needs before they arise. Her expertise is consistently precise, and the thorough documentation she provides has become a vital resource for the team. She has already demonstrated senior-level capacities, and her contributions continue to leave a lasting impact on our work.",
    ],
  },
  {
    relationship: "Product director",
    quote: [
      "Alexa is a superstar. Every opportunity I've had to work with her has been an absolute pleasure - she's organized, thoughtful, detail oriented, thorough, customer-focused, empathetic, and clear; she skillfully balances delivering short term wins with advocating for longer term/bigger picture change; she tells the important story quickly while providing the details for people who want to dig deeper. We all have things to learn from Alexa.",
    ],
  },
]

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollTestimonials = (direction: "previous" | "next") => {
    const container = scrollRef.current

    if (!container) {
      return
    }

    container.scrollBy({
      left: direction === "next" ? container.clientWidth : -container.clientWidth,
      behavior: "smooth",
    })
  }

  return (
    <section id="testimonials" className="relative overflow-hidden py-20 md:py-24 lg:pl-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(137,148,129,0.1))] lg:block" />

      <div className="relative z-10 w-full max-w-[1440px] px-6 md:px-10 lg:pr-20">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-14 bg-accent" />
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            References
          </p>
        </div>

        <div className="max-w-6xl">
          <h2 className="text-4xl font-bold leading-tight text-primary md:text-5xl">
            What partners say
          </h2>
          <p className="mt-5 max-w-5xl text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
            Notes from cross-functional partners across product, content, engineering, and design.
          </p>
        </div>

        <div className="relative mt-12 max-w-6xl min-[560px]:px-12">
          <button
            type="button"
            onClick={() => scrollTestimonials("previous")}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-primary/20 bg-background/80 text-accent shadow-sm transition-colors hover:border-accent hover:text-primary min-[560px]:flex md:h-11 md:w-11"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollTestimonials("next")}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-primary/20 bg-background/80 text-accent shadow-sm transition-colors hover:border-accent hover:text-primary min-[560px]:flex md:h-11 md:w-11"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-5">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.relationship}
                  className="w-[82vw] flex-none border border-primary/20 bg-background/70 p-6 min-[560px]:w-[calc((100%-1.25rem)/2)] md:p-8"
                >
                  <div className="mb-6 flex items-center justify-between gap-6 border-b border-primary/20 pb-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                      {testimonial.relationship}
                    </p>
                    <Quote className="h-5 w-5 flex-none text-accent" aria-hidden="true" />
                  </div>
                  <div className="space-y-5 text-base leading-relaxed text-muted-foreground/90 md:text-lg">
                    {testimonial.quote.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3 text-accent">
          <ArrowDown className="h-5 w-5 animate-bounce" />
          <span className="text-sm font-medium uppercase tracking-[0.22em]">
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
