import { Html, useProgress } from '@react-three/drei'
import { useAppContext } from '../context/appContext'

const Loader = ({ isMain = false }) => {
    const { progress } = useProgress()

    const { completeLoadMainModels, setPercentage } = useAppContext()

    if (isMain) {
        if (Math.round(progress) === 100) {
            completeLoadMainModels()
        }
        setPercentage(progress)
    }

    return (
        <Html
            as="div"
            center
            style={{
                display: isMain ? 'none' : 'flex',
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
