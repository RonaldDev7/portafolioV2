import { COLORS } from "../../constants/colors";
import { useInView } from "../../hooks/useInView";

import Divider from "../ui/Divider";
import SectionLabel from "../ui/SectionLabel";

export default function About() {
    const { ref, visible } = useInView();
    const anim = (delay = 0) => ({
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    });
    return (
        <section id="about" style={{ padding: "96px 0" }}>
            <Divider />
            <div style={{ maxWidth: 960, margin: "0 auto", padding: "96px 24px 0" }}>
                <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "start" }}>
                    <div style={anim(0)}>
                        <SectionLabel n="01" label="Sobre mí" />
                        <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.2, color: COLORS.text }}>
                            Construyo el<br />
                            <span style={{ color: COLORS.textSecondary }}>frontend del</span><br />
                            futuro.
                        </h2>
                    </div>

                    <div style={{ ...anim(120), display: "flex", flexDirection: "column", gap: 18 }}>
                        <p style={{ fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.75 }}>
                            Soy estudiante de <span style={{ color: COLORS.text }}>Ingeniería de Sistemas</span> en la Universidad de la Costa (CUC) y desarrollador frontend junior.
                        </p>
                        <p style={{ fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.75 }}>
                            Me apasiona crear aplicaciones web modernas utilizando <span style={{ color: COLORS.text }}>React, TypeScript</span> y tecnologías del ecosistema JavaScript. Cada proyecto es una oportunidad para construir algo que funcione bien y se vea mejor.
                        </p>
                        <p style={{ fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.75 }}>
                            Actualmente busco oportunidades para continuar creciendo profesionalmente y aportar valor en equipos que estén construyendo productos con impacto real.
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 8 }}>
                            {[["3+", "Proyectos"], ["2+", "Años"], ["12+", "Tecnologías"]].map(([val, lbl]) => (
                                <div key={lbl} style={{
                                    border: `1px solid ${COLORS.border}`, borderRadius: 12,
                                    padding: "16px 12px", textAlign: "center", background: COLORS.surface,
                                }}>
                                    <div style={{ fontSize: 24, fontWeight: 300, color: COLORS.text, marginBottom: 4 }}>{val}</div>
                                    <div style={{ fontSize: 11, fontFamily: "monospace", color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.08em" }}>{lbl}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
