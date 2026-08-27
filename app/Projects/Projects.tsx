import React from "react";
import Gallery from "./components/Gallery";

export default function Projects(){
    return(
        <div className={"min-w-full bg-darkGrayBlue shadow-lg "}>
            <div className={"py-8 mb-5 md:mb-0 px-5 md:py-20 md:px-8 lg:py-24 lg:px-10 scroll-mt-20 lg:scroll-mt-0"} id={"projects"}>
                <Gallery/>
            </div>
        </div>
    )
}