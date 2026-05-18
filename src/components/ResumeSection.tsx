import { ArrowDown, Cloud, ExternalLink, GraduationCap, Mic } from "lucide-react"
import BotanicalBackdrop from "@/components/BotanicalBackdrop"
import type { ComponentType } from "react"

type TimelineRole = {
  title: string
  dates: string
  location?: string
}

type Experience = {
  company: string
  summary: string
  icon: ComponentType<{ className?: string }>
  roles: TimelineRole[]
}

const BasketballIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3.6 8.5c4.2 1.8 8.2 5.8 10 11.9" />
    <path d="M10.4 3.3c1.8 4.2 5.8 8.2 10.1 10" />
    <path d="M12 3a12.8 12.8 0 0 0 0 18" />
    <path d="M3 12h18" />
  </svg>
)

const ResumeSection = () => {
  const experience: Experience[] = [
    {
      company: "Cloudflare",
      summary: "UX, content, and product strategy for complex B2B, security, and AI-driven experiences.",
      icon: Cloud,
      roles: [
        { title: "Lead UX Content Strategist", dates: "Oct 2025 - May 2026" },
        { title: "Senior UX Content Strategist", dates: "Oct 2024 - Oct 2025" },
        { title: "UX Content Strategist", dates: "Oct 2023 - Oct 2024" },
        { title: "UX Content Designer", dates: "Jul 2022 - Oct 2023" },
      ],
    },
    {
      company: "DICK'S Sporting Goods",
      summary: "Content strategy, B2C customer journeys, and analytics-informed copy.",
      icon: BasketballIcon,
      roles: [
        { title: "Creative Copywriter", dates: "Nov 2021 - Jul 2022" },
        { title: "Associate Copywriter", dates: "Sep 2018 - Nov 2021" },
        { title: "Contract Copywriter", dates: "Aug 2017 - Sep 2018" },
      ],
    },
  ]

  return (
    <section id="resume" className="relative overflow-hidden py-20 md:py-24 lg:pl-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(93,28,52,0.08))] lg:block" />
      <BotanicalBackdrop variant="resume" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:pr-20">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-14 bg-accent" />
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Resume
          </p>
        </div>

        <div className="max-w-[1400px]">
          <h2 className="text-4xl font-bold leading-tight text-primary md:text-5xl">
            Experience and talks
          </h2>
          <p className="mt-5 max-w-5xl text-lg leading-relaxed text-muted-foreground/90 md:text-xl">
            A lightweight timeline of roles, education, and speaking work.{" "}
            <a
              href="/alexa-mavrogianis-resume.pdf"
              download
              className="font-semibold text-accent underline underline-offset-4 transition-colors hover:text-primary"
            >
              Download full resume
            </a>
            .
          </p>
        </div>

        <div className="mt-12 max-w-[1400px] space-y-10">
          {experience.map((company) => {
            const CompanyIcon = company.icon

            return (
            <section key={company.company} className="border-t border-primary/20">
              <div className="py-6 md:py-8">
                <div className="flex items-center gap-4">
                  <CompanyIcon className="h-5 w-5 text-accent" />
                  <h3 className="text-2xl font-semibold text-primary">
                    {company.company}
                  </h3>
                </div>
                <p className="mt-3 max-w-4xl text-base leading-relaxed text-muted-foreground/90">
                  {company.summary}
                </p>
              </div>

              <div className="space-y-2">
                {company.roles.map((role, index) => (
                  <div key={`${company.company}-${role.title}`} className="grid grid-cols-[5.5rem_1.5rem_minmax(0,1fr)] gap-x-4 gap-y-2 py-3 md:grid-cols-[11rem_1.5rem_minmax(0,1fr)] md:gap-x-7">
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground md:text-sm md:normal-case md:tracking-normal">
                      {role.dates}
                    </p>
                    <div className="relative flex justify-center">
                      {index < company.roles.length - 1 && (
                        <div className="absolute top-5 h-[calc(100%+1.25rem)] w-px bg-accent/25" />
                      )}
                      <div className="relative mt-1 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_5px_rgba(137,148,129,0.16)]" />
                    </div>
                    <div>
                      <p className="text-lg font-medium leading-snug md:text-xl">
                        {role.title}
                      </p>
                      {role.location && (
                        <p className="mt-1.5 text-sm text-muted-foreground/80 md:text-base">
                          {role.location}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            )
          })}
        </div>

        <div className="mt-10 grid max-w-[1400px] border-t border-primary/20 lg:grid-cols-2">
          <div className="py-6 pr-6 md:py-8 md:pr-8">
            <div className="flex items-center gap-4">
              <GraduationCap className="h-5 w-5 text-accent" />
              <p className="font-semibold text-primary">Education</p>
            </div>
            <p className="mt-4 text-base font-medium leading-relaxed md:text-lg">
              Northwestern University
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-base">
              M.S. Information Design and Strategy - Specialization: Communicating with Data
            </p>
            <p className="mt-5 text-base font-medium leading-relaxed md:text-lg">
              The Ohio State University
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-base">
              B.A. Journalism - Minors: Media Production and Analysis, Pop Culture, and Political Science
            </p>
          </div>

          <div className="py-6 pr-6 md:py-8 md:pr-8 lg:pl-8">
            <div className="flex items-center gap-4">
              <Mic className="h-5 w-5 text-accent" />
              <p className="font-semibold text-primary">Speaking</p>
            </div>
            <p className="mt-4 text-base font-medium leading-relaxed md:text-lg">
              Growing in Content 2026
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Talk: "When the right answer isn't more words: How content feedback reveals what products really need"
            </p>
            <a
              href="https://workingincontent.com/growing-2026/watch/when-the-right-answer-isnt-more-words"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:text-primary"
            >
              <span>Watch talk</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 text-accent">
          <ArrowDown className="h-5 w-5 animate-bounce" />
          <span className="text-sm font-medium uppercase tracking-[0.22em]">
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}

export default ResumeSection
