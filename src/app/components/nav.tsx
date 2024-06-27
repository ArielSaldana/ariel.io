"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = {
  "/": {
    name: "Home",
  },
  "/blog": {
    name: "Blog",
  },
};

export function Navbar() {
  const pathName = usePathname();
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 group">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathName === path;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-oj dark:hover:text-oj group-hover:text-neutral-200 dark:group-hover:text-neutral-700 flex align-middle relative py-2 px-3 hover:text-oj font-medium ${isActive ? "underline" : ""}`}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
