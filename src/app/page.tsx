import Background from '@/components/common/Background'
import Footer from '@/components/common/Footer/Footer'
import Navbar from '@/components/common/Navbar/Navbar'
import ScrollToTop from '@/components/common/ScrollToTop'
import ViewOnGithub from '@/components/common/ViewOnGithub'
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
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <AiProjects/>
    <Contact/>
    <Footer/>
    <ViewOnGithub/>
    <ScrollToTop />

    </>
  )
}
