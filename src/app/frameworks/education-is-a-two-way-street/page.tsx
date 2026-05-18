import { HeaderNavLinks } from "@/components/HeaderNavLinks"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const userEducationInitiatives = [
  {
    title: "Controlled vocabulary",
    body: "An ongoing effort to standardize terms across the enterprise platform to build cross-product cohesion, decrease cognitive load, and reduce silos. This is especially critical when integrating acquisitions, like newly acquired product areas, into an existing structure.",
  },
  {
    title: "Empty states",
    body: "Empty states in the dashboard provided context for first-time use and grounded new features in the context of the broader product suite. Since the empty states went live, we saw a rise in users who made their first configuration and a decrease in the time it took them to get started.",
  },
  {
    title: "Overview pages",
    body: "Data showed that new users extensively clicked through the side navigation to orient themselves with the dashboard and its capabilities. Overview pages provided a streamlined introduction for new users while giving returning users navigation pathways and observability functionality.",
  },
  {
    title: "Information architecture",
    body: "A redesign of the navigation offered an enormous opportunity to bring a more use-case-focused experience to users and help them better conceptualize how the enterprise platform products work together.",
  },
]

const userLearningInputs = [
  {
    title: "Evergreen survey",
    body: [
      "An always-open survey lived in the footer of the navigation. Over the years, I iterated on the survey to bring forward actionable insights and better understand pain points.",
      "It also offered an opportunity to hear from free users who may not be able to pass feedback through support or account teams.",
      "Through this survey I learned which settings had confusing language, which steps could be easier to follow, which dashboard elements needed more visibility, where accessibility could improve, and so much more.",
    ],
  },
  {
    title: "Research",
    body: [
      "In addition to the evergreen survey, one-off dashboard surveys and UserTesting sessions helped me learn about specific elements of our users' experiences.",
      "When we first ran an A/B test on an application setup empty state, we also included a survey for users to provide feedback. Those responses helped me refine the right content for V2.",
      "An unmoderated UserTesting study on an onboarding concept gave insight into the motivations of new users and helped me understand how they orient themselves in the dashboard.",
      "Similarly, I ran a large navigation-focused survey. I developed the questions to learn more about current use and behaviors, navigation sentiment, and feature desirability. The results directly impacted my approach to both overview pages and the information architecture effort.",
    ],
  },
  {
    title: "Data, data, data",
    body: [
      "Anyone who has worked with me knows that I love numbers. I love poking around in Amplitude and uncovering pain points or interesting behavior patterns from our users.",
      "With Amplitude, we could see how many users complete certain flows and where they might be getting stuck. We could see if reading documentation increases their chances of success, which it almost always did. Shoutout to the incredible technical writers.",
      "We could see the impact of making features more discoverable, and we could see whether users navigate in the ways we expect.",
      "Every piece of information helped me understand what details to clarify, where to add more context, and where next-step information may be helpful. I worked with engineering to build more tracking into components by default, so that we could continue to learn and grow with our users every ship.",
    ],
  },
]

export default function EducationTwoWayStreetPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 w-full items-center justify-between px-6 md:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="text-xl font-bold">Alexa Mavrogianis</span>
          </Link>
          <HeaderNavLinks />
        </div>
      </header>

      <article className="relative overflow-hidden py-24 md:py-32 lg:pl-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-24 hidden h-64 w-64 rotate-12 border border-accent/15 lg:block" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(93,28,52,0.08))] lg:block" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:pr-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-14 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Framework
            </p>
          </div>

          <header className="max-w-5xl">
            <h1 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
              Education is a two-way street
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
              Good UX creates the shared understanding needed to move through a product with confidence.
            </p>
          </header>

          <div className="mt-16 max-w-4xl space-y-8 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
            <p>
              In the enterprise platform, users spanned from home network gurus to large enterprises. They had different resources, levels of technical knowledge, and goals. Amid this diversity, content often becomes the great equalizer. When we provide clear and accurate descriptions, we build trust. When we present instructions in digestible, intuitive formats, we reduce cognitive load. And when we deliver the right information at the right time, we increase our users' productivity. Thoughtfully designed content helps users feel understood, supported, and equipped to achieve their goals.
            </p>
            <p>
              As the product suite continued to grow and allow for more use cases, this shared language became increasingly important. Every time we introduced a new feature, we had to educate our users on what it is, what it does, and how it functions with the rest of the system.
            </p>
            <p>
              Having a shared language as a through-line builds consistency and makes product complexities feel less intimidating. If a user explores a new feature and thinks, "Oh, this operates just like Feature X, I get it," or, "Ah, I understand the differences between this and Feature Y," then I did my job right.
            </p>
            <p>
              But I am not always going to get it right. <strong className="font-semibold text-foreground">Like everything else in software development, UX is iterative.</strong> We build, we test, we measure, and we adapt. Our users educated me just as much as I educated them. This reciprocal process of education is a core tenet of the way I approached the enterprise platform's content strategy.
            </p>
          </div>

          <section className="mt-24 max-w-5xl">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl">
              Providing education to our users
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
              <p>
                Every time I worked on a SHIP or explored a new initiative, I had at least one of the following objectives: educate, motivate, and empower. Usually, all three.
              </p>
              <div className="grid border-t border-accent/30 md:grid-cols-3">
                {[
                  ["Educate", "Provide knowledge users need to accomplish their goals and make informed decisions."],
                  ["Motivate", "Provide a clear why to encourage users to complete essential tasks, adopt best practices, and maximize the value of their experience."],
                  ["Empower", "Increase confidence and make complex or technical tasks feel approachable."],
                ].map(([title, body]) => (
                  <div key={title} className="border-b border-accent/30 py-6 pr-6 md:px-6">
                    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground/90">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-12 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
              Some initiatives that embodied these goals included:
            </p>

            <div className="mt-6 grid md:grid-cols-2">
              {userEducationInitiatives.map((item) => (
                <section key={item.title} className="border-b border-accent/30 py-8 pr-6 md:px-8">
                  <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground/90 md:text-lg">
                    {item.body}
                  </p>
                </section>
              ))}
            </div>

            <p className="mt-10 border-l-2 border-accent pl-6 text-lg font-semibold leading-relaxed text-foreground md:text-xl">
              Bonus: It was just as important to educate internal users. At the end of January 2025, I launched the application version of the Content Quality Index so that teams at a large infrastructure company felt empowered to write within our style guide.
            </p>
          </section>

          <section className="mt-24 max-w-5xl">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl">
              Receiving education from our users
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
              The more I could learn from our users, the better I could help make their experience. Their feedback and behaviors provided invaluable insights that shaped and refined my approach to content strategy.
            </p>

            <div className="mt-12 grid border-t border-accent/30">
              {userLearningInputs.map((item) => (
                <section key={item.title} className="border-b border-accent/30 py-8 pr-6 md:px-8">
                  <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                  <div className="mt-4 space-y-5 text-base leading-relaxed text-muted-foreground/90 md:text-lg">
                    {item.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-24 max-w-4xl">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl">
              A dynamic partnership
            </h2>
            <div className="mt-8 space-y-8 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
              <p>
                Great content should ensure that users are never surprised. It should set clear expectations, provide consistency, and guide them through their journey with confidence. But on the flip side, being surprised by our users is one of my favorite aspects of this work. Their unexpected feedback, innovative use cases, and unique perspectives challenge me to think differently and grow.
              </p>
              <p>
                Ultimately, this two-way street of education fosters a dynamic, evolving partnership that helps me create content that informs, inspires, and improves the user experience.
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  )
}
