import { useEffect, useState } from "react";
import { Menu } from "lucide-react";


const Header = () => {
    const [activeSection, setActiveSection] = useState(null);

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
                threshold: 0.6, // 60% visível pra considerar "ativa"
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
                <h1 className="items-center font-semibold text-xl text-neutral-50">Mateus<span className="text-cyan-500">Port</span></h1>
            </div>
            <div className="flex justify-between w-1/3 text-white">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`text-lg transition-colors duration-300 ${
                            activeSection === section.id
                                ? "text-cyan-500"
                                : "border-transparent hover:text-cyan-500"
                        }`}
                    >
                        {section.label}
                    </button>
                ))}
            </div>
        </header>
    );
};

export default Header;
