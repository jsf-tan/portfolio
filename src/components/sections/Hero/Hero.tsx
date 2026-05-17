import Container from '@/components/common/Container'
import { motion } from 'framer-motion'
import { personalData } from '@/data/PersonalData'
import clsx from 'clsx'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-22">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div
            className={clsx(
              'grid items-center',
              'grid-cols-1',
              'gap-12',
              'lg:grid-cols-2',
              'lg:gap-16',
            )}
          >
            <div>
              <small className="text-[var(--accent)] uppercase tracking-widest font-bold">
                Full-Stack Engineer
              </small>

              <h1
                className={clsx(
                  'text-5xl',
                  'md:text-7xl',
                  'lg:text-8xl',
                  'leading-none',
                  'mt-6',
                  'mb-7',
                  'tracking-tighter',
                  'font-bold',
                )}
              >
                {personalData.doing}
              </h1>

              <p
                className={clsx(
                  'max-w-2xl',
                  'text-base',
                  'leading-loose',
                  'text-[var(--muted)]',
                )}
              >
                {personalData.intro}
              </p>
            </div>
            <div className="p-8">
              {personalData.detail.map((item) => {
                return (
                  <div
                    key={item.type}
                    className="flex flex-col sm:flex-row justify-between py-4"
                  >
                    <span className="text-[var(--muted)]">{item.type}</span>
                    <strong className="pl-2 mt-2 sm:pl-0 text-lg">
                      {item.data}
                    </strong>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
