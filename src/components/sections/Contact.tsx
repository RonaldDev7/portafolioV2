import { useState } from "react";
import type { ReactNode } from "react";

import { COLORS } from "../../constants/colors";
import { useInView } from "../../hooks/useInView";

import Divider from "../ui/Divider";
import SectionLabel from "../ui/SectionLabel";
import BtnPrimary from "../ui/BtnPrimary";

import GitHubIcon from "../../icons/GitHubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import MailIcon from "../../icons/MailIcon";

function ContactPill({
    href,
    label,
    icon,
}: {
    href: string;
    label: string;
    icon: ReactNode;
}) {
    const [hover, setHover] = useState(false);
    return (
        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", gap: 8, padding: "10px 18px",
            fontSize: 13, color: hover ? COLORS.text : COLORS.textSecondary,
            border: `1px solid ${hover ? COLORS.borderHover : COLORS.border}`,
            borderRadius: 10, textDecoration: "none", background: hover ? COLORS.surface : "transparent",
            transition: "all 0.2s",
        }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {icon} {label}
        </a>
    );
}

export default function Contact() {
    const { ref, visible } = useInView();
    return (
        <section id="contact" style={{ padding: "0 0 96px" }}>
            <Divider />
            <div style={{ maxWidth: 960, margin: "0 auto", padding: "96px 24px 0" }}>
                <div ref={ref} style={{
                    maxWidth: 560, margin: "0 auto", textAlign: "center",
                    opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                }}>
                    <SectionLabel n="05" label="Contacto" />
                    <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1.15, color: COLORS.text, marginBottom: 24 }}>
                        ¿Buscas un desarrollador frontend?
                    </h2>
                    <p style={{ fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.75, marginBottom: 40 }}>
                        Estoy abierto a oportunidades como desarrollador frontend junior,
                        prácticas profesionales y proyectos freelance.

                        Si estás construyendo un producto digital y necesitas alguien que
                        aporte con React, TypeScript y desarrollo frontend moderno,
                        me encantaría conversar contigo.
                    </p>
                    <div style={{ marginBottom: 48 }}>
                        <BtnPrimary href="mailto:alvarezronalddev@gmail.com">
                            <MailIcon /> alvarezronalddev@gmail.com
                        </BtnPrimary>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
                        {[
                            { href: "https://github.com/RonaldDev7", label: "GitHub", icon: <GitHubIcon /> },
                            { href: "https://www.linkedin.com/in/ralvarez7/", label: "LinkedIn", icon: <LinkedInIcon /> },
                            { href: "mailto:alvarezronalddev@gmail.com", label: "Email", icon: <MailIcon /> },
                        ].map(link => (
                            <ContactPill key={link.label} {...link} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}