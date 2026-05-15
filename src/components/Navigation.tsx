"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { headerNavItems } from "@/components/HeaderNavLinks"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 w-full items-center justify-between px-6 md:px-8">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold">Alexa Mavrogianis</h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
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
          <div className="w-full px-6 py-4 space-y-2 md:px-10">
            {headerNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
