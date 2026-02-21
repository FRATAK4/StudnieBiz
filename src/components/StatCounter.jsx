import { useState, useEffect, useRef } from "react";
import { COLORS } from "../data/content.js";

export function StatCounter({ value, suffix = "", label }) {
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
