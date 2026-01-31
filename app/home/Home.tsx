import React from "react";
import AboutMe from "../aboutMe/AboutMe";
// import FadeIn from "../aboutMe/hook/FadeIn";
import DownButton from "./components/DownButton";
import Image from "next/image";

export default function Home(){
    return(
        <div className="h-screen min-w-full relative flex items-center justify-center"  >
            <div id="#home">
                <div className="bg-radial-gradient absolute inset-0 opacity-70 "> </div>
                    <div className="relative flex flex-col justify-center items-center h-auto space-y-4">
                    <div className="animate-slidein opacity-0 [--slidein-delay:300ms] bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-300 text-transparent bg-clip-text">
                        <p className="dancing-text font-bold text-6xl xl:text-7xl 2xl:text-9xl ">
                        hello
                        </p>
                    </div>

                    <div>
                        <h1 className="inter-text animate-slidein opacity-0 [--slidein-delay:500ms] text-2xl xl:text-4xl 2xl:text-6xl">
                            I&#39;m Sam
                        </h1>
                    </div>

                    <div className=" animate-slidein opacity-0 [--slidein-delay:700ms] ">
                            <p className="flex flex-col dancing-text items-center md:flex ">
                                <span className="roboto-text mr-2 text-lg md:text-2xl xl:text-2xl 2xl:text-5xl">
                            Welcome to my little corner of the
                                </span>
                                <span className="text-4xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-300 text-transparent bg-clip-text">
                                multiverse.
                                </span>
                            </p>
                    </div>
                   
                    <div>
                        <DownButton/>
                    </div>
              
                </div>
            </div>
        </div>

    )
}
