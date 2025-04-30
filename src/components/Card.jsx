import { motion } from "framer-motion";

export default function Card({ title, text, size, icon, x }) {
    return (
        <motion.div
            initial={{ x: x }}
            whileInView={{ x: 0 }}
            whileHover={{ scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className={`
                ${size === "large" ? "sm:w-3/5" : "sm:w-2/5"}
                w-full sm:h-full h-fit max-h-full border-2 border-cyan-500 
                shadow-2xl bg-neutral-100 rounded-2xl flex sm:p-5 p-8 flex-col
            `}
        >
            <div className="flex justify-between items-center text-neutral-700 text-xl sm:text-2xl">
                <h1 className="font-bold">
                    {title.split(" ").slice(0, -1).join(" ")}{" "}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="text-cyan-500"
                    >
                        {title.split(" ").slice(-1)}
                    </motion.span>
                </h1>
                {icon}
            </div>
            <div className="my-auto mt-4">
                <p className="text-neutral-700 text-base sm:text-lg">{text}</p>
            </div>
        </motion.div>
    );
}
