import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="h-14 w-full sm:w-10/12 flex border-b-10 border-grey items-center justify-between hover:cursor-pointer">
        <Link href="/" passHref>
          <div>thezaeemaanwar</div>
        </Link>
        <ul className="flex w-full sm:w-3/12 justify-between">
          <Link href="About" passHref>
            <li className="hover:cursor-pointer">About</li>
          </Link>
          <Link href="Projects" passHref>
            <li className="hover:cursor-pointer">Projects</li>
          </Link>
          <Link href="Contact" passHref>
            <li className="hover:cursor-pointer">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
