import { notFound } from 'next/navigation'
import PortfolioPieceClient from '@/components/PortfolioPieceClient'
import { ClueIndexCaseStudy } from '@/case-studies/ClueIndexCaseStudy'
import { DocumentationForRetrievalCaseStudy } from '@/case-studies/DocumentationForRetrievalCaseStudy'
import { EmptyStatesCaseStudy } from '@/case-studies/EmptyStatesCaseStudy'
import { GatewayPolicyBuilderCaseStudy } from '@/case-studies/GatewayPolicyBuilderCaseStudy'
import { NavigationOverhaulCaseStudy } from '@/case-studies/NavigationOverhaulCaseStudy'
import { portfolioPieces, type PortfolioSlug } from '@/case-studies/data'
import type { PortfolioPiece } from '@/case-studies/types'

const caseStudyComponents: Partial<Record<PortfolioSlug, (props: { piece: PortfolioPiece }) => JSX.Element>> = {
  'zero-trust-navigation': NavigationOverhaulCaseStudy,
  'empty-states': EmptyStatesCaseStudy,
  'clue-index': ClueIndexCaseStudy,
  'gateway-policy-builder': GatewayPolicyBuilderCaseStudy,
  'documentation-for-retrieval': DocumentationForRetrievalCaseStudy,
}

export function generateStaticParams() {
  return Object.keys(portfolioPieces).map((slug) => ({ slug }))
}

export default async function PortfolioPiece({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const piece = portfolioPieces[slug as PortfolioSlug]

  if (!piece) {
    notFound()
  }

  const CaseStudy = caseStudyComponents[slug as PortfolioSlug]

  if (CaseStudy) {
    return <CaseStudy piece={piece} />
  }

  return <PortfolioPieceClient piece={piece} />
}
