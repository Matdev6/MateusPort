import { ArrowDown, Code, CodeXml, LucideLaptop, Notebook } from "lucide-react";
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

    const idade = () => {
        if(mes > 6){
            return anoAtual-2005
        }
        else if(mes == 6 && dia > 6){
            return anoAtual-2005
        }
        else{
            return anoAtual-2005-1
        }
    }

    const d = new Date()

    const dia = d.getDate()
    const mes = d.getMonth()

    

    return (
        <section
            id="section1"
            className="h-[calc(100vh-80px)] fund mt-20 scroll-mt-20 w-full bg-radial from-[#394753] via-neutral-900 to-neutral-950 flex flex-col sm:flex-row items-center sm:justify-center relative justify-around"
        >
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex flex-col items-center text-center px-6 sm:w-1/2 h-1/ sm:h-max">
                <img
                    src={mateus}
                    alt="Mateus"
                    className="w-60 h-60 sm:w-72 sm:h-72 rounded-3xl p-2 bg-gradient-to-l to-neutral-900 via-neutral-700 shadow-[0_0_15px_5px_#67E8F9] from-neutral-500 mt-8 sm:mt-0"
                />
                <div className="flex">

                </div>
                <h1 className="sm:text-3xl text-2xl font-bold mt-6 text-neutral-200">Bem-vindo ao meu portfólio</h1>
                <p className="sm:text-2xl text-xl font-semibold text-neutral-300"><span className="text-[#67E8F9]">Mateus Bernardo</span> Dev FrontEnd</p>
                <button className="py-1 px-4 text-neutral-600 font-semibold bg-[#67E8F9] rounded-xl shadow-[0_0_6px_3px_#67E8F9]  my-2">Entrar em contato</button>
                <p className="text-gray-600 text-sm">© {anoAtual} matDev</p>
                <ArrowDown className="animate-bounce h-10 w-10 mt-4 bg-neutral-900 text-neutral-300 hover:text-[#67E8F9]  rounded-full p-2 border hidden sm:flex  border-neutral-800 cursor-pointer hover:bg-neutral-800 hover:border-[#67E8F9] transition-colors shadow-md shadow-neutral-800/60"
                    onClick={scrollToSection} />
            </motion.div>
            <div className="sm:w-1/3 w-11/12 h-1/2  flex flex-col m">
                <h1 className="text-neutral-100 font-bold sm:text-4xl text-2xl mt-8 sm:mt-0 text-center sm:text-start">Transformando Ideias em Experiências Web Incríveis</h1> 
                <p className="text-neutral-300 sm:text-2xl text-lg text-center sm:text-start">Desenvolvedor Front-End com foco em criar interfaces web responsivas e dinâmicas. Dedicado a entregar soluções que combinam estética e funcionalidade para uma ótima experiência do usuário.</p>
                <div className="flex  sm:flex-row gap-2   mt-2 sm:mt-0 mx-auto sm:mx-0">
                    <div className="flex mt-2 bg-neutral-800   px-2 rounded-xl shadow-xl ">
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
