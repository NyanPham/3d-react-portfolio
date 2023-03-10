import { Html, useProgress } from '@react-three/drei'
import { useAppContext } from '../context/appContext'

const Loader = ({ isMain = false }) => {
    const { progress } = useProgress()

    const { mainModelsLoaded, completeLoadMainModels, setPercentage } =
        useAppContext()

    if (isMain) {
        if (!mainModelsLoaded && Math.round(progress) > 80) {
            completeLoadMainModels()
        }
        setPercentage(progress)
    }

    return (
        <Html
            as="div"
            center
            style={{
                display: isMain && Math.round(progress) <= 80 ? 'none' : 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <span className="canvas-loader"></span>
            <p
                style={{
                    fontSize: 14,
                    color: '#F1F1F1',
                    fontWeight: 800,
                    marginTop: 40,
                }}
            >
                {progress.toFixed(2)}%
            </p>
        </Html>
    )
}

export default Loader
