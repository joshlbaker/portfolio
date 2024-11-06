"use client";

import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import SocialLink, { SocialLinkProps } from "./components/SocialLink";
import NavBar from "./components/NavBar";
import Timeline from "./components/Timeline";

const SOCIAL_LINKS: SocialLinkProps[] = [
  { href: 'https://www.linkedin.com/in/joshlbaker/', icon: 'linkedin' },
  { href: 'https://github.com/joshlbaker', icon: 'github' },
  { href: 'mailto:hellojoshbaker@gmail.com', icon: 'email' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="max-w-[700px] self-center">
        <NavBar />
        <Timeline />
      </div>
    </div>
  );
}
