import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import  {ActiveLink}  from "@/components";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];
export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((navItem, index) => (
        <ActiveLink key={index} {...navItem}/>
      ))}
    </nav>
  );
};
