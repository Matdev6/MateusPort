import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import react from "../assets/react.png"

const Skills = () => {

    const cards = [
        { img: html },
        { img: css },
        { img: js},
        { img: react}
    ]

    return (
        <section className="altura-tela scroll-mt-20  w-screen bg-primary" id="section3">
            <div className=" flex border altura-tela ">
                <h1 className="text-white text-3xl font-medium h-max m-auto ">Habilidades</h1>
                <p></p>
                <div className="mx-auto mt-40 gap-2 flex">
                    {cards.map((card) => (
                        <div
                            key={card.index}
                            className="w-40 h-40 shadow-xl bg-secundary  rounded-lg flex"
                        >
                            <img src={card.img} alt="html" className="h-16 m-auto" />
                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}

export default Skills