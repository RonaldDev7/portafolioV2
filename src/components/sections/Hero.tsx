import { COLORS } from "../../constants/colors";
import { useEffect, useState } from "react";

import BtnPrimary from "../ui/BtnPrimary";
import BtnOutline from "../ui/BtnOutline";
import SocialLink from "../ui/SocialLink";

import ArrowRight from "../../icons/ArrowRight";
import DownloadIcon from "../../icons/DownloadIcon";

import GitHubIcon from "../../icons/GitHubIcon";
import LinkedInIcon from "../../icons/LinkedInIcon";
import MailIcon from "../../icons/MailIcon";
import ronaldphoto from "../../assets/images/profile/ronaldalvarez.jpeg";

export default function Hero() {
    const [photoHover, setPhotoHover] = useState(false);
    const [mounted, setMounted] = useState(false);

    const isMobile = window.innerWidth < 900;

    useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

    const fade = (delay: number) => ({
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    });

    return (
        <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 56, position: "relative", overflow: "hidden" }}>
            {/* Background glow */}
            <div style={{
                position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                width: 700, height: 400, pointerEvents: "none",
                background: "radial-gradient(ellipse at center top, rgba(59,130,246,0.12) 0%, transparent 70%)",
            }} />
            {/* Grid */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.025,
                backgroundImage: "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
                backgroundSize: "72px 72px",
            }} />

            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    padding: "0 24px",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile
                            ? "1fr"
                            : "1.2fr 0.8fr",

                        gap: isMobile ? 40 : 64,

                        alignItems: "center",
                    }}
                >
                    {/* IZQUIERDA */}
                    <div>
                        <div style={{ ...fade(0), marginBottom: 36 }}>
                            <span
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "6px 14px",
                                    fontSize: 12,
                                    fontFamily: "monospace",
                                    color: COLORS.textSecondary,
                                    border: `1px solid ${COLORS.border}`,
                                    borderRadius: 9999,
                                    background: COLORS.surface,
                                    order: isMobile ? 2 : 1,
                                    textAlign: isMobile ? "center" : "left",
                                }}
                            >
                                <span
                                    style={{
                                        width: 6,
                                        height: 6,
                                        borderRadius: "50%",
                                        background: COLORS.green,
                                        boxShadow: `0 0 8px ${COLORS.green}`,
                                    }}
                                />
                                Disponible para trabajar
                            </span>
                        </div>

                        <h1
                            style={{
                                ...fade(100),
                                fontSize: "clamp(40px, 8vw, 80px)",
                                fontWeight: 300,
                                lineHeight: 1.1,
                                letterSpacing: "-0.03em",
                                marginBottom: 24,
                            }}
                        >
                            Hola, soy{" "}
                            <span style={{ color: COLORS.text }}>Ronald</span>
                            <br />
                            <span
                                style={{
                                    background:
                                        "linear-gradient(135deg, #3B82F6 0%, #818CF8 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                Alvarez.
                            </span>
                        </h1>

                        <p
                            style={{
                                ...fade(200),
                                fontSize: "clamp(16px, 2.5vw, 20px)",
                                color: COLORS.textSecondary,
                                fontWeight: 300,
                                maxWidth: 700,
                                marginBottom: 12,
                                lineHeight: 1.6,
                            }}
                        >
                            Desarrollador Frontend enfocado en crear aplicaciones web modernas,
                            escalables y centradas en la experiencia del usuario utilizando
                            React, TypeScript y el ecosistema JavaScript.
                        </p>

                        <p
                            style={{
                                ...fade(280),
                                fontSize: 14,
                                color: COLORS.textMuted,
                                maxWidth: 500,
                                marginBottom: 48,
                                lineHeight: 1.7,
                            }}
                        >
                            Estudiante de Ingeniería de Sistemas en la Universidad de la Costa
                            (CUC) · Barranquilla, Colombia.
                        </p>

                        <div
                            style={{
                                ...fade(350),
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 12,
                                marginBottom: 60,
                                justifyContent: isMobile ? "center" : "flex-start",
                            }}
                        >
                            <BtnPrimary href="#projects">
                                Ver proyectos <ArrowRight />
                            </BtnPrimary>

                            <BtnOutline
                                href="/RonaldAlvarezCV.pdf"
                                download
                            >
                                <DownloadIcon />
                                Descargar CV
                            </BtnOutline>
                        </div>

                        <div
                            style={{
                                ...fade(450),
                                display: "flex",
                                alignItems: "center",
                                gap: 16,
                                justifyContent: isMobile ? "center" : "flex-start",
                                flexWrap: "wrap",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 11,
                                    fontFamily: "monospace",
                                    color: COLORS.textMuted,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                }}
                            >
                                Encuéntrame
                            </span>

                            <div
                                style={{
                                    width: 32,
                                    height: 1,
                                    background: COLORS.border,
                                }}
                            />

                            <SocialLink
                                href="https://github.com/RonaldDev7"
                                label="GitHub"
                            >
                                <GitHubIcon />
                            </SocialLink>

                            <SocialLink
                                href="https://www.linkedin.com/in/ralvarez7/"
                                label="LinkedIn"
                            >
                                <LinkedInIcon />
                            </SocialLink>

                            <SocialLink
                                href="mailto:alvarezronalddev@gmail.com"
                                label="Email"
                            >
                                <MailIcon />
                            </SocialLink>
                        </div>
                    </div>

                    {/* DERECHA */}
                    <div
                        style={{
                            ...fade(250),
                            display: "flex",
                            justifyContent: "center",

                            order: isMobile ? 1 : 2,
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                            }}
                        >
                            {/* Glow detrás */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: -40,
                                    borderRadius: 40,
                                    background:
                                        "radial-gradient(circle, rgba(59,130,246,0.25), transparent 70%)",
                                    filter: "blur(40px)",
                                    opacity: photoHover ? 1 : 0.4,
                                    transition: "opacity .35s ease",
                                    zIndex: 0,
                                }}
                            />

                            {/* Tarjeta */}
                            <div
                                onMouseEnter={() => setPhotoHover(true)}
                                onMouseLeave={() => setPhotoHover(false)}
                                style={{
                                    position: "relative",
                                    zIndex: 1,

                                    width: isMobile ? 280 : 360,
                                    height: isMobile ? 340 : 430,

                                    borderRadius: 24,
                                    overflow: "hidden",

                                    border: `1px solid ${photoHover
                                        ? COLORS.borderHover
                                        : COLORS.border
                                        }`,

                                    background: COLORS.surface,

                                    transform: photoHover
                                        ? "translateY(-8px)"
                                        : "translateY(0)",

                                    boxShadow: photoHover
                                        ? "0 30px 100px rgba(59,130,246,0.30)"
                                        : "0 20px 80px rgba(59,130,246,0.15)",

                                    transition: "all .35s ease",
                                }}
                            >
                                <img
                                    src={ronaldphoto}
                                    alt="Ronald Alvarez"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center 20%",
                                    }}
                                />

                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%)",
                                    }}
                                />

                                <div
                                    style={{
                                        position: "absolute",
                                        top: 18,
                                        right: 18,

                                        padding: "8px 14px",

                                        borderRadius: 999,

                                        background: "rgba(10,10,10,.75)",
                                        backdropFilter: "blur(12px)",

                                        border: `1px solid ${COLORS.border}`,

                                        fontSize: 12,
                                        fontFamily: "monospace",

                                        color: COLORS.textSecondary,
                                    }}
                                >
                                    🇨🇴 Barranquilla
                                </div>

                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 24,
                                        left: 24,
                                    }}
                                >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll indicator */}
            <div style={{
                position: "absolute",
                bottom: 48,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                opacity: mounted ? 0.75 : 0,
                transition: "opacity 1s ease 1s",
            }}>
                <span
                    style={{
                        fontSize: 11,
                        fontFamily: "monospace",
                        color: COLORS.textSecondary,
                        textTransform: "uppercase",
                        letterSpacing: "0.18em",
                        textShadow: "0 0 10px rgba(59,130,246,0.35)",
                    }}
                >
                    scroll
                </span>
                <div
                    style={{
                        width: 1,
                        height: 40,
                        background:
                            "linear-gradient(to bottom, rgba(59,130,246,0.8), transparent)",
                        boxShadow: "0 0 12px rgba(59,130,246,0.5)",
                    }}
                />
            </div>
        </section>
    );
}