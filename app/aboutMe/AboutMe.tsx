
import RootLayout from "@/app/layout";
import React from "react";
import Intro from "./components/Intro";
import FunFacts from "./components/FunFacts";
import Image from "next/image";



export default function AboutMe(){
    return(
       <>
            <header className={"min-h-screen min-w-full bg-slightGreyBlue relative p-10 lg:bg-[url('/images/background/about-me-bg.png')] bg-contain bg-no-repeat bg-right-bottom bg-opacity-40  "} >
                <div className={"flex flex-col md:flex-col"} id="about">
                   
                    <div>
                        <Intro/>
                    </div>

        


                </div>
            </header>
   
       </>
    )
}