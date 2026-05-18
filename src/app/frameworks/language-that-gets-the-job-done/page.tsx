import { HeaderNavLinks } from "@/components/HeaderNavLinks"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const outcomeLanguageBenefits = [
  "Guides users to the right action quickly",
  "Reduces friction and hesitation",
  "Builds confidence without requiring a deep technical background",
  "Increases adoption of features that might otherwise be overlooked",
]

const writingQuestions = [
  {
    title: "Frame around the goal",
    body: "Make sure the outcome of creating an object or turning on a setting is clear.",
    questions: [
      "What is the user trying to do?",
      "Would a user say out loud, \"I want to [insert your label]\"? If not, reframe to match how someone might describe the goal in plain language.",
    ],
  },
  {
    title: "Watch out for how language",
    body: "Avoid describing what we built or how we built it when the user first needs to understand what they get from it.",
    questions: [
      "Are you describing what the system is doing, or what the user gets from it?",
      "Could this label be understood without deep technical knowledge?",
    ],
  },
]

function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div className="my-10 flex min-h-[18rem] items-center justify-center border border-accent/30 bg-card/40 p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
        {label}
      </p>
    </div>
  )
}

function OriginalWarpSettingFigure() {
  return (
    <figure className="my-10 overflow-hidden border border-accent/30 bg-white p-5 text-[#333333] shadow-sm">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3">
          <h3 className="text-base font-bold leading-tight text-[#333333]">
            Override local interface IP
          </h3>
          <p className="max-w-4xl text-sm font-semibold leading-relaxed text-[#4f4f4f] md:text-base">
            Assign a unique IP Address to each WARP device. This address will be randomly selected from the Carrier Grade NAT space (i.e. 100.64/10) and will override the existing local interface IP.
          </p>
        </div>
        <div className="flex flex-none items-center gap-2 text-sm font-semibold text-[#4f4f4f]">
          <span>Off</span>
          <div aria-hidden="true" className="relative h-6 w-11 rounded-full bg-[#777777]">
            <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white" />
          </div>
          <span aria-hidden="true" className="text-lg leading-none text-[#777777]">x</span>
        </div>
      </div>
    </figure>
  )
}

function RevisedWarpSettingFigure() {
  return (
    <figure className="my-10 overflow-hidden border border-accent/30 bg-white p-7 text-[#333333] shadow-sm">
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3">
          <h3 className="text-base font-bold leading-tight text-[#333333]">
            Assign a unique IP address to each device
          </h3>
          <p className="max-w-4xl text-sm font-medium leading-relaxed text-[#333333] md:text-base">
            Override the device&apos;s existing local interface IP with a unique IP address randomly assigned from the Carrier Grade NAT space (i.e. 100.64/10). This setting is on by default for devices using MASQUE and required to create tunnels with the WARP Connector.
          </p>
        </div>
        <div className="flex flex-none items-center gap-2">
          <span className="rounded-full bg-[#b7e3c2] px-3 py-1 text-xs font-bold uppercase text-[#2f7550]">
            On
          </span>
          <div aria-hidden="true" className="relative flex h-6 w-12 items-center rounded-full bg-[#4b9f68] px-1">
            <span className="text-xs font-bold text-white">✓</span>
            <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </figure>
  )
}

