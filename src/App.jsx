import { useState, useEffect, useRef } from "react";

// ─── Configuration ───────────────────────────────────────────
const COLORS = {
    navy: "#0a1628",
    deepBlue: "#0d2847",
    blue: "#1a6fb5",
    lightBlue: "#3d9be9",
    accent: "#00b4d8",
    water: "#48cae4",
    white: "#ffffff",
    offWhite: "#f0f4f8",
    gray: "#6b7280",
    lightGray: "#e5e7eb",
    dark: "#111827",
};

const PAGES = ["home", "studnie", "pompy", "odwierty", "piezometry", "realizacje", "onas", "kontakt"];

// ─── Styles ──────────────────────────────────────────────────
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  :root {
    --navy: ${COLORS.navy};
    --deep-blue: ${COLORS.deepBlue};
    --blue: ${COLORS.blue};
    --light-blue: ${COLORS.lightBlue};
    --accent: ${COLORS.accent};
    --water: ${COLORS.water};
    --white: ${COLORS.white};
    --off-white: ${COLORS.offWhite};
    --gray: ${COLORS.gray};
    --light-gray: ${COLORS.lightGray};
    --dark: ${COLORS.dark};
  }

  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    color: var(--dark);
    background: var(--white);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
  }

  ::selection {
    background: var(--accent);
    color: var(--white);
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }

  @keyframes waterFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .animate-in {
    animation: fadeInUp 0.7s ease-out forwards;
  }

  .animate-delay-1 { animation-delay: 0.1s; opacity: 0; }
  .animate-delay-2 { animation-delay: 0.2s; opacity: 0; }
  .animate-delay-3 { animation-delay: 0.3s; opacity: 0; }
  .animate-delay-4 { animation-delay: 0.4s; opacity: 0; }
  .animate-delay-5 { animation-delay: 0.5s; opacity: 0; }

  .water-gradient {
    background: linear-gradient(135deg, var(--deep-blue), var(--blue), var(--accent));
    background-size: 200% 200%;
    animation: waterFlow 8s ease infinite;
  }

  .glass {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.12);
  }

  .card-hover {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .card-hover:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.12);
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--blue), var(--accent));
    color: white;
    border: none;
    padding: 14px 32px;
    border-radius: 8px;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(26,111,181,0.4);
  }

  .btn-outline {
    background: transparent;
    color: var(--white);
    border: 2px solid rgba(255,255,255,0.3);
    padding: 14px 32px;
    border-radius: 8px;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }
  .btn-outline:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.6);
  }

  .section-tag {
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 12px;
  }

  .section-title {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 800;
    line-height: 1.15;
    color: var(--navy);
    margin-bottom: 20px;
  }

  .section-subtitle {
    font-size: 18px;
    color: var(--gray);
    line-height: 1.7;
    max-width: 640px;
  }

  .noise-overlay {
    position: absolute;
    inset: 0;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  .img-placeholder {
    background: linear-gradient(135deg, #1a3a5c 0%, #0d2847 50%, #1a6fb5 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.5);
    font-family: 'Outfit', sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }
  .img-placeholder::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 25L55 30L35 35L30 55L25 35L5 30L25 25Z' fill='rgba(255,255,255,0.03)'/%3E%3C/svg%3E");
    background-size: 60px;
  }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: var(--navy); }
  ::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 4px;
  }
