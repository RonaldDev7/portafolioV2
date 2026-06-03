import { useState } from "react";
import type { ReactNode } from "react";
import { COLORS } from "../../constants/colors";

export default function BtnPrimary({
    href,
    children,
}: {
    href: string;
    children: ReactNode;
}) {
    const [hover, setHover] = useState(false);

    return (
        <a
            href={href}
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                fontSize: 14,
                fontWeight: 500,
                background: hover ? COLORS.primaryHover : COLORS.primary,
                color: "#fff",
                borderRadius: 10,
                textDecoration: "none",
                transition: "background 0.2s",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
        </a>
    );
}