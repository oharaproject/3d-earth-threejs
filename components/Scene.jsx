"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import Loader from "./Loader";

const Scene = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ height: "100vh", width: "100%" }}
    >
      <Suspense fallback={<Loader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