`;

// ─── Icons (inline SVGs) ────────────────────────────────────
const Icons = {
    water: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
        </svg>
    ),
    drill: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 22V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8"/>
            <path d="M18 14v8"/><path d="M22 18h-8"/>
        </svg>
    ),
    flame: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
        </svg>
    ),
    search: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
        </svg>
    ),
    gauge: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>
        </svg>
    ),
    shield: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="m9 12 2 2 4-4"/>
        </svg>
    ),
    award: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
    ),
    users: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    ),
    phone: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
    ),
    mail: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
    ),
    mapPin: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
        </svg>
    ),
    arrowRight: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
        </svg>
    ),
    check: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
        </svg>
    ),
    menu: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
    ),
    close: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
    ),
    globe: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
        </svg>
    ),
    camera: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>
        </svg>
    ),
    wrench: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
    ),
    home: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
    ),
    layers: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
        </svg>
    ),
};

// ─── Image Placeholder Component ─────────────────────────────
function ImgPlaceholder({ label, height = 300, style = {} }) {
    return (
        <div className="img-placeholder" style={{ height, borderRadius: 12, ...style }}>
            <span style={{ position: "relative", zIndex: 1 }}>{label}</span>
        </div>
    );
}

// ─── Animated Section (Intersection Observer) ────────────────
function AnimatedSection({ children, style = {}, className = "" }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.1 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                ...style,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
        >
            {children}
        </div>
    );
}

// ─── Stat Counter ────────────────────────────────────────────
function StatCounter({ value, suffix = "", label }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 2000;
                    const start = Date.now();
                    const tick = () => {
                        const elapsed = Date.now() - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * value));
                        if (progress < 1) requestAnimationFrame(tick);
                    };
                    tick();
                }
            },
            { threshold: 0.5 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [value]);

    return (
        <div ref={ref} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, color: COLORS.accent, lineHeight: 1 }}>
                {count}{suffix}
            </div>
            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginTop: 8, fontWeight: 500 }}>{label}</div>
        </div>
    );
}

// ─── Navigation ──────────────────────────────────────────────
function Navigation({ page, setPage }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const navItems = [
        { id: "home", label: "Start" },
        { id: "studnie", label: "Studnie" },
        { id: "pompy", label: "Pompy ciepła" },
        { id: "odwierty", label: "Odwierty" },
        { id: "piezometry", label: "Piezometry" },
        { id: "realizacje", label: "Realizacje" },
        { id: "onas", label: "O nas" },
        { id: "kontakt", label: "Kontakt" },
    ];

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
                    onClick={() => { setPage("home"); window.scrollTo(0, 0); }}
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
                            key={item.id}
                            onClick={() => { setPage(item.id); setMobileOpen(false); window.scrollTo(0, 0); }}
                            style={{
                                background: page === item.id ? "rgba(0,180,216,0.15)" : "transparent",
                                border: "none",
                                color: page === item.id ? COLORS.accent : "rgba(255,255,255,0.75)",
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
                        onClick={() => { setPage("kontakt"); window.scrollTo(0, 0); }}
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
                            key={item.id}
                            onClick={() => { setPage(item.id); setMobileOpen(false); window.scrollTo(0, 0); }}
                            style={{
                                display: "block", width: "100%", textAlign: "left",
                                background: page === item.id ? "rgba(0,180,216,0.1)" : "transparent",
                                border: "none", color: page === item.id ? COLORS.accent : "rgba(255,255,255,0.8)",
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

// ─── Footer ──────────────────────────────────────────────────
function Footer({ setPage }) {
    return (
        <footer style={{ background: COLORS.navy, color: "white", padding: "80px 24px 40px", position: "relative", overflow: "hidden" }}>
            <div className="noise-overlay" />
            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 48, marginBottom: 60 }}>
                    {/* Col 1 - Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                            <div style={{
                                width: 44, height: 44, borderRadius: 12,
                                background: "linear-gradient(135deg, var(--blue), var(--accent))",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 20, color: "white",
                            }}>S</div>
                            <div>
                                <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 22 }}>
                                    studnie<span style={{ color: COLORS.accent }}>.biz</span>
                                </div>
                            </div>
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: 14 }}>
                            Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o. — ponad 55 lat doświadczenia na rynku wiertniczym. Jedyna firma w Polsce z certyfikatem DVGW BAU.
                        </p>
                    </div>

                    {/* Col 2 - Usługi */}
                    <div>
                        <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 20 }}>Usługi</h4>
                        {[
                            { id: "studnie", label: "Studnie głębinowe" },
                            { id: "pompy", label: "Pompy ciepła" },
                            { id: "odwierty", label: "Odwierty poszukiwawcze" },
                            { id: "piezometry", label: "Piezometry" },
                        ].map((item) => (
                            <div
                                key={item.id}
                                onClick={() => { setPage(item.id); window.scrollTo(0, 0); }}
                                style={{ color: "rgba(255,255,255,0.6)", padding: "6px 0", cursor: "pointer", fontSize: 14, transition: "color 0.2s" }}
                                onMouseEnter={(e) => e.target.style.color = COLORS.accent}
                                onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.6)"}
                            >
                                {item.label}
                            </div>
                        ))}
                    </div>

                    {/* Col 3 - Kontakt */}
                    <div>
                        <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, marginBottom: 20 }}>Kontakt</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                                {Icons.mapPin} ul. Spacerowa 5, 25-026 Kielce
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                                {Icons.phone} 602 333 745 / 41 361 55 15
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                                {Icons.mail} studnie1@gmail.com
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
                                {Icons.globe} www.studnie.biz
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 30, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
                        © 2025 studnie.biz — Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o.
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
                        Kielce, Polska | Działamy na terenie całej Polski
                    </div>
                </div>
            </div>
        </footer>
    );
}

// ─── Service Card ────────────────────────────────────────────
function ServiceCard({ icon, title, description, onClick }) {
    return (
        <div
            className="card-hover"
            onClick={onClick}
            style={{
                background: "white",
                borderRadius: 16,
                padding: 32,
                cursor: "pointer",
                border: "1px solid rgba(0,0,0,0.06)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div style={{
                position: "absolute", top: -20, right: -20, width: 100, height: 100,
                background: "linear-gradient(135deg, rgba(0,180,216,0.06), transparent)",
                borderRadius: "50%",
            }} />
            <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: "linear-gradient(135deg, rgba(26,111,181,0.1), rgba(0,180,216,0.1))",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: COLORS.blue, marginBottom: 20,
            }}>
                {icon}
            </div>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 12, color: COLORS.navy }}>
                {title}
            </h3>
            <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: 15, marginBottom: 16 }}>
                {description}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: COLORS.blue, fontWeight: 600, fontSize: 14, fontFamily: "'Outfit', sans-serif" }}>
                Dowiedz się więcej {Icons.arrowRight}
            </div>
        </div>
    );
}

// ─── Feature Item ────────────────────────────────────────────
function FeatureItem({ icon, title, description }) {
    return (
        <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
            <div style={{
                flexShrink: 0, width: 48, height: 48, borderRadius: 12,
                background: "linear-gradient(135deg, rgba(26,111,181,0.1), rgba(0,180,216,0.1))",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: COLORS.blue,
            }}>
                {icon}
            </div>
            <div>
                <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 17, marginBottom: 6, color: COLORS.navy }}>{title}</h4>
                <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: 15 }}>{description}</p>
            </div>
        </div>
    );
}

// ─── Check List ──────────────────────────────────────────────
function CheckList({ items }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{
                        flexShrink: 0, width: 24, height: 24, borderRadius: 6,
                        background: "linear-gradient(135deg, rgba(0,180,216,0.15), rgba(26,111,181,0.15))",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: COLORS.blue, marginTop: 2,
                    }}>
                        {Icons.check}
                    </div>
                    <span style={{ color: COLORS.dark, lineHeight: 1.6, fontSize: 15 }}>{item}</span>
                </div>
            ))}
        </div>
    );
}

// ═══════════════════════════════════════════════════════════════
// PAGES
// ═══════════════════════════════════════════════════════════════

// ─── HOME PAGE ───────────────────────────────────────────────
function HomePage({ setPage }) {
    return (
        <div>
            {/* Hero */}
            <section style={{
                minHeight: "100vh",
                background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.deepBlue} 50%, #0f3460 100%)`,
                display: "flex", alignItems: "center", position: "relative", overflow: "hidden",
                padding: "120px 24px 80px",
            }}>
                <div className="noise-overlay" />
                {/* Decorative circles */}
                <div style={{ position: "absolute", top: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,111,181,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

                <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
                        <div>
                            <div className="animate-in animate-delay-1" style={{ marginBottom: 24 }}>
                <span style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(0,180,216,0.1)", border: "1px solid rgba(0,180,216,0.2)",
                    padding: "8px 16px", borderRadius: 50, color: COLORS.accent,
                    fontSize: 13, fontWeight: 600, fontFamily: "'Outfit', sans-serif",
                }}>
                  {Icons.shield} Od 1968 roku — ponad 35 000 odwiertów
                </span>
                            </div>

                            <h1 className="animate-in animate-delay-2" style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                                fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.08,
                                color: "white", marginBottom: 24,
                            }}>
                                Wiercenia <br/>
                                <span style={{ background: "linear-gradient(135deg, #3d9be9, #00b4d8, #48cae4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  studni głębinowych
                </span><br/>
                                i odwierty pod<br/>
                                pompy ciepła
                            </h1>

                            <p className="animate-in animate-delay-3" style={{
                                fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.8,
                                maxWidth: 500, marginBottom: 36,
                            }}>
                                Jedyna firma wiertnicza w Polsce z niemieckim certyfikatem DVGW BAU.
                                Kompleksowa obsługa — od projektu, przez wiercenie, po dokumentację.
                            </p>

                            <div className="animate-in animate-delay-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                                <button className="btn-primary" onClick={() => { setPage("kontakt"); window.scrollTo(0, 0); }}>
                                    Bezpłatna wycena {Icons.arrowRight}
                                </button>
                                <button className="btn-outline" onClick={() => { setPage("realizacje"); window.scrollTo(0, 0); }}>
                                    Nasze realizacje
                                </button>
                            </div>
                        </div>

                        <div className="animate-in animate-delay-5 hero-image-col">
                            <div style={{ position: "relative" }}>
                                <ImgPlaceholder label="Zdjęcie wiertnicy w terenie" height={480} style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)" }} />
                                {/* Floating stat card */}
                                <div className="glass" style={{
                                    position: "absolute", bottom: -20, left: -20,
                                    padding: "20px 24px", borderRadius: 16,
                                    animation: "float 4s ease-in-out infinite",
                                }}>
                                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 32, color: COLORS.accent }}>60+</div>
                                    <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500 }}>Lat doświadczenia</div>
                                </div>
                                <div className="glass" style={{
                                    position: "absolute", top: 20, right: -10,
                                    padding: "16px 20px", borderRadius: 14,
                                    animation: "float 5s ease-in-out infinite",
                                    animationDelay: "1s",
                                }}>
                                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 14, color: COLORS.accent }}>Certyfikat DVGW BAU</div>
                                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>W 120-1 & W 120-2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-image-col { display: none !important; }
          }
        `}</style>
            </section>

            {/* Stats bar */}
            <section className="water-gradient" style={{ padding: "60px 24px" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
                    <StatCounter value={35000} suffix="+" label="wykonanych otworów" />
                    <StatCounter value={60} suffix="+" label="lat doświadczenia" />
                    <StatCounter value={10} label="lat gwarancji na studnię" />
                    <StatCounter value={1968} label="rok założenia" />
                </div>
            </section>

            {/* Services */}
            <section style={{ padding: "100px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <AnimatedSection style={{ textAlign: "center", marginBottom: 60 }}>
                        <div className="section-tag">Nasze usługi</div>
                        <h2 className="section-title">Kompleksowe usługi wiertnicze</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            Od studni głębinowych po odwierty pod pompy ciepła — realizujemy projekty na terenie całej Polski.
                        </p>
                    </AnimatedSection>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.water}
                                title="Studnie głębinowe"
                                description="Wiercenie, budowa i renowacja studni. Metoda udarowa na sprężone powietrze dla maksymalnej wydajności. 10 lat gwarancji."
                                onClick={() => { setPage("studnie"); window.scrollTo(0, 0); }}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.flame}
                                title="Pompy ciepła"
                                description="Odwierty pod gruntowe wymienniki ciepła. Klasa energetyczna A+++. Współpraca z STIEBEL ELTRON."
                                onClick={() => { setPage("pompy"); window.scrollTo(0, 0); }}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.search}
                                title="Odwierty poszukiwawcze"
                                description="Małośrednicowe otwory określające wydajność ujęcia i skład wody. Minimalizacja ryzyka suchego odwiertu."
                                onClick={() => { setPage("odwierty"); window.scrollTo(0, 0); }}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.gauge}
                                title="Piezometry"
                                description="Otwory obserwacyjne do monitoringu wód podziemnych. Pobór próbek do analiz fizykochemicznych."
                                onClick={() => { setPage("piezometry"); window.scrollTo(0, 0); }}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.camera}
                                title="Kamerowanie studni"
                                description="Inspekcja TV stanu technicznego studni. Ocena filtra, zarurowania i elementów zatopionych w otworze."
                                onClick={() => { setPage("studnie"); window.scrollTo(0, 0); }}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.wrench}
                                title="Renowacja i likwidacja"
                                description="Renowacje mechaniczne i chemiczne. Usuwanie osadów żelazistych i manganowych. Likwidacja starych studni."
                                onClick={() => { setPage("studnie"); window.scrollTo(0, 0); }}
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section style={{ padding: "100px 24px", background: "white" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="why-us-grid">
                        <AnimatedSection>
                            <ImgPlaceholder label="Zespół wiertniczy przy wiertnicy" height={500} style={{ borderRadius: 20 }} />
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="section-tag">Dlaczego my?</div>
                            <h2 className="section-title">Ponad pół wieku doświadczenia w branży wiertniczej</h2>
                            <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 36 }}>
                                Zakład Usług Studziennych działa nieprzerwanie od 1968 roku.
                                Jako jedyna firma wiertnicza w Polsce posiadamy niemiecki certyfikat DVGW BAU.
                            </p>
                            <FeatureItem icon={Icons.layers} title="Kompleksowość" description="Od projektu geologicznego, przez wiercenie, po dokumentację powykonawczą. Darmowa wizja lokalna." />
                            <FeatureItem icon={Icons.award} title="Certyfikat DVGW BAU" description="Certyfikaty W 120-1 (geotermia) i W 120-2 (budowa studni). Jedyna taka firma w Polsce." />
                            <FeatureItem icon={Icons.users} title="Doświadczony zespół" description="Wykwalifikowani pracownicy z wieloletnim stażem. Współpraca z AGH i PORT PC." />
                        </AnimatedSection>
                    </div>
                </div>
                <style>{`
          @media (max-width: 768px) {
            .why-us-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
            </section>

            {/* CTA */}
            <section style={{
                padding: "100px 24px",
                background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.deepBlue})`,
                position: "relative", overflow: "hidden", textAlign: "center",
            }}>
                <div className="noise-overlay" />
                <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
                    <AnimatedSection>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", color: "white", marginBottom: 20, lineHeight: 1.2 }}>
                            Potrzebujesz studni lub odwiertu pod pompę ciepła?
                        </h2>
                        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 36 }}>
                            Skontaktuj się z nami — darmowe rozpoznanie warunków i wizja lokalna.
                            Działamy na terenie całej Polski.
                        </p>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <button className="btn-primary" style={{ fontSize: 16, padding: "16px 36px" }} onClick={() => { setPage("kontakt"); window.scrollTo(0, 0); }}>
                                {Icons.phone} Zadzwoń: 602 333 745
                            </button>
                            <button className="btn-outline" style={{ fontSize: 16, padding: "16px 36px" }} onClick={() => { setPage("kontakt"); window.scrollTo(0, 0); }}>
                                {Icons.mail} Napisz do nas
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}

// ─── STUDNIE PAGE ────────────────────────────────────────────
function StudniePage() {
    return (
        <div>
            <PageHero title="Studnie głębinowe" subtitle="Wiercenie, budowa, renowacja i likwidacja studni głębinowych. Metoda udarowa na sprężone powietrze dla maksymalnej wydajności." icon={Icons.water} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="content-grid">
                            <div>
                                <div className="section-tag">Budowa studni</div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Kompleksowa budowa studni głębinowych</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
                                    Woda jest jednym z tych dóbr, bez których życie jest zupełnie niemożliwe.
                                    Coraz chętniej decydujemy się na własną studnię, nawet jeśli istnieje możliwość przyłączenia z sieci wodociągowej.
                                    Jedyny koszt użytkowania to energia zasilająca pompę głębinową.
                                </p>
                                <CheckList items={[
                                    "Rozpoznanie hydrogeologiczne",
                                    "Opracowanie projektu robót geologicznych",
                                    "Wiercenie na sprężone powietrze lub udarowo-okrętnie",
                                    "Opracowanie dokumentacji hydrogeologicznej",
                                    "Opracowanie operatu wodnoprawnego",
                                    "Uzbrojenie i obudowa studni",
                                    "Pompowania oczyszczające i pomiarowe",
                                    "Analizy fizykochemiczne i bakteriologiczne wody",
                                ]} />
                            </div>
                            <div>
                                <ImgPlaceholder label="Wiercenie na sprężone powietrze" height={400} style={{ borderRadius: 16, marginBottom: 24 }} />
                                <div style={{ background: COLORS.offWhite, borderRadius: 16, padding: 28 }}>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: COLORS.navy, marginBottom: 12 }}>
                                        Wykonujemy studnie dla:
                                    </h4>
                                    <CheckList items={[
                                        "Klientów indywidualnych (gospodarstwa domowe)",
                                        "Jednostek samorządowych i wodociągów",
                                        "Rolnictwa i nawadniania obiektów sportowych",
                                        "Przemysłu (zakłady mleczarskie, rozlewnie wód)",
                                    ]} />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                <style>{`
          @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>

            {/* Kamerowanie i renowacja */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div className="section-tag">Serwis</div>
                        <h2 className="section-title" style={{ fontSize: 32 }}>Kamerowanie, renowacja i likwidacja studni</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginTop: 40 }} className="content-grid">
                            <div>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                                    W studniach głębinowych podczas eksploatacji zachodzi wiele procesów fizykochemicznych wpływających na zmianę przepustowości filtra. Oferujemy inspekcję kamerą TV jako podstawową formę oceny stanu technicznego studni.
                                </p>
                                <FeatureItem icon={Icons.camera} title="Inspekcja TV" description="Kamerowanie to podstawowa forma oceny stanu technicznego studni — jej konstrukcji, zarurowania i zatopionych elementów." />
                                <FeatureItem icon={Icons.wrench} title="Renowacja" description="Metody mechaniczne (szczotkowanie, tłokowanie, airlift) oraz chemiczne — usuwanie osadów żelazistych, manganowych i węglanowych." />
                                <FeatureItem icon={Icons.layers} title="Likwidacja" description="Profesjonalna likwidacja studni, które nie nadają się już do renowacji. Pełna dokumentacja." />
                            </div>
                            <div>
                                <ImgPlaceholder label="Inspekcja TV studni" height={300} style={{ borderRadius: 16, marginBottom: 16 }} />
                                <ImgPlaceholder label="Prace renowacyjne" height={200} style={{ borderRadius: 16 }} />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Gwarancja */}
            <section style={{ padding: "60px 24px", background: "linear-gradient(135deg, #0d2847, #1a6fb5)" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", color: "white" }}>
                    <AnimatedSection>
                        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 5vw, 56px)", marginBottom: 12 }}>
                            10 lat gwarancji
                        </div>
                        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)" }}>
                            Na wykonaną studnię głębinową. Stosowane materiały posiadają atest higieniczny do kontaktu z wodą pitną.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}

