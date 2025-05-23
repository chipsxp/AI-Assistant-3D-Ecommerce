import React, { useEffect } from "react"; // Added useEffect
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  console.log("Available nodes:", nodes); // Add this line

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  // Set anisotropy for the logo texture
  useEffect(() => {
    if (logoTexture) {
      logoTexture.anisotropy = 16;
      // logoTexture.needsUpdate = true; // May be needed if texture is already in use
    }
  }, [logoTexture]);

  useFrame((_, delta) => {
    // Ensure materials.lambert1 exists
    if (materials.lambert1) {
      // Access the color safely as a dynamic property using bracket notation
      // @ts-ignore
      const materialColor = materials.lambert1['color'];
      if (materialColor) {
        // @ts-ignore - Color property exists at runtime
        easing.dampC(
          materialColor, 
          snap.color, 
          0.25, 
          delta
        );
      }
    }
  });

  const stateString = JSON.stringify(snap);

  return (
    <group key={stateString}>
      <mesh
        castShadow
        // Ensure nodes.T_Shirt_male exists and .geometry is correct
        geometry={
          // @ts-ignore - T_Shirt_male is a Mesh with geometry property
          nodes.T_Shirt_male?.geometry
        }
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture &&
          logoTexture && ( // Added check for logoTexture
            <Decal
              position={[0, 0.04, 0.15]}
              rotation={[0, 0, 0]}
              scale={0.15}
              map={logoTexture}
              depthTest={false}
            />
          )}
      </mesh>
    </group>
  );
};

export default Shirt;
