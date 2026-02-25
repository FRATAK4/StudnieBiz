import { useState, useEffect, useRef } from "react";

export function AnimatedSection({ children, className = "" }) {
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
            className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"} ${className}`}
        >
            {children}
        </div>
    );
}
