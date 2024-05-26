import RootLayout from "@/app/layout";
import React from "react";
import Intro from "./Intro";

export default function AboutUs(){
    return(
       <>
            <header className="min-h-screen min-w-full bg-neutral-400" >
                <div id="about">
                    <div className="flex ">
                    <Intro/>
                    </div>
                
                </div>
            </header>
   
       </>
    )
}