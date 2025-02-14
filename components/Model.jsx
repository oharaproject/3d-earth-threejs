"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/earth.glb");

  return (
    <a.group ref={group} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
        scale={1.128}
      />
    </a.group>
  );
}

useGLTF.preload("/earth.glb");
