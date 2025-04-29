

export default function ProjectSlide({ img, title, description, tec, click }) {

    return (
        <div 
        onClick={click}
        className="bg-white p-4 flex flex-col gap-4 cursor-pointer">
            <div className="h-max w-full flex items-center justify-center overflow-hidden rounded-lg">
                <img
                    src={img}
                    alt="Projeto estúdio musical"
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <h1>{title}</h1>
            <p className="text-neutral-700">
                {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
                {tec.map((item) => (
                    <span key={item} className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold" >
                        {item}
                    </span>
                ))}
            </div>


        </div>
    )
}
