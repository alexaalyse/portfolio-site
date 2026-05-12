"use client"

import { useState } from "react"
import type { ComponentType } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  TestTube,
  BarChart,
  TrendingUp,
  Users,
  Users as Team,
  Settings,
  BookOpen,
  CheckSquare as CheckList,
} from "lucide-react"
import PortfolioProcessNavigation from "@/components/PortfolioProcessNavigation"

const iconMap: Record<string, ComponentType<any>> = {
  "test-tube": TestTube,
  "bar-chart": BarChart,
  "trending-up": TrendingUp,
  users: Users,
  team: Team,
  settings: Settings,
  "book-open": BookOpen,
  checklist: CheckList,
}

interface PortfolioPiece {
  title: string
  subtitle: string
  problem: string
  impact: Array<{
    header: string
    description: string
  }>
  beforeAfter?: {
    before: string
    after: string
  }
  process: Array<{
    phase: string
    description: string
    slides: Array<{
      title: string
      content: string
    }>
    images: string[]
  }>
  tags: string[]
  nextProject: string | null
  prevProject: string | null
}

export default function PortfolioPieceClient({ piece }: { piece: PortfolioPiece }) {
  const [selectedPhase, setSelectedPhase] = useState<number>(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = () => {
    const totalSlides = piece.process[selectedPhase].slides.length
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1)
    } else if (selectedPhase < piece.process.length - 1) {
      setSelectedPhase((prev) => prev + 1)
      setCurrentSlide(0)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1)
    } else if (selectedPhase > 0) {
      const prevPhase = selectedPhase - 1
      setSelectedPhase(prevPhase)
      setCurrentSlide(piece.process[prevPhase].slides.length - 1)
    }
  }

  return (
    <>
      <PortfolioProcessNavigation />
      <main className="min-h-screen bg-background">
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 w-full items-center justify-between px-6 md:px-8">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-xl font-bold">Alexa Mavrogianis</span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/#about" className="text-sm font-medium transition-colors hover:text-accent">About</Link>
              <Link href="/#work" className="text-sm font-medium transition-colors hover:text-accent">Work</Link>
              <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-accent">Contact</Link>
            </div>
          </div>
        </nav>

        <section id="hero" className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">{piece.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{piece.subtitle}</p>
              <div className="flex flex-wrap gap-2 justify-start">
                {piece.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-left">
              <h2 className="text-3xl font-bold mb-8 text-left text-primary">The problem</h2>
              <Card>
                <CardContent className="p-8">
                  <div
                    className="text-lg leading-relaxed text-muted-foreground [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:space-y-2 [&_li]:ml-2"
                    dangerouslySetInnerHTML={{ __html: piece.problem }}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="impact" className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-left">
              <h2 className="text-3xl font-bold mb-8 text-left text-primary">My impact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {piece.impact.map((impact, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2">{impact.header}</h4>
                      <p className="text-muted-foreground">{impact.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {piece.beforeAfter && (
          <section id="before-after" className="py-20 bg-background">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-left">
                <h2 className="text-3xl font-bold mb-8 text-left text-primary">Before & After</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Before</h3>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img src={piece.beforeAfter.before} alt="Before empty state design" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-muted-foreground">After</h3>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <img src={piece.beforeAfter.after} alt="After empty state design" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section id="process" className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-left">
              <h2 className="text-3xl font-bold mb-12 text-left text-primary">My process</h2>
              <Card className="overflow-hidden">
                <div className="flex justify-between items-center p-6 border-b border-border bg-muted/30">
                  <div>
                    <h3 className="text-2xl font-semibold">{piece.process[selectedPhase].phase}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Phase {selectedPhase + 1} of {piece.process.length} · Slide {currentSlide + 1} of {piece.process[selectedPhase].slides.length}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {piece.process[selectedPhase].slides[currentSlide].title}
                  </div>
                </div>

                <div className="w-full bg-muted h-1">
                  <div
                    className="bg-primary h-1 transition-all duration-300"
                    style={{ width: `${((currentSlide + 1) / piece.process[selectedPhase].slides.length) * 100}%` }}
                  />
                </div>

                <div className="p-8 min-h-[400px]">
                  <div className="prose prose-invert max-w-none">
                    <h4 className="text-xl font-semibold text-primary mb-4">
                      {piece.process[selectedPhase].slides[currentSlide].title}
                    </h4>
                    <div className="text-muted-foreground leading-relaxed text-lg mb-8 whitespace-pre-line">
                      {piece.process[selectedPhase].slides[currentSlide].content}
                    </div>

                    {currentSlide === 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {piece.process[selectedPhase].images.map((image, imgIndex) => {
                          const IconComponent = iconMap[image]
                          return (
                            <div key={imgIndex} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                {IconComponent ? (
                                  <IconComponent className="w-16 h-16 text-accent mb-2 mx-auto" />
                                ) : (
                                  <>
                                    <div className="text-2xl font-bold text-primary/30 mb-2">Image {imgIndex + 1}</div>
                                    <div className="text-sm text-muted-foreground">{image}</div>
                                  </>
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center p-6 border-t border-border bg-muted/30">
                  <Button variant="outline" onClick={goToPrevSlide} disabled={currentSlide === 0 && selectedPhase === 0}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  <div className="flex gap-1">
                    {piece.process.map((phase, phaseIndex) => (
                      <div key={phaseIndex} className="flex gap-1">
                        {phase.slides.map((_, slideIndex) => {
                          const isActive = selectedPhase === phaseIndex && currentSlide === slideIndex
                          const isPast = selectedPhase > phaseIndex || (selectedPhase === phaseIndex && currentSlide > slideIndex)
                          return (
                            <button
                              key={`${phaseIndex}-${slideIndex}`}
                              onClick={() => {
                                setSelectedPhase(phaseIndex)
                                setCurrentSlide(slideIndex)
                              }}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                isActive ? "bg-primary" : isPast ? "bg-primary/50" : "bg-muted-foreground/30"
                              }`}
                            />
                          )
                        })}
                        {phaseIndex < piece.process.length - 1 && (
                          <div className="w-4 flex items-center justify-center">
                            <div className="w-2 h-px bg-muted-foreground/20" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={goToNextSlide}
                    disabled={selectedPhase === piece.process.length - 1 && currentSlide === piece.process[piece.process.length - 1].slides.length - 1}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center">
                {piece.prevProject && (
                  <Link href={`/work/${piece.prevProject}`}>
                    <Button variant="outline" size="lg">
                      Previous case study
                    </Button>
                  </Link>
                )}
                <div className="flex-1" />
                {piece.nextProject && (
                  <Link href={`/work/${piece.nextProject}`}>
                    <Button size="lg">
                      Next case study
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
