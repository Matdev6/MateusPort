import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import IphoneModel from "./IphoneModel";

export default function Contact() {
    return (
        <section>
            <div className="w-96 h-96 flex items-center border rounded-full">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 2, 5]} intensity={1} />
                    <IphoneModel />
                    <OrbitControls enableZoom={false} maxDistance={10} minDistance={4} />
                </Canvas>
            </div>
        </section>
    )
}