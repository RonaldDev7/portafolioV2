import { COLORS } from "../../constants/colors";

export default function Footer() {
    return (
        <footer style={{ borderTop: `1px solid ${COLORS.border}`, padding: "28px 0" }}>
            <div style={{
                maxWidth: 960, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent:
                    window.innerWidth < 700
                        ? "center"
                        : "space-between", alignItems: "center", flexWrap: "wrap", gap: 8
            }}>
                <span style={{ fontSize: 12, fontFamily: "monospace", color: COLORS.textMuted }}>© {new Date().getFullYear()} Ronald Alvarez</span>
                <span style={{ fontSize: 12, fontFamily: "monospace", color: COLORS.textMuted }}>React + TypeScript + Vite</span>
            </div>
        </footer>
    );
}