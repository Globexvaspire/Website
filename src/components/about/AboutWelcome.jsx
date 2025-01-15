"use client"

import React from "react"
import Image from "next/image"
import aboutWelcomeImage from "../../../public/images/about-welcome-image.jpg"

const AboutWelcome = () => {
    return (
        <div className="w-full">
            <div className="container m-auto">
                <div className="text-black flex flex-col-reverse md:flex-row">
                    <div className="text-center w-full md:w-[70%] self-center md:bg-none py-10 2xl:py-0">
                        <h1 className="text-black font-title text-4xl md:text-6xl font-semibold p-4">Welcome to Globex VAspire!</h1>
                        <p className="font-detail text-md lg:text-lg xl:text-xl p-4">Globex VAspire was created to help aspiring Virtual Assistants &#40;VA&#41; build the skills, confidence, and knowledge they need to succeed. Together with Globex Solutions, we've been bridging the gap between dreamers and doers since May 2024.</p>
                        <p className="font-detail text-md lg:text-lg xl:text-xl p-4">Our mission is simple: to empower VAs with high-quality resources like eBooks, portfolio templates, and specialized courses. At Globex VAspire, we go beyond training—we mentor, inspire, and guide individuals to unlock their potential.</p>
                        <p className="font-detail text-md lg:text-lg xl:text-xl p-4">Whether you're starting out or refining your skills, we're here to support you every step of the way. Your journey to success begins here!</p>
                    </div>
                    <div className="w-full md:w-[30%] flex items-center">
                        <Image className="object-cover w-full h-[30vh] md:h-full" src={aboutWelcomeImage} alt="" width={9999} height={9999}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutWelcome;