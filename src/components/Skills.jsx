import cards from "./skillsCardsInfo";
import CardSkills from "./CardSkills";

const Skills = () => {
    return (
        <section className="sm:h-[calc(100vh-80px)] min-h-max h-max scroll-mt-20 w-screen flex flex-col bg-neutral-100 items-center" id="section3">
            <div className="sm:w-3/5 h-full mx-4">
                <div className="flex flex-col b sm:flex-row  my-10 w-full justify-between items-center gap-4 sm:gap-0">
                    <h1 className="text-3xl sm:text-4xl font-semibold  text-cyan-500 sm:w-1/3">Minhas Habilidades e Tecnologias</h1>
                    <p className="text-neutral-600 text-md sm:w-[50%] bor">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In aut, neque, fugiat recusandae cum eius mollitia iste fuga, provident illo eum ex voluptatibus laboriosam quae consequatur ipsam atque? Soluta, minus.</p>
                </div>
                <div className="grid sm:grid-cols-4 grid-cols-2  sm:gap-8 gap-4 mb-4">

                    {cards.map((card, index) =>
                        <CardSkills
                            key={index}
                            img={card.img}
                            title={card.title}
                            description={card.info}
                        />)}

                </div>
            </div>
        </section>
    );
};

export default Skills;
