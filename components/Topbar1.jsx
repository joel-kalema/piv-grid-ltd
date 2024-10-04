"use client"

import { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

import Link from 'next/link'
import React from 'react'

export const navData = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "About",
        link: "/louer"
    },
    {
        id: 4,
        title: "Contact",
        link: "/vendre"
    }
]

const Nav = () => {
    const [active, setActive] = useState('nav_close');
    const [fix, setFix] = useState(false)

    const pathname = usePathname();

    const navToggle = () => (active === 'nav_active' ? setActive('nav_close') : setActive('nav_active'));

    const content = (title) => {
        setColor([title])
    }

    function setFixed() {
        window.scrollY >= 10 ? setFix(true) : setFix(false)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", setFixed);
    }

    return (
        <div className={
            fix ?
                'flex transition duration-400 ease-in-out fixed top-0 w-[100%] justify-between items-center px-6 py-4 md:px-28 md:py-2 z-50 bg-[#fff] text-[#231f20] shadow-lg'
                : 'flex transition duration-400 ease-in-out fixed top-0 w-full justify-between items-center px-6 py-4 md:px-28 md:py-2 z-50 text-[#fff]'
        }>
            <Link href='/'>
                <Image src={fix ? '/logo.png' : (pathname == '/' && !fix) ? '/logo.png' : '/logo.png'} height={80} width={100} alt="logo" className='md:w-10 lg:w-20' />
            </Link>
            <div onClick={navToggle} className={fix ? 'lg:hidden text-xl text-[#000]' :(pathname == '/' && !fix) ? 'lg:hidden text-xl text-[#fff]' : 'lg:hidden text-xl text-[#000]'}>
                <CgMenuRight />
            </div>
            <div className='w-[25%] hidden lg:flex justify-between items-center'>
                {navData.map((nav) => (
                    <Link key={nav.id} href={nav.link}
                        className={
                            pathname === nav.link
                                ? 'text-[#2a9df4] rounded-3xl'
                                : 'hover:text-[#2a9df4] text-[#2d2d2d] rounded-3xl transition-all duration-500'
                        }
                    >{nav.title}</Link>
                ))}
            </div>
            <div className="hidden gap-4 lg:flex items-center">
                <Link href="mailto:Julien@gmail.com" className="">Julien@gmail.com</Link>
                <Link href="/contact" className="bg-[#2a9df4] text-white px-6 py-2 rounded-3xl hover:shadow-xl">
                    Contacter
                </Link>
            </div>


            <div className={`${active} backdrop-blur-xl bg-[#041621]/90`}>
                <div className='relative w-[80%] h-[100%] bg-[#fff]'>
                    <AiOutlineClose className="absolute text-[#000] top-4 right-4 text-xl" onClick={navToggle} />
                    <div className='flex flex-col px-10 py-10 text-xl'>
                        {navData.map((nav) => (
                            <Link onClick={navToggle} key={nav.id} href={nav.link} className={fix ? 'text-[#000] mt-6' : 'text-[#000] mt-6'}>{nav.title}</Link>
                        ))}
                    </div>
                    <div className="hidden gap-4 lg:flex items-center">
                        <Link href="mailto:Julien@gmail.com" className="">Julien@gmail.com</Link>
                        <Link href="/contact" className="bg-[#2a9df4] text-white px-6 py-2 rounded-3xl hover:shadow-xl">
                            Contacter
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Nav
