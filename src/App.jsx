import { Suspense, lazy } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { About, Hero, Navbar } from './components'

const Feedbacks = lazy(() => import('./components/Feedbacks'))
const Experience = lazy(() => import('./components/Experience'))
const Works = lazy(() => import('./components/Works'))
const Tech = lazy(() => import('./components/Tech'))
const Contact = lazy(() => import('./components/Contact'))
const StarsCanvas = lazy(() => import('./components/canvas/Stars'))

function App() {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Suspense fallback={<div>Loading</div>}>
                    <Experience />
                    <Tech />
                    <Works />
                    <Feedbacks />
                    <div className="relative z-0">
                        <Contact />
                        <StarsCanvas />
                    </div>
                </Suspense>
            </div>
        </BrowserRouter>
    )
}

export default App
