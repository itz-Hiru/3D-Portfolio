import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { SelectiveBloom } from "@react-three/postprocessing";
import React, {
  forwardRef,
  Suspense,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import * as THREE from "three";

const ContactExperience = () => {
  const sceneRef = useRef();

  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} intensity={1.2} />
      <pointLight position={[0, 2, 3]} intensity={10} color="white" />

      <Environment preset="city" />

      <Suspense fallback={null}>
        <GlobeModel ref={sceneRef} />

        {sceneRef.current && (
          <SelectiveBloom
            selection={[sceneRef.current]}
            intensity={1.5}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.0}
          />
        )}
      </Suspense>
    </Canvas>
  );
};

const GlobeModel = forwardRef((_, ref) => {
  const { scene } = useGLTF("/models/contact/globe.glb");
  const modelRef = useRef();
  const controlsRef = useRef();

  const initialRotation = new THREE.Euler(0, Math.PI, 0);
  const initialPosition = new THREE.Vector3(0, 0, 0);

  scene.scale.set(0.00016, 0.00016, 0.00016);

  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.emissive = new THREE.Color("white");
      child.material.emissiveIntensity = 1.2;
      child.material.needsUpdate = true;
    }
  });

  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useImperativeHandle(ref, () => scene);

  useFrame(() => {
    if (!modelRef.current) return;
    const model = modelRef.current;

    if (!isUserInteracting) {
      model.rotation.x += (initialRotation.x - model.rotation.x) * 0.05;
      model.rotation.y += (initialRotation.y - model.rotation.y) * 0.05;
      model.rotation.z += (initialRotation.z - model.rotation.z) * 0.05;
      model.position.lerp(initialPosition, 0.05);
    }
  });

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enableZoom={false}
        autoRotate={!isUserInteracting}
        autoRotateSpeed={0.5}
        onStart={() => setIsUserInteracting(true)}
        onEnd={() => setTimeout(() => setIsUserInteracting(false), 2000)}
      />
      <primitive
        ref={modelRef}
        object={scene}
        position={[0, -1, 0]}
        rotation={[0, Math.PI, 0]}
      />
    </>
  );
});

export default ContactExperience;
