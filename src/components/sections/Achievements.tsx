import { COLORS } from "../../constants/colors";
import { useInView } from "../../hooks/useInView";

import Divider from "../ui/Divider";
import SectionLabel from "../ui/SectionLabel";

export default function Achievements() {
    const { ref, visible } = useInView();

    const achievements = [
        "Desarrollo de Focus Web junto a un equipo de desarrollo.",
        "Implementación de tablero infinito usando React y dnd-kit.",
        "Uso de Git Flow para trabajo colaborativo.",
        "Diseño de interfaces modernas y responsivas.",
        "Integración de PostgreSQL para persistencia de datos.",
        "Desarrollo de aplicaciones web orientadas a productividad.",
    ];

    return (
        <section style={{ padding: "0 0 96px" }}>
            <Divider />

            <div
                ref={ref}
                style={{
                    maxWidth: 960,
                    margin: "0 auto",
                    padding: "96px 24px 0",
                }}
            >
                <SectionLabel n="04" label="Logros" />

                <h2
                    style={{
                        fontSize: "clamp(28px,4vw,40px)",
                        fontWeight: 300,
                        marginBottom: 40,
                    }}
                >
                    Experiencia y logros
                </h2>

                <div
                    style={{
                        display: "grid",
                        gap: 16,
                    }}
                >
                    {achievements.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                padding: 20,
                                borderRadius: 12,
                                border: `1px solid ${COLORS.border}`,
                                background: COLORS.surface,
                                opacity: visible ? 1 : 0,
                                transform: visible
                                    ? "translateY(0)"
                                    : "translateY(20px)",
                                transition: `all .5s ease ${index * 100}ms`,
                            }}
                        >
                            ✓ {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}