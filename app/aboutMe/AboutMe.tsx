
import RootLayout from "@/app/layout";
import React from "react";
import Intro from "./components/Intro";
import FunFacts from "./components/FunFacts";
import Image from "next/image";



export default function AboutMe(){
    return(
       <>
        <header className={"w-full bg-slightGrayBlue relative lg:bg-[url('/images/background/aboutMe-bg.png')] bg-contain bg-no-repeat bg-[position:110%_100%] "} >
            <div 
            className={"flex flex-col w-full mx-auto py-14 px-5 md:py-20 md:px-8 lg:py-24 lg:px-10 md:flex-col scroll-mt-20 lg:scroll-mt-0"} 
            id="about">
                <Intro/>
            </div>
        </header>
       </>
    )
}