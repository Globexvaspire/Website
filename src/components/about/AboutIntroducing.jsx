"use client"

import React from "react"
import Image from "next/image"
import aboutIntroducingImage from "../../../public/images/about-introducing-image.png"

const AboutIntroducing = () => {
    return (
        <div className="w-full">
            <div className="container m-auto">
                <div className="text-black text-center flex items-center flex-col py-6">
                    <h1 className="text-2xl detail p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">Introducing</h1>
                    <div className="text-4xl title font-semibold w-full xl:w-[60%]">GlobexVAspire Your Path to Virtual Assistant Success  &ndash; Dream Big, Work Smarter</div>
                    <div className="flex justify-center md:w-[90%] xl:w-[45%]">
                        <Image className="w-full" src={aboutIntroducingImage} alt="Introducing Image" width={9999} height={9999}></Image>
                    </div>
                    <p className="detail text-md md:text-base lg:text-lg p-4 pt-8 w-full xl:w-[60%]">Ever wondered how Filipinos are thriving as Virtual Assistants? Seen those inspiring posts about flexible work and thought, 'I want that life too'? Well, you&apos;re in the right place! This eBook is your ultimate guide to starting your career as a Virtual Assistant, equipping you with the skills and strategies to succeed.</p>
                    <p className="detail text-md md:text-base lg:text-lg p-4 pb-8 w-full xl:w-[60%]">If you're ready to dive into the VA world, land clients, and build a rewarding online career, let&apos;s get started. Your dream career is just a step away!</p>
                </div>
            </div>
        </div>
    )
}

export default AboutIntroducing;