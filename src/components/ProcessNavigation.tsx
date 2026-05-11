"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight, User, Briefcase, Brain, Mail, FileText } from "lucide-react"

const ProcessNavigation = () => {
  const [activeSection, setActiveSection] = React.useState("hero")
  const [isPortfolioPage, setIsPortfolioPage] = React.useState(false)

  const processSteps = [
    { id: "hero", label: "Hello", icon: User, href: "#hero" },
    { id: "about", label: "Philosophy", icon: Brain, href: "#about" },
    { id: "work", label: "Work", icon: Briefcase, href: "#work" },
    { id: "resume", label: "Resume", icon: FileText, href: "#resume" },
    { id: "contact", label: "Connect", icon: Mail, href: "#contact" }
  ]

  React.useEffect(() => {
    const checkIfPortfolioPage = () => {
      setIsPortfolioPage(window.location.pathname.startsWith('/work/'))
    }
    
    // Check on mount
    checkIfPortfolioPage()
    
    // Listen for route changes (back/forward buttons)
    const handlePopState = () => {
      checkIfPortfolioPage()
    }
    
    // Listen for navigation events
    const handleRouteChange = () => {
      // Small delay to ensure the pathname has updated
      setTimeout(checkIfPortfolioPage, 50)
    }
    
    window.addEventListener('popstate', handlePopState)
    
    // Also check periodically for route changes
    const interval = setInterval(checkIfPortfolioPage, 100)
    
    return () => {
      window.removeEventListener('popstate', handlePopState)
      clearInterval(interval)
    }
  }, [])

  React.useEffect(() => {
    // Don't run scroll detection on portfolio pages
    if (isPortfolioPage) return
    
    const handleScroll = () => {
      const sections = processSteps.map(step => step.id)
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollPercentage = (window.scrollY / (documentHeight - windowHeight)) * 100

      // Force last section if we're very close to bottom (95%+)
      if (scrollPercentage >= 95) {
        setActiveSection(sections[sections.length - 1])
        return
      }

      // Check if we're at the bottom of the page - more generous threshold
      if (scrollPosition + windowHeight >= documentHeight - 200) {
        setActiveSection(sections[sections.length - 1]) // Last section
        return
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isPortfolioPage])

  const getStepStatus = (stepId: string) => {
    const currentIndex = processSteps.findIndex(step => step.id === activeSection)
    const stepIndex = processSteps.findIndex(step => step.id === stepId)
    
    if (stepIndex < currentIndex) return "completed"
    if (stepIndex === currentIndex) return "active"
    return "upcoming"
  }

  // Don't render at all on portfolio pages
  if (isPortfolioPage) {
    return null
  }

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-6">
        {processSteps.map((step, index) => {
          const status = getStepStatus(step.id)
          const Icon = step.icon
          
          return (
            <div key={step.id} className="relative flex flex-col items-center group">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-accent to-accent/60 opacity-30" />
              )}
              
              {/* Step Circle */}
              <a
                href={step.href}
                className={cn(
                  "relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 hover:scale-110",
                  status === "active" && "bg-primary border-primary shadow-lg shadow-primary/30",
                  status === "completed" && "bg-accent border-accent",
                  status === "upcoming" && "bg-card border-primary/20 hover:border-accent"
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(step.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Icon 
                  className={cn(
                    "w-5 h-5 transition-colors",
                    status === "active" && "text-white",
                    status === "completed" && "text-white",
                    status === "upcoming" && "text-primary/40"
                  )} 
                />
                
                {/* Active Pulse */}
                {status === "active" && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
                )}
              </a>
              
              {/* Label */}
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-card px-3 py-1 rounded-lg shadow-lg border border-accent/10">
                  <span className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    status === "active" && "text-accent",
                    status === "completed" && "text-accent/80",
                    status === "upcoming" && "text-muted-foreground"
                  )}>
                    {step.label}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
        
        {/* Progress Indicator */}
        <div className="mt-4 text-xs text-accent/60 font-medium">
          {Math.round((processSteps.findIndex(step => step.id === activeSection) + 1) / processSteps.length * 100)}%
        </div>
      </div>
    </div>
  )
}

export default ProcessNavigation
