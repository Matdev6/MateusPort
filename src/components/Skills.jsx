import React, { useState } from "react";
import Modal from "./Modal"; // importa seu modal
import { HandCoins } from "lucide-react";

const Section3 = () => {
    const [open, setOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState(""); // conteúdo dinâmico do modal

    const cards = [
        {
            img: "html", // ou o import real
            title: "HTML",
            info: "HTML (HyperText Markup Language) é uma linguagem de marcação...",
        },
        {
            img: "css",
            title: "CSS",
            info: "CSS é chamado de linguagem Cascading Style Sheet...",
        },
        {
            img: "js",
            title: "JavaScript",
            info: "JavaScript é uma linguagem de programação para interatividade...",
        },
        {
            img: "react",
            title: "React",
            info: "React é uma biblioteca JavaScript criada pelo Facebook...",
        },
        {
            img: "Tailwind",
            title: "Tailwind",
            info: "Python é uma linguagem de programação poderosa e fácil de aprender...",
        },
        {
            img: "python",
            title: "Python",
            info: "Python é uma linguagem de programação poderosa e fácil de aprender...",
        },
    ];

    const handleCardClick = (info) => {
        setModalInfo(info);
        setOpen(true);
    };

    return (
        <section className="altura-tela scroll-mt-20 w-screen bg-neutral-900 flex flex-col" id="section3">
            <div className="flex flex-wrap justify-center items-center">
                <div className="flex my-8 w-full items-center text-white justify-center gap-4">
                    <h1 className="text-2xl font-semibold border-b-2 border-[#67E8F9]">Habilidades</h1>
                    <HandCoins className="text-[#67E8F9]" />
                </div>
                <div className="w-full flex items-center justify-center mb-8">
                    <p className="text-white font-medium text-lg">Clique em cada card para saber mais... </p>
                </div>
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(card.info)}
                            className="border-b-2 rounded-tl-2xl h-32 w-32  border-[#67E8F9] bg-neutral-800  text-white flex flex-col justify-around items-center cursor-pointer hover:scale-105 transition-transform"
                        >
                            <img src={card.img} alt={card.title} className=" border" />
                            <h1 className="text-2xl">{card.title}</h1>
                        </div>
                    ))}
                </div>

            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <p className="text-lg text-gray-800">{modalInfo}</p>
            </Modal>
        </section>
    );
};

export default Section3;
