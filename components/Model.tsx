import React from "react";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { a } from "@react-spring/three";
import { BufferGeometry } from "three";
import * as THREE from "three";

interface ModelProps {
  scale?: number;
}

export default function Model({ scale = 1.128 }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/earth.glb");
  return (
    <a.group ref={group}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry as BufferGeometry}
        material={materials["Scene_-_Root"]}
        scale={scale}
      />
    </a.group>
  );
}

useGLTF.preload("/earth.glb");
