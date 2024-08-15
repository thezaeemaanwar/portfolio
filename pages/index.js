import React from "react";
import {motion} from "framer-motion";

import jobData from "../components/Data/jobData";
import JobCard from "../components/JobCard";
import Backdrop from "../components/Backdrop";
import TypewriterEffect from "../components/TypewriterEffect";

export default function Home() {
	return (
		<div className='w-11/12 m-auto flex flex-col items-center justify-center'>
			<Backdrop />
			<section className='w-full flex justify-between h-screen bg-cover bg-center' style={{height: "calc(100vh - 56px)"}}>
				<div className='h-full flex flex-col items-start'>
					<span className='h-full flex items-end'>
						<motion.span
							className='ml-3 h-full w-0.5 border-r-2 border-foreground'
							initial={{height: 0}}
							whileInView={{height: "100%"}}
							transition={{duration: 2}}
						></motion.span>
					</span>
					<div className='flex items-start'>
						<div className='transform rotate-180 w-min uppercase mt-4' style={{writingMode: "vertical-rl"}}>
							Hello, I am
						</div>
						<TypewriterEffect text="Zaeema Anwar" className="text-6xl md:text-9xl font-bold text-primary uppercase" />
					</div>
				</div>
				<div className='flex flex-col items-center'>
					<div className='transform w-min uppercase mb-4 whitespace-nowrap tracking-widest' style={{writingMode: "vertical-rl"}}>
						Crafting Innovative Solutions with Code and Creativity
					</div>
					<span className='h-full flex w-min'>
						<motion.span
							className='h-full w-0.5 border-r-2 border-foreground'
							initial={{height: 0}}
							whileInView={{height: "100%"}}
							transition={{duration: 1}}
						></motion.span>
					</span>
				</div>
			</section>
			<motion.div className='w-full' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 2}}>
				A passionate Software Engineer with a knack for crafting dynamic and user-friendly web experiences that elevate businesses.
			</motion.div>
			<section className='relative w-10/12 flex flex-col mt-24'>
				{jobData.map((job) => (
					<JobCard key={job.id} job={job} />
				))}
			</section>
		</div>
	);
}
