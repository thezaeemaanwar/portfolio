"use-client";

import React, {useRef} from "react";
import {motion} from "framer-motion";

const JobCard = ({job}) => {
	const cardRef = useRef(null);

	return (
		<motion.div
			className={`w-full md:w-2/3 rounded-lg my-2 md:m-4 p-0.5 ${job.id % 2 === 1 ? "self-start" : "self-end"}`}
			style={{backgroundImage: `conic-gradient(#e0dede 0%, #4B0082 100%)`}}
			ref={cardRef}
			initial={{opacity: 0, backgroundImage: `conic-gradient(#e0dede 100%, #4B0082 100% 100%)`}}
			whileInView={{opacity: 1, backgroundImage: `conic-gradient(#e0dede 0%, #4B0082 0% 100%)`}}
			transition={{ease: "linear", duration: 2}}
			viewport={{once: true}}
		>
			<div className='rounded-md bg-background flex flex-col w-full p-4 md:p-12'>
				<div className='flex justify-between w-full'>
					<div>
						<h2 className='text-foreground text-2xl md:text-4xl font-bold opacity-70 bg-gradient-border from-transparent to-accent w-min pr-1'>
							{job.companyName}
						</h2>
						<p>{job.title}</p>
					</div>
					<p className='uppercase text-xs'>
						{job.starting} - {job.ending}
					</p>
				</div>
				<span className="h-[1px] w-full bg-foreground opacity-70 my-4"/>
        <div>
          {job.details?.map((detailsParagraph, idx)=>(<p key={idx} className="my-2">{detailsParagraph}</p>))}
        </div>
				<div className='w-full flex flex-wrap gap-3 my-2'>
					{job.techStack?.map((tech, idx) => (
						<span key={`${job.id}-${idx}`} className={` rounded-full uppercase text-xs text-center flex items-center justify-center bg-accent text-primary px-4 py-2`}>
							{tech}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default JobCard;
