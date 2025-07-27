import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
]

function Navbar() {
    const [active, setActive] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

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

                {/* Desktop Links */}
                <div className="hidden md:flex gap-6 relative">
                    {links.map((link, index) => (
                        <div key={link.name} className="relative px-2 py-1">

                            {active === link.name && (
                                <motion.div
                                    layoutId="highlight"

                                    className="absolute inset-0 rounded-md bg-blue-100"
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                />
                            )}
                            <a
                                href={link.href}
                                className=" relative z-10 px-2 py-1 font-medium text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                < button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col bg-white shadow-md px-4 py-4 space-y-4">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`font-medium ${active === link.name
                                ? "text-blue-600"
                                : "text-gray-600 hover:text-blue-600"

                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;