"use client"

import React, { useState } from "react"
import { useRouter } from 'next/navigation'
import Image from "next/image"
import Logo from "../../../public/images/globexvaspire-logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {

    const router = useRouter()

    const [openNav, setOpenNav] = useState(false)

    const handleHamburgerState = (e, route) => {
        router.push(route)
        setOpenNav(!openNav)
    }

    return (
        <div className="fixed w-full z-10 top-0">
            <div className="bg-neutral">
                <div className="text-white container m-auto flex justify-between rounded-lg h-20 xl:h-24">
                    <a href="/" className="flex items-center justify-center text-center font-semibold w-full p-2 xl:text-2xl md:py-4 md:w-[40%]">
                        <Image src={Logo} alt="GlobeXVAspire" className="rounded-full mr-4" width={60} height={60}></Image>
                        <h1 className="font-title tracking-wider">GlobeX<span className="text-2xl xl:text-4xl">VA</span>Spire</h1>
                    </a>
                    <nav className="text-lg w-[60%] items-center justify-center h-full my-auto font-400 gap-10 font-detail hidden lg:flex">
                        <a href="#home" className="transition-all hover:text-black">Home</a>
                        <a href="/about" className="transition-all hover:text-black">About</a>
                        <a href="#products" className="transition-all hover:text-black">Products</a>
                        <a href="#contact" className="transition-all hover:text-black">Contact</a>
                    </nav>
                    <button className="w-[20%] flex items-center justify-center p-2 lg:hidden cursor-pointer" onClick={() => setOpenNav(!openNav)}>
                        {openNav ? <IoMdClose className="w-[25px] h-[25px] md:w-[35px] md:h-[35px]"/> : <GiHamburgerMenu className="w-[25px] h-[25px] md:w-[35px] md:h-[35px]"/>}
                    </button>
                    {openNav && 
                      <nav className="flex flex-col w-full bg-black bg-opacity-70 absolute top-20">
                        <ul className="w-full p-4 text-center font-detail">
                            <li className="p-2"><a onClick={(e) => handleHamburgerState(e, "#home")} className="transition-all hover:text-black w-full">Home</a></li>
                            <li className="p-2"><a onClick={(e) => handleHamburgerState(e, "/about")} className="transition-all hover:text-black">About</a></li>
                            <li className="p-2"><a onClick={(e) => handleHamburgerState(e, "#products")} className="transition-all hover:text-black">Products</a></li>
                            <li className="p-2"><a onClick={(e) => handleHamburgerState(e, "#contact")} className="transition-all hover:text-black">Contact</a></li>
                        </ul>
                      </nav>
                    }
                </div>
            </div>
        </div>
    )
}

export default Header;