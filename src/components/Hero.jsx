import { ArrowDown, Code, CodeXml, LucideLaptop, Notebook } from "lucide-react";
import mateus from "../assets/mateus.jpeg"
import eu from "../assets/eu.png"

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
        if (mes > 6) {
            return anoAtual - 2005
        }
        else if (mes == 6 && dia > 6) {
            return anoAtual - 2005
        }
        else {
            return anoAtual - 2005 - 1
        }
    }

    const d = new Date()

    const dia = d.getDate()
    const mes = d.getMonth()



    return (
        <section
            id="section1"
            className="h-[calc(100vh-80px)] fund mt-20 scroll-mt-20 w-full bg-white flex flex-col sm:flex-row items-center relative"
        >
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex flex-col text-center sm:w-1/2 w-full  sm:h-full justify-center">
                <div className="flex flex-col justify-center items-center bg-neutral-200 sm:w-11/12 w-full h-full ">
                    <img
                        src={eu}
                        alt="Mateus"
                        className="w-44 h-64 sm:w-[267px] sm:h-[405px]  mt-8 sm:mt-0 rounded-[38%_70%_60%_40%_/_30%_30%_70%_70%] border-cyan-200 p-1 bg-neutral-400"
                    />
                    <div className="sm:flex hidden">

                    </div>
                    <h1 className="sm:text-3xl text-2xl font-bold mt-6 text-neutral-800">Bem-vindo ao meu portfólio</h1>
                    <p className="sm:text-2xl text-xl font-semibold text-neutral-300 mb-1"><span className="text-cyan-500">Mateus Bernardo</span> Dev FrontEnd</p>
                
                    <p className="text-gray-600 text-sm mb-4">© {anoAtual} matDev</p>
                    <ArrowDown className="animate-bounce h-10 w-10 mt-4 bg-neutral-900 text-neutral-300 hover:text-[#67E8F9]  rounded-full p-2 border hidden sm:flex  border-neutral-800 cursor-pointer hover:bg-neutral-800 hover:border-[#67E8F9] transition-colors shadow-md shadow-neutral-800/60"
                        onClick={scrollToSection} />
                </div>
                <div>
                    
                </div>

            </motion.div>
            <div className="sm:w-1/3 w-11/12 h-1/2 justify-center flex flex-col">
                <h1 className="text-cyan-500 font-bold sm:text-5xl text-2xl text-center sm:mt-0 sm:text-start">Transformando Ideias em Experiências Web Incríveis</h1>
                <p className="text-neutral-500 sm:text-xl text-md text-center sm:text-start my-6">Desenvolvedor Front-End com foco em criar interfaces web responsivas e dinâmicas. Dedicado a entregar soluções que combinam estética e funcionalidade para uma ótima experiência do usuário.</p>
                <div className="flex  sm:flex-row gap-3   mt-2 sm:mt-0 mx-auto sm:mx-0 ">
                    <button className="bg-cyan-500 text-neutral-100 p-2 sm:p-3  font-semibold text-md rounded-3xl">
                        Entrar em contato
                    </button>
                    <button className="bg-neutral-900 text-neutral-200 p-2 sm:p-3 text-md rounded-3xl font-semibold">
                        Baixar curriculo
                    </button>
                </div>

            </div>
        </section>
    );
}
