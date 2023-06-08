"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Users", href: "/users" },
];

// By default all components in Next.js are server components

export default function Example() {
  const st = useState(false);
  return (
    <nav className="flex items-center bg-custom-blue h-[70px] text-white justify-between">
      <Link href={"/"} className="ml-5">
        <Image src="/next.svg" width={100} height={20} alt="Next Js Logo" />
      </Link>
      <ul className="flex">
        {navItems.map((item) => (
          <li key={item.name} className="mr-5">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
