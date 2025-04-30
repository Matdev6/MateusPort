import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import eu from "../assets/eu.png";
import { motion } from "framer-motion";

export default function Hero() {
    const anoAtual = new Date().getFullYear();
    const d = new Date();
    const dia = d.getDate();
    const mes = d.getMonth();

    const idade = () => {
        if (mes > 6 || (mes === 6 && dia > 6)) {
            return anoAtual - 2005;
        } else {
            return anoAtual - 2005 - 1;
        }
    };

    const scrollToSection = () => {
        const section = document.getElementById("section2");
        if (section) section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="section1"
            className="sm:h-[calc(100vh-80px)] w-full bg-white flex flex-col sm:flex-row items-center relative mt-20 scroll-mt-20"
        >
            {/* Lado Esquerdo (Imagem + Info) */}
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ x: 0, opacity: 1 }}
                className="flex flex-col items-center sm:items-center text-center sm:text-left sm:w-1/2 w-full h-full justify-center"
            >
                <div className="flex flex-col justify-center items-center bg-neutral-200 py-10  w-full h-full px-4 sm:px-0">
                    <img
                        src={eu}
                        alt="Mateus"
                        className="w-44 h-64 sm:w-[267px] sm:h-[405px] mt-8 sm:mt-0 rounded-[38%_70%_60%_40%_/_30%_30%_70%_70%] border-cyan-200 p-1 bg-neutral-400"
                    />
                    <h1 className="sm:text-3xl text-2xl font-bold mt-6 text-neutral-800">Bem-vindo ao meu portfólio</h1>
                    <p className="sm:text-2xl text-xl font-semibold text-neutral-600 mb-1">
                        <span className="text-cyan-500">Mateus Bernardo</span> Dev FrontEnd
                    </p>
                    <p className="text-gray-600 text-sm mb-4">© {anoAtual} matDev</p>

                    <ArrowDown
                        className="animate-bounce h-10 w-10 mt-4 bg-neutral-900 text-neutral-300 hover:text-[#67E8F9] rounded-full p-2 border hidden sm:flex border-neutral-800 cursor-pointer hover:bg-neutral-800 hover:border-[#67E8F9] transition-colors shadow-md shadow-neutral-800/60"
                        onClick={scrollToSection}
                    />
                </div>
            </motion.div>

            {/* Lado Direito (Texto e Botões) */}
            <div className="sm:w-1/3 w-full h-full flex flex-col justify-center sm:ml-8 py-10 px-4 sm:px-0 text-center sm:text-left">
                <h1 className="text-cyan-500 font-bold text-2xl sm:text-5xl">
                    Transformando Ideias em Experiências Web Incríveis
                </h1>
                <p className="text-neutral-500 text-md sm:text-xl my-6">
                    Desenvolvedor Front-End com foco em criar interfaces web responsivas e dinâmicas. Dedicado a entregar soluções que combinam estética e funcionalidade para uma ótima experiência do usuário.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-2 sm:mt-1 mb-8 sm:mb-0 items-center sm:items-start">
                    <button className="bg-cyan-500 border-cyan-800 text-neutral-100 px-6 py-2 sm:px-6 sm:py-3 font-semibold text-md rounded-3xl hover:bg-cyan-600 transition">
                        Entrar em contato
                    </button>
                    <button className="border border-neutral-900 text-neutral-900 px-6 py-2 sm:px-6 sm:py-3 text-md rounded-3xl font-medium hover:bg-neutral-100 transition">
                        Baixar currículo
                    </button>
                </div>

                {/* Redes sociais laterais - só desktop */}
                <div className="absolute right-5 bottom-4 sm:flex hidden flex-col items-center justify-center gap-4">
                    <div className="relative animate-pulse border-2 h-[51dvh] border-cyan-500 rounded-2xl"></div>
                    <Github className="text-neutral-50 fill-white bg-neutral-900 h-8 w-8 pt-[6px] rounded-full" />
                    <Linkedin className="fill-white text-transparent bg-blue-600 p-[3px] h-8 w-8 rounded-sm" />
                    <Twitter className="fill-cyan-500 text-cyan-500 w-8 h-8" />
                    <div className="relative animate-pulse border-2 h-[20dvh] border-cyan-500 rounded-2xl"></div>
                </div>
            </div>
        </section>
    );
}
