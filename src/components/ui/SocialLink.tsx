import { useState } from "react";
import type { ReactNode } from "react";
import { COLORS } from "../../constants/colors";

export default function SocialLink({
    href,
    label,
    children,
}: {
    href: string;
    label: string;
    children: ReactNode;
}) {
    const [hover, setHover] = useState(false);

    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            style={{
                color: hover ? COLORS.text : COLORS.textSecondary,
                textDecoration: "none",
                transition: "color 0.2s",
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
        </a>
    );
}