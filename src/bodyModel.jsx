import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Hitbox from "./hitBox";

export default function BodyModel({ onSelectRegion }) {
  const { scene } = useGLTF("/model2.glb");

  const spinner = useRef();
  useFrame(() => {
    if (spinner.current) spinner.current.rotation.y += 0.017;
  });

  return (
    <group scale={1.1} position={[0, -55, 0]} ref={spinner}>
      {/* 3D MODEL */}
      <primitive object={scene} />

      {/* CHEST */}
      <Hitbox
        region="Chest"
        position={[0, 140, 10]}
        size={[40, 20, 30]}
        onSelectRegion={onSelectRegion}
      />

      {/* GLUTES */}
      <Hitbox
        region="Glutes"
        position={[0, 90, -10]}
        size={[30, 10, 20]}
        onSelectRegion={onSelectRegion}
      />

      {/* ARMS */}
      <Hitbox
        region="Bicep"
        position={[-33, 140, 3]}
        size={[26, 12, 12]}
        onSelectRegion={onSelectRegion}
      />

          <Hitbox
        region="Tricep"
        position={[-33, 140, -12]}
        size={[26, 12, 12]}
        onSelectRegion={onSelectRegion}
      />

      <Hitbox
        region="Tricep"
        position={[40, 140, -12]}
        size={[26, 12, 12]}
        onSelectRegion={onSelectRegion}
      />

            <Hitbox
        region="Bicep"
        position={[40, 140, 3]}
        size={[26, 12, 12]}
        onSelectRegion={onSelectRegion}
      />

      {/* ABS */}
      <Hitbox
        region="Abs"
        position={[0, 115, 10]}
        size={[30, 25, 25]}
        onSelectRegion={onSelectRegion}
      />

      {/* QUADS */}
      <Hitbox
        region="Quads"
        position={[-13, 76, 10]}
        size={[10, 45, 10]}
        onSelectRegion={onSelectRegion}
      />
      <Hitbox
        region="Quads"
        position={[13, 76, 10]}
        size={[10, 45, 10]}
        onSelectRegion={onSelectRegion}
      />

      {/* HAMSTRINGS */}
      <Hitbox
        region="Hamstrings"
        position={[-13, 70, -10]}
        size={[10, 30, 10]}
        onSelectRegion={onSelectRegion}
      />
      <Hitbox
        region="Hamstrings"
        position={[13, 70, -10]}
        size={[10, 30, 10]}
        onSelectRegion={onSelectRegion}
      />

      {/* CALVES */}
      <Hitbox
        region="Calf"
        position={[-13, 36, -10]}
        size={[10, 30, 10]}
        onSelectRegion={onSelectRegion}
      />
      <Hitbox
        region="Calf"
        position={[13, 36, -10]}
        size={[10, 30, 10]}
        onSelectRegion={onSelectRegion}
      />

      {/* BACK */}
      <Hitbox
        region="Back"
        position={[0, 125, -10]}
        size={[30, 50, 25]}
        onSelectRegion={onSelectRegion}
      />
    </group>
  );
}