export default function LanguageThatGetsTheJobDonePage() {
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
              Language that gets the job done
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
              Users think about their tasks, not how the system works.
            </p>
          </header>

          <div className="mt-16 max-w-4xl space-y-8 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
            <p>
              When I led a large-scale navigation overhaul, the changes were not made lightly. It was critical that we conducted statistically significant user research to feel confident in our decisions. And when I was analyzing the results and reading hundreds of pieces of open-ended feedback, one thing became very clear:
            </p>
            <p className="border-l-2 border-accent pl-6 text-xl font-semibold leading-tight text-foreground md:text-3xl">
              Users think about their tasks, not how the system works.
            </p>
            <p>
              They log into a dashboard with defined goals. And they are not necessarily approaching those goals with technical models in mind either. In fact, the research found that many users were much less technical than internal teams often assumed. When trying to find where in the dashboard to complete those goals, they were simply scanning for keywords or tools that could help get the job done.
            </p>
            <p>
              Or as one user put it:
            </p>
            <blockquote className="border-l-2 border-accent pl-6 text-xl font-semibold leading-relaxed text-foreground md:text-2xl">
              "I swear to God, I don't understand anything. I really need a VPN."
            </blockquote>
            <p>
              I realized that it was not just our side navigation that needed language updates. Almost every piece of instructional content in the dashboard should be audited to see if it focuses only on the how, or what really matters: the why.
            </p>
          </div>

          <section className="mt-24 max-w-5xl">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl">
              An illustrative example
            </h2>
            <div className="mt-8 space-y-8 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
              <p>
                Take this example of a label for one of the WARP client settings:
              </p>

              <OriginalWarpSettingFigure />

              <p>
                The label "Override local interface IP" is accurate. It explains what WARP will do when users toggle it on. But to most users, it is a wall of how language that requires additional explanation to understand what it means and why they would want to use it.
              </p>
              <p>
                And while the description of the setting does explain the outcome, we are heavily burying the lede. Now imagine we reframed the label to feature the why:
              </p>

              <RevisedWarpSettingFigure />

              <p>
                This way, users only need to read one line to know what they can achieve. Based on that, they can decide if they care about the how.
              </p>
            </div>

            <div className="mt-12 grid border-t border-accent/30 md:grid-cols-2">
              <div className="border-b border-accent/30 py-6 pr-6 md:px-6">
                <h3 className="text-2xl font-semibold text-foreground">Labels are for outcomes</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground/90 md:text-lg">
                  They should be scannable and self-explanatory.
                </p>
              </div>
              <div className="border-b border-accent/30 py-6 pr-6 md:px-6">
                <h3 className="text-2xl font-semibold text-foreground">Descriptions are for details</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground/90 md:text-lg">
                  This is where we can give additional context on the how for users who want to learn more.
                </p>
              </div>
            </div>

            <p className="mt-10 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
              When we lead with the action and support it with concise, optional context, we meet users where they are, regardless of whether they want to click and move on or dive deeper.
            </p>
          </section>

          <section className="mt-24 max-w-5xl">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl">
              Why this matters
            </h2>
            <div className="mt-8 space-y-8 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
              <p>
                If we lean on implementation-oriented terms, we are asking users to guess what the practical outcome is. That can be intimidating. The more we use outcome-oriented labels, the more confident users feel in their actions, and the more they trust us.
              </p>
            </div>

            <p className="mt-10 text-lg font-semibold leading-relaxed text-foreground md:text-xl">
              Outcome-based language:
            </p>

            <div className="mt-6 grid md:grid-cols-2">
              {outcomeLanguageBenefits.map((benefit) => (
                <div key={benefit} className="border-b border-accent/30 py-6 pr-6 md:px-6">
                  <p className="text-base font-semibold leading-relaxed text-foreground md:text-lg">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
              Of course, there are still users who are deeply interested in understanding the how, and that is where documentation becomes extraordinarily valuable. Technical documentation can go deeper, offering the nitty gritty details and architectural explanations while the UI clarifies the immediate path forward.
            </p>
          </section>

          <section className="mt-24 max-w-5xl">
            <h2 className="text-3xl font-semibold text-primary md:text-4xl">
              Tips for improving
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
              Here are some questions anyone can ask themselves when writing content for the UI:
            </p>

            <div className="mt-10 grid border-t border-accent/30">
              {writingQuestions.map((item) => (
                <section key={item.title} className="border-b border-accent/30 py-8 pr-6 md:px-8">
                  <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground/90 md:text-lg">
                    {item.body}
                  </p>
                  <ul className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground/90 md:text-lg">
                    {item.questions.map((question) => (
                      <li key={question} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                        <span>{question}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section className="mt-24 max-w-4xl">
            <p className="border-l-2 border-accent pl-6 text-xl font-semibold leading-relaxed text-foreground md:text-3xl">
              Behind every feature is great technical work. But while the tech makes it possible, it is the language that makes it usable.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}
