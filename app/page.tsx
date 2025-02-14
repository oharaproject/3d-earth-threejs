"use client";
import React from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

const Home = () => {
  return (
    <section className="w-full h-screen relative">
      <Scene />
    </section>
  );
};

export default Home;
