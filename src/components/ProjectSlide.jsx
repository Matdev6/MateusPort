export default function ProjectSlide({ img, title, description, tec, click }) {
    return (
        <div
            onClick={click}
            className="bg-white p-4 flex flex-col gap-4 cursor-pointer rounded-xl w-full max-w-md mx-auto md:max-w-full"
        >
            <div className="aspect-video w-full overflow-hidden rounded-lg flex items-center justify-center">
                <img
                    src={img}
                    alt="Projeto estúdio musical"
                    className="w-full h-full object-cover"
                />
            </div>

            <h1 className="text-base md:text-lg font-semibold">{title}</h1>

            <p className="text-neutral-700 text-sm md:text-base">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {tec.map((item) => (
                    <span
                        key={item}
                        className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs md:text-sm font-semibold"
                    >
                        {item}
                    </span>
                ))}
            </div>

            <div className="flex flex-wrap gap-2">
                <a
                    href="#"
                    className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm font-semibold"
                >
                    Deploy
                </a>
                <a
                    href="#"
                    className="bg-neutral-900 text-white px-4 py-1 rounded-full text-sm font-semibold"
                >
                    Github
                </a>
            </div>
        </div>
    );
}
