import React from "react";
// import FadeIn from "../aboutMe/hook/FadeIn";
import DownButton from "./components/DownButton";


export default function Home(){
    return(
        <div className="relative min-h-[calc(100dvh-5rem)] lg:min-h-screen min-w-full flex items-center justify-center"  >
            <div className="bg-radial-gradient absolute inset-0 opacity-70 " />

            <div id="home" className=" relative flex flex-col items-center px-5 md:px-8 lg:px-10 max-w-7xl mx-auto">
                    <div className=" flex flex-col justify-center items-center h-auto space-y-4 ">
                    <div className="animate-slidein opacity-0 [--slidein-delay:300ms] bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-300 text-transparent bg-clip-text">
                        <p className="dancing-text font-bold text-5xl md:text-6xl lg:text-7xl ">
                        hello
                        </p>
                    </div>

                    <div>
                        <h1 className="inter-text animate-slidein opacity-0 [--slidein-delay:500ms] text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
                            I&#39;m Sam
                        </h1>
                    </div>

                    <div className=" animate-slidein opacity-0 [--slidein-delay:700ms] ">
                            <p className="flex flex-col md:flex-row md:flex-wrap md:justify-center dancing-text items-center md:flex space-y-4 md:space-y-5 lg:space-y-6">
                                <span className="roboto-text mr-2 text-lg md:text-2xl xl:text-5xl">
                            Welcome to my little corner of the
                                </span>
                                <span className="text-5xl md:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-yellow-300 text-transparent bg-clip-text">
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
