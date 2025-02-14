// global.d.ts
import { JSX } from "react";
import {
  MeshProps,
  GroupProps,
  AmbientLightProps,
  DirectionalLightProps,
} from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: GroupProps;
      mesh: MeshProps;
      ambientLight: AmbientLightProps;
      directionalLight: DirectionalLightProps;
    }
  }
}
