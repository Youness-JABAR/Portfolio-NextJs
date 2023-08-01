import Background from '@/components/common/Background'
import About from '@/components/home/About/About'
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

    <div className="py-96 my-96" ></div>
    <div className="py-96 my-96" ></div>
      hello world
    </>
  )
}
