import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}) => {
    return (
        <motion.div
            variants={fadeIn('', 'spring', index * 0.5, 0.75)}
            className="bg-black-200 p-10 rounded-3xl w-full select-none"
        >
            <p className="text-white font-black text-[48px] leading-none">"</p>
            <div className="mt-1 ">
                <p className="text-white tracking-wider text-[18px]">
                    {testimonial}
                </p>
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                        <p className="text-white font-medium text-[16px]">
                            <span className="blue-text-gradient">@</span> {name}
                        </p>
                        <p className="mt-1 text-secondary text-[12px]">
                            {designation} of {company}
                        </p>
                    </div>
                    <img
                        src={image}
                        alt={`feedback by ${name}`}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                </div>
            </div>
        </motion.div>
    )
}

const Feedbacks = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-[20px]">
            <div
                className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
            >
                <motion.div variant={textVariant()}>
                    <p className={styles.sectionSubText}>What others say</p>
                    <h2 className={styles.sectionHeadText}>Testimonials.</h2>
                </motion.div>
            </div>
            <div
                className={`${styles.padding} -mt-32 pb-14 flex flex-wrap gap-7`}
            >
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={testimonial.name}>
                            <FeedbackCard index={index} {...testimonial} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default SectionWrapper(Feedbacks, '')
