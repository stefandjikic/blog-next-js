import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2">
      <div className="container flex flex-col items-center justify-center mx-auto py-6">
        <div className="mb-2 text-xl">
          <Link href="/">
            <a className="ml-4 hover:underline">Home</a>
          </Link>
          <Link href="/blog">
            <a className="ml-4 hover:underline">Blog</a>
          </Link>
          <Link href="/about">
            <a className="ml-4 hover:underline">About</a>
          </Link>
        </div>
        <div className="mb-2 flex">
          <a
            href="https://github.com/stefandjikic"
            target="_blank"
            rel="noreferrer"
            className="mr-2 text-gray-600 hover:text-black"
          >
            <FaGithub size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/stefandjikic/"
            target="_blank"
            rel="noreferrer"
            className="mr-3 text-gray-600 hover:text-black"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href="mailto:stefandjikic@outlook.com"
            target="_blank"
            rel="noreferrer"
            className="mr-2 text-gray-600 hover:text-black"
          >
            <FaEnvelope size={26} />
          </a>
        </div>
        <div className="font-light text-gray-400 text-sm">
          Stefan Đikić &copy; {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
