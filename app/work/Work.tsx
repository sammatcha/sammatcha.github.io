import React from "react";
import Timeline from "./components/Timeline";
// import ContactMeButton from "./components/ContactMeButton";
import Connect from "./Connect";

interface ParentConnectProps {
    href: string
}
export default function Work(){

    return(
        <div className="w-full " id="work">
            <div className="justify-center flex flex-col items-center w-full scroll-mt-20 lg:scroll-mt-0 py-14 px-5 md:py-20 md:px-8 lg:py-24 lg:px-10 ">
              
                    <h1 className="text-2xl lg:text-4xl text-center lg:text-left">Timeline </h1>
                    <div className="w-full max-w-6xl mx-auto mt-4 md:mt-5 lg:mt-6 ">
                          <Timeline/>
                    </div>
                  
                <div className="mt-12 md:mt-16 flex justify-center items-center">
                    <Connect href={"https://www.linkedin.com/in/samanthakang079/"}/>
                </div>
            </div>
        </div>
    )
}