import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [hamburger, setHamburger] = useState('hidden');

  return (
    <header className="bg-gray-900 text-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row py-6 md: px-3">
        <Link href="/">
          <a className="flex">
            <p className="font-bold">Stefan Dj.</p>
            <span className="text-yellow-500 mx-2">&#60;&#47;&#62;</span>
          </a>
        </Link>
        <nav className="md:ml-auto md:mt-0 sm:ml-0 sm: mt-6 flex flex-col md:flex-row">
          <Link href="/blog">
            <a className="md:mx-4 md:mb-0 sm:mx-0 sm: mb-4 hover:text-yellow-500">Blog</a>
          </Link>
          <Link href="/about">
            <a className="md:ml-4 sm:ml-0 hover:text-yellow-500">About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
