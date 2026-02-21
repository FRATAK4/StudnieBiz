import { COLORS } from "../data/content.js";

export function FeatureItem({ icon, title, description }) {
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
