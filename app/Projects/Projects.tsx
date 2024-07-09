import React from "react";
import Gallery from "./components/Gallery";

export default function Projects(){
    return(
        <div className={"min-w-full max-h-[350px] bg-darkGreyBlue shadow-lg shadow-cyan-500/50 border-shadow-lg backdrop-blur-sm px-10 py-10 "}>
            <div id={"projects"}>

                    <div>
                        <Gallery/>
                    </div>
                
                </div>
        </div>
    )
}