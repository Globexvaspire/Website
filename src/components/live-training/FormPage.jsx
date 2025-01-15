"use client"

import React, {useState} from "react"
import Image from "next/image"
import { useRouter } from "next/navigation";
import {
    Input,
    Typography,
} from "@material-tailwind/react";
import liveTrainingImage from "../../../public/images/live-training-image.png"

const LiveTrainingForm = () => {

    const router = useRouter()

    const [form, setForm] = useState({
        name: "",
        email: "",
        heardFrom: "Facebook",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.heardFrom) {
            alert("all fields are required")
        } else {
            setForm({
                name: "",
                email: "",
                heardFrom: "Facebook",
            })
            router.push(`https://mail.google.com/mail/u/0/?fs=1&to=globexvaspire@gmail.com&su=Enrollment%20for%20Live%20Training%20-%20${form?.name}%20(Heard%20from%20${form?.heardFrom})&bcc=${form?.email}&tf=cm`)
        }
    }

    return (
        <div className="w-full">
            <div className="container m-auto">
                <div className="w-full p-4 md:p-10">
                    <div className="w-full pb-5">
                        <Image className="w-full rounded-xl" src={liveTrainingImage} alt="Live Training Page Image" width={9999} height={9999}></Image>
                    </div>
                    <div className="detail text-black pt-5">
                            <Typography variant="h4" color="blue-gray">
                                Fill Up
                            </Typography>
                            <Typography color="gray" className="mt-1 font-normal">
                                Nice to meet you! Enter your details to register.
                            </Typography>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="mb-1 flex flex-col gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Your Name
                                </Typography>
                                <Input
                                    value={form?.name}
                                    onChange={(e) => setForm({...form, name: e.target.value})}
                                    size="lg"
                                    placeholder="name"
                                    type="text"
                                    className="p-2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Your Email
                                </Typography>
                                <Input
                                    value={form?.email}
                                    onChange={(e) => setForm({...form, email: e.target.value})}
                                    size="lg"
                                    placeholder="name@mail.com"
                                    type="email"
                                    className="p-2 !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Where did you hear us?
                                </Typography>
                                <div className="flex w-80 flex-col gap-6 mb-20">
                                   <select value={form?.heardFrom} onChange={(e) => setForm({...form, heardFrom: e.target.value})} className="p-2 border border-black border-opacity-10 rounded">
                                        <option>Facebook</option>
                                        <option>Instagram</option>
                                        <option>Tiktok</option>
                                   </select>
                                </div>
                                <button onClick={handleSubmit} className="py-2 w-[50%] bg-black text-center text-white border-2 border-white shadow-2xl navigation text-md md:text-lg transition-all hover:scale-105">Enroll Now</button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveTrainingForm;