"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const items = [
  { title: "Project", href: "/project/" },
  { title: "Team", href: "/team/" },
  { title: "News", href: "/news/" },
  { title: "Contact", href: "/contact/" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container");
    if (!container) return;

    const handleScroll = () => {
      setScrolled(container.scrollTop > 80);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="border-primary-700/25 sticky top-0 z-10 h-14 flex-none border-b transition-all duration-300"
      style={{
        backgroundColor: "rgba(235, 235, 235, 0.85)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="mx-auto flex h-full w-full max-w-5xl items-center justify-between px-4 md:px-6 lg:px-8">
        <div
          className={`hidden md:block transition-all duration-300 overflow-hidden ${
            scrolled ? "w-auto opacity-100" : "w-0 opacity-0"
          }`}
        >
          <Link href="/">
            <Image
              width={614}
              height={212}
              src="/images/home/CleverFuel.png"
              alt="CLEVER FUEL Lab"
              className="h-7 w-auto"
            />
          </Link>
        </div>
        <nav className={`h-full ${scrolled ? "ml-auto" : "w-full"}`}>
          <ul className="flex h-full items-center justify-start gap-0">
            {items.map(({ title, href }, i) => {
              const isActive = pathname === href || pathname === href.slice(0, -1);
              return (
                <li key={i} className={`h-full ${scrolled ? "w-24" : "w-full"}`}>
                  <Link href={href}>
                    <div className={`hover:border-accent-500/25 flex h-full w-full items-center justify-center border-b-4 transition-colors ${isActive ? "border-accent-500" : "border-transparent"}`}>
                      {title}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
