import Slider from './Slider';
import projeto1 from "../assets/projeto1.jpeg";

export default function Projects() {
    return (
        <section
            id="section4"
            className="altura-tela w-screen scroll-mt-20 bg-neutral-950  overflow-hidden flex flex-col  items-center "
        >

            {/* CONTEÚDO */}
            <div className='flex '>
                <h1 className="my-12 text-3xl font-semibold text-neutral-100">
                    Sinta-se à vontade para dar uma conferida nos meus projetos.
                </h1>
            </div>
            <div className='mt-10'>
               <Slider />
            </div>
          

        </section>
    );
}
