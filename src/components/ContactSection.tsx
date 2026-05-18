import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react"

const ContactSection = () => {
  const contactItems = [
    {
      label: "Email",
      value: "alexaalyse@gmail.com",
      href: "mailto:alexaalyse@gmail.com",
      icon: Mail,
    },
    {
      label: "Location",
      value: "Pittsburgh, PA",
      icon: MapPin,
    },
    {
      label: "Phone",
      value: "+1 (412) 266-8558",
      href: "tel:+14122668558",
      icon: Phone,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/alexamavrogianis",
      href: "https://www.linkedin.com/in/alexamavrogianis",
      icon: Linkedin,
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32 lg:pl-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 hidden h-full w-[26vw] bg-[linear-gradient(90deg,transparent,rgba(137,148,129,0.11))] lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 lg:pr-20">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px w-14 bg-accent" />
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Get in touch
          </p>
        </div>

        <div className="max-w-[1400px]">
          <h2 className="text-4xl font-bold leading-tight text-primary md:text-6xl">
            Let's compare notes.
          </h2>
          <p className="mt-6 max-w-5xl text-xl leading-relaxed text-muted-foreground/90 md:text-2xl">
            I'm always interested in learning about how others approach user experience and content. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
        </div>

        <div className="mt-16 grid max-w-[1400px] border-t border-primary/20 md:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon
            const content = (
              <>
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <Icon className="h-5 w-5 text-accent" />
                    <p className="font-semibold text-primary">{item.label}</p>
                  </div>
                  {item.href && (
                    <ArrowUpRight className="h-5 w-5 flex-none text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  )}
                </div>
                <p className="mt-6 break-words text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {item.value}
                </p>
              </>
            )

            if (item.href) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group border-b border-primary/20 py-8 pr-6 transition-colors hover:border-accent/70 md:pr-8 md:[&:nth-child(even)]:pl-8"
                >
                  {content}
                </a>
              )
            }

            return (
              <div
                key={item.label}
                className="border-b border-primary/20 py-8 pr-6 md:pr-8 md:[&:nth-child(even)]:pl-8"
              >
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactSection
