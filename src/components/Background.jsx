import { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import heroBg from '../assets/herobg.png'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Background = () => {
    const bgMap = useLoader(TextureLoader, heroBg)
    const { scene } = useThree()

    const ref = useRef()

    useFrame(({ gl, scene, camera }, delta) => {
        // ref.current.rotation.x -= delta / 10
        // ref.current.rotation.y -= delta / 15

        const geometry = ref.current
        const count = geometry.attributes.position.count

        for (let i = 0; i < count; i++) {
            const x = geometry.attributes.position.getX(i)
            const y = geometry.attributes.position.getY(i)

            // animations
            const anim1 = 0.75 * Math.sin(x * 2 + delta * 0.7)
            const anim2 = 0.25 * Math.sin(x + delta * 0.7)
            const anim3 = 0.1 * Math.sin(y * 15 + delta * 0.7)

            geometry.attributes.position.setZ(i, anim1 + anim2 + anim3)
            geometry.computeVertexNormals()
            geometry.attributes.position.needsUpdate = true
        }

        gl.render(scene, camera)
    })

    return (
        <mesh>
            <planeGeometry ref={ref} args={[18, 10, 15]} />
            <meshBasicMaterial map={bgMap} />
        </mesh>
    )
}

const BackgroundCanvas = () => {
    // need to work on fallback CanvasLoader
    // <Suspense fallback={<CanvasLoader />}>

    return (
        <div className="absolute top-0 left-0 w-full h-screen">
            <Canvas>
                <Suspense fallback={null}>
                    <Background />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default BackgroundCanvas
