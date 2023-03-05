import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { nyanLogo, menu, close } from '../assets'

const Hamburger = ({ toggle, setToggle, active, setActive }) => {
    return (
        <div className="sm:hidden flex flex-1 justify-end items-center">
            {/* <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
            /> */}
            <div
                className="h-[28px] w-[28px] flex flex-col justify-center items-center gap-2 cursor-pointer"
                onClick={() => setToggle(!toggle)}
            >
                <span
                    className={`${
                        toggle ? 'w-full rotate-45 translate-y-[11px]' : 'w-2/3'
                    }  h-[3px] bg-gray-500 shrink-0 self-end transition-all duration-300`}
                ></span>
                <span
                    className={`${
                        toggle ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                    } w-full h-[3px] bg-gray-500 shrink-0 transition-all duration-300`}
                ></span>
                <span
                    className={`${
                        toggle ? '-rotate-45 -translate-y-[11px]' : ''
                    } w-full h-[3px] bg-gray-500 shrink-0 transition-all duration-300`}
                ></span>
            </div>
            <div
                className={`${
                    !toggle
                        ? 'opacity-0 pointer-events-none scale-0 -translate-y-12 -translate-x-4'
                        : 'opacity-100 pointer-events-auto scale-100 translate-y-0 translate-x-0'
                } p-6 flex black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition duration-300 origin-top-right`}
            >
                <ul className="list-none flex justify-end items-start flex-col gap-4">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? 'text-white'
                                    : 'text-secondary'
                            } font-poppins font-medium cursor-pointer text-[16px]`}
                            onClick={() => {
                                setActive(link.title)
                                setToggle(!toggle)
                            }}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('')
                        window.scrollTo(0, 0)
                    }}
                >
                    <img
                        src={nyanLogo}
                        alt="logo"
                        className="w-28 h-18 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer flex gap-2">
                        <span className="sm:block hidden">| JS Developer</span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${
                                active === link.title
                                    ? 'text-white'
                                    : 'text-secondary'
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <Hamburger
                    toggle={toggle}
                    setToggle={setToggle}
                    active={active}
                    setActive={setActive}
                />
            </div>
        </nav>
    )
}

export default Navbar
