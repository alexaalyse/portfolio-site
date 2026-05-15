export interface PortfolioPiece {
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

