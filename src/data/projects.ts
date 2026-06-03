import type { Project } from "../types/project";
import focusimg from "../assets/images/projects/focusapp.jpeg";
import saborchef from "../assets/images/projects/sabor-del-chef.png";
import ufbot from "../assets/images/projects/ufbot.png";

export const projects: Project[] = [
    {
        id: "focus-web",
        name: "Focus Web",
        description:
            "Aplicación web de productividad inspirada en herramientas como Notion y Trello. Permite organizar tareas en un tablero infinito con drag & drop, espacios de trabajo personalizados y gestión eficiente de proyectos.",
        tech: [
            "React",
            "Vite",
            "JavaScript",
            "CSS Modules",
            "PostgreSQL",
            "dnd-kit",
        ],
        repo: "https://github.com/focusappteam/focus_mvp",
        demo: "https://focus-mvp-sooty.vercel.app/login",
        featured: true,
        year: "2025",
        image: focusimg,
    },

    {
        id: "tienda-bot",
        name: "Tienda Bot Discord",
        description:
            "Bot para Discord que automatiza la gestión de pedidos mediante tickets privados para vendedores y clientes.",
        tech: ["Node.js", "Discord.js", "JavaScript"],
        repo: "https://github.com/RonaldDev7/tienda-bot-ultrafeders",
        year: "2024",
        image: ufbot,
    },

    {
        id: "sabor-chef",
        name: "Sabor del Chef",
        description:
            "Aplicación web para pedidos y reservas de restaurante conectada a PostgreSQL.",
        tech: ["JavaScript", "HTML", "CSS", "PostgreSQL"],
        repo: "https://github.com/RonaldDev7/proyecto-final-app-BDD",
        demo: "https://sabor-del-cheff.netlify.app",
        year: "2024",
        image: saborchef,
    },
];