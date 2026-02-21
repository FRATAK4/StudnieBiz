import { COLORS } from "../data/content.js";

export function PageHero({ title, subtitle, icon }) {
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
