"use client"

import React, {useState} from "react"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

const AboutFAQ = () => {

    const [open, setOpen] = useState(1);
    
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className="w-full">
            <div className="container m-auto">
                <div className="w-full flex justify-center flex-col md:flex-row p-2 py-20">
                    <div className="w-full md:w-[60%] pb-2 md:pb-0 flex flex-col items-center">
                        <h1 className="text-black font-title text-4xl md:text-6xl font-semibold w-full xl:w-[60%] text-center">Frequently Asked Questions</h1>
                        <p className="text-black font-detail text-md md:text-base lg:text-lg p-4 text-center w-full md:w-[60%]">Here&apos;s the answers for these frequently asked questions.</p>
                    </div>
                    <div className="w-full md:w-[40%]">
                    <div className="text-black font-detail">
                    <Accordion open={open === 1} className="border-b border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(1)} className="text-lg lg:text-xl xl:text-2xl text-start">How do I access the eBook after payment?</AccordionHeader>
                        <AccordionBody className="font-detail text-md lg:text-lg xl:text-xl">
                            If you purchase the eBook from Raket PH, you will receive an email containing the link to access the file. Simply download the file, which includes the link to access the eBook. Please allow up to 24 hours for me to grant you access to the eBook.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} className="border-b border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(2)} className="text-lg lg:text-xl xl:text-2xl text-start">
                            Is this eBook perfect for beginners?
                        </AccordionHeader>
                        <AccordionBody className="font-detail text-md lg:text-lg xl:text-xl">
                        Absolutely! This eBook is specifically designed for beginners. It will guide you through the fundamentals of becoming a Virtual Assistant, from setting up your business to managing clients, even if you&apos;re starting from scratch.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} className="border-b border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(3)} className="text-lg lg:text-xl xl:text-2xl text-start">
                        Are we allowed to resell this eBook?
                        </AccordionHeader>
                        <AccordionBody className="font-detail text-md lg:text-lg xl:text-xl">
                        This eBook is for personal use only. You may not resell, redistribute, or use the content for commercial purposes. The materials provided are designed to help you learn how to become a successful Virtual Assistant.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} className="border-b border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(4)} className="text-lg lg:text-xl xl:text-2xl text-start">
                        Can I access the eBook from any device?
                        </AccordionHeader>
                        <AccordionBody className="font-detail text-md lg:text-lg xl:text-xl">
                        Yes! Once you have access to the eBook, you can read it on any device with internet access, including your phone, tablet, or computer.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} className="border-b border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(5)} className="text-lg lg:text-xl xl:text-2xl text-start">
                        What if I need help with the eBook?
                        </AccordionHeader>
                        <AccordionBody className="font-detail text-md lg:text-lg xl:text-xl">
                        If you have any questions or need further guidance, feel free to reach out to me. I&apos;m here to assist you as you work through the content of the eBook. You can contact me via email for support.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6} className="border-b border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(6)} className="text-lg lg:text-xl xl:text-2xl text-start">
                        How long do I have access to the eBook?
                        </AccordionHeader>
                        <AccordionBody className="font-detail text-md lg:text-lg xl:text-xl">
                        Once you&apos;ve purchased the eBook, you will have lifetime access to it. You can revisit the material whenever you need to refresh your knowledge or skills.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 7} className="border-b border-black opacity-70 hover:opacity-100">
                        <AccordionHeader onClick={() => handleOpen(7)} className="text-lg lg:text-xl xl:text-2xl text-start">
                        Can I get a refund if I&apos;m not satisfied with the eBook?
                        </AccordionHeader>
                        <AccordionBody className="font-detail text-md lg:text-lg xl:text-xl">
                        As this is a digital download, refunds are not applicable. Once the transaction is completed, we are unable to issue refunds. Thank you for your understanding and support.
                        </AccordionBody>
                    </Accordion>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFAQ;