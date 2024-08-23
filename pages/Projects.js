import {projectsData} from "../components/Data/projectsData";
import ProjectCard from "../components/Project";

const Projects = () => {
	return (
		<div className='flex flex-col mx-4 md:mx-24 my-4 md:my-10'>
			{projectsData.map((proj, idx) => (
				<ProjectCard key={proj.id} project={proj} index={idx} />
			))}
		</div>
	);
};

export default Projects;
