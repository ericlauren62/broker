"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const nav_links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Business", href: "/business" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();
  return (
    <nav className="bg-[#0F1313] py-7">
      <div className="container flex justify-between items-center">
        <div className="w-[30%]">
          <Image
            src="/images/ITFG-LOGO.png"
            alt="logo"
            height={150}
            width={200}
          />
        </div>
        <ul className="flex gap-x-6 justify-between items-center mt-4 w-[35%]">
          {nav_links.map((link) => {
            return (
              <li
                key={link.name}
                className={clsx(
                  "text-xl font-trumpGothic uppercase tracking-wider text-white hover:text-primary",
                  { "text-primary": pathname === link.href }
                )}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className="w-[30%] flex items-center gap-x-8 mt-4 justify-end">
          <Link
            href="/signin"
            className="h-10 px-4 flex items-center justify-center bg-gray-200 rounded-[40px] font-trumpGothic uppercase tracking-widest font-bold"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="bg-primary h-10 px-5 flex items-center justify-center text-white rounded-[40px] font-trumpGothic uppercase tracking-widest font-bold"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
