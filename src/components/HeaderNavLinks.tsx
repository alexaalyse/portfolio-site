import Link from "next/link"

export const headerNavItems = [
  { name: "Philosophy", href: "/#about" },
  { name: "Work", href: "/#work" },
  { name: "Frameworks", href: "/frameworks/" },
  { name: "Resume", href: "/#resume" },
  { name: "Contact", href: "/#contact" },
]

export function HeaderNavLinks() {
  return (
    <div className="hidden items-center space-x-6 md:flex">
      {headerNavItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-sm font-medium transition-colors hover:text-accent"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

