import type { Expertise } from '@/types/auth'

function ExpertiseCard({ field, detail }: Expertise) {
  return (
    <div className="p-7">
      <h3 className="mt-4 mb-3 text-xl font-bold">{field}</h3>
      <p className="text-[var(--muted)] leading-loose">{detail}</p>
    </div>
  )
}

export default ExpertiseCard
