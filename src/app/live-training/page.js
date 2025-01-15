import React from "react"
import LiveTrainingForm from "@/components/live-training/FormPage";
import FormHeader from "@/components/live-training/FormHeader";

const LiveTrainingPage = () => {
    return (
        <div className="bg-white w-full">
            <FormHeader/>
            <div className="container m-auto">
                <div>
                    <LiveTrainingForm/>
                </div>
            </div>
            <div className="w-full bg-neutral shadow-2xl flex justify-center p-4 lg:p-8">
                <div className="flex justify-center items-center container m-auto border-l border-r border-black">
                    <div className="w-fit p-6">
                        <h1 className="text-black font-title text-4xl lg:text-6xl text-center">I AM READY TO START MY VA JOURNEY!</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveTrainingPage;