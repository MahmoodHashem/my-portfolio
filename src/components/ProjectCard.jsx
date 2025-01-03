import Card from './Card';

const ProjectCard = ({ project }) => {
  const projectData = {
    variableName: 'project',
    properties: {
      name: project.name,
      tools: project.tools,
      myRole: project.role,
      description: project.description
    }
  };

  return (
    <Card
      title={project.name}
      data={projectData}
      className="w-full"
    />
  );
};

export default ProjectCard;
