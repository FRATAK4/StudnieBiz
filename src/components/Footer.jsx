import { useNavigate } from "react-router-dom";
import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";

export function Footer() {
    const navigate = useNavigate();

    const handleNav = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

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
                            { path: "/studnie", label: "Studnie głębinowe" },
                            { path: "/pompy-ciepla", label: "Pompy ciepła" },
                            { path: "/odwierty", label: "Odwierty poszukiwawcze" },
                            { path: "/piezometry", label: "Piezometry" },
                        ].map((item) => (
                            <div
                                key={item.path}
                                onClick={() => handleNav(item.path)}
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
