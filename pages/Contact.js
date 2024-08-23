import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";

import Backdrop from "../components/Backdrop";

const Contact = () => {
	return (
		<div className='md:h-[calc(100vh-60px)] md:overflow-hidden w-full flex flex-col items-center justify-center p-4 md:p-20'>
			<motion.div
				className={`w-full md:w-2/3 rounded-lg m-4 p-0.5`}
				style={{backgroundImage: `conic-gradient(#e0dede 0%, #4B0082 100%)`}}
				initial={{opacity: 0, backgroundImage: `conic-gradient(#e0dede 100%, #4B0082 100% 100%)`}}
				animate={{opacity: 1, backgroundImage: `conic-gradient(#e0dede 0%, #4B0082 0% 100%)`}}
				transition={{ease: "linear", duration: 2}}
			>
				<div className='rounded-md bg-background flex flex-col w-full p-4 md:p-12'>
					<h2 className='text-foreground text-4xl font-bold opacity-70 bg-gradient-border from-transparent to-accent w-min pr-1 whitespace-nowrap'>
						Contact Me
					</h2>
					<span className='h-[1px] w-full bg-foreground opacity-70 my-4' />
					<ul className='w-full'>
						<li className='text-lg flex pt-4'>
							<div className='pr-2'>
								<FontAwesomeIcon icon={faGithub} />
							</div>
							<a href={"https://github.com/thezaeemaanwar"} className='break-all border-b-2 border-accent hover:border-primary'>
								github.com/thezaeemaanwar
							</a>
						</li>
						<li className='text-lg flex pt-4'>
							<div className='pr-2'>
								<FontAwesomeIcon icon={faLinkedin} />
							</div>
							<a href={"https://www.linkedin.com/in/thezaeemaanwar/"} className='break-all border-b-2 border-accent hover:border-primary'>
								www.linkedin.com/in/thezaeemaanwar
							</a>
						</li>
						<li className='text-lg flex pt-4'>
							<div className='pr-2'>
								<FontAwesomeIcon icon={faEnvelope} />
							</div>
							<a href={"mailto:thezaeemaanwar@gmail.com"} className='break-all border-b-2 border-accent hover:border-primary'>
								thezaeemaanwar@gmail.com
							</a>
						</li>
					</ul>
				</div>
			</motion.div>
			<div className='relative w-full h-full'>
				<Backdrop />
			</div>
		</div>
	);
};

export default Contact;
