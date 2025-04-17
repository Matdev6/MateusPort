import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import projeto1 from "../assets/projeto1.jpeg";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <div className="w-full px-4">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={-80} // espaço negativo pra aparecer os lados
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {[1, 2, 3].map((item) => (
          <SwiperSlide
            key={item}
            className="!w-[80vw] sm:!w-[60vw] md:!w-[40vw] lg:!w-[35vw] xl:!w-[30vw]"
          >
            <div className="flex justify-center items-center flex-col gap-12">
              <div className="bg-neutral-900 border-2 border-cyan-300/60 p-4 rounded-2xl hover:scale-90 transition shadow-lg">
                <img src={projeto1} alt="projeto" className="rounded-lg mb-4 w-full" />
                <h3 className="text-xl text-white font-semibold">GhostLab</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Pequena descrição do projeto e seu objetivo.
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  <span className="text-xs bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded-full">React</span>
                  <span className="text-xs bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded-full">Tailwind</span>
                  <span className="text-xs bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded-full">FastApi</span>
                  <span className="text-xs bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded-full">PostgreSQL</span>
                </div>
                <div className="flex justify-between mt-4">
                  <a href="#" className="text-cyan-400 hover:underline">Ver Projeto</a>
                  <a href="#" className="text-cyan-400 hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
