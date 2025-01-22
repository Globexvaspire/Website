"use client"

import React from "react"
import Image from "next/image"
import aboutBannerBG from "../../../public/images/about-bg.jpg"

const AboutBanner = () => {
    return (
        <div className="w-full">
            <div className="container m-auto flex flex-reverse-col lg:flex-row animate-appear">
            <div className="text-black flex flex-col items-center justify-center w-full py-6 lg:p-20">
                <h1 className="text-5xl text-center md:text-6xl lg:text-8xl xl:text-10xl leading-none tracking-wide font-title font-bold">GlobexVAspire</h1>
                <div className="py-5 md:py-16 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] font-detail text-center font-normal text-md lg:text-lg xl:text-xl">
                    <p>Your journey to success starts here&ndash;build, aspire, and achieve with Globex VAspire.</p>
                </div>
                <a target="_blank" href="https://www.raket.ph/globexvaspire?fbclid=IwY2xjawHwkl5leHRuA2FlbQIxMAABHfaZ5wNHdD27JU58QqAqGuIvh2lfdjV03w1_WaNIk6x3pPSmfRrbwZSyOw_aem_jXoFuU4_pEguwDIWh-HnnA" className="py-2 w-[30%] md:w-[15%] bg-black text-center text-white border-2 border-white shadow-2xl font-detail text-md md:text-lg transition-all hover:scale-105">Shop now</a>
            </div>
            </div>
        </div>
    )
}

export default AboutBanner;