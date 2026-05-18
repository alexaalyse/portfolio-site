import { frameworks } from "@/frameworks/data"
import { HeaderNavLinks } from "@/components/HeaderNavLinks"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function FrameworksPage() {
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

      <section className="relative overflow-hidden py-24 md:py-32 lg:pl-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-24 hidden h-64 w-64 rotate-12 border border-accent/15 lg:block" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[24vw] bg-[linear-gradient(90deg,transparent,rgba(93,28,52,0.08))] lg:block" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:pr-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-14 bg-accent" />
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              Frameworks
            </p>
          </div>

          <div className="mb-16 max-w-6xl">
            <h1 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
              How I build, think, and make complex work clearer
            </h1>
            <p className="mt-6 max-w-5xl text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
              A home for the reusable mental models behind my work: how I teach, shape language, untangle ambiguity, and turn complexity into systems people can use.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
            {frameworks.map((entry, index) => {
              const content = (
                <>
                  <div className="mb-6 flex items-start justify-between gap-6">
                    <div>
                      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent/80">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="text-2xl font-semibold leading-tight text-primary md:text-3xl">
                        {entry.title}
                      </h2>
                    </div>
                    {entry.href && (
                      <span className="mt-1 flex h-11 w-11 flex-none items-center justify-center border border-accent/35 bg-background/35 text-accent transition-colors group-hover:border-accent/70 group-hover:bg-accent/10">
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </span>
                    )}
                  </div>

                  <p className="text-base leading-relaxed text-muted-foreground/90 md:text-lg">
                    {entry.dek}
                  </p>
                </>
              )

              return entry.href ? (
                <Link
                  key={entry.slug}
                  href={entry.href}
                  className="group flex min-h-[15rem] flex-col border border-primary/20 bg-card/35 p-6 transition-colors hover:border-accent/70 hover:bg-card/55 md:min-h-[16rem] md:p-7"
                >
                  {content}
                </Link>
              ) : (
                <article
                  key={entry.slug}
                  className="group flex min-h-[15rem] flex-col border border-primary/20 bg-card/35 p-6 md:min-h-[16rem] md:p-7"
                >
                  {content}
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
