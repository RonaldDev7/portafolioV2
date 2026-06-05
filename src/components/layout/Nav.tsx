import { useEffect, useState } from "react";
import { COLORS } from "../../constants/colors";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const h = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", h);
        return () => window.removeEventListener("scroll", h);
    }, []);

    const isMobile = window.innerWidth < 700;

    return (
        <header style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
            borderBottom: `1px solid ${scrolled ? COLORS.border : "transparent"}`,
            background: scrolled ? "rgba(9,9,11,0.9)" : "transparent",
            backdropFilter: scrolled ? "blur(20px)" : "none",
            transition: "all 0.3s ease",
        }}>
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    padding: "0 24px",
                    height: 56,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <a
                    href="#hero"
                    style={{
                        textDecoration: "none",
                        fontFamily: "monospace",
                        fontSize: 14,
                        fontWeight: 600,
                        color: COLORS.text,
                        letterSpacing: 1,
                        textShadow:
                            "0 0 20px rgba(59,130,246,0.25)",
                    }}
                >
                    ra<span style={{ color: COLORS.primary }}>.</span>dev
                </a>
                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: isMobile ? 0 : 4,
                    }}
                >
                    {[["Sobre mí", "#about"], ["Proyectos", "#projects"], ["Contacto", "#contact"]].map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            style={{
                                textDecoration: "none",
                                padding: isMobile
                                    ? "6px 8px"
                                    : "6px 12px",

                                fontSize: isMobile
                                    ? 12
                                    : 13,

                                color: COLORS.text,
                                opacity: 0.75,

                                borderRadius: 8,
                                transition: "all .25s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = COLORS.primary;
                                e.currentTarget.style.opacity = "1";
                                e.currentTarget.style.textShadow =
                                    "0 0 15px rgba(59,130,246,.35)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = COLORS.text;
                                e.currentTarget.style.opacity = "0.75";
                                e.currentTarget.style.textShadow = "none";
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
