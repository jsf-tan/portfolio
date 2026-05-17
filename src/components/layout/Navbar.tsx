import Container from '@/components/common/Container'
import { motion } from 'framer-motion'
import { personalData } from '@/data/PersonalData'
import clsx from 'clsx'

function Navbar() {
  return (
    <header
      className={clsx(
        'sticky top-0 z-50',
        'border-b border-slate-200/70',
        'bg-slate-50/90',
        'backdrop-blur-md',
      )}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <nav className="flex items-center justify-between py-5">
            <div>
              <a
                className={clsx(
                  'text-lg',
                  'font-extrabold',
                  'tracking-tight',
                  'text-[var(--text)]',
                  'no-underline',
                )}
                href="#"
              >
                Joseph Tan
              </a>
            </div>

            <ul
              className={clsx(
                'md:flex list-none gap-8',
                'hidden',
                '[&_a]:text-sm',
                '[&_a]:text-[var(--muted)]',
                '[&_a]:no-underline',
                '[&_a]:transition-colors',
                '[&_a]:duration-200',
                '[&_a:hover]:text-[var(--text)]',
              )}
            >
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#expertise">Expertise</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>

            <a
              className={clsx(
                'sm:flex hidden items-center gap-2.5',
                'px-4 py-3',
                'font-semibold',
                'text-[var(--text)]',
                'no-underline',
                'transition-transform duration-200',
                'hover:-translate-y-0.5',
              )}
              href={personalData.resume}
              download
            >
              ⬇ Download Resume
            </a>
            <a
              className={clsx(
                'flex sm:hidden items-center gap-2.5',
                'px-4 py-3',
                'font-semibold',
                'text-[var(--text)]',
                'no-underline',
                'transition-transform duration-200',
                'hover:-translate-y-0.5',
              )}
              href={personalData.resume}
              download
            >
              ⬇ Resume
            </a>
          </nav>
        </motion.div>
      </Container>
    </header>
  )
}

export default Navbar
