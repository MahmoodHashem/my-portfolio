import Card from './Card';

const ProjectCard = ({ project }) => {
  const projectData = {
    variableName: 'project',
    properties: {
      name: project.name,
      tools: project.tools,
      description: project.description
    }
  };

  return (
    <Card
      title={project.name}
      data={projectData}
      className="w-[300px] md:w-[500px]"
    />
  );
};

export default ProjectCard;
