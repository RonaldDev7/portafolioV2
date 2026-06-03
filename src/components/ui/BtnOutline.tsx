import type { ReactNode } from "react";
import { useState} from "react";
import { COLORS } from "../../constants/colors";

export default function BtnOutline({
    href,
    children,
}: {
    href: string;
    children: ReactNode;
}) {
    const [hover, setHover] = useState(false);
    return (
        <a href={href} style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "10px 20px", fontSize: 14,
            color: hover ? COLORS.text : COLORS.textSecondary,
            border: `1px solid ${hover ? COLORS.borderHover : COLORS.border}`,
            borderRadius: 10, textDecoration: "none",
            transition: "all 0.2s", background: hover ? COLORS.surface : "transparent",
        }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >{children}</a>
    );
}