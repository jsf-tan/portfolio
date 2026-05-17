import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import ExpertiseCard from './ExpertiseCard'
import { expertise, overview } from '@/data/Expertise'

function Expertises() {
  return (
    <section id="expertise" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-end justify-between flex-col gap-8 mb-12 lg:flex-row">
            <h2 className="font-bold text-4xl racking-tight">
              Engineering Expertise
            </h2>
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
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
            {expertise.map((item) => {
              return (
                <ExpertiseCard
                  key={item.field}
                  field={item.field}
                  detail={item.detail}
                />
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Expertises
