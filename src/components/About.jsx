import { Cpu, LucideLaptop, Gamepad, Brain } from "lucide-react";
import { motion } from "motion/react";


export default function About() {

    return (
        <section
            id="section2"
            className="sm:h-[calc(100vh-80px)] h-max flex items-center justify-center scroll-mt-20"
        >
            <div className="sm:w-2/4 w-10/12 h-4/5 flex flex-col sm:gap-6 gap-4 my-4">

                {/* Linha de Cima */}
                <div className="flex flex-col sm:flex-row w-full h-1/2 sm:gap-6 gap-4">
                    <motion.div
                        initial={{ x: -300 }}
                        whileInView={{ x: 0 }}
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 0.7 }}
                        className="sm:w-3/5 sm:h-full h-min-max h-max shadow-xl bg-neutral-200 rounded-2xl flex  p-6 flex-col"
                    >
                        <div className="flex text-neutral-700 justify-between text-xl">
                            <h1 className="font-bold">Como comecei na Progamação?</h1>
                            <LucideLaptop className="border-2 sm:h-9 sm:w-9 h-10 w-10 p-1 rounded-full text-cyan-" />
                        </div>
                        <div className="my-auto">
                            <p className="text-neutral-700 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perspiciatis et laudantium? Voluptates aliquam ullam iste vitae, unde hic, sed ipsa impedit quam atque reprehenderit ipsum saepe animi, exercitationem velit!</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 300 }}
                        whileInView={{ x: 0 }}
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 0.7 }}
                        className="sm:w-2/5 sm:h-full h-full bg-neutral-200 rounded-xl shadow-2xl flex items-center justify-center flex-col p-6"
                    >
                        <div className="flex text-neutral-800 justify-between text-xl">
                            <h1 className="font-bold">Minhas principais tecnologias</h1>
                            <Cpu className="border-2 h-9 w-9 p-1 rounded-full" />
                        </div>
                        <div className="my-auto">
                            <p className="text-neutral-700 mt-2">Hoje, trabalho principalmente com React, TailwindCSS e consumo APIs para dar vida aos projetos. Também uso ferramentas como Git, Figma e Firebase pra entregar soluções completas.</p>
                        </div>
                    </motion.div>
                </div>

                {/* Linha de Baixo */}
                <div className="flex flex-col sm:flex-row w-full h-1/2 sm:gap-6 gap-4">
                    <motion.div
                        initial={{ x: -300 }}
                        whileInView={{ x: 0 }}
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 0.7 }}
                        className="sm:w-2/5 sm:h-full h-max bg-neutral-200 rounded-2xl shadow-xl flex items-center justify-center flex-col p-6"
                    >
                        <div className="flex justify-between text-neutral-700 w-full text-xl">
                            <h1 className="font-bold">Hobbies e Curiosidades</h1>
                            <Gamepad className="border-2 h-9 w-9 p-1 rounded-full" />
                        </div>
                        <div className="my-auto">
                            <p className="text-neutral-700 mt-2">Quando não estou codando, estou ouvindo música, jogando ou desenhando ideias no papel. Gosto de ambientes leves, onde posso aprender e contribuir.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 300 }}
                        whileInView={{ x: 0 }}
                        whileHover={{ scale: 0.95 }}
                        transition={{ duration: 0.7 }}
                        className="sm:w-3/5 sm:h-full h-max bg-neutral-200 rounded-2xl flex shadow-xl items-center justify-center flex-col p-6"
                    >
                        <div className="flex w-full justify-between text-neutral-700 text-xl">
                            <h1 className="font-bold">Mentalidade de trabalho</h1>
                            <Brain className="border-2 h-9 w-9 p-1 rounded-full" />
                        </div>
                        <div className="my-auto">
                            <h1 className="text-neutral-700 mt-2">
                                Gosto de ouvir o cliente e entender o que ele precisa antes de começar. Prezo por entregar algo que além de bonito, funcione bem e seja fácil de usar. Cada projeto é uma oportunidade de evoluir.
                            </h1>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};


