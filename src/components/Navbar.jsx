import { useState, useEffect } from "react";

const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
]

function Navbar() {
    const [active, setActive] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 120;
            const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
            let current = "Home";

            links.forEach(link => {
                const section = document.querySelector(link.href);
                if (section) {
                    const { offsetTop, offsetHeight } = section;
                    if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                        current = link.name;
                    }
                }
            });

            if (bottom) current = "Contact";

            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">Veena Venugopal | Software Engineer</h1>
                <div className="flex gap-6">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className={`font-medium transition-colors ${active === link.name
                                ? "text-blue-600"
                                : "text-gray-600 hover:text-blue-600"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;