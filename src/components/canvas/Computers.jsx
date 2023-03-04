import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
    const computer = useGLTF('./desktop_pc/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 15, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.6 : 0.75}
                position={isMobile ? [0, -2.3, -2] : [0, -4, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')
        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange)

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])

    return (
        // need to work on fallback CanvasLoader
        // <Suspense fallback={<CanvasLoader />}>

        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader isMain={true} />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
                <Preload all />
            </Suspense>
        </Canvas>
    )
}

export default ComputerCanvas
