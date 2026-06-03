import { COLORS } from "../../constants/colors";

export default function SectionLabel({
    n,
    label,
}: {
    n: string;
    label: string;
}) {
    return (
        <span style={{ display: "block", fontFamily: "monospace", fontSize: 11, color: COLORS.primary, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>
            {n} / {label}
        </span>
    );
}