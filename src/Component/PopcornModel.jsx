// src/components/PopcornModel.jsx
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

const Popcorn = () => {
  const { scene } = useGLTF('/models/popcorn/scene.gltf') // served from public folder
  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, -1, 0]}
      rotation={[0, Math.PI, 0]}
    />
  )
}

const PopcornModel = () => {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <Popcorn />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default PopcornModel
