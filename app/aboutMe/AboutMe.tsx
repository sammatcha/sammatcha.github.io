
import RootLayout from "@/app/layout";
import React from "react";
import Intro from "./components/Intro";
import FunFacts from "./components/FunFacts";
import Image from "next/image";



export default function AboutMe(){
    return(
       <>
        <header className={"w-full bg-slightGreyBlue relative p-10 lg:bg-[url('/images/background/aboutMe-bg.png')] bg-contain bg-no-repeat bg-[position:110%_100%] "} >
            <div className={"flex flex-col md:flex-col"} id="about">
                <div>
                    <Intro/>
                </div>
            </div>
        </header>
       </>
    )
}