import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";

export function CheckList({ items }) {
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
