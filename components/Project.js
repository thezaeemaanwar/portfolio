import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ project }) => {
  return (
    <div
      className={`w-full flex flex-col-reverse md:h-screen items-center justify-center ${
        project.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="hidden perspective w-3/5 p-10 h-full md:flex items-center">
        <iframe
          className={`w-full h-4/5 bg-accent-text shadow-lg rounded-lg ${
            project.id % 2 === 0 ? "neg-iframe" : "iframe"
          }`}
          src={project.url}
          title={project.name}
        ></iframe>
      </div>
      <div className="w-full my-5 md:my-0 md:w-1/3 bg-accent-text bg-opacity-5 md:h-2/3 rounded-lg shadow-xl backdrop-filter backdrop-blur-sm z-10 p-8 flex flex-col justify-between">
        <a href={project.url}>
          <div className="text-4xl text-primary filter drop-shadow-lg pb-2 pr-6 border-primary border-b-2">
            {project.name}
          </div>
        </a>
        <div className="text-xl">{project.description}</div>
        <div>
          <div className="w-min font-bold text-xl text-primary filter drop-shadow-lg pb-2 mb-2 border-primary border-b-2">
            TechStack
          </div>
          <div>
            {project.techStack.map((tech, id) => (
              <div key={id}>{tech}</div>
            ))}
          </div>
        </div>
        <div className="text-lg flex pt-4">
          <div className="pr-2">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <a href={project.githubUrl} className="border-b-2 break-all">
            {project.githubUrl.substring(18)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
