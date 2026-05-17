import { motion } from 'framer-motion'
import Container from '@/components/common/Container'
import ProjectCard from './ProjectCard'
import { projects, overview } from '@/data/projects'

function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="flex items-end justify-between flex-col gap-8 mb-12 lg:flex-row">
            <h2 className="font-bold text-4xl racking-tight">
              Selected Projects
            </h2>
            <p className="max-w-xl leading-loose text-[var(--muted)]">
              {overview}
            </p>
          </div>
        </motion.div>
        <div className="grid gap-7">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                image={project.image}
                link={project.link}
                type={project.type}
                title={project.title}
                description={project.description}
                work={project.work}
                stack={project.stack}
              />
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Projects
