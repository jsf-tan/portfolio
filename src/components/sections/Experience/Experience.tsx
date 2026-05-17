import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import ExperienceCard from './ExperienceCard'
import { experiences, overview } from '@/data/Experience'

function Experience() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-end justify-between flex-col gap-8 mb-12 lg:flex-row">
            <h2 className="font-bold text-4xl racking-tight">Experience</h2>
            <p className="max-w-xl leading-loose text-[var(--muted)]">
              {overview}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="grid gap-5">
            {experiences.map((item) => {
              return (
                <ExperienceCard
                  key={item.job}
                  period={item.period}
                  job={item.job}
                  description={item.description}
                />
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Experience
