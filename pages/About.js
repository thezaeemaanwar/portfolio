import {motion} from "framer-motion";

import {techStack} from "../components/Data/myself";
import TechCard from "../components/TechCard";

const About = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full px-4 md:px-24 my-4 md:my-10'>
			<section className='flex'>
				<motion.div
					className={`w-full md:w-2/3 rounded-lg md:m-4 p-0.5`}
					style={{backgroundImage: `conic-gradient(#e0dede 0%, #4B0082 100%)`}}
					initial={{opacity: 0, backgroundImage: `conic-gradient(#e0dede 100%, #4B0082 100% 100%)`}}
					animate={{opacity: 1, backgroundImage: `conic-gradient(#e0dede 0%, #4B0082 0% 100%)`}}
					transition={{ease: "linear", duration: 2}}
				>
					<div className='rounded-md bg-background flex flex-col w-full p-4 md:p-12'>
						<h2 className='text-foreground text-4xl font-bold opacity-70 bg-gradient-border from-transparent to-accent w-min pr-1 whitespace-nowrap mb-4'>
							Who Am I?
						</h2>
						In a realm where technology and creativity intertwine, I navigate the endless possibilities of software development with the same passion
						and precision as a masterful artist. My journey is one of blending imagination with innovation, where each line of code is a brushstroke
						in a masterpiece that brings my visions to life.
						<br />
						<br />
						My love for coding stems from the boundless freedom it offers—creating anything I can dream of, solving problems in countless ways, and
						always finding new paths to refine and perfect my work. This passion led me to explore new technologies, and in the pursuit of
						imagination, I embraced graphic design as a hobby. This creative outlet not only fuels my love for aesthetics but also drives me to serve
						as a Graphics Lead for a welfare organization, where I channel my skills to make a meaningful impact on humanity.
						<br /> <br />
						When I’m not immersed in the digital world, you’ll find me lost in the pages of a fantasy novel, drawing inspiration from stories that
						transport me to otherworldly realms. This love for the fantastical bleeds into my work, as I weave the magic of those tales into the very
						fabric of my portfolio. Welcome to a space where technology, creativity, and imagination converge to shape a world as enchanting as the
						ones found in the books I adore.
					</div>
				</motion.div>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{duration: 2}}
					className='max-md:hidden w-1/3 bg-illustration-2 bg-no-repeat bg-contain bg-center'
				></motion.div>
			</section>
			<section className="w-full mt-10">
				<div className='m-5 text-foreground text-4xl font-bold opacity-70 bg-gradient-border from-transparent to-accent w-min pr-1 whitespace-nowrap mb-4'>
					My Tech Stack
				</div>
				<div className='w-full grid md:grid-cols-2'>
					{techStack.map((stack, ind) => (
						<TechCard key={ind} stack={stack} />
					))}
				</div>
			</section>
		</div>
	);
};

export default About;
