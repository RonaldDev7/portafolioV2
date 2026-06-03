import { COLORS } from "../../constants/colors";
import { technologies } from "../../data/technologies";
import { useInView } from "../../hooks/useInView";

import Divider from "../ui/Divider";
import SectionLabel from "../ui/SectionLabel";

import TechPill from "../projects/TechPill";

export default function TechStack() {
    const { ref, visible } = useInView();
    return (
        <section id="stack" style={{ padding: "0 0 96px" }}>
            <Divider />
            <div style={{ maxWidth: 960, margin: "0 auto", padding: "96px 24px 0" }}>
                <div ref={ref} style={{
                    opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease",
                }}>
                    <SectionLabel n="02" label="Tecnologías" />
                    <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, letterSpacing: "-0.02em", color: COLORS.text, marginBottom: 40 }}>
                        Mi stack
                    </h2>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {technologies.map((tech, i) => (
                        <TechPill key={tech.name} tech={tech} delay={i * 40} visible={visible} />
                    ))}
                </div>
            </div>
        </section>
    );
}