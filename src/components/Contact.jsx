import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import IphoneModel from "./IphoneModel";
import { Mail, Linkedin, Github, Instagram, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
    return (
        <section
            className="sm:h-[calc(100vh-80px)] scroll-mt-20 bg-neutral-100"
            id="section5"
        >
            <div className="flex w-full h-full flex-col-reverse sm:flex-row">
                {/* MODELO 3D */}
                <motion.div
 
                    transition={{ duration: 0.8 }}
                    className="h-[400px] sm:h-full flex items-center justify-center sm:w-1/2">
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        {/* Luz ambiente suave só pra base */}
                        <ambientLight intensity={2} />

                        {/* Luz direcional principal vindo de cima/direita */}
                        <directionalLight
                            position={[2, 2, 2]}
                            intensity={1.2}
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                        />

                        {/* Luz de preenchimento oposta (mais fraca) */}
                        <pointLight position={[-2, -1, 3]} intensity={0.4} />

                        {/* Modelo */}
                        <IphoneModel />

                        {/* Controles */}
                        <OrbitControls
                            enableZoom={false}
                            maxDistance={10}
                            minDistance={4}
                            enablePan={false}
                            rotateSpeed={0.6}
                        />
                    </Canvas>

                </motion.div>

                {/* CONTATOS */}
                <div className="sm:w-1/2 h-full flex flex-col justify-center items-start gap-6 px-8 mt-8 sm:mt-0">
                    <h1 className="text-4xl font-semibold text-cyan-600">
                        Contato & Redes
                    </h1>
                    <p className="text-neutral-500 max-w-md">
                        Fico feliz em trocar ideias ou colaborar em projetos. Me chama nos links abaixo:
                    </p>

                    <div className="flex flex-col gap-4">
                        <ContactLink
                            icon={<Mail className="w-5 h-5" />}
                            label="Email"
                            value="mateusousa123@hotmail.com"
                            href="mailto:mateusousa123@hotmail.com"
                        />
                        <ContactLink
                            icon={<Phone className="w-5 h-5" />}
                            label="WhatsApp"
                            value="(31) 97569-5921"
                            href="https://wa.me/5531975695921"
                        />
                        <ContactLink
                            icon={<Linkedin className="w-5 h-5" />}
                            label="LinkedIn"
                            value="/in/mateus-bernardo-38542533a"
                            href="https://www.linkedin.com/in/mateus-bernardo-38542533a/"
                        />
                        <ContactLink
                            icon={<Github className="w-5 h-5" />}
                            label="GitHub"
                            value="@Matdev6"
                            href="https://github.com/Matdev6"
                        />
                        <ContactLink
                            icon={<Instagram className="w-5 h-5" />}
                            label="Instagram"
                            value="@mateus.b6"
                            href="https://www.instagram.com/mateus.b6/"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Componente para cada link
function ContactLink({ icon, label, value, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-neutral-700 hover:text-black transition-all"
        >
            <span className="p-2 bg-neutral-200 rounded-full">{icon}</span>
            <div className="flex flex-col">
                <span className="text-sm font-medium">{label}</span>
                <span className="text-sm">{value}</span>
            </div>
        </a>
    );
}
