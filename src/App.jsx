
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

function App() {

  return (
    <>
      <section className=" m-auto sticky">
        <HeaderCard />
        {
          projectsData.map(project => (
            <div key={project.id} className={`sticky 
            ${project.id === 1 ? 'top-0' : project.id === 2 ? 'top-20' : project.id === 3 ? 'top-40' : 'top-60'
              }`}>
              <ProjectCard project={project} />
            </div>
          ))
        }
      </section>
      <section className="max-w-md m-auto">
        <div className="flex flex-col gap-6">
          {
            experiences.map(experience => (
              <GlowCard key={experience.id}
                identifier={`experience-${experience.id}`}>
                <div className="p-3 relative">
                  <img
                    src="/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {experience.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-8 px-3 py-5">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <div>He</div>
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {experience.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))
          }
        </div>
      </section>

      <section>
        <div className="flex justify-center items-start">
          <div className="w-full h-full">
            <AnimationLottie animationPath={experienceLottie} />
            <AnimationLottie animationPath={build} />
            <AnimationLottie animationPath={contact} />
            <AnimationLottie animationPath={development} />
            <AnimationLottie animationPath={education} />
            <AnimationLottie animationPath={study} />
          </div>
        </div>

      </section>
    </>
  )
}

export default App
