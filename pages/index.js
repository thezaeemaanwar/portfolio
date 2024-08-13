import React from 'react';

export default function Home() {
	return (
		<div className='w-11/12 m-auto flex flex-col items-center justify-center'>
			<section className='w-full flex justify-between h-screen bg-hero bg-cover bg-center' style={{ height: "calc(100vh - 56px)" }}>
				<div className='h-full flex flex-col items-start'>
					<span className='ml-3 h-full border-r-2 border-foreground'></span>
					<div className='flex items-start'>
						<div className='transform rotate-180 w-min uppercase mt-4' style={{writingMode: "vertical-rl"}}>
							Hello, I am
						</div>
						<h1 className='ext-6xl md:text-9xl font-bold text-primary uppercase'>Zaeema Anwar,</h1>
						<span className='flex w-max h-1 bg-foreground'></span>
					</div>
				</div>
				<div className='flex flex-col items-center'>
					<div className='transform w-min uppercase mb-4 whitespace-nowrap tracking-widest' style={{writingMode: "vertical-rl"}}>
						Crafting Innovative Solutions with Code and Creativity
					</div>
					<span className='h-full border-r-2 border-foreground'></span>
				</div>
			</section>
			<div className='w-full'>
				A passionate Software Engineer with a knack for crafting dynamic and user-friendly web experiences that elevate businesses.
			</div>
			<div className='w-1/2'>
				<div className='flex flex-col w-full'>
					<div className='py-10'>
						<div className='text-4xl text-primary pb-2 pr-6 border-primary border-b-2'>Current Placements</div>
						<ul className='py-2'>
							<li className='text-xl leading-10'>
								React.js Internee at{" "}
								<a href='https://techno-soft.com/' className='border-b-2'>
									Techno-soft Solutions
								</a>
							</li>
							<li className='text-xl leading-10'>
								Front-end Web Developer at{" "}
								<a href='https://en-gb.facebook.com/sorscard' className='border-b-2'>
									SORS Card
								</a>
							</li>
							<li className='text-xl leading-10'>
								Graphic Design Lead at{" "}
								<a href='https://kaarekamal.org/' className='border-b-2'>
									Kaar-e-Kamal Welfare Organization
								</a>
							</li>
						</ul>
					</div>
					<div className='py-10'>
						<div className='text-4xl text-primary pb-2 pr-6 border-primary border-b-2'>Previous Placements</div>
						<ul className='py-2'>
							<li className='text-xl leading-10'>
								React.js Internee at{" "}
								<a href='https://www.mavenstcl.com/' className='border-b-2'>
									Mavens Technologies Consulting & Logistics Inc (USA)
								</a>
							</li>
						</ul>
					</div>
					<div className='py-10'>
						<div className='text-4xl text-primary pb-2 pr-6 border-primary border-b-2'>Educational Background</div>
						<ul className='py-2'>
							<li className='text-xl leading-10'>
								Bachelor in Computer Science from{" "}
								<a href='https://uet.edu.pk/' className='border-b-2'>
									University of Engineering and Technology, Lahore.
								</a>
							</li>
							<li className='text-xl leading-10'>
								Pre-Engineering from{" "}
								<a href='https://pgc.edu/' className='border-b-2'>
									Punjab Group of Colleges
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='h-48'></div>
			</div>
		</div>
	);
}
