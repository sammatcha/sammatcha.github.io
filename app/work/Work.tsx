import React from "react";
import Timeline from "./components/Timeline";
// import ContactMeButton from "./components/ContactMeButton";
import Connect from "./Connect";

interface ParentConnectProps {
    href: string
}
export default function Work(){

    return(
        <div className="min-w-full min-h-screen px-10 py-10" id="work">
            
            <div className="justify-center flex flex-col items-center w-full">
               <div className="flex flex-col justify-center items-center lg:mt-5 mb-10">
                    <h1 className="text-2xl lg:text-4xl ">Timeline </h1>
                    <div className="border-b w-10 lg:w-20 lg:ms-5"></div>
                    <Timeline/>
                </div>
                
            </div>
           
                                {/* CONNECT */}
            <div className="flex flex-col justify-center items-center mb-8 lg:mb-10">
                <div className="flex justify-center items-center">
                <Connect href={"https://www.linkedin.com/in/samanthakang079/"}/>
                </div>
            </div>
        </div>
    )
}