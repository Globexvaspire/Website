"use client"

import React from "react"
import { FaStar } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const AboutReviews = () => {
    return (
        <div className="w-full">
            <div className="container m-auto pb-10">
                <div className="text-black flex justify-center flex-col items-center">
                    <h1 className="text-2xl font-detail p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-14">Reviews</h1>
                    <div className="text-black w-full flex flex-wrap justify-center gap-4">
                        <div className="flex gap-6 flex-col p-6 w-[95%] md:w-[43%] xl:w-[33%] bg-white shadow-2xl rounded-lg">
                            <div className="flex text-amber"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <div className="font-detail">&quot;This eBook is a game-changer! I was overwhelmed about becoming a Virtual Assistant, but Globex VAspire's guidance and templates made everything simple and achievable. The portfolio template alone landed me my first client. Highly recommend for aspiring VAs!&quot;</div>
                            {/* <div className="flex">
                                <CgProfile  className="text-6xl mr-10"/>
                                <div>
                                    <h1 className="text-2xl">Sample name</h1>
                                    <p className="">Sample profession</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="flex gap-6 flex-col p-6 w-[95%] md:w-[43%] xl:w-[33%] bg-white shadow-2xl rounded-lg">
                            <div className="flex text-amber"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <div className="font-detail">&quot;Globex VAspire&apos;s resources are gold! The resume and social media templates helped me stand out in applications, and the step-by-step guide in the eBook gave me confidence to start my VA journey. Super helpful for beginners!&quot;</div>
                            {/* <div className="flex">
                                <CgProfile  className="text-6xl mr-10"/>
                                <div>
                                    <h1 className="text-2xl">Sample name</h1>
                                    <p className="">Sample profession</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="flex gap-6 flex-col p-6 w-[95%] md:w-[43%] xl:w-[33%] bg-white shadow-2xl rounded-lg">
                            <div className="flex text-amber"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <div className="font-detail">&quot;I&apos;ve tried other guides, but Globex VAspire&apos;s is the best! The practical tips, combined with professional templates, saved me so much time. I secured my first social media management client within weeks of using these materials. Thank you!&quot;</div>
                            {/* <div className="flex">
                                <CgProfile  className="text-6xl mr-10"/>
                                <div>
                                    <h1 className="text-2xl">Sample name</h1>
                                    <p className="">Sample profession</p>
                                </div>
                            </div> */}
                        </div>
                        <div className="flex gap-6 flex-col p-6 w-[95%] md:w-[43%] xl:w-[33%] bg-white shadow-2xl rounded-lg">
                            <div className="flex text-amber"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <div className="font-detail">&quot;I had no idea where to start as a VA, but this eBook and the templates were exactly what I needed. Everything is so easy to follow, and the design templates helped me create a stunning portfolio. Totally worth it!&quot;</div>
                            {/* <div className="flex">
                                <CgProfile  className="text-6xl mr-10"/>
                                <div>
                                    <h1 className="text-2xl">Sample name</h1>
                                    <p className="">Sample profession</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutReviews;