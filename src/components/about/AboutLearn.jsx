"use client"

import React, {useState} from "react"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

const AboutLearn = () => {

    const [open, setOpen] = useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="w-full">
            <div className="container m-auto">
                <div className="flex justify-center items-center flex-col pb-10">
                    <h1 className="text-black p-6 lg:p-10 font-title text-4xl font-semibold w-full xl:w-[60%] text-center">What will you learn from this course?</h1>
                    <div className="font-detail">
                    <Accordion open={open === 1} className="border-b-2 border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(1)} className="flex justify-center text-lg lg:text-xl xl:text-2xl">Getting Started as a Virtual Assistant</AccordionHeader>
                        <AccordionBody>
                            <ul className="text-center font-detail text-md lg:text-lg xl:text-xl">
                                <li>⚫ What is a Virtual Assistant?</li>
                                <li>⚫ Skills Every VA Needs</li>
                                <li>⚫ Tools to Get Started</li>
                                <li>⚫ Finding Your Niche</li>
                            </ul>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className="border-b-2 border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(2)} className="flex justify-center text-lg lg:text-xl xl:text-2xl">
                            Building Your Portfolio
                        </AccordionHeader>
                        <AccordionBody>
                            <ul className="text-center font-detail text-md lg:text-lg xl:text-xl opacity-100">
                                <li>⚫ Creating an Impressive VA Resume</li>
                                <li>⚫ Designing a Standout Portfolio with Canva</li>
                                <li>⚫ How to Share Editable Portfolio Templates</li>
                            </ul>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} className="border-b-2 border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(3)} className="flex justify-center text-lg lg:text-xl xl:text-2xl">
                            Landing Your First Client
                        </AccordionHeader>
                        <AccordionBody>
                            <ul className="text-center font-detail text-md lg:text-lg xl:text-xl">
                                <li>⚫ Where to Find Clients &#40;Freelance Sites &amp; Direct Outreach&#41;</li>
                                <li>⚫ Writing Winning Proposals</li>
                                <li>⚫ Pricing Your Services</li>
                            </ul>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} className="border-b-2 border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(4)} className="flex justify-center text-lg lg:text-xl xl:text-2xl">
                            Marketing Yourself as a VA
                        </AccordionHeader>
                        <AccordionBody>
                            <ul className="text-center font-detail text-md lg:text-lg xl:text-xl">
                                <li>⚫ Building an Online Presence</li>
                                <li>⚫ Social Media Tips for VAs</li>
                                <li>⚫ Leveraging LinkedIn to Network</li>
                            </ul>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} className="border-b-2 border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(5)} className="flex justify-center text-lg lg:text-xl xl:text-2xl">
                            BONUS LESSONS!
                        </AccordionHeader>
                        <AccordionBody>
                            <ul className="text-center font-detail text-md lg:text-lg xl:text-xl">
                                <li>⚫ Managing Your Time Effectively as a VA</li>
                                <li>⚫ Tools for Efficient Project Management</li>
                                <li>⚫ Handling Client Payments &amp; Contracts</li>
                            </ul>
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6} className="border-b-2 border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(6)} className="flex justify-center text-lg lg:text-xl xl:text-2xl">
                            Advanced VA Tips
                        </AccordionHeader>
                        <AccordionBody>
                            <ul className="text-center font-detail text-md lg:text-lg xl:text-xl">
                                <li>⚫ Scaling Your VA Business</li>
                                <li>⚫ Finding a Specialty &#40;Social Media Management, Data Entry, etc.&#41;</li>
                                <li>⚫ Outsourcing and Building a Team</li>
                            </ul>
                        </AccordionBody>
                    </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutLearn;