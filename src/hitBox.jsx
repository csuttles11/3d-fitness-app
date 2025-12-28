export default function Hitbox({ position, size, region, onSelectRegion }) {
  return (
    <mesh
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        console.log("HITBOX CLICK:", region);
        onSelectRegion(region);
      }}
      visible={false}  
    >
      <boxGeometry args={size} />
      <meshBasicMaterial wireframe color="red" />
    </mesh>
  );
}
