import type { ReactNode } from "react";
import { useState } from "react";
import { COLORS } from "../../constants/colors";

export default function BtnOutline({
    href,
    children,
    download = false,
}: {
    href: string;
    children: ReactNode;
    download?: boolean;
}) {
    const [hover, setHover] = useState(false);

    return (
        <a
            href={href}
            target={
                href.startsWith("http")
                    ? "_blank"
                    : undefined
            }
            rel="noopener noreferrer"
            download={download}
            style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                fontSize: 14,
                color: hover ? COLORS.text : COLORS.textSecondary,
                border: `1px solid ${hover ? COLORS.borderHover : COLORS.border}`,
                borderRadius: 10,
                textDecoration: "none",
                transition: "all 0.2s",
                background: hover ? COLORS.surface : "transparent",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
        </a>
    );
}
