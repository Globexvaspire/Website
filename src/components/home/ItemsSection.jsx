"use client"

import React from "react"
import Image from "next/image"
import { itemImages } from "@/javascript/compiledImages"

const ItemsSection = () => {
    return (
        <div id="products" className="container m-auto h-full flex justify-center">
            <div className="w-full">
                <div className="w-full flex justify-center flex-wrap my-20 gap-5">
                    {itemImages.map(({source, alt, width, height, link}, index) => {
                        return (
                            <a key={index} href={link} target="_blank" className="relative shadow-2xl w-[40%] lg:w-[25%] overflow-hidden rounded opacity-90 transition-all hover:scale-105 hover:opacity-100 flex justify-center items-center flex flex-col">
                                <Image className="h-full rounded" src={source} alt={alt} width={9999} height={9999}/>
                            </a>
                        )
                    })}
                 </div>
            </div>
        </div>
    )
}

export default ItemsSection;