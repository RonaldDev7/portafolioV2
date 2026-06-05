import BtnPrimary from "../ui/BtnPrimary";
import BtnOutline from "../ui/BtnOutline";

import StarIcon from "../../icons/StarIcon";
import GitHubIcon from "../../icons/GitHubIcon";
import ExternalIcon from "../../icons/ExternalIcon";

import type { Project } from "../../types/project";

import { COLORS } from "../../constants/colors";
import { useInView } from "../../hooks/useInView";
import { useState } from "react";

export default function FeaturedProject({ project }: { project: Project }) {
    const { ref, visible } = useInView();
    const [hover, setHover] = useState(false);

    const isMobile = window.innerWidth < 900;

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
        >
            <div
                style={{
                    position: "relative",
                    borderRadius: 20,
                    border: `1px solid ${hover ? "rgba(59,130,246,0.3)" : COLORS.border}`,
                    background: COLORS.surface,
                    padding: isMobile
                        ? "28px"
                        : "48px",
                    overflow: "hidden",
                    transition: "border-color 0.4s",
                }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {/* Top glow line */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 1,
                        background:
                            "linear-gradient(to right, transparent, rgba(59,130,246,0.4), transparent)",
                        opacity: hover ? 1 : 0,
                        transition: "opacity 0.4s",
                    }}
                />

                {/* Featured badge */}
                <div style={{ position: "absolute", top: 24, right: 24 }}>
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "5px 12px",
                            fontSize: 11,
                            fontFamily: "monospace",
                            color: COLORS.primary,
                            border: `1px solid rgba(59,130,246,0.2)`,
                            borderRadius: 9999,
                            background: "rgba(59,130,246,0.05)",
                        }}
                    >
                        <StarIcon /> Destacado
                    </span>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile
                            ? "1fr"
                            : "1.2fr 1fr",

                        gap: isMobile ? 24 : 40,
                        alignItems: "center",
                    }}
                >
                    {/* Texto */}
                    <div>
                        <div style={{ marginBottom: 8 }}>
                            <span
                                style={{
                                    fontSize: 12,
                                    fontFamily: "monospace",
                                    color: COLORS.textMuted,
                                }}
                            >
                                {project.year}
                            </span>
                        </div>

                        <h3
                            style={{
                                fontSize: "clamp(28px, 4vw, 40px)",
                                fontWeight: 300,
                                color: COLORS.text,
                                letterSpacing: "-0.02em",
                                marginBottom: 16,
                            }}
                        >
                            {project.name}
                        </h3>

                        <p
                            style={{
                                fontSize: 15,
                                color: COLORS.textSecondary,
                                lineHeight: 1.75,
                                maxWidth: 560,
                                marginBottom: 28,
                            }}
                        >
                            {project.description}
                        </p>

                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 8,
                                marginBottom: 32,
                            }}
                        >
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    style={{
                                        padding: "4px 10px",
                                        fontSize: 12,
                                        fontFamily: "monospace",
                                        color: COLORS.textMuted,
                                        border: `1px solid ${COLORS.border}`,
                                        borderRadius: 6,
                                        background: "rgba(255,255,255,0.02)",
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: "flex", gap: 12 }}>
                            {project.demo && (
                                <BtnPrimary href={project.demo}>
                                    Ver demo <ExternalIcon />
                                </BtnPrimary>
                            )}

                            <BtnOutline href={project.repo}>
                                <GitHubIcon /> Repositorio
                            </BtnOutline>
                        </div>
                    </div>

                    {/* Imagen */}
                    <div
                        style={{
                            position: "relative",
                            borderRadius: 16,
                            overflow: "hidden",
                            border: `1px solid ${hover ? COLORS.borderHover : COLORS.border}`,
                            background: COLORS.surface,

                            boxShadow: hover
                                ? "0 20px 60px rgba(59,130,246,0.18)"
                                : "0 10px 30px rgba(0,0,0,0.18)",

                            transition: "all .4s ease",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(135deg, rgba(255,255,255,0.08), transparent 50%)",
                                opacity: hover ? 1 : 0,
                                transition: "opacity .4s ease",
                                pointerEvents: "none",
                                zIndex: 2,
                            }}
                        />
                        <img
                            src={project.image}
                            alt={project.name}
                            style={{
                                width: "100%",
                                height: isMobile ? 220 : 320,
                                objectFit: "cover",
                                display: "block",
                                transform: hover ? "scale(1.03)" : "scale(1)",
                                transition: "transform .4s ease",
                            }}
                        />
                    </div>
                </div>

                {/* Ambient circle */}
                <div
                    style={{
                        position: "absolute",
                        bottom: -60,
                        right: -60,
                        width: 180,
                        height: 180,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(59,130,246,0.08), transparent)",
                        opacity: hover ? 1 : 0.3,
                        transition: "opacity 0.5s",
                    }}
                />
            </div>
        </div>
    );
}
