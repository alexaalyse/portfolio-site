"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronRight, Target, TrendingUp, Cog, BookOpen, Layers, FlaskConical } from "lucide-react"

type ProcessStep = {
  id: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
  iconName?: "target" | "trending-up" | "cog" | "book-open" | "layers" | "flask"
  href: string
}

const navIconMap = {
  target: Target,
  "trending-up": TrendingUp,
  cog: Cog,
  "book-open": BookOpen,
  layers: Layers,
  flask: FlaskConical,
}

const defaultProcessSteps = [
    { id: "problem", label: "Problem", icon: Target, href: "#problem" },
    { id: "impact", label: "Impact", icon: TrendingUp, href: "#impact" },
    { id: "process", label: "Process", icon: Cog, href: "#process" }
  ]

const PortfolioProcessNavigation = ({ steps = defaultProcessSteps }: { steps?: ProcessStep[] }) => {
  const [activeSection, setActiveSection] = React.useState(steps[0]?.id ?? "problem")
  const processSteps = steps

  React.useEffect(() => {
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
  }, [])

  const getStepStatus = (stepId: string) => {
    const currentIndex = processSteps.findIndex(step => step.id === activeSection)
    const stepIndex = processSteps.findIndex(step => step.id === stepId)
    
    if (stepIndex < currentIndex) return "completed"
    if (stepIndex === currentIndex) return "active"
    return "upcoming"
  }

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col items-center space-y-6">
        {processSteps.map((step, index) => {
          const status = getStepStatus(step.id)
          const Icon = step.icon ?? (step.iconName ? navIconMap[step.iconName] : Cog)
          
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
                  status === "active" && "bg-accent border-accent shadow-lg shadow-accent/30",
                  status === "completed" && "bg-accent/80 border-accent/80",
                  status === "upcoming" && "bg-card border-accent/20 hover:border-accent/40"
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
                    status === "upcoming" && "text-accent/40"
                  )} 
                />
                
                {/* Active Pulse */}
                {status === "active" && (
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
                )}
              </a>
              
              {/* Label */}
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className={cn(
                  "px-2 py-1",
                  status === "active" && "border-l border-accent/40 bg-background/40"
                )}>
                  <span className={cn(
                    "text-xs font-medium uppercase tracking-[0.14em] whitespace-nowrap",
                    status === "active" && "text-accent",
                    status === "completed" && "text-accent/60",
                    status === "upcoming" && "text-muted-foreground/70"
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

export default PortfolioProcessNavigation
