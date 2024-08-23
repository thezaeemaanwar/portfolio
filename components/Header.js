import Link from "next/link";
import {useRouter} from "next/router";

const links = [
	{href: "/About", label: "About"},
	{href: "/Projects", label: "Projects"},
	{href: "/Contact", label: "Contact"},
];

const Header = () => {
	const router = useRouter();

	const isActive = (href) => {
    
   return router.pathname === href};

	return (
		<header className='w-full flex items-center justify-center bg-background z-10 relative'>
			<div className='h-18 md:h-14 p-3 w-full sm:w-11/12 flex flex-col sm:flex-row border-b-10 border-secondary items-center justify-between hover:cursor-pointer'>
				<Link href='/' passHref>
					<div className='cursor-pointer'>thezaeemaanwar</div>
				</Link>
				<ul className='flex w-full sm:w-3/12 justify-between'>
					{links.map((link, idx) => (
						<Link href={link.href} passHref key={idx} >
							<li className={`cursor-pointer border-primary ${isActive(link.href) ? "border-b-2" : "border-b-0"}`}>{link.label}</li>
						</Link>
					))}
				</ul>
			</div>
		</header>
	);
};

export default Header;
