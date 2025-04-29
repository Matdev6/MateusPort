import { useEffect, useState } from "react";
import { Briefcase, Cpu, Home, Link, Menu, ShieldUser } from "lucide-react";

const Header = () => {
    const [activeSection, setActiveSection] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const sections = [
        { id: "section1", label: "Inicio" },
        { id: "section2", label: "Sobre mim" },
        { id: "section3", label: "Habilidades" },
        { id: "section4", label: "Projetos" },
        { id: "section5", label: "Contatos" }
    ];

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.6,
            }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => {
            sections.forEach((section) => {
                const el = document.getElementById(section.id);
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <header className="flex w-screen justify-around items-center py-2 shadow-lg font-semibold bg-neutral-900 h-20 fixed top-0 left-0 z-50">
            <div className="flex items-center gap-2">
                <h1 className="font-semibold text-xl text-neutral-50">Mateus<span className="text-cyan-500">Port</span></h1>
            </div>

            <div className="lg:flex hidden justify-between w-1/3 text-white">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`text-lg transition-colors duration-300 ${activeSection === section.id
                            ? "text-cyan-500"
                            : "border-transparent hover:text-cyan-500"
                            }`}
                    >
                        {section.label}
                    </button>
                ))}
            </div>

            <div className="lg:hidden flex">
                <Menu className="text-neutral-50 h-7 w-7" onClick={() => setMenuOpen(!menuOpen)} />
            </div>

            {menuOpen && (
                <div className="h-[100dvh] w-screen flex absolute top-0 lg:hidden z-40">
                    <div
                        className="w-1/4 h-full bg-neutral-900/45"
                        onClick={() => setMenuOpen(false)}
                    ></div>

                    <div className="h-full w-3/4 flex flex-col bg-neutral-100 rounded-tl-3xl shadow-2xl border-l border-gray-300 p-6 space-y-4 animate-slide-in">
                        {[
                            { label: "Inicio", icon: Home, id: "section1" },
                            { label: "Sobre Mim", icon: ShieldUser, id: "section2" },
                            { label: "Habilidades", icon: Cpu, id: "section3" },
                            { label: "Projetos", icon: Briefcase, id: "section4" },
                            { label: "Contatos", icon: Link, id: "section5" }
                        ].map(({ label, icon: Icon, id }, idx) => (
                            <div
                                key={idx}
                                onClick={() => scrollToSection(id)}
                                className="flex items-center gap-4 p-4 border-b border-gray-300/50 cursor-pointer group transition-all duration-300 hover:bg-cyan-100/30 rounded-lg"
                            >
                                <Icon className="text-cyan-600 group-hover:scale-110 group-hover:text-cyan-800 transition-transform duration-300" />
                                <button className="font-semibold text-lg text-cyan-600 group-hover:text-cyan-800 transition-colors">
                                    {label}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
