import { COLORS } from "../../constants/colors";
import { useInView } from "../../hooks/useInView";

import Divider from "../ui/Divider";
import SectionLabel from "../ui/SectionLabel";

export default function Interests() {
    const { ref, visible } = useInView();

    return (
        <section style={{ padding: "0 0 96px" }}>
            <Divider />

            <div
                ref={ref}
                style={{
                    maxWidth: 960,
                    margin: "0 auto",
                    padding: "96px 24px 0",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transition: "all .7s ease",
                }}
            >
                <SectionLabel n="03" label="Especialización" />

                <h2
                    style={{
                        fontSize: "clamp(28px,4vw,40px)",
                        fontWeight: 300,
                        marginBottom: 40,
                    }}
                >
                    Lo que me gusta construir
                </h2>

                <div
                    style={{
                        display: "grid",
                        gap: 16,
                        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                    }}
                >
                    {[
                        "Aplicaciones de productividad",
                        "Tableros infinitos",
                        "Interfaces drag & drop",
                        "Herramientas colaborativas",
                        "Productos SaaS",
                        "Experiencias web modernas",
                    ].map((item) => (
                        <div
                            key={item}
                            style={{
                                padding: 20,
                                border: `1px solid ${COLORS.border}`,
                                borderRadius: 12,
                                background: COLORS.surface,
                            }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}