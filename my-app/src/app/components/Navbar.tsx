"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname()
  console.log(pathName, pathName.includes('dashboard'))

  if(!pathName.includes('dashboard')){

    return (
      <div>
        <ul className="flex justify-center item-center gap-10 bg-green-300 px-16 py-5">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/services">
            <li>Services</li>
          </Link>
          <Link href="/posts">
            <li>Posts</li>
          </Link>
        </ul>
      </div>
    );
  }
  return <></>
};

export default Navbar;
