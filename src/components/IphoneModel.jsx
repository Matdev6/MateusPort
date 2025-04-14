import { useGLTF } from '@react-three/drei';

const IphoneModel = () => {
  const { scene } = useGLTF('/iphone/scene.glb'); // Certifique-se que o caminho está certo

  return (
    <primitive
      object={scene}
      scale={0.023} // <-- Reduza isso se ainda estiver grande (tente 0.005, 0.002...)
      position={[0, -1, 0]} // <-- Ajuste vertical, se necessário
      rotation={[0, Math.PI, 0]} // <-- Gira se estiver virado
    />
  );
};

export default IphoneModel;
