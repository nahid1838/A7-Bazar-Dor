import Link from "next/link";
import NavLinksClient from "./NavLinksClient";

interface INavLinks {
    id: string;
    slug: string;
    nameBn: string;
    icon: string
}

async function getLinks(): Promise<INavLinks[]> {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
    const data = await res.json();
    return data;
}

const NavLinks = async () => {

    const navLinks = await getLinks();

    return (
        <div className="flex gap-5 border-t border-t-gray-300 py-2">
            <div className="container mx-auto">
                <NavLinksClient navLinks={navLinks}></NavLinksClient>
            </div>
        </div>
    );
};

export default NavLinks;