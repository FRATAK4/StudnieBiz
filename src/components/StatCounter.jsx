import { useState, useEffect, useRef } from "react";

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
        <div ref={ref} className="text-center">
            <div className="font-heading text-[clamp(36px,5vw,56px)] font-black text-accent leading-none">
                {count}{suffix}
            </div>
            <div className="text-[15px] text-white/70 mt-2 font-medium">{label}</div>
        </div>
    );
}
