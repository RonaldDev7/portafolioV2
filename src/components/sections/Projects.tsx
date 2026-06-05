import { projects } from "../../data/projects";
import { COLORS } from "../../constants/colors";
import { useInView } from "../../hooks/useInView";

import Divider from "../ui/Divider";
import SectionLabel from "../ui/SectionLabel";

import FeaturedProject from "../projects/FeaturedProject";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
    const { ref, visible } = useInView();
    const featured = projects.find(p => p.featured);
    const others = projects.filter(p => !p.featured);

    const isMobile = window.innerWidth < 900;
    
    return (
        <section id="projects" style={{ padding: "0 0 96px" }}>
            <Divider />
            <div style={{ maxWidth: 960, margin: "0 auto", padding: "96px 24px 0" }}>
                <div ref={ref} style={{
                    opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.7s ease, transform 0.7s ease", marginBottom: 40,
                }}>
                    <SectionLabel n="03" label="Proyectos" />
                    <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 300, letterSpacing: "-0.02em", color: COLORS.text }}>
                        Lo que he construido
                    </h2>
                </div>
                {featured && <div style={{ marginBottom: 28 }}><FeaturedProject project={featured} /></div>}
                {others.length > 0 && (
                    <>
                        <p style={{ fontSize: 11, fontFamily: "monospace", color: COLORS.textMuted, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Otros proyectos</p>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: isMobile
                                    ? "1fr"
                                    : "repeat(2,1fr)",
                                gap: 16,
                            }}
                        >
                            {others.map((p, i) => <ProjectCard key={p.id} project={p} delay={i * 100} visible={visible} />)}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}