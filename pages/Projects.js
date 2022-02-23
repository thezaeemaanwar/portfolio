import { projectsData } from "../components/Data/projectsData";
import Project from "../components/Project";
const Projects = () => {
  return (
    <div>
      {projectsData.map((proj) => (
        <Project key={proj.id} project={proj} />
      ))}
    </div>
  );
};

export default Projects;
