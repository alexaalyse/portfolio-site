"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navItems = [
    { name: "Philosophy", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between pl-8">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">Alexa Mavrogianis</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-accent"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
