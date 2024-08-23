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
			<section className='w-full flex justify-between h-60 md:h-[calc(100vh-60px)] bg-cover bg-center'>
				<div className='h-full flex flex-col whitespace-nowrap px-2 items-center'>
					<span className='h-full flex items-end'>
						<motion.span
							className='h-full w-0.5 border-r-2 border-foreground'
							initial={{height: 0}}
							whileInView={{height: "100%"}}
							transition={{duration: 2}}
						></motion.span>
					</span>
					<div className='max-md:text-xs transform rotate-180 w-min uppercase mt-4 md:pt-4' style={{writingMode: "vertical-rl"}}>
						Hello, I am
					</div>
				</div>
				<div className='flex items-start w-full self-end'>
					<TypewriterEffect text='Zaeema Anwar' className='text-4xl md:text-7xl lg:text-8xl xl:text-9xl  font-bold text-primary uppercase' />
				</div>
				<div className='flex flex-col items-center'>
					<div className='max-md:text-[8px] transform w-min uppercase mb-4 whitespace-nowrap tracking-widest' style={{writingMode: "vertical-rl"}}>
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
			<motion.div className='w-full max-md:text-sm p-2' initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 2}}>
				A passionate Software Engineer with a knack for crafting dynamic and user-friendly web experiences that elevate businesses.
			</motion.div>
			<section className='relative md:w-10/12 flex flex-col mt-10 md:mt-24'>
				{jobData.map((job) => (
					<JobCard key={job.id} job={job} />
				))}
			</section>
		</div>
	);
}
