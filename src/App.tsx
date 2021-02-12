import React from 'react'
import { Canvas } from 'react-three-fiber'
import {Physics, usePlane, useBox, BodyProps} from 'use-cannon'
import "./styles.css";


const Plane = (props: BodyProps) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
        <mesh ref={ref} receiveShadow>
            <planeBufferGeometry attach="geometry" args={[1009, 1000]} />
            <shadowMaterial attach="material" color="#171717" />
        </mesh>
    )
}

const Cube = (props: BodyProps) => {
    const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], rotation: [0.4, 0.2, 0.5], ...props }))
    return (
        <mesh receiveShadow castShadow ref={ref}>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

const App = () => {
  return (
    <Canvas shadowMap sRGB gl={{ alpha: false }} camera={{ position: [-1, 2, 5], fov: 50 }}>
      <color attach="background" args={['lightblue']} />
      <hemisphereLight intensity={0.35} />
      <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={2} castShadow />
      <Physics>
          <Plane />
          <Cube />
          <Cube position={[0, 10, -2]} />
          <Cube position={[0, 20, -2]} />
          <Cube position={[0, 30, -2]} />
      </Physics>
    </Canvas>
  );
}
export default App;
