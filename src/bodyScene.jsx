import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import BodyModel from "./bodyModel";

export default function BodyScene() {
  const navigate = useNavigate();

  function handleSelect(region) {
    if (!region) return;
    const url = region.toLowerCase().replace(/ /g, "-");
    navigate(`/${url}`);
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        background: "transparent",
        zIndex: 1,
      }}
    >
      <p className="home">Click a muscle to view targeted exercises:</p>

      <Canvas
        camera={{ position: [400, 3, 9], fov: 60 }}
        gl={{ alpha: true }} // ✅ allow transparent canvas
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0); // ✅ fully transparent
        }}
      >
        <ambientLight intensity={0.7} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 2.4}
          rotateSpeed={2}
          enableDamping={true}
          dampingFactor={0.1}
        />

        <BodyModel onSelectRegion={handleSelect} />
      </Canvas>
    </div>
  );
}
