import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";

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

    const navStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "rgba(10, 22, 40, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s ease",
    };

    return (
        <nav style={navStyle}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                {/* Logo */}
                <div
                    style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}
                    onClick={() => handleNav("/")}
                >
                    <div style={{
                        width: 40, height: 40, borderRadius: 10,
                        background: "linear-gradient(135deg, var(--blue), var(--accent))",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "white", fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 18,
                    }}>
                        S
                    </div>
                    <div>
                        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 20, color: "white", lineHeight: 1.1 }}>
                            studnie<span style={{ color: COLORS.accent }}>.biz</span>
                        </div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600 }}>
                            studnie · głębinowe · pompy ciepła
                        </div>
                    </div>
                </div>

                {/* Desktop nav */}
                <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
                    {navItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => handleNav(item.path)}
                            style={{
                                background: location.pathname === item.path ? "rgba(0,180,216,0.15)" : "transparent",
                                border: "none",
                                color: location.pathname === item.path ? COLORS.accent : "rgba(255,255,255,0.75)",
                                padding: "8px 14px",
                                borderRadius: 6,
                                fontSize: 14,
                                fontWeight: 600,
                                fontFamily: "'Outfit', sans-serif",
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        className="btn-primary"
                        style={{ marginLeft: 12, padding: "10px 20px", fontSize: 13 }}
                        onClick={() => handleNav("/kontakt")}
                    >
                        {Icons.phone}
                        <span>602 333 745</span>
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{ display: "none", background: "none", border: "none", color: "white", cursor: "pointer" }}
                >
                    {mobileOpen ? Icons.close : Icons.menu}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div style={{
                    position: "absolute", top: "100%", left: 0, right: 0,
                    background: "rgba(10,22,40,0.98)", backdropFilter: "blur(20px)",
                    padding: 24, borderTop: "1px solid rgba(255,255,255,0.06)",
                    animation: "fadeIn 0.2s ease",
                }}>
                    {navItems.map((item) => (
                        <button
                            key={item.path}
                            onClick={() => handleNav(item.path)}
                            style={{
                                display: "block", width: "100%", textAlign: "left",
                                background: location.pathname === item.path ? "rgba(0,180,216,0.1)" : "transparent",
                                border: "none", color: location.pathname === item.path ? COLORS.accent : "rgba(255,255,255,0.8)",
                                padding: "14px 16px", borderRadius: 8, fontSize: 16, fontWeight: 600,
                                fontFamily: "'Outfit', sans-serif", cursor: "pointer", marginBottom: 4,
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
}
