import { motion } from "motion/react"

export default function CardSkills({color, img, title, description }){
    return(
        <motion.div 
        initial={{ opacity:0, scale:0 }}
        whileInView={{ opacity:1, scale:1 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 0.9 }}
        className={`bg-cyan-50 p-6 rounded-xl flex flex-col sm:h-72  justify-between shadow-lg s`}>
            <div>
                <img src={img} alt="" className="h-14 w-14 p-3 bg-cyan-100 rounded-lg" />
            </div>
            <div>
                <h1 className={`text-cyan-500 border-b border-cyan-100 font-medium text-lg`}>{title}</h1>
                <p className="text-sm text-cyan-800 mt-2">{description}</p>
            </div>
        </motion.div>
    )
}