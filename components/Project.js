import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project = ({ project }) => {
  return (
    <div
      className={`w-full flex h-screen items-center justify-center ${
        project.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="perspective w-3/5 p-10 h-full flex items-center">
        <iframe
          className={`w-full h-4/5 bg-white shadow-lg rounded-lg ${
            project.id % 2 === 0 ? "neg-iframe" : "iframe"
          }`}
          src={project.url}
          title={project.name}
        ></iframe>
      </div>
      <div className=" w-1/3 bg-white bg-opacity-5 h-2/3 rounded-lg shadow-xl backdrop-filter backdrop-blur-sm z-10 p-8 flex flex-col justify-between">
        <a href={project.url}>
          <div className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-pink to-orange filter drop-shadow-lg pb-2 pr-6 border-pink border-b-2">
            {project.name}
          </div>
        </a>
        <div className="text-xl">{project.description}</div>
        <div>
          <div className="w-min font-bold text-xl text-transparent bg-clip-text bg-gradient-to-tr from-pink to-orange filter drop-shadow-lg pb-2 mb-2 border-pink border-b-2">
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
          <a href={project.githubUrl} className="border-b-2">
            {project.githubUrl.substring(18)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
