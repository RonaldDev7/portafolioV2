import { useState } from "react";
import { COLORS } from "../../constants/colors";
import { catColor } from "../../data/technologies";

interface Technology {
    name: string;
    cat: string;
}

export default function TechPill({
    tech,
    delay,
    visible,
}: {
    tech: Technology;
    delay: number;
    visible: boolean;
}) {
    const [hover, setHover] = useState(false);
    return (
        <div
            style={{
                display: "flex", alignItems: "center", gap: 8,
                padding: "8px 14px", border: `1px solid ${hover ? COLORS.borderHover : COLORS.border}`,
                borderRadius: 8, background: hover ? COLORS.surfaceHover : COLORS.surface,
                cursor: "default",
                opacity: visible ? 1 : 0,
                transform: visible ? "scale(1)" : "scale(0.9)",
                transition: `opacity 0.4s ease ${delay}ms, transform 0.4s ease ${delay}ms, border-color 0.2s, background 0.2s`,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: catColor[tech.cat] || "#666", flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: hover ? COLORS.text : COLORS.textSecondary, transition: "color 0.2s" }}>{tech.name}</span>
        </div>
    );
}