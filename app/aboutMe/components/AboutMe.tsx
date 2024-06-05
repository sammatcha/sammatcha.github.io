
import RootLayout from "@/app/layout";
import React from "react";
import Intro from "./Intro";



export default function AboutMe(){
    return(
       <>
            <header className="min-h-screen min-w-full bg-darkMode px-10 py-10" >
                <div id="about">

                    <div>
                        <Intro/>
                    </div>
                
                </div>
            </header>
   
       </>
    )
}