// ─── POMPY PAGE ──────────────────────────────────────────────
function PompyPage() {
    return (
        <div>
            <PageHero title="Pompy ciepła" subtitle="Odwierty pod gruntowe wymienniki ciepła. Bezkonkurencyjna efektywność, niezawodność i komfort ogrzewania. Klasa energetyczna A+++." icon={Icons.flame} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="content-grid">
                            <div>
                                <div className="section-tag">Dlaczego gruntowa pompa ciepła?</div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Najwyższa efektywność energetyczna</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
                                    W porównaniu z powietrznymi, gruntowe pompy ciepła osiągają lepsze współczynniki efektywności. Temperatura gruntu jest stabilna i w zimie osiąga wyższe wartości niż powietrza. Żywotność pomp ciepła szacowana jest na 30 lat.
                                </p>
                                <FeatureItem icon={Icons.shield} title="Bezkonkurencyjność" description="Najwyższa klasa energetyczna A+++. Dofinansowanie z funduszy unijnych. Stabilna temperatura gruntu." />
                                <FeatureItem icon={Icons.award} title="Niezawodność" description="Pompa ciepła jest sercem instalacji. Żywotność 30 lat. Brak niebezpieczeństwa wybuchu." />
                                <FeatureItem icon={Icons.home} title="Komfort" description="Bezobsługowe użytkowanie. Brak hałasu, brak jednostki zewnętrznej, brak specjalnego pomieszczenia." />
                            </div>
                            <div>
                                <ImgPlaceholder label="Schemat gruntowej pompy ciepła" height={400} style={{ borderRadius: 16, marginBottom: 24 }} />
                                <div style={{ background: COLORS.offWhite, borderRadius: 16, padding: 28 }}>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: COLORS.navy, marginBottom: 12 }}>Wymogi prawne (powyżej 30m):</h4>
                                    <CheckList items={[
                                        "Projekt robót geologicznych",
                                        "Zgłoszenie do administracji geologicznej",
                                        "Plan ruchu zakładu (powyżej 100m)",
                                        "Pomiar termiczny otworów",
                                        "Dokumentacja powykonawcza",
                                    ]} />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                <style>{`
          @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>

            {/* Realizacje pomp */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div className="section-tag">Realizacje</div>
                        <h2 className="section-title" style={{ fontSize: 32 }}>Wybrane realizacje odwiertów</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 32 }}>
                            {[
                                { loc: "Chęciny", desc: "76 otworów × 120m — Europejskie Centrum Edukacji Geologicznej", km: "9,1 km" },
                                { loc: "Zagnańsk", desc: "49 otworów × 100m — Zespół Szkoły Podstawowej i Hala", km: "4,9 km" },
                                { loc: "Sobów", desc: "37 otworów × 200m — Dom Pomocy Społecznej", km: "6,5 km" },
                                { loc: "Piekoszów", desc: "50 otworów × 100m — Hala produkcyjna WW TECH", km: "5,0 km" },
                                { loc: "Zamość", desc: "44 otwory × 100m — Zespół Szkół Ponadgimnazjalnych nr 4", km: "4,4 km" },
                                { loc: "Mariówka", desc: "48 otworów × 100m — Dom Generalny Zgromadzenia Sióstr", km: "4,8 km" },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: "white", borderRadius: 14, padding: 24,
                                    border: "1px solid rgba(0,0,0,0.06)",
                                }}>
                                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 18, color: COLORS.navy, marginBottom: 8 }}>{item.loc}</div>
                                    <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</p>
                                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: COLORS.accent, fontSize: 15 }}>{item.km} łącznie</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Współpraca */}
            <section style={{ padding: "60px 24px", background: "white" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
                    <AnimatedSection>
                        <p style={{ color: COLORS.gray, fontSize: 16, lineHeight: 1.8 }}>
                            Jesteśmy członkiem <strong style={{ color: COLORS.navy }}>PORT PC</strong> — Polskiej Organizacji Rozwoju Pomp Ciepła.
                            Współpracujemy z producentem gruntowych pomp ciepła <strong style={{ color: COLORS.navy }}>STIEBEL ELTRON</strong>.
                            Wykonujemy testy TRT we współpracy z <strong style={{ color: COLORS.navy }}>AGH</strong>.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}

// ─── ODWIERTY PAGE ───────────────────────────────────────────
function OdwiertyPage() {
    return (
        <div>
            <PageHero title="Odwierty poszukiwawcze" subtitle="Małośrednicowe otwory poszukiwawcze pozwalające określić wydajność ujęcia i skład fizykochemiczny wody — minimalizacja ryzyka." icon={Icons.search} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="content-grid">
                            <div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Minimalizacja ryzyka „suchego odwiertu"</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                                    W ostatnich latach częstotliwość występowania suszy rośnie wraz z postępującymi zmianami klimatycznymi. Odwierty poszukiwawcze pozwalają określić wydajność przyszłego ujęcia oraz skład fizykochemiczny wody przed wykonaniem właściwej studni.
                                </p>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
                                    W przypadku negatywnego otworu (braku wody) otwór podlega likwidacji. Wykonujemy odwierty poszukiwawcze również dla jednostek samorządu terytorialnego borykających się z brakiem wody.
                                </p>
                                <CheckList items={[
                                    "Małośrednicowe otwory poszukiwawcze",
                                    "Określenie wydajności przyszłego ujęcia",
                                    "Analiza składu fizykochemicznego wody",
                                    "Likwidacja w przypadku braku wody",
                                    "Usługi dla samorządów i klientów indywidualnych",
                                ]} />
                            </div>
                            <div>
                                <ImgPlaceholder label="Wiercenie otworu poszukiwawczego na sprężone powietrze" height={500} style={{ borderRadius: 16 }} />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                <style>{`
          @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>
        </div>
    );
}

