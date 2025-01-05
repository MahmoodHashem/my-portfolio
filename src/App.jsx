
import GlowCard from "./components/GlowCard"
import HeaderCard from "./components/HeaderCard"
import ProjectCard from "./components/ProjectCard"
import { projectsData } from "./data/projects-data"
import { experiences } from "./data/experience"
import AnimationLottie from "./components/AnimationLottie"
import experienceLottie from './assets/lottie/code.json'
import build from './assets/lottie/build.json'
import contact from './assets/lottie/contact.json'
import development from './assets/lottie/development.json'
import education from './assets/lottie/education.json'
import study from './assets/lottie/study.json'
import SpotlightCard from "./components/SpotlightCard"
import Skills from "./components/Skills"
import About from "./components/About"
import ContactSection from "./components/ContactSection"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Stack from "./components/Stack"
import ProjectStack from "./components/ProjectStack"

function App() {

  return (
    <div className="max-w-6xl m-auto overflow-hidden">

      <header className="  mx-5" >
        <Navbar />
        <HeroSection />
      </header>

      <main className=" mx-5">
          <About />
          <Experience />
          <Projects />
          
          <Skills />
          <Education />
          <ContactSection />
    
      </main>
   
  
     
    </div>
  )
}

export default App
