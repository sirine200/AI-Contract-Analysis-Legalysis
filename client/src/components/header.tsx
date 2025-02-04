"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { UserButton } from "./shared/user-button";

const navItems: { name: string; href: string }[] = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky px-4 top-0 z-50 w-full border-b bg-white/70 backdrop-blur-md rounded-lg shadow-md">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <div className="mr-6 flex items-center space-x-2">
          <div className='flex items-center space-x-2'><a href='/'><img src="/images/contract-law.png" alt="logo" width={60} height='auto'/></a><a href='/'><h1 className="text-2xl font-bold text-black bg-gradient-to-r from-silver-400 via-silver-500 to-silver-600 bg-clip-text">Legalysis</h1></a></div>
          </div>
          <nav className="flex items-center space-x-7 text-base font-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <UserButton />
      </div>
    </header>
  );
}
