"use client"

import React from "react";

const Banner = () => {
    return (
        <div id="home" className="container h-[100vh] m-auto flex justify-center items-center">
            <div className="text-black flex flex-col items-center justify-center w-full py-6 lg:p-20">
                <h1 className="text-6xl text-center lg:text-7xl xl:text-9xl leading-none tracking-wide font-title font-medium">Your path<br/>to<br/>Virtual Assistant</h1>
                <div className="py-5 w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] font-detail text-center font-normal text-sm md:text-base lg:text-lg">
                    <p>Your journey to becoming a successful Virtual Assistant is more than just a career move, it's a path to freedom, growth, and fulfillment. It's about stepping into a role that allows you to work on your own terms while making a meaningful impact for businesses around the world.</p>
                </div>
                <a target="_blank" href="https://www.raket.ph/globexvaspire?fbclid=IwY2xjawHwkl5leHRuA2FlbQIxMAABHfaZ5wNHdD27JU58QqAqGuIvh2lfdjV03w1_WaNIk6x3pPSmfRrbwZSyOw_aem_jXoFuU4_pEguwDIWh-HnnA" className="text-white py-2 w-[30%] md:w-[15%] bg-black text-center text-white border-2 border-white shadow-2xl font-navigation text-md md:text-lg transition-all hover:scale-105">Shop now</a>
            </div>
        </div>
    )
}

export default Banner;

