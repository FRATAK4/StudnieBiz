import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icons from "../icons/Icons.jsx";
import { company } from "../data/content.js";

const navItems = [
    { path: "/", label: "Start" },
    { path: "/studnie", label: "Studnie" },
    { path: "/pompy-ciepla", label: "Pompy ciepła" },
    { path: "/odwierty", label: "Odwierty" },
    { path: "/piezometry", label: "Piezometry" },
    { path: "/realizacje", label: "Realizacje" },
    { path: "/o-nas", label: "O nas" },
    { path: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const handleNav = (path) => {
        navigate(path);
        setMobileOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${scrolled ? "py-3 bg-navy/95 backdrop-blur-xl border-b border-white/6" : "py-5 bg-transparent"}`}>
            <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="cursor-pointer flex items-center gap-2.5"
                    onClick={() => handleNav("/")}
                >
                    <div className="w-10 h-10 rounded-[10px] bg-gradient-to-br from-blue to-accent flex items-center justify-center text-white font-heading font-black text-lg">
                        S
                    </div>
                    <div>
                        <div className="font-heading font-extrabold text-xl text-white leading-tight">
                            studnie<span className="text-accent">.biz</span>
                        </div>
                        <div className="text-[10px] text-white/50 tracking-[1.5px] uppercase font-semibold">
                            studnie głębinowe · pompy ciepła
                        </div>
                    </div>
                </div>

                {/* Desktop nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => handleNav(item.path)}
                            className={`border-none px-3.5 py-2 rounded-md text-sm font-semibold font-heading cursor-pointer transition-all duration-200 whitespace-nowrap ${
                                location.pathname === item.path
                                    ? "bg-accent/15 text-accent"
                                    : "bg-transparent text-white/75 hover:text-white"
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        className="btn-primary ml-3 !py-2.5 !px-5 !text-[13px]"
                        onClick={() => handleNav("/kontakt")}
                    >
                        {Icons.phone}
                        <span>{company.phone.mobile1}</span>
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="lg:hidden bg-transparent border-none text-white cursor-pointer"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? Icons.close : Icons.menu}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="absolute top-full left-0 right-0 bg-navy/98 backdrop-blur-xl p-6 border-t border-white/6 animate-fade-in">
                    {navItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => handleNav(item.path)}
                            className={`block w-full text-left border-none py-3.5 px-4 rounded-lg text-base font-semibold font-heading cursor-pointer mb-1 ${
                                location.pathname === item.path
                                    ? "bg-accent/10 text-accent"
                                    : "bg-transparent text-white/80"
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
