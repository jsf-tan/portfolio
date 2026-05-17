import type { Experience } from '@/types/auth'

function ExperienceCard({ period, job, description }: Experience) {
  return (
    <div className="p-7 flex flex-col xl:flex-row justify-between gap-7">
      <div>
        <small className="text-[var(--accent)] font-bold">{period}</small>
        <h3 className="mt-3 text-xl font-bold">{job}</h3>
      </div>

      <p className="max-w-3xl leading-lose text-[var(--muted)]">
        {description}
      </p>
    </div>
  )
}

export default ExperienceCard
