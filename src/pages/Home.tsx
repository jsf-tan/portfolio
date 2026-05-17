import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

import Hero from '@/components/sections/Hero/Hero'
import Projects from '@/components/sections/Projects/Projects'
import Expertises from '@/components/sections/Expertises/Expertises'
import Experience from '@/components/sections/Experience/Experience'
import Contact from '@/components/sections/Contact/Contact'

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Expertises />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home
