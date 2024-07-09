
import RootLayout from "@/app/layout";
import React from "react";
import Intro from "./components/Intro";
import FunFacts from "./components/FunFacts";
import Image from "next/image";



export default function AboutMe(){
    return(
       <>
            <header className={"min-h-screen min-w-full bg-slightGreyBlue px-10 py-10 relative lg:bg-[url('/images/background/circle.svg')] bg-cover bg-right-bottom bg-opacity-90 "} >
                <div className={"flex flex-col md:flex-col"} id="about">
                   
                    <div>
                        <Intro/>
                    </div>

        


                </div>
            </header>
   
       </>
    )
}