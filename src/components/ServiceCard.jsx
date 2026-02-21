import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";

export function ServiceCard({ icon, title, description, onClick }) {
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
