import { useState } from "react";
import quadriculado from "../assets/quadriculado.svg";
import projects from "./projectsData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectSlide from "./ProjectSlide";
import Modal from "./Modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


export default function Projects() {

    const [openModal, setOpenModal] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section
            id="section4"
            className="relative sm:h-[calc(100vh-80px)] min-h-max h-max scroll-mt-20 w-screen flex flex-col items-center 
                 bg-white bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${quadriculado})` }}
        >
            <div className="w-3/4 text-center mt-16 mb-8">
                <h1 className="sm:text-4xl text-3xl font-extrabold text-cyan-500 underline">
                    Confira Meus Projetos
                </h1>
                <p className="mt-3 sm:text-2xl text-xl font-medium text-neutral-600">
                    Clique em cada projeto para saber detalhes e tecnologias usadas.
                </p>
            </div>

            <div className="relative flex items-center justify-center w-4/5 md:w-2/3 lg:w-2/5  h-auto min-h-[400px] border  rounded-2xl shadow-lg mb-8">

                <button className="custom-prev absolute sm:left-[-3.5rem] left-[-2.5rem] top-1/2 -translate-y-1/2 z-10 border border-cyan-600 animate-bounce text-cyan-600 sm:p-2 p-1 rounded-full hover:bg-opacity-75 hover:bg-cyan-100 ">
                    <ArrowLeft />
                </button>

                <Swiper
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}
                    modules={[Navigation]}
                    className="mySwiper w-full bg-white rounded-xl"
                >
                    {projects.map((project, index) =>
                        <SwiperSlide key={index}>
                            <ProjectSlide
                                click={() => {
                                    setSelectedProject({
                                        imgs: project.img,
                                        title: project.title,
                                        description: project.descriptionModal,
                                        tec: project.tecs,
                                        deploy: project.deploy,
                                        git: project.git
                                    });
                                    setOpenModal(true);
                                }}
                                img={project.img[0]}
                                title={project.title}
                                description={project.description}
                                tec={project.tecs}
                                deploy={project.deploy}
                                git={project.git}
                            />
                        </SwiperSlide>)}
                </Swiper>



                {/* Botão próximo - corrigido para custom-next */}
                <button className="custom-next absolute sm:right-[-3.5rem] right-[-2.5rem] top-1/2 -translate-y-1/2 z-10 border border-cyan-600 animate-bounce text-cyan-600 sm:p-2 p-1 rounded-full hover:bg-opacity-75 hover:bg-cyan-100">
                    <ArrowRight />
                </button>
            </div>
            {openModal && selectedProject && (
                <Modal onClose={() => setOpenModal(false)} open={openModal}>
                    <div className="flex flex-col gap-4">
                        <h1 className="mx-auto">Deslize para ver as imagens do projeto</h1>
                        <Swiper
                            slidesPerView={1}
                            navigation
                            className="w-full">
                            {selectedProject.imgs.map((img) =>
                                <SwiperSlide key={img}>
                                    <img src={img} alt={selectedProject.title} className="w-full rounded-lg" />
                                </SwiperSlide>
                            )}
                        </Swiper>
                        <h1 className="text-xl font-bold">{selectedProject.title}</h1>
                        <p className="text-neutral-700">{selectedProject.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {selectedProject.tec.map((item) => (
                                <span key={item} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <a
                                href={selectedProject.deploy}
                                target="_blank"
                                className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm font-semibold"
                            >
                                Deploy
                            </a>
                            <a
                                href={selectedProject.git}
                                target="_blank"
                                className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm font-semibold"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </Modal>
            )}

        </section>
    );
}
