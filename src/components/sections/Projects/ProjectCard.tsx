import { motion } from 'framer-motion'
import type { Project } from '@/types/auth'
import clsx from 'clsx'

function ProjectCard({
  image,
  link,
  type,
  title,
  description,
  work,
  stack = [],
}: Project) {
  const imagePath = new URL('../assets/images/CartonCloud.jpg', import.meta.url)
    .href
  return (
    <div
      className={clsx(
        'grid grid-row-2 lg:grid-cols-2',
        'overflow-hidden',
        'rounded-3xl',
        'transition-all duration-300',
        'hover:-translate-y-1.5',
      )}
    >
      <motion.div
        initial={{ opacity: 0.3, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div
          className="min-h-[360px] h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0.3, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="flex flex-col justify-center p-10">
          <small className="text-[var(--accent)] uppercase tracking-widest font-bold">
            {type}
          </small>

          <h3 className="text-3xl my-4 tracking-tight font-bold">{title}</h3>

          <p className="text-[var(--muted)] leading-loose mb-6">
            {description}
          </p>

          <p className="text-[var(--muted)] leading-loose mb-6">{work}</p>

          <div className="grid grid-cols-2 flex-wrap gap-10 sm:flex sm:gap-2 mb-6">
            {stack.map((tech) => {
              return (
                <div
                  key={tech}
                  className="text-[var(--accent)] px-3 py-2 text-sm font-semibold"
                >
                  {tech}
                </div>
              )
            })}
          </div>

          <a
            className="no-underline text-[var(--text)] font-bold"
            href={link}
            target="_blank"
          >
            View Reference ↗
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectCard
