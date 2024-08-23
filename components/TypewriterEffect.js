import React from "react";
import {motion} from "framer-motion";

const typeWriterAnimationVariants = {
	hidden: {
		opacity: 0,
		y: 1,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

const TypewriterEffect = ({text, className}) => {
	return (
		<motion.span initial='hidden' animate='visible' transition={{staggerChildren: 0.1}} className={className}>
			{text.split(" ").map((word) => (
				<>
					{word.split("").map((char, idx) => (
						<motion.span className='inline-block' variants={typeWriterAnimationVariants} key={idx}>
							{char}
						</motion.span>
					))}{" "}
				</>
			))}
		</motion.span>
	);
};

export default TypewriterEffect;
