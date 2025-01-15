"use client"

import React from "react"
import Image from "next/image"
import aboutWelcomeImage from "../../../public/images/about-welcome-image.jpg"

const AboutWelcome = () => {
    return (
        <div className="w-full">
            <div className="container m-auto">
                <div className="text-black flex flex-col-reverse md:flex-row">
                    <div className="text-center w-full md:w-[60%] self-center md:bg-none py-10 2xl:py-0">
                        <h1 className="title text-3xl lg:text-4xl font-semibold p-4">Welcome to Globex VAspire!</h1>
                        <p className="detail text-md md:text-base lg:text-lg p-4">Globex VAspire was created with one clear mission: to help aspiring Virtual Assistants &#40;VAs&#41; build the skills, confidence, and knowledge they need to succeed. Alongside our agency, Globex Solutions, we&apos;ve been dedicated to bridging the gap between dreamers and doers since our launch in May 2024.</p>
                        <p className="detail text-sm md:text-base lg:text-lg p-4">I started this journey with a simple belief: sharing what I&apos;ve learned can help others unlock their potential. Over the years, I&apos;ve seen the transformative power of equipping individuals with the right tools and guidance. That&apos;s why at Globex VAspire, we focus on creating high-quality digital products, like eBooks, portfolio resume templates, and specialized courses. These resources are designed to meet the real needs of aspiring VAs and empower them to take the next step confidently.</p>
                        <p className="detail text-sm md:text-base lg:text-lg p-4">At GlobexVAspire, we don&apos;t just train Virtual Assistants we mentor, inspire, and guide them. Our approach combines practical insights, personalized support, and a passion for helping others succeed in this dynamic field. Whether you&apos;re starting out or looking to refine your skills, we&apos;re here to help you every step of the way.</p>
                        <p className="detail text-sm md:text-base lg:text-lg p-4">Your success as a Virtual Assistant starts here. Let&apos;s build your future together!</p>
                    </div>
                    <div className="w-full md:w-[40%]">
                        <Image className="object-cover justify-self-center w-full h-[30vh] md:h-full" src={aboutWelcomeImage} alt="" width={400} height={400}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutWelcome;