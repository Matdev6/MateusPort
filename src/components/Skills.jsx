import React, { useState } from "react";
import Modal from "./Modal"; // importa seu modal
import { HandCoins } from "lucide-react";
import cards from "./skillsCardsInfo";
import { motion } from "motion/react";

const Skills = () => {
    const [open, setOpen] = useState(false);
    const [modalInfo, setModalInfo] = useState({ info: "", img: "", title: "" }); // conteúdo dinâmico do modal



    const handleCardClick = (info, img, title) => {
        setModalInfo({info, img, title});
        console.log(modalInfo)
        setOpen(true);
    };

    return (
        <section className="altura-tela scroll-mt-20 w-screen bg-gradient-to-t to-neutral-950 via-neutral-800 from-[#48a2ad] flex flex-col" id="section3">
            <div className="flex flex-wrap justify-center items-center">
                <div className="flex my-8 w-max items-center text-white justify-center gap-4 bg-[#67E8F9] py-1 px-2 rounded-2xl shadow-[0_0_8px_4px_#67E8F9]">
                    <h1 className="text-2xl font-semibold border-b-2  border-[#67E8F9] ml-4 text-neutral-800">Habilidades</h1>
                    <HandCoins className="text-neutral-800 border-2 h-9 w-9 p-1  rounded-full border-neutral-800 bg-n" />

                </div>
                <div className="w-full flex items-center justify-center mb-8">
                    <p className="text-white font-medium text-lg mt-4">Clique em cada card para saber mais... </p>
                </div>
                <motion.div 
                    initial={{ y:300 }}
                    whileInView={{ y:0 }}
                    transition={{ duration: 0.5 }}
                    className="grid sm:grid-cols-4 grid-cols-2 gap-4 sm:mt-28 ">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => handleCardClick(card.info, card.img, card.title)}
                            className="border-b-2 rounded-tl-2xl h-32 w-32  border-[#67E8F9] bg-neutral-800   text-white flex flex-col justify-evenly items-center cursor-pointer hover:scale-105 transition-transform"
                        >
                            <img src={card.img} alt={card.title} className="h-12 w-12" />
                            <h1 className="text-xl text-[#67E8F9] font-semibold">{card.title}</h1>
                        </div>
                    ))}
                </motion.div>

            </div>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="flex flex-col items-center text-gray-200 ">
                    <img src={modalInfo.img} alt={modalInfo.title} className="w-12 h-12 my-2" />
                    <h2 className="text-xl font-bold text-[#67E8F9]">{modalInfo.title}</h2>
                    <p className="text-lg mt-2 text-center sm:w-full borders">{modalInfo.info}</p>
                </div>
            </Modal>
        </section>
    );
};

export default Skills;
