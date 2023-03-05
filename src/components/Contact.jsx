import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { useAppContext } from '../context/appContext'

const Contact = () => {
    const formRef = useRef()

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)
    const { updateAlert, toggleAlert } = useAppContext()

    const handleChange = (e) => {
        const { name, value } = e.target

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const emptyFields = Object.entries(form).filter(
            (pair) => pair[1] === ''
        )

        if (emptyFields.length) {
            updateAlert({
                type: 'error',
                text: `Please fill in all the input fields:${emptyFields.map(
                    (pair) => ' ' + pair[0]
                )}`,
                title: 'Contact Email',
            })
            toggleAlert(true)
            return
        }

        setLoading(true)

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
                import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Nyan',
                    from_email: form.email,
                    to_email: 'phamthanhnhanussh@gmail.com',
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAIL_ACCOUNT_ID
            )
            .then(() => {
                setLoading(false)
                updateAlert({
                    type: 'success',
                    text: `Thank you ${form.name} - ${form.email}. I will get back to you as soon as possible`,
                    title: 'Contact Email',
                })
                toggleAlert(true)
                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            })
            .catch((err) => {
                setLoading(false)
                updateAlert({
                    type: 'error',
                    text: 'Something went wrong when sending your email. Please check your info and try again later',
                    title: 'Contact Email',
                })
                toggleAlert(true)
            })
    }

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden select-none">
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label htmlFor="name" className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <label htmlFor="email" className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <label htmlFor="message" className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your message
                        </span>
                        <textarea
                            row="7"
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What do you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    )
}

export default SectionWrapper(Contact, 'contact')
