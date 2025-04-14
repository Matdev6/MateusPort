import { ArrowDown, Code, CodeXml } from "lucide-react";
import mateus from "../assets/mateus.jpeg"
import { motion } from "motion/react"

export default function Hero() {
    const anoAtual = new Date().getFullYear();

    const scrollToSection = () => {
        const section = document.getElementById("section2")
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id="section1"
            className="h-[calc(100vh-80px)] mt-20 scroll-mt-20 w-full bg-radial from-[#394753] via-[#1d2830] to-[#1A1B21] flex flex-col sm:flex-row items-center justify-center relative"
        >
            <motion.div 
            initial={{ x: -300, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="flex flex-col items-center text-center px-6 sm:w-1/2 h-1/ sm:h-max">
                <img
                    src={mateus}
                    alt="Mateus"
                    className="w-60 h-60 sm:w-72 sm:h-72 rounded-3xl p-2 bg-gradient-to-l to-neutral-900 via-neutral-700 from-neutral-500 shadow-lg mt-8 sm:mt-0"
                />
                <div className="flex">

                </div>
                <h1 className="text-3xl font-bold mt-6 text-neutral-200">Bem-vindo ao meu portfólio</h1>
                <p className="text-2xl font-semibold text-neutral-300">Mateus Bernardo Dev FrontEnd</p>
                <p className="text-gray-600">© {anoAtual} matDev</p>
                <ArrowDown className="h-10 w-10 mt-4 bg-neutral-900 text-neutral-300  rounded-full p-2 border-2 hidden sm:flex  border-neutral-800 cursor-pointer hover:bg-neutral-800 hover:border-neutral-500 transition-colors"
                    onClick={scrollToSection} />
            </motion.div>
            <div className="sm:w-1/3 w-3/4 h-1/2">
                <h1 className="text-neutral-100 font-bold sm:text-3xl text-xl mt-8">Transformando Ideias em Experiências Web Incríveis</h1>
                <p className="text-neutral-300 sm:text-xl text-md">Desenvolvedor Front-End com foco em criar interfaces web responsivas e dinâmicas. Dedicado a entregar soluções que combinam estética e funcionalidade para uma ótima experiência do usuário.</p>
                <div className="flex  sm:flex-row gap-2  w-1/2 mt-2 sm:mt-0">
                    <div className="flex mt-2 bg-neutral-800   px-2 rounded-xl">
                        <Code className="text-white" />
                        <p className="mx-1 mr-2 text-white">React</p>
                        <CodeXml className="text-white" />
                    </div>
                   
                    <div className="flex mt-2 bg-neutral-800 px-2 rounded-xl">
                        <Code className="text-white" />
                        <p className="mx-1 mr-2 text-white">Tailwind</p>
                        <CodeXml className="text-white" />
                    </div>
                </div>

            </div>
        </section>
    );
}
