import { useEffect, useRef, useState } from 'react'
import Tilt from 'react-tilt'
import { motion, useAnimation } from 'framer-motion'
import { styles } from '../styles'
import { github, view } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const tiers = ['all', 'professional', 'personal']

const ProjectCard = ({
    name,
    description,
    tags,
    image,
    source_code_link,
    demo_code_link,
    index,
    tier,
    selectedTier,
    hasClicked,
}) => {
    const control = useAnimation()

    useEffect(() => {
        if (selectedTier === 'all' || selectedTier === tier) {
            control.start({ opacity: 1, transform: 'none ' })
        }
    }, [selectedTier])

    return (
        <motion.div
            variants={fadeIn('up', 'spring', index * 0.25, 0.75)}
            animate={hasClicked || window.innerWidth <= 1024 ? control : false}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl w-full h-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
                        {source_code_link != null &&
                            source_code_link !== '' && (
                                <div
                                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                                    onClick={() =>
                                        window.open(source_code_link, '_blank')
                                    }
                                >
                                    <img
                                        src={github}
                                        alt="github"
                                        className="w-1/2 h-1/2 object-contain"
                                    />
                                </div>
                            )}
                        <div
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                            onClick={() =>
                                window.open(demo_code_link, '_blank')
                            }
                        >
                            <img
                                src={view}
                                alt="demo"
                                className="w-1/2 h-1/2 object-cover "
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {description}
                    </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <p
                            key={`${tag.name}-${index}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const TierSelector = ({ handleTierClick, selectedTier }) => {
    const parentRef = useRef()
    const [posData, setPosData] = useState({
        left: 0,
        width: 0,
    })

    useEffect(() => {
        const currentTierElement = parentRef.current.querySelector(
            `[data-tier="${selectedTier}"]`
        )

        setPosData({
            left: `${currentTierElement.offsetLeft}px`,
            width: `${currentTierElement.clientWidth}px`,
        })
    }, [selectedTier])

    return (
        <ul
            className="mt-5 flex flex-wrap w-full justify-center items-center gap-4 relative"
            ref={parentRef}
        >
            <div
                className="absolute top-0 h-full bg-white rounded-xl z-[-1] transition-all duration-300 ease-in-out"
                style={posData}
            ></div>
            {tiers.map((tier) => (
                <li
                    key={tier}
                    data-tier={tier}
                    onClick={handleTierClick}
                    className={`${
                        tier === selectedTier ? 'text-black' : ''
                    } font-semibold text-[18px] flex py-2 px-6 rounded-xl cursor-pointer capitalize transition duration-300`}
                >
                    {tier}
                </li>
            ))}
        </ul>
    )
}

const Works = () => {
    const [selectedTier, setSelectedTier] = useState('all')
    const hasClickedRef = useRef(false)

    let projectsToShow = projects

    if (selectedTier !== 'all') {
        projectsToShow = projects.filter(
            (project) => project.tier === selectedTier
        )
    }

    const handleTierClick = (e) => {
        setSelectedTier(e.target.dataset.tier)

        if (hasClickedRef.current === false) hasClickedRef.current = true
    }

    return (
        <>
            <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Let's have a look at my projects to figure out what I can
                    build.
                </motion.p>
            </div>

            <TierSelector
                handleTierClick={handleTierClick}
                selectedTier={selectedTier}
            />

            <div
                className="mt-20 grid gap-7"
                style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                }}
            >
                {projectsToShow.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        {...project}
                        index={index}
                        selectedTier={selectedTier}
                        hasClicked={hasClickedRef.current}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(Works, 'works')
