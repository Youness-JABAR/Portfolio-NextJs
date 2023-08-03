import Background from '@/components/common/Background'
import Footer from '@/components/common/Footer/Footer'
import About from '@/components/home/About/About'
import Contact from '@/components/home/Contact/Contact'
import Hero from '@/components/home/Hero/Hero'
import AiProjects from '@/components/home/Projects/AiProjects'
import Projects from '@/components/home/Projects/Projects'
import Skills from '@/components/home/Skills/Skills'

export default function Home() {
  return (
    <>
    <Background/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <AiProjects/>
    <Contact/>
    <Footer/>
    </>
  )
}
