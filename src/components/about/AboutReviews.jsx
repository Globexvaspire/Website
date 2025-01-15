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
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore consectetur aliquid ab neque officiis repellat unde, quam odit sapiente eius suscipit commodi labore. Modi nam deleniti vel veritatis quam?</div>
                            <div className="flex">
                                <CgProfile  className="text-6xl mr-10"/>
                                <div>
                                    <h1 className="text-2xl">Sample name</h1>
                                    <p className="">Sample profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 flex-col p-6 w-[95%] md:w-[43%] xl:w-[33%] bg-white shadow-2xl rounded-lg">
                            <div className="flex text-amber"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore consectetur aliquid ab neque officiis repellat unde, quam odit sapiente eius suscipit commodi labore. Modi nam deleniti vel veritatis quam?</div>
                            <div className="flex">
                                <CgProfile  className="text-6xl mr-10"/>
                                <div>
                                    <h1 className="text-2xl">Sample name</h1>
                                    <p className="">Sample profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 flex-col p-6 w-[95%] md:w-[43%] xl:w-[33%] bg-white shadow-2xl rounded-lg">
                            <div className="flex text-amber"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore consectetur aliquid ab neque officiis repellat unde, quam odit sapiente eius suscipit commodi labore. Modi nam deleniti vel veritatis quam?</div>
                            <div className="flex">
                                <CgProfile  className="text-6xl mr-10"/>
                                <div>
                                    <h1 className="text-2xl">Sample name</h1>
                                    <p className="">Sample profession</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-6 flex-col p-6 w-[95%] md:w-[43%] xl:w-[33%] bg-white shadow-2xl rounded-lg">
                            <div className="flex text-amber"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore consectetur aliquid ab neque officiis repellat unde, quam odit sapiente eius suscipit commodi labore. Modi nam deleniti vel veritatis quam?</div>
                            <div className="flex">
                                <CgProfile  className="text-6xl mr-10"/>
                                <div>
                                    <h1 className="text-2xl">Sample name</h1>
                                    <p className="">Sample profession</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutReviews;