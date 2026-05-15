import dynamic from 'next/dynamic'

import About from '@/components/about'
import Contact from '@/components/contact'
import Education from '@/components/education'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Skills from '@/components/skills'

const Experience = dynamic(() => import('@/components/experience'), {
  ssr: true,
})

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}
