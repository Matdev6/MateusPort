import { Cpu, LucideLaptop, Gamepad, Brain } from "lucide-react";
import Card from "./Card";


export default function About() {

    return (
        <section
            id="section2"
            className="sm:h-[calc(100vh-80px)] h-max flex bg-grid bg-neutral-100 items-center justify-center scroll-mt-20"
        >

            <div className="sm:w-2/4 w-10/12 h-4/5 flex flex-col sm:gap-6 gap-4 my-4">

                {/* Linha de Cima */}
                <div className="flex flex-col sm:flex-row w-full h-1/2 sm:gap-6 gap-4">

                    <Card
                        title={"Como comecei na Progamação?"}
                        text={"Comecei na programação em fevereiro de 2024, quando tive a oportunidade de ter aulas com o desenvolvedor da empresa onde eu trabalhava. Durante dois meses, ele me apresentou os fundamentos da área, o que despertou meu interesse pela programação. Desde então, venho estudando de forma autodidata por meio de cursos e vídeo aulas, sempre praticando e me dedicando com foco no desenvolvimento frontend."}
                        size={"large"}
                        icon={<LucideLaptop className="sm:h-9 sm:w-9 h-10 w-10 p-1 rounded-full" />}
                        x={-300}
                    />

                    <Card
                        title={"Minhas principais tecnologias"}
                        text={"Hoje, trabalho principalmente com React, TailwindCSS e consumo APIs para dar vida aos projetos. Também uso ferramentas como Git, Figma e Firebase pra entregar soluções completas."}
                        size={"small"}
                        icon={<Cpu className="h-9 w-10 p-1 rounded-full" />}
                        x={300}
                    />

                </div>

                {/* Linha de Baixo */}
                <div className="flex flex-col sm:flex-row w-full h-1/2 sm:gap-6 gap-4">

                    <Card
                        title={"Hobbies e Curiosidades"}
                        text={"Quando não estou codando, estou ouvindo música, jogando ou desenhando ideias no papel. Gosto de ambientes leves, onde posso aprender e contribuir."}
                        size={"small"}
                        icon={<Gamepad className="h-9 w-9 p-1 rounded-full" />}
                        x={-300}
                    />

                    <Card
                        title={"Mentalidade de Trabalho"}
                        text={"Gosto de ouvir o cliente e entender o que ele precisa antes de começar. Prezo por entregar algo que além de bonito, funcione bem e seja fácil de usar. Cada projeto é uma oportunidade de evoluir."}
                        size={"large"}
                        icon={<Brain className="h-9 w-9 p-1 rounded-full" />}
                        x={300}
                    />

                </div>

            </div>
        </section>
    );
};


