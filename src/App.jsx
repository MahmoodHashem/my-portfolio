
import HeaderCard from "./components/HeaderCard"
import ProjectCard from "./components/ProjectCard"
import { projectsData } from "./data/projects-data"

function App() {

  return (
    <section className=" m-auto sticky">
      <HeaderCard />
      {
        projectsData.map(project => (
          <div key={project.id} className={`sticky 
            ${
            project.id === 1 ? 'top-0' : project.id === 2 ? 'top-20' : project.id === 3 ? 'top-40' : 'top-60'
              }`}>
            <ProjectCard project={project} />
          </div>
        ))
      }

    </section>
  )
}

export default App
