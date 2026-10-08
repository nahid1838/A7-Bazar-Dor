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
        <div className="flex gap-5 border-t border-t-gray-300 border-b border-b-gray-300 py-2">
            {
                navLinks.map(navLink => 
                <div className="flex gap-1" key={navLink.id}>
                    <span>{navLink.icon}</span>
                    <p>{navLink.nameBn}</p>
                </div>
                )
            }
        </div>
    );
};

export default NavLinks;