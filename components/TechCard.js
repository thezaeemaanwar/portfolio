import {motion} from "framer-motion";

const TechCard = ({stack}) => {
	return (
		<div className='bg-opacity-5 bg-background rounded-md border-primary border-2 my-2 md:m-5 py-2 md:py-5 px-5 md:px-10'>
			<div className='leading-10'>{stack.tech}</div>
			<div className='h-4 w-full bg-secondary/15 rounded-lg'>
				<motion.div
					className='h-full bg-primary/30 rounded-lg'
					style={{width: `${stack.level}%`}}
					initial={{width: 0}}
					whileInView={{width: `${stack.level}%`}}
          viewport={{ once: true }}
					transition={{duration: 1}}
				></motion.div>
			</div>
		</div>
	);
};

export default TechCard;
