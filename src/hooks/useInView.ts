import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
            },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return { ref, visible };
}