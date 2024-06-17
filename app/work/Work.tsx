import React from "react";
import Timeline from "./components/Timeline";
// import ContactMeButton from "./components/ContactMeButton";
import Connect from "./Connect";

interface ParentConnectProps {
    href: string
}
export default function Work(){

    return(
        <div className="min-w-full min-h-screen mt-10 " id="work">
            <div className="items-center justify-center flex  ">
                <span>
                <h1 className="text-4xl ">Timeline </h1>
                <p className="border-b w-20 ms-5"></p>
                </span>
            </div>
            <Timeline/>

            <div className="flex flex-col justify-center items-center ">
                <div className="flex justify-center items-center space-x-3 ">
                {/* <ContactMeButton/> */}
                <Connect href={"https://www.linkedin.com/in/samanthakang079/"}/>
                </div>
            </div>
        </div>
    )
}