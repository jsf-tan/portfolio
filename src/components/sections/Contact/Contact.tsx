import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import { personalData } from '@/data/PersonalData'

import github from '@/assets/icons/github.svg'
import Button from '@/components/ui/Button'

function Contact() {
  return (
    <section id="contact" className="pb-30 text-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            Let’s build something scalable.
          </h2>

          <p className="max-w-3xl mx-auto mb-9 leading-loose text-[var(--muted)]">
            {personalData.whatIdo}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="px-7 py-4 bg-[var(--accent)] text-white">
                Contact Me
              </Button>
            </Link>
            <a href={personalData.github}>
              <Button className="px-7 py-4 flex aligin-center text-[var(--text)]">
                <img src={github} alt="GitHub" className="h-6 w-6 mr-1" />{' '}
                GitHub
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Contact
