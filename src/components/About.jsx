import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { cv } from '../assets'

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="w-full">
            <motion.div
                variants={fadeIn('right', 'spring', 0.3 * index, 1)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="w-12 h-12 object-contain"
                    />
                    <h3 className="text-white text-[26px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm a junior web developer specializing in building new digital
                experience. Currently, I've been a JavaScript developer focusing
                on building and maintain web-based ALM toolchains for automotive
                projects.
            </motion.p>
            <motion.a
                variants={fadeIn('up', '', 0.1, 1)}
                className="bg-[#2f80ed] px-4 py-3 rounded-xl mt-5 inline-block cursor-pointer select-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
                href={cv}
            >
                Download my CV
            </motion.a>
            <div
                className="mt-20 grid gap-10"
                style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                }}
            >
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, 'about')
