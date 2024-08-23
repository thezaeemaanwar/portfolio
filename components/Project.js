"use-client";

import React from "react";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({project, index}) => {
	return (
		<motion.div
			className={`w-full md:w-2/3 rounded-lg my-2 md:m-4 p-0.5 ${index % 2 === 0 ? "self-start" : "self-end"}`}
			style={{backgroundImage: `conic-gradient(#e0dede 0%, #4B0082 100%)`}}
			initial={{opacity: 0, backgroundImage: `conic-gradient(#e0dede 100%, #4B0082 100% 100%)`}}
			whileInView={{opacity: 1, backgroundImage: `conic-gradient(#e0dede 0%, #4B0082 0% 100%)`}}
			transition={{ease: "linear", duration: 2}}
		>
			<div className='rounded-md bg-background flex flex-col w-full p-4 md:p-12'>
				<h2 className='text-foreground text-2xl md:text-4xl font-bold opacity-70 bg-gradient-border from-transparent to-accent w-min pr-1 whitespace-nowrap'>
					{project.name}
				</h2>
				<span className='h-[1px] w-full bg-foreground opacity-70 my-4' />
				<div>
					{project.details?.map((detailsParagraph, idx) => (
						<p key={idx} className='my-2'>
							{detailsParagraph}
						</p>
					))}
				</div>
				{project.githubUrl && <div className='flex my-2'>
					<div className='pr-2'>
						<FontAwesomeIcon icon={faGithub} />
					</div>
					<a href={project.githubUrl} className='border-b-2 border-accent hover:border-primary break-all'>
						{project.githubUrl.substring(18)}
					</a>
				</div>}
				<div className='w-full flex flex-wrap gap-3 my-2'>
					{project.techStack?.map((tech, idx) => (
						<span
							key={`${project.id}-${idx}`}
							className={` rounded-full uppercase text-xs text-center flex items-center justify-center bg-accent text-primary px-4 py-2`}
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