// ─── PIEZOMETRY PAGE ─────────────────────────────────────────
function PiezometryPage() {
    return (
        <div>
            <PageHero title="Piezometry obserwacyjne" subtitle="Otwory hydrogeologiczne badawcze służące do monitoringu wód podziemnych — pomiar poziomu zwierciadła wody i analiza zanieczyszczeń." icon={Icons.gauge} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="content-grid">
                            <div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Monitoring wód podziemnych</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                                    Piezometr to małośrednicowy otwór hydrogeologiczny służący do pomiaru głębokości zwierciadła wody oraz zanieczyszczeń wód podziemnych. W odróżnieniu od studni, nie zabudowuje się w nich pomp — służą jedynie do okresowego pobierania próbek wody.
                                </p>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
                                    Wszelkie obiekty, których funkcjonowanie może powodować zanieczyszczenie wód podziemnych, powinny wyposażyć swój teren w punkty obserwacyjne. Piezometry stanowią uzupełnienie systemu monitoringu służącego kontroli odwodnienia i zasięgu leja depresji.
                                </p>
                                <CheckList items={[
                                    "Pomiar poziomu zwierciadła wody",
                                    "Pobieranie próbek do analiz fizykochemicznych",
                                    "Kontrola odwodnienia górotworu",
                                    "Monitorowanie zasięgu leja depresji",
                                    "Opracowanie projektu robót geologicznych",
                                    "Dokumentacja geologiczna",
                                ]} />
                            </div>
                            <div>
                                <ImgPlaceholder label="Pobór próbek z piezometru" height={400} style={{ borderRadius: 16, marginBottom: 24 }} />
                                <div style={{ background: COLORS.offWhite, borderRadius: 16, padding: 28 }}>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: COLORS.navy, marginBottom: 12 }}>Kto potrzebuje piezometrów?</h4>
                                    <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: 15 }}>
                                        Zakłady przemysłowe, składowiska odpadów, kopalnie, stacje paliw i inne obiekty mogące wpływać na stan wód podziemnych.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                <style>{`
          @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>
        </div>
    );
}

// ─── REALIZACJE PAGE ─────────────────────────────────────────
function RealizacjePage() {
    const locations = [
        "Kluczbork", "Przykory", "Iwaniska", "Niemodlin", "Serock", "Prostki",
        "Racławice Śl.", "Pawłów", "Olesno", "Herby", "Skierniewice", "Pawłowiczki",
        "Głogów", "Czyżew", "Chocianowice", "Adamów", "Biechów", "Lubaczów",
        "Łyszkowice", "Zabierzów", "Bierawa", "Myszków", "Damnica", "Albertów",
        "Gałkowice Ocin", "Łukaszowice", "Dziurków", "Opole", "Zwonowice", "Sarnaki",
    ];

    return (
        <div>
            <PageHero title="Nasze realizacje" subtitle="Ponad 35 000 wykonanych otworów na terenie całej Polski. Od studni dla domów jednorodzinnych po wielkie projekty publiczne." icon={Icons.award} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div className="section-tag">Mapa realizacji</div>
                        <h2 className="section-title" style={{ fontSize: 32 }}>Działamy na terenie całej Polski</h2>
                        <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 40 }}>
                            Nasze realizacje obejmują setki lokalizacji — od małych studni przy domach jednorodzinnych po dziesiątki otworów dla obiektów publicznych i przemysłowych.
                        </p>

                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                            gap: 12,
                        }}>
                            {locations.map((loc, i) => (
                                <div key={i} style={{
                                    background: COLORS.offWhite, borderRadius: 10, padding: "14px 16px",
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14,
                                    color: COLORS.navy, textAlign: "center",
                                    border: "1px solid rgba(0,0,0,0.04)",
                                }}>
                                    {loc}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Zaufali nam */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
                    <AnimatedSection>
                        <div className="section-tag">Zaufali nam</div>
                        <h2 className="section-title" style={{ fontSize: 32 }}>Referencje klientów</h2>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, marginTop: 32 }}>
                            {["Zbyszko", "Życkowiacz", "Jamar", "Sokpol", "Hortex", "INDUSTRIA", "Andrzej Stępień LASPOL MAX"].map((name, i) => (
                                <div key={i} style={{
                                    background: "white", borderRadius: 12, padding: "20px 28px",
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16,
                                    color: COLORS.navy, border: "1px solid rgba(0,0,0,0.06)",
                                }}>
                                    {name}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}

// ─── O NAS PAGE ──────────────────────────────────────────────
function ONasPage() {
    return (
        <div>
            <PageHero title="O nas" subtitle="Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o. — ponad 55 lat tradycji wiertniczej, nowoczesne technologie i niemiecki certyfikat DVGW BAU." icon={Icons.users} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="content-grid">
                            <div>
                                <div className="section-tag">Nasza historia</div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Od 1968 roku nieprzerwanie</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                                    Zakład Usług Studziennych to firma, w której właściciel wykonuje roboty wiertnicze nieprzerwanie od 1968 roku. Odwierty wykonujemy w różnych technologiach w zależności od warunków geologicznych.
                                </p>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                                    Dysponujemy wiedzą i urządzeniami pozwalającymi pracować w każdych warunkach. Wdrażamy nowoczesne technologie oraz wykorzystujemy materiały chroniące środowisko.
                                </p>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
                                    Swoją działalność opieramy na wykwalifikowanych pracownikach, z którymi współpracujemy nawet od kilkunastu lat. Doskonały personel stanowi fundament naszej firmy i gwarancję dobrze wykonanej pracy.
                                </p>
                            </div>
                            <div>
                                <ImgPlaceholder label="Bernard i Marian Wójcik" height={400} style={{ borderRadius: 16, marginBottom: 24 }} />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                <style>{`
          @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>

            {/* Certyfikat */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="content-grid">
                            <div>
                                <ImgPlaceholder label="Certyfikat DVGW BAU W 120-1 / W 120-2" height={350} style={{ borderRadius: 16 }} />
                            </div>
                            <div>
                                <div className="section-tag">Certyfikat</div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Jedyna firma w Polsce z certyfikatem DVGW BAU</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                                    Jako jedyna i pierwsza firma wiertnicza w Polsce posiadamy niemiecki certyfikat BAU.
                                    Certyfikaty W 120-1 (Brunnenbau — budowa studni) i W 120-2 (Geothermie — geotermia) otrzymują wyłącznie firmy spełniające rygorystyczne wymogi formalne, personalne i rzeczowe.
                                </p>
                                <CheckList items={[
                                    "W 120-1 — budowa, regeneracja, renowacja i likwidacja studni",
                                    "W 120-2 — technika wiercenia płytkiej energii geotermalnej",
                                    "Liczne referencje z wykonanych prac",
                                    "Specjalistyczny nadzór i kierownictwo",
                                    "Regularne szkolenia wiertaczy",
                                ]} />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Członkostwa */}
            <section style={{ padding: "60px 24px", background: "white" }}>
                <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                    <AnimatedSection>
                        <div className="section-tag">Członkostwa i współpraca</div>
                        <h2 className="section-title" style={{ fontSize: 28 }}>Współpracujemy z najlepszymi</h2>
                        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", marginTop: 32 }}>
                            {["PORT PC", "STIEBEL ELTRON", "AGH Kraków"].map((name, i) => (
                                <div key={i} style={{
                                    background: COLORS.offWhite, borderRadius: 14, padding: "24px 36px",
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: COLORS.navy,
                                }}>
                                    {name}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Materiały */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div className="section-tag">Jakość</div>
                        <h2 className="section-title" style={{ fontSize: 28 }}>Stosowane materiały</h2>
                        <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                            Na każdym etapie świadczonych usług wykorzystujemy wyłącznie produkty najwyższej jakości renomowanych producentów.
                            Gotowe sondy gruntowe i studnie rozdzielaczowe posiadają Krajowe Deklaracje Właściwości Użytkowych.
                            Rury PCV do studni posiadają aktualny atest higieniczny do kontaktu z wodą pitną.
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                            {["Rury studzienne PCV", "Rury osłonowe", "Sondy gruntowe PE", "Obsypka żwirowa"].map((item, i) => (
                                <div key={i} style={{
                                    background: "white", borderRadius: 12, padding: 20, textAlign: "center",
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15,
                                    color: COLORS.navy, border: "1px solid rgba(0,0,0,0.06)",
                                }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}

// ─── KONTAKT PAGE ────────────────────────────────────────────
function KontaktPage() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", service: "" });

    return (
        <div>
            <PageHero title="Kontakt" subtitle="Skontaktuj się z nami — darmowe rozpoznanie warunków i wizja lokalna. Dział techniczny zawsze do Twojej dyspozycji." icon={Icons.phone} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="content-grid">
                        {/* Info */}
                        <AnimatedSection>
                            <div className="section-tag">Dane kontaktowe</div>
                            <h2 className="section-title" style={{ fontSize: 28 }}>Zakład Usług Studziennych</h2>
                            <p style={{ color: COLORS.gray, fontSize: 16, marginBottom: 32 }}>
                                Bernard Marian Wójcik Sp. z o.o.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                                {[
                                    { icon: Icons.mapPin, label: "Adres", value: "ul. Spacerowa 5, 25-026 Kielce" },
                                    { icon: Icons.phone, label: "Telefon", value: "602 333 745 / 602 333 992" },
                                    { icon: Icons.phone, label: "Telefon stacjonarny", value: "(41) 361 55 15" },
                                    { icon: Icons.mail, label: "Email", value: "studnie1@gmail.com" },
                                    { icon: Icons.globe, label: "Strona www", value: "www.studnie.biz" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                                        <div style={{
                                            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                                            background: "linear-gradient(135deg, rgba(26,111,181,0.1), rgba(0,180,216,0.1))",
                                            display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.blue,
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: COLORS.gray, marginBottom: 4 }}>{item.label}</div>
                                            <div style={{ fontWeight: 600, fontSize: 16, color: COLORS.navy }}>{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Form */}
                        <AnimatedSection>
                            <div style={{
                                background: COLORS.offWhite, borderRadius: 20, padding: 36,
                                border: "1px solid rgba(0,0,0,0.06)",
                            }}>
                                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 22, marginBottom: 24, color: COLORS.navy }}>
                                    Wyślij zapytanie
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        style={inputStyle}
                                    >
                                        <option value="">Wybierz usługę...</option>
                                        <option value="studnia">Studnia głębinowa</option>
                                        <option value="pompa">Pompa ciepła / odwierty</option>
                                        <option value="piezometr">Piezometr</option>
                                        <option value="renowacja">Renowacja studni</option>
                                        <option value="inne">Inne</option>
                                    </select>
                                    <input
                                        type="text" placeholder="Imię i nazwisko"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={inputStyle}
                                    />
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                        <input
                                            type="email" placeholder="Email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            style={inputStyle}
                                        />
                                        <input
                                            type="tel" placeholder="Telefon"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            style={inputStyle}
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Opisz swoje potrzeby..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        style={{ ...inputStyle, resize: "vertical" }}
                                    />
                                    <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px 32px" }}>
                                        Wyślij zapytanie {Icons.arrowRight}
                                    </button>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
                <style>{`
          @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>
        </div>
    );
}

const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,0.1)",
    fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    background: "white",
    outline: "none",
    transition: "border-color 0.2s",
};

// ─── Page Hero (shared) ──────────────────────────────────────
function PageHero({ title, subtitle, icon }) {
    return (
        <section style={{
            padding: "160px 24px 80px",
            background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.deepBlue} 100%)`,
            position: "relative", overflow: "hidden",
        }}>
            <div className="noise-overlay" />
            <div style={{ position: "absolute", top: "20%", right: "10%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,180,216,0.08), transparent 70%)", pointerEvents: "none" }} />
            <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1 }}>
                <div style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center",
                    width: 56, height: 56, borderRadius: 16,
                    background: "rgba(0,180,216,0.15)", color: COLORS.accent, marginBottom: 24,
                }}>
                    {icon}
                </div>
                <h1 style={{
                    fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                    fontSize: "clamp(32px, 5vw, 52px)", color: "white", lineHeight: 1.1, marginBottom: 20,
                }}>
                    {title}
                </h1>
                <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: 600 }}>
                    {subtitle}
                </p>
            </div>
        </section>
    );
}

// ═══════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════
export default function App() {
    const [page, setPage] = useState("home");

    const renderPage = () => {
        switch (page) {
            case "home": return <HomePage setPage={setPage} />;
            case "studnie": return <StudniePage />;
            case "pompy": return <PompyPage />;
            case "odwierty": return <OdwiertyPage />;
            case "piezometry": return <PiezometryPage />;
            case "realizacje": return <RealizacjePage />;
            case "onas": return <ONasPage />;
            case "kontakt": return <KontaktPage />;
            default: return <HomePage setPage={setPage} />;
        }
    };

    return (
        <div>
            <style>{globalStyles}</style>
            <Navigation page={page} setPage={setPage} />
            <main>{renderPage()}</main>
            <Footer setPage={setPage} />
        </div>
    );
}