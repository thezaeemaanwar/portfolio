import { projectsData } from "../components/Data/projectsData";
import Project from "../components/Project";
const Projects = () => {
  return (
    <div className="mt-5 md:mt-0">
      {projectsData.map((proj) => (
        <Project key={proj.id} project={proj} />
      ))}
    </div>
  );
};

export default Projects;
