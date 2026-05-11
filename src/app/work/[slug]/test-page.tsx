import { notFound } from 'next/navigation'

export default function TestPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Test Page for: {params.slug}</h1>
      <p>If you can see this, the routing works!</p>
    </div>
  )
}
