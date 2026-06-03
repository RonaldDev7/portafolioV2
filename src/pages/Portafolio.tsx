import { COLORS } from "../constants/colors";

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import TechStack from "../components/sections/TechStack";
import Interests from "../components/sections/Interests";
import Achievements from "../components/sections/Achievements";
import Contact from "../components/sections/Contact";
import Projects from "../components/sections/Projects";

export default function Portfolio() {
    return (
        <div style={{ background: COLORS.bg, color: COLORS.text, minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>
            <Nav />
            <main>
                <Hero />
                <About />
                <TechStack />
                <Interests />
                <Projects />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
