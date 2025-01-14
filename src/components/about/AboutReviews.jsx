"use client"

import React from "react"

const AboutReviews = () => {
    return (
        <div className="w-full">
            <div className="container m-auto pb-10">
                <div className="flex justify-center flex-col items-center">
                    <h1 className="text-2xl font-detail p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">Reviews</h1>
                    <div className="w-full flex flex-wrap justify-center gap-4">
                        <div className="w-[95%] md:w-[43%] xl:w-[33%] h-60 bg-color2 shadow-2xl"></div>
                        <div className="w-[95%] md:w-[43%] xl:w-[33%] h-60 bg-color2 shadow-2xl"></div>
                        <div className="w-[95%] md:w-[43%] xl:w-[33%] h-60 bg-color2 shadow-2xl"></div>
                        <div className="w-[95%] md:w-[43%] xl:w-[33%] h-60 bg-color2 shadow-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutReviews;