import { projectsData } from '../data/projects-data';
import ProjectCard from './ProjectCard';

const Projects = () => {

    return (
        <section id='projects' className="sticky top-0 z-50   my-12 lg:my-24">
            <div className="relative top-10">
                <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
                <div className="flex items-center justify-start relative">
                    <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
                        PROJECTS
                    </span>
                    <span className="w-full h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="pt-24 sticky top-0 flex flex-col gap-6 ">

                {projectsData.slice(0, 4).map((project, index) => (
                    <div
                        id={`sticky-card-${index + 1}`}
                        key={index}
                        className={`sticky 
                ${project.id === 1 ? 'top-0' : project.id === 2 ? 'top-20' : project.id === 3 ? 'top-40' : 'top-60'
                            }`}
                    >

                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;