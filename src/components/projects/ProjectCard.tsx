import { useState } from "react";
import { COLORS } from "../../constants/colors";
import GitHubIcon from "../../icons/GitHubIcon";
import ExternalIcon from "../../icons/ExternalIcon";
import type { Project } from "../../types/project";

export default function ProjectCard({
    project,
    delay,
    visible,
}: {
    project: Project;
    delay: number;
    visible: boolean;
}) {
    const [hover, setHover] = useState(false);
    return (
        <article
            style={{
                display: "flex",
                flexDirection: "column",
                padding: 24,
                borderRadius: 14,
                border: `1px solid ${hover ? COLORS.borderHover : COLORS.border}`,
                background: hover
                    ? COLORS.surfaceHover
                    : "rgba(15,17,23,0.4)",
                opacity: visible ? 1 : 0,
                transform: visible
                    ? "translateY(0)"
                    : "translateY(20px)",
                transition: `opacity 0.5s ease ${delay}ms,
                transform 0.5s ease ${delay}ms,
                border-color 0.25s,
                background 0.25s`,
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >

            <div style={{ fontSize: 11, fontFamily: "monospace", color: COLORS.textMuted, marginBottom: 10 }}>{project.year}</div>
            <h3 style={{ fontSize: 17, fontWeight: 500, color: COLORS.text, marginBottom: 10, letterSpacing: "-0.01em" }}>{project.name}</h3>
            <p style={{ fontSize: 13, color: COLORS.textSecondary, lineHeight: 1.7, marginBottom: 16, flex: 1 }}>{project.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                {project.tech.slice(0, 3).map(t => (
                    <span key={t} style={{ padding: "3px 8px", fontSize: 11, fontFamily: "monospace", color: COLORS.textMuted, border: `1px solid ${COLORS.border}`, borderRadius: 4 }}>{t}</span>
                ))}
                {project.tech.length > 3 && <span style={{ padding: "3px 8px", fontSize: 11, fontFamily: "monospace", color: COLORS.textMuted }}>+{project.tech.length - 3}</span>}
            </div>
            <div style={{ display: "flex", gap: 16 }}>
                {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: COLORS.textSecondary, textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = COLORS.text)}
                        onMouseLeave={e => (e.currentTarget.style.color = COLORS.textSecondary)}
                    >
                        <ExternalIcon /> Demo
                    </a>
                )}
                <a href={project.repo} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: COLORS.textSecondary, textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = COLORS.text)}
                    onMouseLeave={e => (e.currentTarget.style.color = COLORS.textSecondary)}
                >
                    <GitHubIcon size={13} /> Código
                </a>
            </div>
        </article>
    );
}