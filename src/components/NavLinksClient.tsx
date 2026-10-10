
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
    <div className="flex gap-2 overflow-x-auto py-3">
      {navLinks.map((navLink) => {
        const isActive =
          pathname === `/category/${navLink.slug}`;

        return (
          <Link
            href={`/category/${navLink.slug}`}
            key={navLink.id}
            className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-green-600 text-white shadow-md"
                : "bg-base-200 text-base-content hover:bg-green-100 hover:text-green-700"
            }`}
          >
            <span>{navLink.icon}</span>
            <span>{navLink.nameBn}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinksClient;
