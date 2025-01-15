"use client"

import React from "react"
import Image from "next/image"
import lastSectionImage from "../../../public/images/last-section-image.jpg"

const LastSection = () => {
    return (
        <div className="container m-auto flex justify-center">
            <div id="about" className="w-full flex justify-center flex-col-reverse md:flex-row items-center">
                <div className="pb-10 md:w-[60%] w-full flex justify-center items-center flex-col px-2 mt-2 md:mt-0 py-2 2xl:border-b 2xl:border-l border-black">
                    <h1 className="text-black font-title text-6xl md:text-7xl lg:text-8xl my-5 lg:mb-10 text-center">Empower your future</h1>
                    <a target="_blank" href="https://www.raket.ph/globexvaspire?fbclid=IwY2xjawHwkl5leHRuA2FlbQIxMAABHfaZ5wNHdD27JU58QqAqGuIvh2lfdjV03w1_WaNIk6x3pPSmfRrbwZSyOw_aem_jXoFuU4_pEguwDIWh-HnnA" className="py-2 w-[30%] bg-black text-center text-white border-2 border-white shadow-2xl font-navigation text-md md:text-lg transition-all hover:scale-105">Shop now</a>
                </div>
                <div className="md:w-[40%] w-full self-start grow">
                    <Image className="w-full h-[60vh] object-cover" src={lastSectionImage} alt="Third Section Image" width={9999} height={9999}/>
                </div>
            </div>
        </div>
    )
}   

export default LastSection;