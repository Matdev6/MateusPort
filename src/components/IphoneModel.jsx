import { useGLTF } from '@react-three/drei';

const IphoneModel = () => {
  const { scene } = useGLTF('/iphone/scene.glb');

  return (
    <primitive
      object={scene}
      scale={0.023}
      position={[0, -1, 0]}
      rotation={[0, 0.5, 0]}
    />
  );
};

export default IphoneModel;
