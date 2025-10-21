import Submenu from "./Submenu"

const navbarLinks = [
    {
        name: "Landings",
        url: "#",
        hasSubmenu: true,
        submenu: [
            { name: "Template Intro Page", url: "#" },
            { name: "Mobile App Showcase", url: "#" },
            { name: "Product Landing", url: "#" },
            { name: "SaaS v.1", url: "#" },
            { name: "SaaS v.2", url: "#" },
            { name: "SaaS v.3", url: "#" },
            { name: "SaaS v.4", url: "#" },
            { name: "Shop Homepage v.1", url: "#" },
            { name: "Shop Homepage v.2", url: "#" },
            { name: "Marketing Agency", url: "#" },
            { name: "Creative Agency", url: "#" },
            { name: "Conference (Event)", url: "#" },
            { name: "Web Studio", url: "#" },
            { name: "Corporate", url: "#" },
            { name: "Insurance Company", url: "#" },
            { name: "Business Consulting", url: "#" },
            { name: "Coworking space", url: "#" },
            { name: "Yoga Studio", url: "#" },
            { name: "Influencer", url: "#" },
            { name: "Blog Homepage", url: "#" },
        ]
    },
    {
        name: "Pages",
        url: "#",
        hasSubmenu: true,
        submenu: [
            { name: "Portfolio", url: "#" },
            { name: "Shop", url: "#" },
            { name: "Blog", url: "#" },
            { name: "About", url: "#" },
            { name: "Services", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "Contacts", url: "#" },
            { name: "Specialty Pages", url: "#" },
        ]
    },
    {
        name: "Account",
        url: "#",
        hasSubmenu: true,
        submenu: [
            { name: "Auth Pages", url: "#" },
            { name: "Overview", url: "#" },
            { name: "Settings", url: "#" },
            { name: "Billing", url: "#" },
            { name: "Orders", url: "#" },
            { name: "Earnings", url: "#" },
            { name: "Chat (Messages)", url: "#" },
            { name: "Favourites (Wishlist)", url: "#" },
        ]
    },
    {
        name: "Contact",
        url: "#",
        hasSubmenu: false
    },
]

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-nav flex">
                {
                    navbarLinks.map(item => {
                        return <li key={item.name} className="nav-item text-grey">
                            <a href={item.url} className="navlink">
                                {item.name}
                                {item.hasSubmenu && <i className="ri-arrow-down-s-line"></i>}
                            </a>
                            {
                                item.hasSubmenu && <Submenu items={item.submenu} />
                            }
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar