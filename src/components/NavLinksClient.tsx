
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavLinks {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinksClient = ({
  navLinks,
}: {
  navLinks: INavLinks[];
}) => {
  const pathname = usePathname();

  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-full items-center gap-2 overflow-x-auto py-2 sm:gap-3 lg:gap-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {navLinks.map((navLink) => {
          const isActive =
            pathname === `/category/${navLink.slug}`;

          return (
            <Link
              href={`/category/${navLink.slug}`}
              key={navLink.id}
              className={`flex shrink-0 items-center justify-center gap-1.5 rounded-2xl px-3 py-1 text-sm font-medium transition-all duration-200 sm:gap-2 sm:px-4 sm:py-2 sm:text-base ${
                isActive
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-base-200 text-base-content hover:bg-green-100 hover:text-green-700"
              }`}
            >
              <span className="text-base sm:text-lg">
                {navLink.icon}
              </span>

              <span className="whitespace-nowrap">
                {navLink.nameBn}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavLinksClient;
