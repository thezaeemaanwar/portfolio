import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-center bg-background z-10 relative">
      <div className="h-18 md:h-14 p-3 w-full sm:w-11/12 flex flex-col sm:flex-row border-b-10 border-secondary items-center justify-between hover:cursor-pointer">
        <Link href="/" passHref>
          <div className="cursor-pointer">thezaeemaanwar</div>
        </Link>
        <ul className="flex w-full sm:w-3/12 justify-between">
          <Link href="/About" passHref>
            <li className="cursor-pointer">About</li>
          </Link>
          <Link href="/Projects" passHref>
            <li className="cursor-pointer">Projects</li>
          </Link>
          <Link href="/Contact" passHref>
            <li className="cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
